var express = require('express');
var router = express.Router();
const ChargeEligibility = require("../models/lookupCharges");
var charges = new ChargeEligibility()



router.post('/', (req, res) => {

  var eligibilityResults = []
  for (charge in req.body.charges)
    eligibilityResults[charge] = charges.getEligibilityDate(req.body.charges[charge].name, req.body.charges[charge].type, req.body.charges[charge].sentenceCompletionDate)


  res.send(eligibilityResults)

})
module.exports = router;
