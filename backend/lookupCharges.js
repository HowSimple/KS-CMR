const XLSX = require("xlsx");
const config = require('config');

const chargeNameColumn = config.get('Charges.nameColumn')
const chargeEligibilityColumn = config.get("Charges.eligibilityColumn")
const chargeYearsColumn = config.get('Charges.yearsColumn')
const chargeYearsAttemptColumn = config.get('Charges.yearsAttemptColumn')
const chargeYearsConspiracyColumn = config.get('Charges.yearsConspiracyColumn')
const chargeYearsSolicitationColumn = config.get('Charges.yearsSolicitationColumn')

class ChargeEligibility{
    constructor() {
        const chargeFilePath = config.get("Charges.chargeFilePath")
        const pageName = config.get("Charges.chargesPage")
        const delimiter = ","
        var spreadsheet = XLSX.readFile(chargeFilePath)
         XLSX.utils.sheet_to_json(spreadsheet.Sheets[pageName],{raw:true})
        this.chargeTable =   XLSX.utils.sheet_to_json(spreadsheet.Sheets[pageName],{raw:true})

    }
    lookupCharge(name, chargeType){
        let obj = this.chargeTable.find(o => o[chargeNameColumn] === name);

        return obj
    }
    getEligibilityDate(name, chargeType, sentenceCompletionDate){
        var charge = this.lookupCharge(name,chargeType)
        if (charge[chargeEligibilityColumn] =="N")
            return "N/A"
        else
        {
            var date = new Date(sentenceCompletionDate)
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            var eligibilityYear = date.getFullYear()
            if (chargeType == "Attempt")
                eligibilityYear += charge[chargeYearsAttemptColumn]
            else   if (chargeType == "Conspiracy")
                eligibilityYear += charge[chargeYearsConspiracyColumn]
            else   if (chargeType == "Solicitation")
                eligibilityYear += charge[chargeYearsSolicitationColumn]
            else eligibilityYear+= charge[chargeYearsColumn]
            date.setFullYear(eligibilityYear)
            return date.toLocaleDateString(undefined,options)
        }

    }
}



module.exports = ChargeEligibility

