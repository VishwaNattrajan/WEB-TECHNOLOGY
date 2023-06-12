const http = require('http'); const qs = require('querystring');
const collections = require("./smongo")
 
const server = http.createServer((req, res) => { if (req.method === 'POST') {
let body = ''; req.on('data', chunk => {
body += chunk.toString();
});
req.on('end', async () => {
const formData = qs.parse(body); const email = formData.email; const pass = formData.pass; await collections.findOne({
email: email, pass: pass,
}).then((email) => { if (!email) {
console.log('User not found'); res.end("failed");

} else {
res.end("Account found successfully"); console.log(user)
 

})




});
}
 
}

.catch((error) => {
console.log('Error finding user:', error); res.end("Invalid username password");
});
 
else {
res.writeHead(200, { 'Content-Type': 'text/html' }); res.end('Not correct');
}
});
server.listen(1234, () => { console.log('Server running on port 1234');
});


