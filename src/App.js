import React from 'react';
import WeatherCurrent from './components/WeatherCurrent/WeatherCurrent';
import WeatherLocations from './components/WeatherLocations/WeatherLocations';

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <WeatherCurrent/>
                <WeatherLocations />
            </React.Fragment>
        )
    }
}

export default App;
