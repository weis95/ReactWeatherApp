import React from 'react';
import './WeatherWeekly.css';

/* Does not work if we are at the end of the month. Install Moment.js instead.*/
const date = new Date()
const day = new Date().getDate();
const month = date.getMonth() + 1;

class Row extends React.Component {
    render() {
        return(
            <React.Fragment>
                <h4>Weekly Average Temperature</h4>
                <hr/>
                <div className="row">
                    {
                        this.props.data.map((data, i) => {
                            let daysDate = day + i + "/" + month;
                           
                            return (
                                <div key={i}>
                                    <p>{ i ? daysDate : "Today" }</p>
                                    <p>{ data } &#176;</p>
                                </div>
                            ) 
                        })
                    }
                </div>
            </React.Fragment>
        )
    } 
}

export default Row;
