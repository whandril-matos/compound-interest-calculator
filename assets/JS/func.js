import * as callFunc from "./callFunc.js" 

document.addEventListener("DOMContentLoaded", function(event) {
    // valor de entrada
    

    const bottonSite = document.getElementById("bottonSite")
    


    bottonSite.addEventListener("click",cabe)
    function cabe(){
        let value = callFunc.strForFloat(callFunc.entryValues())
        let valueCalculate = callFunc.calculate(value)
        let tess = callFunc.entryValues()
        if(tess[0] !== "" && tess[1] !== "" && tess[2] !== "" && tess[4] !== ""){
            console.log(valueCalculate)
            capitalI.textContent = "US$ "+ valueCalculate[0].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2})
            ganhoJ.textContent = "US$ "+ valueCalculate[2].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2})
            ganhoT.textContent = "US$ "+ valueCalculate[1].toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2})
        }else{
            console.log(tess[0] !== "")
            capitalI.textContent = "--"
            ganhoJ.textContent = "--"
            ganhoT.textContent = "--"
        }

        

    }


    //valores de saida
    const ganhoT = document.getElementById("ganhoT")
    const capitalI = document.getElementById("capitalI")
    const ganhoJ = document.getElementById("ganhoJ")

})





// var y = 0
// while(y < 3){
//     document.addEventListener("DOMContentLoaded", function(event) {
//         var divi = document.getElementById("valuesEnd");
//         var Unidiv = document.createElement("div");
    
//         Unidiv.textContent = "text teste";
//         Unidiv.style.fontSize = "200%";
//         Unidiv.style.backgroundColor = "red"
//         Unidiv.style.width = "33%"
//         Unidiv.style.height = "auto"
//         Unidiv.style.margin = "10px"
//         Unidiv.style.padding = "10px";
//         Unidiv.style.border = "5px solid black";
//         Unidiv.style.textAlign = "center"
//         Unidiv.style.borderRadius= "10px"
//         Unidiv.classList.add("blockValue");
//         divi.appendChild(Unidiv)
    
//     });
//     y++
// }
