const express = require("express")
const mongoose = require("mongoose")
const QRCode = require("qrcode")
const uniqueValidator = require("mongoose-unique-validator")
require("dotenv").config()

const app = express()
app.use(express.json())

mongoose
  .connect(
    `mongodb+srv://Mimoid:${process.env.PASSWORD}@cluster0-9w44v.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(error => console.log(error))

const visitorSchema = new mongoose.Schema({
  company: { type: String, maxlength: 40, required: true },
  name: { type: String, maxlength: 40, required: true },
  email: { type: String, maxlength: 40, required: true, unique: true },
  phone: { type: String, maxlength: 12, required: true },
  nip: { type: String, maxlength: 12, required: true },
  qr: { type: String },
})

const exhibitorSchema = new mongoose.Schema({
  company: { type: String, maxlength: 40, required: true },
  name: { type: String, maxlength: 40, required: true },
  email: { type: String, maxlength: 40, required: true, unique: true },
  phone: { type: String, maxlength: 12, required: true },
  nip: { type: String, maxlength: 12, required: true },
})

visitorSchema.plugin(uniqueValidator)
exhibitorSchema.plugin(uniqueValidator)

const Visitor = mongoose.model("Visitor", visitorSchema)
const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema)

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

const PORT = 4000
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))
