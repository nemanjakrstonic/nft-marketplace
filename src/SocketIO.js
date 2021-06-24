import React from 'react';
import { io } from "socket.io-client";
import { UserContext } from './authentication/context/UserContext';

let socket = null;

export default class SocketIO extends React.Component {
    
    static contextType = UserContext;
    
    emitSocket() {
        socket.emit('chat message', 'to je to');
    }
    
    render() {
        
        const issuer = this.context.user.issuer;
        
        socket = io('http://localhost:3000', {
            query: {issuer}
        });
        
        socket.on('chat message', function(msg) {
            console.log(msg);
        });
        
        return (
            <div>
                <h1>Socket</h1>
                <button onClick={ this.emitSocket }>Emit</button>
            </div>
        )
    }
}