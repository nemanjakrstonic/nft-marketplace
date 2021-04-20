import React from 'react';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {},
            seconds: 0
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    
    secondsToTime(secs){
        let hours = Math.floor(secs / (60 * 60));
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        
        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        return {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
    }
    componentDidMount() {
        this.setState({
            seconds: this.props.time
        }, () => {
            let timeLeftVar = this.secondsToTime(this.state.seconds);
            this.setState({ time: timeLeftVar });
            this.startTimer();
        });
    }
    
    startTimer() {
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
    }
    
    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });
        if (seconds === 0) {
            clearInterval(this.timer);
        }
    }
    render() {
        return (
            <div className="timer">
                <p className="ends-in">AUTCION ENDS IN</p>
                <div className="ml-auto">
                    <div className="value">{this.state.time.h}</div>
                    <p className="unit">hrs</p>
                </div>
                <div className="ml-3">
                    <div className="value">{this.state.time.m}</div>
                    <p className="unit">min</p>
                </div>
                <div className="ml-3">
                    <div className="value">{this.state.time.s}</div>
                    <p className="unit">sec</p>
                </div>
            </div>
        )
    }
}