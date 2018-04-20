// import express from "express";
const express = require('express');
// import expressGraphQL from "express-graphql";
const expressGraphQL = require('express-graphql');

const app = express();

app.use('/graphql', expressGraphQL({
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Listening');
});
