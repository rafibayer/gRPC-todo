const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');



module.exports = {
    plugins: [
        new Dotenv({
            path: './.env'
        })
    ],
   
    entry:{
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    
};

