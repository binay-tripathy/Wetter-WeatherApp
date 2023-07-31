async function fetch_api(search) {
        let url = `https://weatherapi-com.p.rapidapi.com/forecast.json?rapidapi-key=7d0ceb0d4cmsh0de16948158e93cp10b602jsn70b39d682e0e&q=${search}`;
        let data = await fetch(url);
        return data;
 
}

export default fetch_api
