// Post-installation script
var fs = require('fs');

try {
  // copy .env.example to .env
  fs.copyFileSync(".env.example", ".env");
  console.log("Copied default ENV variables to .env.");
} catch (e) {
  console.log(e);
}