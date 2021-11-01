/* eslint-disable */ 

var axios = require('axios');

const instance = axios.create({
   baseURL: 'https://cdn.contentful.com/spaces/kk2bw5ojx476',
   headers: { 
       'Authorization': 'Bearer 7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c ', 
       'Content-Type': 'application/json'
     },
});

export default {
    async getData(data) {
        try {
           const res = await instance.get('/entries', data);
           return res.data
        }
        catch(err) {
           console.error(err);
           return null;
        }
    } 
}