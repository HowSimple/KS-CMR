#Use
An Express backend for looking up whether criminal charges in KS are eligible for expungement.
Receives POST at /eligibility, **example request** below:
body: 
{
"charges": [{
"name": "Adultery",
"type": "Attempt",
"sentenceCompletionDate": "01/01/2010"
},{
"name": "Capital Murder",
"type": "Attempt",
"sentenceCompletionDate": "01/01/2020"
}
]
}
**Expected response:**
[
"January 1, 2013",
"N/A"
]
#Configuration
This application requires a spreadsheet containing a list of crimes, and if/when they can be expunged.
The spreadsheet location, and the specific page and column names for the details about charges, can be configured in the **/config/default.json** file.

**chargeFilePath** : the location of the spreadsheet containing criminal charges, and when each can be expunged after completing a sentence.
**chargesPage** : the name of the page/table in the spreadsheet containing the charge details.

#Installation
1. 
