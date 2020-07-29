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

const visitorSchema = new mongoose.Schema({
  company: { type: String, maxlength: 40, required: true },
  name: { type: String, maxlength: 40, required: true },
  email: { type: String, maxlength: 40, required: true, unique: true },
  phone: { type: String, maxlength: 12, required: true },
  nip: { type: String, maxlength: 12, required: true },
  qr: { type: String },
})

visitorSchema.plugin(uniqueValidator)

const Visitor = mongoose.model("Visitor", visitorSchema)

module.exports = (req, res) => {
  const values = req.body.values
  res.json({ values })

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
}
