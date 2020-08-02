const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())

const visitors = require("./routes/visitors")
const exhibitors = require("./routes/exhibitors")
const companies = require("./routes/companies")
const ptakDevelopers = require("./routes/ptakDevelopers")

app.use("/api/visitors", visitors)
app.use("/api/exhibitors", exhibitors)
app.use("/api/companies", companies)
app.use("/api/ptak-developers", ptakDevelopers)

mongoose
  .connect(
    `mongodb+srv://Ptak:${process.env.PASSWORD}@cluster0-9w44v.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(error => console.log(error))

const PORT = 4000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
