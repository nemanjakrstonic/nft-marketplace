import React from 'react';

import clock from '../../../assets/img/clock-white.svg';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                "d": 0,
                "h": 0,
                "m": 0,
                "s": 0,
            },
            // seconds: 0
        };
        this.timer = 0;
        // this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        this.speed = 0;
        this.counter = 0;
        this.timeNow = new Date().getTime();
        this.timeRemain = new Date(this.props.ends).getTime() - this.timeNow;
    }
    
    secondsToTime(secs){
        let days = Math.floor(secs / (60 * 60 * 24));
        
        let divisor_for_hours = secs % (60 * 60 * 24);
        let hours = Math.floor(divisor_for_hours / (60 * 60));
        
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);
        let seconds = Math.floor(secs % 60);
        // console.log('days' + days +  'hours' + hours +  'minutes' + minutes +  'seconds' + seconds);
        return {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds,
        };
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    componentDidMount() {
        this.speed = 1000;
        this.counter = 1;
        this.timeNow = new Date().getTime();
        
        if (this.timer === 0) {
            this.timer = setTimeout(this.countDown, this.speed);
        }
    }
    countDown() {
        let calculated = (this.counter * this.speed);
        let real = (new Date().getTime() - this.timeNow);
        
        this.setState({
            time: this.secondsToTime(( this.timeRemain - calculated ) / 1000 )
        });
    
        this.counter++;
        
        let diff = (real - calculated);
        
        /** Tab inactivity */
        if (diff > 400) {
            // console.log(diff, this.speed, 'alajnovano', Math.floor(diff / this.speed));
            this.counter += Math.floor(diff / this.speed);
        }
        // console.log(diff);
        
        this.timer = setTimeout(this.countDown, this.speed - diff);
    }
    
    render() {
        return (
            <div className="timer">
                <div className="clock">
                    <img src={clock} alt="" />
                </div>
                <p className="time-label mr-auto">OPENING IN</p>
                {
                    this.state.time.d > 0 ?
                        <div className="pl-3">
                            <div className="value">{this.state.time.d}</div>
                            <p className="unit">days</p>
                        </div>
                        :
                        ''
                }
                <div className="ml-1 ml-sm-3">
                    <div className="value">{this.state.time.h}</div>
                    <p className="unit">hrs</p>
                </div>
                <div className="ml-1 ml-sm-3">
                    <div className="value">{this.state.time.m}</div>
                    <p className="unit">min</p>
                </div>
                {
                    !this.state.time.d > 0 ?
                        <div className="ml-1 ml-sm-3">
                            <div className="value">{this.state.time.s}</div>
                            <p className="unit">sec</p>
                        </div>
                        :
                        ''
                }
            </div>
        )
    }
}