/* Shaykhetdinova Alisa Raisovna */
const crypto = require('crypto');
const fs = require("fs");

const file = fs.readFileSync("task.js")
const key = fs.readFileSync("key")

const secret = crypto.publicEncrypt(key , file)
fs.writeFileSync("secret2", secret)