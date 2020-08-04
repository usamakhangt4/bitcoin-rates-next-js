import React, { Component } from 'react';
import Layout from '../components/Layout';
import { fetchData } from '../api/index';
export class index extends Component {
  state = {
    currentCountry: 'eur',
    eur: {
      code: '',
      description: '',
      rate: '',
    },
    gbp: {
      code: '',
      description: '',
      rate: '',
    },
    usd: {
      code: '',
      description: '',
      rate: '',
    },
  };

  async componentDidMount() {
    var condition = navigator.onLine ? 'online' : 'offline';
    if (condition === 'online') {
      let fetchedData = await fetchData();
      let { EUR, GBP, USD } = fetchedData;
      console.log(fetchedData);
      this.setState({
        eur: {
          ...this.state.eur,
          code: EUR.code,
          description: EUR.description,
          rate: EUR.rate,
        },
        gbp: {
          ...this.state.gbp,
          code: GBP.code,
          description: GBP.description,
          rate: GBP.rate,
        },
        usd: {
          ...this.state.usd,
          code: USD.code,
          description: USD.description,
          rate: USD.rate,
        },
      });
    } else if (condition === 'offline') {
      return null;
    }
  }
  changeCountry = e => {
    let country = e.target.value;
    this.setState({ currentCountry: country });
  };

  render() {
    let { gbp, eur, usd, currentCountry } = this.state;
    function showPrice() {
      if (currentCountry === 'eur') {
        return (
          <li>
            Bitcoin rates for {eur.description} : <span className="bg-indigo-700 p-1 text-white tracking-widest rounded-lg text-center text-xs mx-3">{eur.code}</span>
            <span>{eur.rate} </span>
          </li>
        );
      } else if (currentCountry === 'usd') {
        return (
          <li>
            Bitcoin rates for {usd.description} : <span className="bg-indigo-700 p-1 text-white tracking-widest rounded-lg text-center text-xs mx-3">{usd.code}</span>
            <span>{usd.rate} </span>
          </li>
        );
      } else if (currentCountry === 'gbp') {
        return (
          <li>
            Bitcoin rates for {gbp.description} : <span  className="bg-indigo-700 p-1 text-white tracking-widest rounded-lg text-center text-xs mx-3">{gbp.code}</span>
            <span>{gbp.rate} </span>
          </li>
        );
      }
    }
    return (
      <Layout>
        <div className="max-w-lg m-auto flex flex-col justify-center items-center">
          <h1 className="uppercase text-4xl tracking-widest mt-5 text-white font-bold">
            welcome to bitcoin prices
          </h1>

          <select
            name=""
            id=""
            onChange={this.changeCountry}
            className="mt-20 bg-white font-bold w-48 p-2 rounded cursor-pointer "
          >
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
          </select>
          <ul className="mt-24 bg-gray-100 border-double border-4 border-gray-600 p-2 w-full text-center font-semibold">
            {showPrice()}
          </ul>
        </div>
      </Layout>
    );
  }
}

export default index;

//check network error
//state or map and how
//condition check return
