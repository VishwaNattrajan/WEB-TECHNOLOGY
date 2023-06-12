const http = require('http');
const express = require("express") const app = express()
const path = require("path")
const collection = require("./smongo"); const querystring = require('querystring'); var qs;
http.createServer(function (req, res) { var data1 = '';
req.on('data', function (chunk) { console.log(chunk);
data1 += chunk;
});
req.on('end', async () => {
qs = querystring.parse(data1); console.log(qs);
const data = {
fname: qs['fname'],
lname: qs["lname"],
email: qs["email"],
pass: qs["pass"],
}
await collection.insertMany([data]);
res.write("hello You have successfully registered your form") res.end();
});
}).listen(6650);
console.log('Server has Started.	');
