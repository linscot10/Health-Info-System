const connectDB = require("./database/db")
const express = require('express')
const cors = require("cors")
const programRoutes = require('./routes/program.routes')
const clientRoutes = require('./routes/client.routes')
const app = express()

app.use(express.json())
app.use(cors())



PORT = process.env.PORT || 4000
// database connection

connectDB()
app.use('/api/programs/', programRoutes)
app.use('/api/clients/', clientRoutes)



app.listen(PORT, () => {
    console.log(`Server started in ${process.env.DEV_MODE}mode on port http://localhost:${PORT}`)
})