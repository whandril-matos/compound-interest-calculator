
export function entryValues(){ 
    const tJMA = document.getElementById("tJ").value
    const pMA = document.getElementById("pMA").value
    const initialValue = document.getElementById("initialValue").value
    const monthlyValue = document.getElementById("monthlyValue").value
    const rate = document.getElementById("rate").value
    const time = document.getElementById("time").value

    return [initialValue, monthlyValue, rate, tJMA, time, pMA]

 
}
export function strForFloat (arr){
    let numberConverter =[]
    for(let i = 0; i < arr.length; i++){
        numberConverter.push(parseFloat(arr[i])) 
    }
    return numberConverter
}

export function calculate(enter){
    let matriz = enter
    let conv = matriz[3] < 12? matriz[2] / 100 + 1: (1 + (matriz[2]/100))**(1/12)  
    let i = conv
    let T = matriz[4] * matriz[5]
    let vM = matriz[1]
    let vI = matriz[0]
    let vStart = matriz[0] 
    
    // caculadora
    var ctg = 0
    while(ctg < T){
        vI = vI * i 
        vI += vM
        vStart += vM
        ctg ++
    }
    
    return [vStart, vI, vI - vStart]

} 

