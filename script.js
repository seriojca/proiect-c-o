let dateStatistice = [
    
]
//let dateStatistice =[]
let nrDataAdded = 0

for(let i = 0;i<dateStatistice.length;i++) {

    var newRow = document.createElement("tr");
    var newCellIdx = document.createElement("td");
    var newCellXi = document.createElement("td");
    var newCellYi = document.createElement("td");

    newCellIdx.innerHTML = parseFloat(dateStatistice[i]["idx"]);
    newCellXi.innerHTML = parseFloat(dateStatistice[i]["x"]);
    newCellYi.innerHTML = parseFloat(dateStatistice[i]["y"]);


    newRow.append(newCellIdx);
    newRow.append(newCellXi);
    newRow.append(newCellYi);
    nrDataAdded+=1;
    document.getElementById("dateStatisticeTabel").appendChild(newRow)

}

const addline = ()=>{



if ( isNaN(parseFloat(document.getElementById("xinumar").value))  || isNaN(parseFloat(document.getElementById("yinumar").value)) ){
    alert('WAI CUM TREBUIE')
} 
else {
    
    dateStatistice.push({idx:nrDataAdded,x:parseFloat(document.getElementById("xinumar").value),y:parseFloat(document.getElementById("yinumar").value)})


    var newRow = document.createElement("tr");
    var newCellIdx = document.createElement("td");
    var newCellXi = document.createElement("td");
    var newCellYi = document.createElement("td");


    newCellIdx.innerHTML = parseFloat(nrDataAdded);
    newCellXi.innerHTML = parseFloat(document.getElementById("xinumar").value);
    newCellYi.innerHTML = parseFloat(document.getElementById("yinumar").value);

    newRow.append(newCellIdx);
    newRow.append(newCellXi);
    newRow.append(newCellYi);

    nrDataAdded+=1;

    document.getElementById("dateStatisticeTabel").appendChild(newRow)

}
   
}

function suma(coloana) {
    let sum = 0
    coloana == 1 ? chColoana = "idx" : chColoana = "y"
    for(var i = 0;i<dateStatistice.length;i++){
        sum += parseFloat(dateStatistice[i][chColoana])
    }

    return sum
}

function sumaPartatelor(coloana) {
    let sum = 0
    coloana == 1 ? chColoana = "idx" : chColoana = "y"
    for(var i = 0;i<dateStatistice.length;i++){
        sum +=  Math.pow(parseFloat(dateStatistice[i][chColoana]),2)
    }
    
    return sum
} 
function produsInterCol() {
    let sum = 0
    for(var i = 0;i<dateStatistice.length;i++){
        sum +=  parseFloat(dateStatistice[i].idx)*parseFloat(dateStatistice[i].y)
    }
    
    return sum
}

function calculeaza_final() {
    
}

let [a,b,c] = [0,0,0]

// FUNCTII PENTRU CALCULE IN MATRICE ----------------------------------------------------------------

function determinant() {

    function  subDet() {
        let det = dateStatistice.length*sumaPartatelor(1) - suma(1)*suma(1)
        let deta0 = suma(2)*sumaPartatelor(1) - produsInterCol()*suma(1)
        let deta1 = dateStatistice.length*produsInterCol() - suma(1)*suma(2)
        return [det,deta0,deta1]
    }
    [a,b,c] = subDet()
    return subDet()
}
let [ai,ax] = [0,0]
function coef(det,det0,det1) {
    let a0 = det0/det
    let a1 = det1/det
    
    return [a0,a1]
}
[ai,ax] - coef(a,b,c)

// PROGRAMUL PROPRIU ZIS ------------------------------------------------------------

let coloana = document.getElementById("coloana").value

function calculTabel() {

    let xipentrutabel = suma(1);
    let yipentrutabel = suma(2);
    let xipatrattabel = sumaPartatelor(1);
    let produsintercl = produsInterCol();
    let [det,det0,det1] = determinant();
    let [a0,a1]=[0,0]
    setTimeout([a0,a1] = coef(det,det0,det1),50)

    document.getElementById("xi").innerHTML=xipentrutabel.toFixed(3)
    document.getElementById("yi").innerHTML=yipentrutabel.toFixed(3)
    document.getElementById("xi2").innerHTML=xipatrattabel.toFixed(3)
    document.getElementById("xiyi").innerHTML=produsintercl.toFixed(3)
    document.getElementById("det").innerHTML=det.toFixed(3)
    document.getElementById("det0").innerHTML=det0.toFixed(3)
    document.getElementById("det1").innerHTML=det1.toFixed(3)
    setTimeout(document.getElementById("a0").innerHTML=a0.toFixed(3),70)
    setTimeout(document.getElementById("a1").innerHTML=a1.toFixed(3),70)
    setTimeout(document.getElementById("inserta0").innerHTML=a0.toFixed(3),70)
    setTimeout(document.getElementById("inserta1").innerHTML=a1.toFixed(3),70)
    


}




