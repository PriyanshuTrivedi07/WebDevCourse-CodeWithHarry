// Node.js Built in modules
const fs = require('fs');

// fs.readFile('dele.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

let text = fs.readFileSync('dele.txt', 'utf8');
console.log(text);

fs.writeFileSync('dele1.txt',text);

text = text.replace('content', 'data');
fs.writeFileSync('dele1.txt',text);
console.log('the content written in the file : '+ text);

