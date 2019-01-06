const http = require('http');

const min = 333;
const max = 350;
const n = min;

let word = '';
let index = null;
for (let i = min; i<=max; i++) {
    const url = `http://kodaktor.ru/api2/buffer2/${i}`;

    http.get(url, response => {
            let data = '';
    
            response.on('data', chunk => {
                const foundWord = chunk.toString().match(/\w{4}/g);
                
                data += chunk;
                if (foundWord && !word ) {
                    word = foundWord[0]
                    index = data.indexOf(foundWord[0])
                }
            });
            
            response.on('end', function () {
                if (data.length > 0)
                    console.log(`${i}:`,  data.length, data.length/i);
            });
            
        })
    }
