let myDate=new Date()
// console.log(myDate.toISOString())
// console.log(myDate.toString())// isme sbkch deta day month date year time in 24hour format 
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())//mm/dd/yy , curr_time
// console.log(myDate.toLocaleDateString())//mm/dd/yy
// console.log(myDate.toDateString())//day month date year

//typeof of date is object

//js me month 0 se shuru hota h  agr hm array k form me likhte   

//let's say we write
// let mycreated=new Date(2020,1,23)
// //if we want in a partcular format
// let newdate=new Date("")
// console.log(newdate.toLocaleString())
// console.log(mycreated.toDateString())

//locale string me changes krk bhi print kra skte

console.log(myDate.toLocaleString('default',{weekday:"long"}))


