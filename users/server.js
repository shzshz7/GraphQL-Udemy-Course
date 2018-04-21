// import express from "express"; node cannot use ES6 import
const express = require('express');
// import expressGraphQL from "express-graphql";
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Listening');
});
