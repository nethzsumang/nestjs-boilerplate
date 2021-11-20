// Post-installation script
var fs = require('fs');
const os = require('os');
const path = require('path');
const crypto = require('crypto');

const envFilePath = path.resolve(__dirname, '..', '.env');

// read .env file & convert to array
const readEnvVars = () => fs.readFileSync(envFilePath, 'utf-8').split(os.EOL);

/**
 * Updates value for existing key or creates a new key=value line
 *
 * This function is a modified version of https://stackoverflow.com/a/65001580/3153583
 *
 * @param {string} key Key to update/insert
 * @param {string} value Value to update/insert
 */
 const setEnvValue = (key, value) => {
  const envVars = readEnvVars();
  const targetLine = envVars.find((line) => line.split('=')[0] === key);
  if (targetLine !== undefined) {
    // update existing line
    const targetLineIndex = envVars.indexOf(targetLine);
    // replace the key/value with the new value
    envVars.splice(targetLineIndex, 1, `${key}='${value}'`);
  } else {
    // create new key value
    envVars.push(`${key}='${value}'`);
  }
  // write everything back to the file system
  fs.writeFileSync(envFilePath, envVars.join(os.EOL));
};

try {
  // copy .env.example to .env
  fs.copyFileSync('.env.example', '.env');
  console.log('Copied default ENV variables to .env.');

  // set app key value
  setEnvValue('APP_KEY', crypto.randomBytes(20).toString('hex'));
  console.log('Application key successfully generated');
} catch (e) {
  console.log(e);
}