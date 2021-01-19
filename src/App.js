import React from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData, getData } from './api';

class App extends React.Component {

  state={
    data: {},
    country: '',
    data2: {}
  }

  async componentDidMount(){
    const fetchedData = await fetchData()
    this.setState({data:fetchedData})

    const data2 = await getData()
    console.log(data2)
    this.setState({data2:data2})
    
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)

    this.setState({data:fetchedData, country:country})

    // console.log(fetchedData)
  }

  render(){
    const { data, country } = this.state;
    return (
      <>
      <div className={styles.container}>
        <h1 className='title'>{country? country : 'Global'}</h1>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data ={data} country={country} />
      </div>
      {/* <div>
        {this.state.data2.Afghanistan}
      </div> */}
      
      </>
    );
  }
}

export default App;
