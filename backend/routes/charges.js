var express = require('express');
var router = express.Router();
const ChargeEligibility = require("../models/lookupCharges");
var charges = new ChargeEligibility()

router.post('/', (req, res) => {
  var eligibilityResults = []

  for (charge in req.body.charges)
     eligibilityResults[charge] = {eligibleDate: charges.getEligibilityDate(req.body.charges[charge].name, req.body.charges[charge].type, req.body.charges[charge].sentenceCompletionDate)}
  let response = req.body.charges.map((item, i) => Object.assign({}, item, eligibilityResults[i], {eligible: eligibilityResults[i]!="N/A"}));
  res.send(response)

})
module.exports = router;
