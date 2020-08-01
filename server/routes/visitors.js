const express = require("express")
const mongoose = require("mongoose")
const Visitor = require("../models/visitor")
const QRCode = require("qrcode")
const jwt = require("express-jwt")
const jwksRsa = require("jwks-rsa")

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

const checkJWT = jwt({
  // Dynamically provide a signing key based on the kid in the header and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://YOUR_DOMAIN/.well-known/jwks.json`,
  }),

  // Validate the audience and the issuer.
  audience: process.env.AUTH0_AUDIENCE,
  issuer: `https://YOUR_DOMAIN/`,
  algorithms: ["RS256"],
})

router.post("/fetch-visitors", (req, res) => {
  mongoose.connection.db.listCollections().toArray(function (err, names) {
    const collections = names.map(name => name.name)
    res.json({ collections })
  })
})

module.exports = router
