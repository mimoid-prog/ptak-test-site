const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

mongoose
  .connect(
    `mongodb+srv://Mimoid:${process.env.PASSWORD}@cluster0-9w44v.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to database"))
  .catch(() => res.status(400).json({ error: "Connecting database error" }))

const companySchema = new mongoose.Schema({
  company: { type: String, maxlength: 40, required: true },
  name: { type: String, maxlength: 40, required: true },
  email: { type: String, maxlength: 40, required: true, unique: true },
  phone: { type: String, maxlength: 12, required: true },
  nip: { type: String, maxlength: 12, required: true },
  website: { type: String, maxlength: 50, required: true },
  descPL: { type: String, maxlength: 500, required: true },
  descEN: { type: String, maxlength: 500 },
  accepted: { type: Boolean, required: true },
  hall: { type: String, maxlength: 5 },
  stand: { type: String, maxlength: 5 },
})

companySchema.plugin(uniqueValidator)

const Company = mongoose.model("Company", companySchema)

module.exports = (req, res) => {
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
}
