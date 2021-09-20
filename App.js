const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const Schema = require("./Schema/Schema");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();

//allow cross origin requests
app.use(cors());

//connect to mlab database
mongoose.connect("mongodb+srv://Aravinth:arav1234@cluster0.anale.mongodb.net/test?retryWrites=true&w=majority");
mongoose.connection.once("open", () => {
    console.log("connected to database");
});

app.use("/graphql", graphqlHTTP({
    schema: Schema,
    graphiql: true
}));
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("listening for requests on port " + port);
})