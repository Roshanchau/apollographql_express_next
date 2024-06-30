const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4000;

const corsOptions = {
  origin: "http://localhost:3000", // Specify the exact origin
  credentials: true, // Correct property name
};
app.use(cors(corsOptions));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
