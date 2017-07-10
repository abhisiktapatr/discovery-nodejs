var Cloudant = require('cloudant');
var cloudant = Cloudant({account:d8a8a340-1274-4f51-88bd-092fe9068fe3-bluemix, password:ff698a9dfe70bf56c8ebaf897fdd75bfc257bdfee00d551959086c9bee979f58});
var db = cloudant.db.use('Estee_Laundee_Mascara')


var mascara = [
  {
    "Celebrity": "Alessandra_Steinherr",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 1
  },
  {
    "Celebrity": "Alessandra_Steinherr",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 2
  },
  {
    "Celebrity": "Arizona_Muse",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 1
  },
  {
    "Celebrity": "Arizona_Muse",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 2
  },
  {
    "Celebrity": "Gwyneth_Paltrow",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 1
  },
  {
    "Celebrity": "Gwyneth_Paltrow",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 2
  },
  {
    "Celebrity": "Victoria_Beckham",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 1
  },
  {
    "Celebrity": "Victoria_Beckham",
    "Color": "black",
    "Name": "Sumptuous Extreme",
    "Priority": 2
  }
]

db.bulk({docs:mascara}, function(er) {
  if (er) {
    throw er;
  }

  console.log('Inserted all documents');
});