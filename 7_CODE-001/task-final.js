const axios = require("axios");

const urlName = "https://raw.githubusercontent.com/alisashaykk/goss3/master/7_CODE-001/secret2";

const url = "http://3336.kodaktor.ru/mystery?shaykhetdinova-alisa"

axios.post(url, urlName, {headers: { "content-type": "multipart/form-data" } })
    .then(response => {
        console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  });