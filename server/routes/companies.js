const express = require("express")
const Company = require("../models/company")

const router = express.Router()

router.post("/company", (req, res) => {
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
})

module.exports = router
