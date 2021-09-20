const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./Schema/Schema");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3000

//allow cross origin requests
app.use(cors());

//connect to mlab database
mongoose.connect("mongodb+srv://Aravinth:arav1234@cluster0.anale.mongodb.net/test?retryWrites=true&w=majority");

app.use("/graphql", graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
app.listen(port, () => {
    console.log("listening for requests on port " + port);
})