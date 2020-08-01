const express = require("express")
const Exhibitor = require("../models/exhibitor")

const router = express.Router()

router.post("/exhibitor", (req, res) => {
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

module.exports = router
