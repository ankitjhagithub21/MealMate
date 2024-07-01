require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./db/conn')
const userRouter = require('./routes/userRoutes')
const cartRouter = require('./routes/cartRoutes')

const app = express()
const port = process.env.PORT || 3000


connectDB()
app.use(express.json())
app.use(cors({
  origin:process.env.ORIGIN
}))


app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})