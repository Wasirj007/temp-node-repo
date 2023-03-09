
const names = require('./name')
const hello = require('./hello')
const data = require('./alternative')
console.log(data);
require('./func')

hello('wasi')
hello(names.ali)
hello(names.ahmad)








// OS
const os = require('os')

const user = os.userInfo()
console.log(user);

console.log(`System uptime is ${os.uptime()} seconds`);

const all = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(all);







// Path
const path = require('path')
console.log(path.sep);

const filePath = path.join('first','sub','t.txt')
console.log(filePath);

const filePath2 = path.basename(filePath)
console.log(filePath2);

const filePath3 = path.resolve(__dirname,'first','sub','t.txt')
console.log(filePath3);







// Synchronous
const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./first/t.txt','utf8')
const second = readFileSync('./first/t2.txt','utf8')

console.log(first,' -- ',second);

writeFileSync('./first/t3.txt' , 'third file for path' , {flag:'a'})






// Asynchronous
const {readFile,writeFile} = require('fs')

console.log('starting');
readFile('./first/t.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result

readFile('./first/t2.txt', 'utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const second = result

writeFile('./first/t3.txt', 
    `i am ${first} file and ${second} 2file`,
    (err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('done with task');

})
})
})
console.log('starting next one');







// HTTP
const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.write("Welcome to Home page");
        res.end()
    }

    if (req.url === '/about') {
        res.write("Welcome to About page");
        res.end()
    }
    res.end(`
    <h1>OOPS!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Go Back To Home Page</a>
    `);

})

server.listen(5000)









// Local Dependency in npm:   npm i <packagename>
// Global Dependency in npm:   npm insatll -g <packagename>
// Package JSON is used to provide info about project and imp property is dependencies which store packages