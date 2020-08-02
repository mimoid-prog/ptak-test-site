const express = require("express")
const mongoose = require("mongoose")
const expressJWT = require("express-jwt")
const cors = require("cors")
const corsOptions = {
  origin: ["http://localhost:3000", "https://mimoid-prog.usermd.net"],
}

const router = express.Router()
router.use(cors(corsOptions))

const Visitor = require("../models/visitor")
const Exhibitor = require("../models/exhibitor")
const Company = require("../models/company")

router.get(
  "/fetch-collections",
  expressJWT({
    secret: process.env.PTAK_DEVELOPERS_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }),
  (req, res) => {
    if (!req.user.name) return res.sendStatus(401)
    mongoose.connection.db.listCollections().toArray(function (err, names) {
      const collections = names.map(name => name.name)
      res.json({ collections })
    })
  }
)

router.get(
  "/fetch-documents",
  expressJWT({
    secret: process.env.PTAK_DEVELOPERS_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
  }),
  (req, res) => {
    if (!req.user.collection) return res.sendStatus(401)
    if (req.user.collection === "visiors") {
    }

    mongoose.connection.db.listCollections().toArray(function (err, names) {
      const collections = names.map(name => name.name)
      res.json({ collections })
    })
  }
)

module.exports = router
