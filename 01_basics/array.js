let arr=new Array(1,2,3,4,5)
arr.push(10) 
//push ka kaam hai array k last me el insert krna
console.log(arr)

//shift and unshift 

//unshift ka kaam hai element ko start me insert krna aur arr ka length utna hee rhega
// console.log(arr.shift())

// const newarr=arr.join()
// console.log(newarr)//data type ko string me bdl deta

//use of slice and splice

//slice kaa kaam hai jo index hai uss range me last wle element ko bina include krte hue element nikala aur original array ko bina change kiye
//splice kaa kama hai jo index dia h wahaa se wha tk array k elements ko nikalana aur original array me uss index k alawa element chor dena
console.log(arr.slice(1,3))
console.log(arr)
console.log(arr.splice(1,3))
console.log(arr)

//syntax of spread ek trh se do array ko jodna

// const newarr=[...arr1,...arr2]

//array k andr array k andr... hai aur sbko ek hee arr me chahiye to we can use flat
//const newarr=myarr.flat(Infinity)

//to check kee jo data aaya wo array h kee nhi we will use isArray

//kisi bhi cheez ko array bnane k liye we will use from

//agr object ko array bnana chahte ko directly likh k nhi chng ho paega

//we will have to specify key ko array bnana ya value ko

//of ka use krk bhi chng kr skte