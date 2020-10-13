import React from 'react';

import Page from '../Page/Page';
import Card from '../Card/Card';
import Row from '../WeatherWeekly/WeatherWeekly';

import { calcTemp, calcAvg, apiKey, openWeather } from '../helpers/helpers';

class LocationWeather extends React.Component {
    constructor() {
        super();

        this.state = {
            data: "Lisbon, Portugal Temperature",
            long: 9.1393, 
            lati: 38.7223,
            weekly: []
        };

        this.temp = calcTemp;
        this.avg = calcAvg;

        this.getData.bind(this);
    }


    getWeather() {
        fetch(`${openWeather}/onecall?lat=${this.state.lati}&lon=${this.state.long}${apiKey}`)
        .then(res => res.json())
        .then(
            (result) => {
                const daily = result.daily;
                const weekly = [];
                daily.forEach(daily => {
                    weekly.push(
                        this.temp(this.avg(daily.temp.min, daily.temp.max))
                    )
                });
                this.setState({
                    temp: this.temp(result.current.temp),
                    weekly
                })
            },
            (error) => {
                console.log(error);
            }
        )
    }

    getData() {
        this.getWeather();
        /* If geolocation is enabled. */
        navigator.geolocation.watchPosition(position => {
            this.setState({
                data: 'Current Location Temperature',
                long:  position.coords.longitude,
                lati: position.coords.latitude
            })
            this.getWeather();
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Page>
                <Card 
                    header={this.state.data} 
                    body={this.state.temp} 
                />
                <Row data={this.state.weekly}></Row>
            </Page>
        )
    }
}

export default LocationWeather;
