let buttons = document.querySelectorAll('button')

let data = []

buttons.forEach((btn)=>{
   btn.onclick = function(){
       if(btn.innerText == "="){
           var result = eval(data.join(""))
        //    console.log(result);
           document.getElementById('screen').innerText = result
       }
       else{
           data.push(btn.innerText)
            var newdata = data.join("")
            document.getElementById('screen').innerText = newdata
       }
   }
})
