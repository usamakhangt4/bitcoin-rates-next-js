import axios from 'axios'

let url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export let fetchData = async () => {
    let {data} = await axios.get(url);
    return data.bpi;
}