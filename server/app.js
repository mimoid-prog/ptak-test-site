const express = require("express")
const mongoose = require("mongoose")
const QRCode = require("qrcode")
require("dotenv").config()

const Visitor = require("./models/visitor")
const Exhibitor = require("./models/exhibitor")
const Company = require("./models/company")

const app = express()
app.use(express.json())

mongoose
  .connect(
    `mongodb+srv://Ptak:${process.env.PASSWORD}@cluster0-9w44v.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(error => console.log(error))

app.post("/api/visitor", (req, res) => {
  const values = req.body.values

  QRCode.toDataURL(values.email)
    .then(newQR => {
      const newVisitor = new Visitor({
        company: values.company,
        name: values.name,
        email: values.email,
        phone: values.phone,
        nip: values.nip,
        date: new Date().toISOString(),
        qr: newQR,
      })

      newVisitor
        .save()
        .then(() => {
          res.json({ qr: newQR })
        })
        .catch(err => {
          console.error(err)
          res.status(400).json({ error: "Creating new visitor error" })
        })
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({ error: "Creating QR code error" })
    })
})

app.post("/api/exhibitor", (req, res) => {
  const values = req.body.values

  const newExhibitor = new Exhibitor({
    company: values.company,
    name: values.name,
    email: values.email,
    phone: values.phone,
    nip: values.nip,
    date: new Date().toISOString(),
  })

  newExhibitor
    .save()
    .then(() => {
      res.json({ res: "Exhibitor added successfully" })
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({ error: "Creating new exhibitor error" })
    })
})

app.post("/api/company", (req, res) => {
  const values = req.body.values

  const newCompany = new Company({
    company: values.company,
    name: values.name,
    email: values.email,
    phone: values.phone,
    nip: values.nip,
    website: values.website,
    descPL: values.descPL,
    descEN: values.descEN,
    accepted: false,
    date: new Date().toISOString(),
  })

  newCompany
    .save()
    .then(() => {
      res.json({ res: "Company added successfully" })
    })
    .catch(err => {
      console.error(err)
      res.status(400).json({ error: "Creating new company error" })
    })
})

const PORT = 4000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
