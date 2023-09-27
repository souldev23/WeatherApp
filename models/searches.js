const axios = require('axios');

class Searches{

    historical = ['Madrid', 'London', 'Mexico City'];

    constructor(){
        //TODO: read from db if it exist

    }

    async byCity ( place = ''){
        const url = 'https://reqres.in/api/users?page=2'

        const resp = await axios.get(`${url}`);
        console.log(resp.data);
        
        return []; //It returns an array with matches of the search.
    }

}

module.exports = Searches;