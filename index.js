import express from 'express';
import graphql from 'graphql';
import bodyParser from 'body-parser';
import {
    graphiqlExpress,
    graphqlExpress
} from 'apollo-server-express';
import {
    Patients,
    Doctors
} from './models';
import mongoose, {
    connect,
    Schema
} from 'mongoose';
import {
    mongoConfig
} from './config/mongoConfig.js'
import GraphQlSchema from './graphql';
import routes from './Routes'

let mongo = mongoose.connect(mongoConfig.url, {
    useMongoClient: true
})


let app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema: GraphQlSchema,
    context: {
        Patients,
        Doctors
    }
}));

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}))
app.use(bodyParser.json());
app.use('/restapi',routes);
app.get('/', (req, res) => {
    res.send("hello World")
})
app.listen(process.env.PORT || 4500, () => {
    console.log("http://localhost:4500/graphiql");
})
// "start": "nodemon --exec babel-node index.js"