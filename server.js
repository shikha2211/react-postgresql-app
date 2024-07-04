// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const Actor = require('./models/actor');
const {Op} = require('sequelize');

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req,res) => {
    console.log('Received request for root route');
    res.send('Server is running');
});

app.get('/actor', async (req,res) => {
    const limit = 10; // number of records per page
    const page = req.query.page ? parseInt(req.query. page) : 1;
    const offset = (page - 1) * limit;
    
    try{
        const actors = await Actor.findAll( {
            offset: offset,
            limit: limit
            /*where: {
                //first_name: 'Adam'
                first_name:{
                    [Op.like]: 'A%' //matches all first names starting with A
                }
            }*/
        });
        console.log(res.json(actors));
    }
    catch(error) {
        res.status(500).send(error)
    }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

