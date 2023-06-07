import axios from 'axios';
// // axios.defaults.baseURL = 'http://localhost:3030';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default{
    methods: {
        async $api(url,  method, data){
            return (await axios({
                method : method,
                url,
                data
            }).catch(e => {
                console.log(e);
            })).data;
        }
    },
}