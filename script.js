// let a=9;
// let b=5;
// let c=10;
// // console.log(a*b%c)
// let person={
//     firstname:"yusuf",
//     lastname: "jimoh"
// }
// // console.log(person)
// let car= {
//     manufacturer: "tesla",
//     year: 2000,
// }
// // console.log(car.manufacturer+""+car.year)

// let data =[1,2,3,"hello"]
 // console.log(data[0])

// let garage=[
//     {color:"red", year: 2009, name:"corolla"},
//     {color:"blue", year: 2022, name:"rav-4"},
//     {color:"yellow",year:2012, name:"benz"},
// ]
//    console.log(garage[2].name)
//    let form=[
//        {email:"onitide@gmail.com", password:"tide1234",firstname:"tunde",lastname:"oni"},
//        {email:"oniade@gmail.com",password:12345,firstname:"ade",lastname:"ire"},
//        {email:"joke@gmail.com",password:2344567, firstname:"ola",lastname:"lola"},
//    ]
//    console.log(form[0].email)
 
//    let data =[1,2,3,"hello"]
// //    data.pop()
// //    data.shift()
// //    data.push(78)
// //    data.unshift(73)
// // let total= data.length
// // let search = data.includes("hello")
// // console.log(data)
// // let newarray = data.splice(1,3)
// // let newarray = data.toString()
// let newarray = data.join("+")
// console.log(newarray)
//  let data1=[1,0,0,"*",3]
//  let newarray2= eval(data1.join(""))
//  console.log(newarray2)

// let calc=[];
// let firstnumber = prompt("enter first number");

// let sym = prompt("enter symbol");
 
//  let secondnumber = prompt("enter second number");

//  calc.push(firstnumber);
//  calc.push(sym);
//  calc.push(secondnumber);

//  let result = eval(calc.join(""))
//  console.log(result)

// let data = [1,2,4,"hello",1]
 
// let check = data.indexOf(1)
// let check2 = data.lastIndexOf(1)
// console.log(check2)

// let countries= ["america","trinidad","finland"]
// console.log(countries[0])
// console.log(countries[1])
// console.log(countries[2])
// countries.forEach((a)=> console.log(a))
// countries.map((a,i)=> console.log(a,i))
// let result = countries.filter((a)=>a=="finland")
// console.log(result)

// let countries = ["nigeria","america","greece","nicaragua","tunisia"]
// let result= countries.filter((a)=> a.endsWith("a"))
// console.log(result)

// for(let i=0; i< 10; i++){
//     console.log(i)
// }
// for(let i=2; i< 21; i+=2){
//     console.log(i)
// }
// let num=[];

// for(let i=2; i< 21; i+=2){
//     num.push(i)
// }
// let result= eval(num.join("+"))
    // console.log(result);
    // let person={
    //     fname:"john",
    //     lname:"doe",
    //     age: 20,
    //     email:"john@example.com"
  //  }
    // for (let props in person) {
    //     console.log(person[props]);
    // }
    // for (let props in person) {
    //     console.log(props);
// }
    // let ctry=['iceland','germany','nigeria']
    // for (let each of ctry) {
    // console.log(each)
    //           }

            //   let a=1;

            //   while (a < 10) {
            //       console.log(a);
            //       a++            
            //      }
    
            // do{
            //     console.log(a);
            //     a++;
            // }while(a<10);

            // let score = 70
            // if(score==70){
            //     console.log("you pass");
            // }
            // else{
            //     console.log("you failed")
            // }

            // let item = "shoe"
            // if(item=="bag"){
            //     console.log("please get me a bag");
            // }
            // else if(item=="shoe"){
            //     console.log("please get me a shoe")
            // }
            // else{
            //     console.log("return my money")
            // }

            // let day =2
            // switch(day){
            //     case 1:
            //         console.log("today is monday");
            //         break;
            //         case 2:
            //             console.log("today is tuesday");
            //             break;
            //         case 3:
            //             console.log("today is wednesday");
            //             break;
            //         case 4:
            //             console.log("today is thursday");
            //             break;
            //         case 5:
            //             console.log("today is friday");
            //             break;
            //         case 6:
            //             console.log("today is saturday");
            //             break;
            //         case 7:
            //             console.log("today is sunday");
            //             break;
            //             default:
            //                 console.log("sorry enter number that represent days of the week");
            //                 break;
            // }
//    let x = 1;
//    let y=3
// let z=x+y
//    console.log(z);
// let p= 4
// let q=6
//    let o = p+q
//    console.log(o);

//    function add2number(num1,num2){
//        let a = num1
//        let b = num2
//        let c= a+b;
//        console.log(c);
//    }
//    add2number(40,60)

//    function signup(email, password, name){
//        let myemail = email;
//        let mypassword = password;
//        let myname = name;
//        console.log("welcome on board "+ myname + " your account has been created");
//    }
//    signup("admin@app.com", 12345, "yusuf")

//    function currencyconversion(from, to, amt){
//        if(from=="naira" && to == "dollar"){
//            console.log(amt/750);
//        }
//        else if(from == "dollar" && to =="naira"){
//            console.log(amt*750);
//        }
//        else if(from == "euro" && to =="naira"){
//            console.log(amt*800);
//        }
//        else if(from == "naira" && to =="euro"){
//            console.log(amt/800);
//        }
//        else{
//            console.log("enter three valid argument and we only convert for euro, naira and dollar");
//        }
//    }
//    currencyconversion("dollar","naira",1000)
//    currencyconversion("naira","dollar",1000)

//    function areaofcircle(r){
//       let radius = r
//       let p = 3.142
//        console.log(p*r**2)
//    }
// areaofcircle(3)

function number(num){
    if(num%2 == 1){
        alert(num + " is oddnumber")
    }
    else if(num%2==0){
        alert(num+" is evennumber")
    }
}
// function nickname(a){
//     alert("hello "+ a)
// }
// nickname("tide")
// let selector = document.getElementsByClassName("myinput")
// let selector = document.getElementsByTagName("button")
// let selector = document.querySelector("button")
// let selector = document.querySelectorAll("button")
// let selector = document.title
// let selector = document.head.children
// let selector = document.body.children
// let selector = document.body.firstElementChild
// let selector = document.body.lastElementChild
// console.log(selector)
function nickname(){
    alert("hello")
}
let selector = document.getElementById("btn")
selector.onclick = nickname
 function test(){
    // document.querySelector("input").remove()
    //  document.querySelector("input").style.backgroundColor ="red"
    //  document.querySelector("input").style.fontSize ="5rem"
    //  document.querySelector("input").style.padding ="2rem"
    document.getElementById("btn").innerText = "welcome"
    let newelement = document.createElement("h1")
    newelement.innerText= "welcome"
    document.querySelector("div").appendChild(newelement)
}
selector.onclick = test
let selector1 = document.getElementById("click")
function btn(){
    // document.querySelector("button").style.backgroundColor ="blue"
    // document.querySelector("button").style.padding ="3rem"
    // document.getElementById("click").innerText ="login"
    let newelement2 =document.createElement("marquee")
newelement2.innerText= "welcome"
newelement2.setAttribute("direction","left")
document.querySelector("div").appendChild(newelement2)
}
selector1.onclick = btn

let elment = document.getElementById("input1")
function it(){
    let newelement3 = document.createElement("input")
    let newelement4 = document.createElement("input")
    let newelement5 = document.createElement("button")
    newelement5.innerText= "welcome"
    document.querySelector("form").appendChild(newelement3)
    document.querySelector("form").appendChild(newelement4)
    document.querySelector("form").appendChild(newelement5)
}
it()

