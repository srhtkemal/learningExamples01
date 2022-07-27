const fs = require('fs');

//read data
fs.readFile("employees.json", "utf8",(err,data) => {
       if (data) { console.log(data)     
        console.log("Document readed")} 
       else {
         console.log(err);
        }})

// //write data
// fs.appendFile("employees.json",'\n{"name":"employee2", "salary":3000}',"utf8" ,(err,data) => {
//   if (data) { console.log(data)     
//    console.log("Document updated")} 
//   else {
//     console.log(err);
//    }})

// //delete document
// fs.unlink("employees.json",(err,data) => {
//   if (data) { console.log(data)     
//    console.log("Document deleted")} 
//   else {
//     console.log(err);
//    }})

