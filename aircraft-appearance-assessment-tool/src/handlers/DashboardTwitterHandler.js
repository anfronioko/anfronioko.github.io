import axios from 'axios';
import DATA from './../config/Result.js';

class DashboardTwitterHandler {
    getPosts() {
        axios({
            url: '/twitter',
            method: 'get',
            baseURL: '',
            responseType: 'json', // default
            proxy: {
                protocol: 'https',
                host: '127.0.0.1',
                port: 9000,
             }
        })
        .then(function (response) {
            console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
            return response.data;
        })
        .catch(function (error) {
             if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log('Error retrieving Twitter posts: ', error.response.data);
               console.log('Error retrieving Twitter posts: ', error.response.status);
               console.log('Error retrieving Twitter posts: ', error.response.headers);
             } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log('Error retrieving Twitter posts: ', error.request);
             } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error retrieving Twitter posts: ', error.message);
             }
             console.log(error.config);
             return DATA;
        })
    }

    savePosts(posts) {
        axios({
            method: 'post',
            url: '/twitter',
            proxy: {
                protocol: 'https',
                host: '127.0.0.1',
                port: 9000,
            },
            data: posts
        })
        .then(() => {
            console.log('Saved Twitter posts: ', posts)
        })
        .catch(function(error) {
            if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx
               console.log('Error saving Twitter posts: ', error.response.data);
               console.log('Error saving Twitter posts: ', error.response.status);
               console.log('Error saving Twitter posts: ', error.response.headers);
            } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log('Error saving Twitter posts: ', error.request);
            } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error saving Twitter posts: ', error.message);
            }
            console.log(error.config);
            throw new Error('Error saving Twitter posts: ', error.message);
        });
    }
}

export default DashboardTwitterHandler;