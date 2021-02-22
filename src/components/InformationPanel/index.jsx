import React, { Component } from 'react'
import { connect } from 'react-redux';

var dateFormat = require("dateformat");

export default class InformationPanel extends Component {

    state = {
        date:new Date()
    }

    componentDidMount(){

        // setTimeout( ()=>{
        //     console.log(new Date().toLocaleTimeString());
        // },1000)
        setInterval(() => {
            let {date} = this.setState;
            date = new Date();
            this.setState({date:date});
        }, 1000);

    }

    render() {
        return (
            <div className="row" style={{ backgroundImage: "url(/images/"+this.props.weather+".jpg)", marginTop:"3vh", backgroundSize: 'cover', backgroundRepeat: 'repeat-x' }} >
            <div className="col-md-10"  >
                <div className="row">
                    <div className="col-md-3">
                    <h3>{this.props.city.toUpperCase()}</h3>
                    <small> {this.props.temperature}&#8451; </small>
                    </div>
                    <div className="col-md-9">
                    <h3>
                        {
                            dateFormat(this.setState.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                        }
                    </h3>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
