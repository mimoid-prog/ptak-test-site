const express = require("express")
const mongoose = require("mongoose")
const Visitor = require("../models/visitor")
const QRCode = require("qrcode")

const router = express.Router()

router.post("/visitor", (req, res) => {
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

module.exports = router
