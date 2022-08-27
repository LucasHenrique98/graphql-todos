const models = require('./models');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const MONGO_URI =
  'mongodb+srv://LucasHenrique98:Lukkinha123@cluster0.1g1m3o4.mongodb.net/?retryWrites=true&w=majority';
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
  .once('open', () => console.log('Connected to DB.'))
  .on('error', (error) => console.log('Error connecting to DB:', error));

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  '/',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen('4000', () => {
  console.log('Server is running at http://localhost:4000');
});
