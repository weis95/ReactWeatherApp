import React from 'react';

import Page from '../Page/Page';
import Card from '../Card/Card';
import TextInput from '../Input/TextInput';
import Button from '../Button/Button';

import { calcTemp, apiKey, openWeather } from '../helpers/helpers';

const temperatures = [];

class SavedLocations extends React.Component {
    constructor() {
        super();
        
        this.state = {
            value: '',
            cities: [],
            temperatures: []
        };

        this.temp = calcTemp;

        this.cityValue = React.createRef();

        this.handleOnChange = this.handleOnChange.bind(this);
        this.addCities = this.addCities.bind(this);
        this.deleteCities = this.deleteCities.bind(this);
    }

    getWeather = async (city, i) => {
        fetch(`${openWeather}weather?q=${city}${apiKey}`)
        fetch(`${openWeather}/weather?q=${city}${apiKey}`)
        .then(res => res.json())
        .then(
            (result) => {
                if(i !== null){
                    temperatures[i] =  this.temp(result.main.temp);
                } else {
                    temperatures.push(
                        this.temp(result.main.temp)
                    );
                }
                this.setState({
                    temperatures
                });
            },
            (error) => {
                console.log(error);
            }
        )
    }

    componentDidMount() {
        const storedCities = JSON.parse(localStorage.getItem("cities"));
        this.getCities(storedCities);
    }

    addCities() {
        const cities = this.state.cities.slice(0);

        cities.push(
            this.state.value
        );

        this.setState({
          cities
        });

        localStorage.setItem("cities", JSON.stringify(cities));
        this.getWeather(this.state.value, null);
    };

    deleteCities = (i) => {
        this.state.cities.splice(i, 1);

        localStorage.setItem("cities", JSON.stringify(this.state.cities));

        const storedCities = JSON.parse(localStorage.getItem("cities"));
        this.getCities(storedCities);
    };

    getCities(storedCities) {
        if(storedCities){
            
            storedCities.forEach((city, i) => {              
                this.getWeather(city, i)
            })

            this.setState({
                cities: storedCities
            });
        }
    }

    handleOnChange(evt) {
        this.setState({value: evt.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <Page>
                    <TextInput 
                        ref={this.myRef}
                        placeholder="Lisbon,pt"
                        value={this.state.value}
                        onChange={this.handleOnChange}
                    />
                    <Button text="Add City" onClick={this.addCities} />
                    {this.state.cities.map((city, i) => {              
                        return (
                            <React.Fragment key={i}>
                                    <Card
                                        header={city}
                                        body={this.state.temperatures[i]}  
                                    />
                                    <Button onClick={() => this.deleteCities(i)} text="Delete"/>
                            </React.Fragment>
                        ) 
                    })}
                </Page>
            </React.Fragment>
        )
    }
}

export default SavedLocations;
