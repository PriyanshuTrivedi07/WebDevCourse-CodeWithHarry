// const a = 423;
// const b = 34;
// console.log(a+b);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>pseudo selectors and more designing</title>
      <style>
          .container {
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              font-weight: 500;
              font-size: large;
              font-style: italic;
              background-color: #d3a01d5e;
              border: 3px dotted black;
              padding: 22px 12px 22px 12px;
              margin-left: 50px;
              width: 660px;
              height: 400px;
          }
  
          a {
              text-decoration: none;
              color: black;
          }
  
          a:hover {
              color: white;
              border-color: white;
              background-color: lightsalmon;
              text-decoration: underline;
          }
  
          /* a:visited{
              background-color: blue;
          } */
          a:active{
              background-color: brown;
          }
          /* button:hover {
              color: white;
              border-color: white;
              background-color: lightsalmon;
              text-decoration: underline;
  
  
          } */
  
          h1 {
              font-family: monospace;
          }
  
          /* .btn {
  
              border: none;
              padding: 10px;
              border: 1px solid #da4949;
              margin: auto;
              border-radius: 5px;
              background-color: rgb(230, 157, 157);
              cursor: pointer;
              font-size: 15px;
  
          } */
  
  
  
          button{
              font: 16px;
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              background-color: white;
              color: rgb(0, 140, 255);
              border: 1px solid rgb(0, 140, 255);
              border-radius: 5px;
              margin: 4px 2px;
              padding: 6px 12px;
          }
          button:hover{
              color: white;
              background-color: rgb(0, 140, 255);
              cursor: pointer;
          }
      </style>
  </head>
  
  <body>
      <div class="container" id="cont1">
          <h1>This is my heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore nisi deleniti doloribus facilis
              tenetur vero dolores ex quibusdam molestiae necessitatibus ducimus illo deserunt eligendi dolore nulla eum
              earum fugit officia repellendus delectus placeat, sapiente aliquid alias! Cumque, porro vero?
          </p>
          <a href="http://google.com" class="btn" id="link">Read more</a>
          <button type="button" class="btn btn-outline-dark">Contact us</button>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});