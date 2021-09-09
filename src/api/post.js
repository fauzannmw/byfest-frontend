// import axios from 'axios';
import { setup } from 'axios-cache-adapter';

// export default axios.create({
//     // baseURL:"https://api.apispreadsheets.com/data/",
//     // baseURL:"https://spreadsheets.google.com/feeds/list/1VZ-IEM0hausscN7o5kg-KIHdk-_8eHzwxQErzv6HALk/o6hc1ym/public/basic?",
//     baseURL:"https://api.steinhq.com/v1/storages/60cc511fd2a8585c5af2826b/",
//     // headers:{
//     //     "Access-Control-Allow-Origin" : "*",
//     //     "Access-Control-Allow-Headers": "*",
//     //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//     // }
// })

export default setup({
    // baseURL:"https://api.steinhq.com/v1/storages/60cc511fd2a8585c5af2826b/",
    baseURL:"https://adminbyfest.herokuapp.com/",
    cache: {
        maxAge: 15 * 60 * 1000
    }
})