
// const names =require('./ 4-names')
// const sayhi= require('./sayhi')
// const amount =0;
// if(amount<10) {
//     console.log('large amount')
// }else{
//     console.log('small amount')
// }
// console.log(__dirname)
// setInterval(()=>{
//     console.log("hello worrld!")
// },1000)
// setTimeout(() => {
//     console.log("hello world");
// },10000000)
// const secret ="supersecret";
// const peter= 'peter';
// const john ='john';
// const names =require ('./names');
// console.log(names);
// sayhi('susan');
// sayhi('peter');
// sayhi('john');
 
const names = require('./ 4-names');
const sayhi = require('./utilis');

sayhi('susan');
sayhi(names.john);
sayhi(names.peter);
