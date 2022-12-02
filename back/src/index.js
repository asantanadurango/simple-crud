import express from 'express'
import cors from 'cors'
const app = express();
const { PORT = 8080 } = process.env
import {connection} from './db/db.js'
import { productRouter } from './routes/product.routes.js';

app.use(express.json())
app.use(cors())
connection
    .then(() => {
        console.log('db connection');
    })
    .catch((err) => {
        console.error(err);
    })
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.use(productRouter)

app.listen(PORT, ()=>{
console.clear()
console.log('server on port', PORT)
})