const mongoose = require("mongoose")
const QRCode = require("qrcode")
const uniqueValidator = require("mongoose-unique-validator")

mongoose
  .connect(
    `mongodb+srv://Mimoid:${process.env.PASSWORD}@cluster0-9w44v.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(error => res.status(400).json({ error: "Connecting database error" }))

const exhibitorSchema = new mongoose.Schema({
  company: { type: String, maxlength: 40, required: true },
  name: { type: String, maxlength: 40, required: true },
  email: { type: String, maxlength: 40, required: true, unique: true },
  phone: { type: String, maxlength: 12, required: true },
  nip: { type: String, maxlength: 12, required: true },
})

exhibitorSchema.plugin(uniqueValidator)

const Exhibitor = mongoose.model("Exhibitor", exhibitorSchema)

module.exports = (req, res) => {
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
}
