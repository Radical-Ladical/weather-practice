import React from 'react';
import axios from 'axios';
import Weather from './components/weather';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    }
  }

  componentDidMount() {
    this.getWeatherData();
  }

  //------async way---\\
  // async getWeatherData() {
  //   try {

  //     const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast?q=london&appid=e4447104f032368a2a14af1ccf6fd22e&units=imperial");
  //     console.log(response.data);

  //     this.setState({ weather: response.data });

  //   }
  //   catch(error) {
  //     console.log(error)
  //   }
  // }
  //------------\\\


  //---using get and fetch---\\
  getWeatherData() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=e4447104f032368a2a14af1ccf6fd22e&units=imperial')
    .then(response => {
      // console.log(response.data);
      this.setState({ weather: response.data });
    }).catch(error => console.error(error));
  }

  nullCheck() {
    if(this.state.weather===null){
      return<h2>no information</h2>
    }else {
      this.state.weather.list.map(listItem => <Weather/>);
    }
  }
 
  render() {
    return(
      <div>
        {
          this.nullCheck()
        }
      </div>
    )
  }
}

export default App;