// function multiplicationtable (Tablenum,tablelen){
//     var a =""
// for(var i=0;i<=tablelen;i++){

//     a+=(Tablenum+"x"+i+"="+tablelen*i+"<br>")
// }
// return a
// }
// document.write(multiplicationtable(+prompt("enter a number"),+prompt("enter table length")))
// document.write("<br>")

// function sum(TableNum,tablelen){
//     for(var i=1;i<=tablelen;i++)

//     var res= TableNum+"X"+i+"="+tablelen*i+"<br>"
//     return res
// }
// document.write(sum(+prompt("enter value"),+prompt("enter value")))
// document.write("<br>")

// function calc(num1,opr,num2){
//     if(opr==="+"){
//         return num1+num2
//     }
//     else if(opr==="-"){
//             return num1-num2
//         }
//         else if(opr==="*"){
//             return num1*num2
//         }
//         else if(opr==="/"){
//             return num1/num2
//         }
//         else if(opr==="%"){
//             return num1%num2
//         }
//         else{
//             "invalid operator"
//         }
//         }
//         console.log(calc(10,"+",25))
//         console.log(calc(65,"-",8.9))
//         console.log(calc(8,"/",2))
//         console.log(calc(45,"*",6))
        
//         function calc1(num4,opr,num5){
//         switch(opr){
//             case "+":
//                 return num4+num5
//             break;
//             case "-":
//                 return num4-num5
//             break
//             case "*":
//                 return num4*num5
//             break
//             case "/":
//                 return num4/num5
//             break
//             case "%":
//                 return num4%num5
//         default:
//         return"invalid operator"
//         }
//         }


document.write("<br>")
document.write(calc1(+prompt("enter a number"),prompt("enter opr"),+prompt("enter table length")))
        
