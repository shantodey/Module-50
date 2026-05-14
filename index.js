const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})





const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const run = async () => {
  try {
    await client.connect();

    const db = client.db('simpaleCrud');
    const userCollenctions = db.collection('users');

    app.get('/users', async (req, res) => {
      const cursor = userCollenctions.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB successfully");

    // add user to database
    app.post('/users', async (req, res) => {
      const newUser = req.body;
      const result = await userCollenctions.insertOne(newUser);
      res.send(result);
    })

    // getting user id form database 
    app.get('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const user = await userCollenctions.findOne(query)
      res.send(user)
    })

    // deleting data form databased
    app.delete('/users/:id', async (req, res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const result = await userCollenctions.deleteOne(query)
      res.send(result)
    })

  } catch (err) {
    console.log(err);
  }
};

run().catch(console.dir);