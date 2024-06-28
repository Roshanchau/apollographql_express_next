import express from "express";
import { graphqlHTTP } from "express-graphql";
const schema = require("./graphql/schema")
const port: number | string = process.env.PORT || 4000;

const app: express.Application = express();

// set up the graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});