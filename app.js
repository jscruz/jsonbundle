fs = require('fs');
const $RefParser = require("@apidevtools/json-schema-ref-parser");

function normaliseSchema (fileName) {

$RefParser.bundle(fileName, (err, schema) => {
  if (err) {
    console.error(err);
  }
  else {
    bundledJson = JSON.stringify(schema, null, 2);
    fs.writeFile('bundled/'+fileName, bundledJson, function (err) {
       if (err) return console.log(err);
       console.log(fileName + ' normalised!');
    });
  }
})
}
