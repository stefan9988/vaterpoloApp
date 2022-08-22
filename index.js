// const { start } = require("repl")

const tblTim1 = document.querySelector('#tblTim1')
const tblTim2 = document.querySelector('#tblTim2')
var tim1mvps
var tim2mvps
var fileName
var refreshint
var refreshint1
var refreshint2
var flag=false
var flag1=false
var flag2=false
var [milliseconds,seconds] = [0,0];
var int = null;
var speedData
const btnLoadFromFile = document.querySelector('#btnLoadFile')
const t1 = document.getElementById('tblTim1')
const t2 = document.getElementById('tblTim2')
const t3 = document.getElementById('inputt1')
const t4 = document.getElementById('inputt2')
const t5 = document.getElementById('btnTim1')
const t6 = document.getElementById('btnTim2')
const t7 = document.getElementById('abtn')
const t8 = document.getElementById('btnSave')
const t9 = document.getElementById('btnNext1')
const t10 = document.getElementById('tblplnum1')
const t11 = document.getElementById('tblplnum2')
const t12 = document.getElementById('btnNext2')
const cbtim1=document.getElementById('cbtim1')
const cbtim2=document.getElementById('cbtim2')
const cbltim1=document.getElementById('cbltim1')
const cbltim2=document.getElementById('cbltim2')
const cbq1=document.getElementById('cbq1')
const cbq2=document.getElementById('cbq2')
const cbq3=document.getElementById('cbq3')
const cbq4=document.getElementById('cbq4')
const btnSwimSpeed=document.getElementById('btnBp')
// import  {connection} from "/sql.js";

let tim1data = [{
        id: 1,
        name: 'Dylan',
        number: 2
    },
    {
        id: 2,
        name: 'Mark',
        number: 3
    },
    {
        id: 3,
        name: 'Oliver',
        number: 7
    },
    {
        id: 4,
        name: 'Stefan',
        number: 51
    },
    {
        id: 5,
        name: 'John',
        number: 5
    },
    {
        id: 6,
        name: 'Ray',
        number: 6
    },
    {
        id: 7,
        name: 'Stefan',
        number: 31
    },
    {
        id: 8,
        name: 'John',
        number: 54
    },
    {
        id: 9,
        name: 'Ray',
        number: 61
    },
    {
        id: 10,
        name: 'Stefan',
        number: 55
    },
    {
        id: 11,
        name: 'John',
        number: 88
    },
    {
        id: 12,
        name: 'Ray',
        number: 59
    },
    {
        id: 13,
        name: 'Ray',
        number: 1
    }
]

let tim2data = [{
        id: 1,
        name: 'Johny',
        number: 111
    },
    {
        id: 2,
        name: 'Sale',
        number: 22
    },
    {
        id: 3,
        name: 'Mike',
        number: 333
    },
    {
        id: 4,
        name: 'Stefan',
        number: 44
    },
    {
        id: 5,
        name: 'John',
        number: 3
    },
    {
        id: 6,
        name: 'Ray',
        number: 7
    },
    {
        id: 7,
        name: 'Stefan',
        number: 48
    },
    {
        id: 8,
        name: 'John',
        number: 54
    },
    {
        id: 9,
        name: 'Ray',
        number: 61
    },
    {
        id: 10,
        name: 'Stefan',
        number: 25
    },
    {
        id: 11,
        name: 'John',
        number: 14
    },
    {
        id: 12,
        name: 'Ray',
        number: 13
    },
    {
        id: 13,
        name: 'Ray',
        number: 9
    }
]

function btn1clicked() {
    document.querySelector('#btnTim1').disabled = true
    document.querySelector('#btnTim2').disabled = false

    let d = document.querySelector('#tblTim1')
    d.style.display = 'block'
    d = document.querySelector('#tblTim2')
    d.style.display = 'none'
}

function btn2clicked() {
    document.querySelector('#btnTim2').disabled = true
    document.querySelector('#btnTim1').disabled = false

    let d = document.querySelector('#tblTim2')
    d.style.display = 'block'
    d = document.querySelector('#tblTim1')
    d.style.display = 'none'
}

window.onload = () => {
    createTable(tim1data, 11, 'tblTim1');
    createTable(tim2data, 31, 'tblTim2');
    document.querySelector('#btnTim1').disabled = true
    startDisappear()
    
}

function startTimer(duration,id) {
    var timer = duration, minutes, seconds;
    refreshint= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
       
        var display = document.getElementById(id);
        display.innerHTML =minutes + ":" + seconds 
        
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


function startTimer1(duration,id) {
    var timer = duration, minutes, seconds;
    refreshint1= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
       
        var display = document.getElementById(id);
        display.innerHTML =minutes + ":" + seconds 
        
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

function startTimer2(duration,id) {
    var timer = duration, minutes, seconds;
    refreshint2= setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
       
        var display = document.getElementById(id);
        display.innerHTML =minutes + ":" + seconds 
        
        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}


function btnStartClicked(){
    document.querySelector('#btnStart').disabled = true
    document.querySelector('#btnStop').disabled = false
    if(!flag){
        clearInterval(refreshint)
        startTimer(8*60,'timer')
        flag=true
    }else if(flag){
        clearInterval(refreshint)
        let t= document.getElementById("timer").innerHTML.split(':')
        //console.log()
        startTimer(60*parseInt( t[0])+parseInt( t[1])-2,'timer')
    }
    if(int!==null){
        clearInterval(int);
    }
    int = setInterval(displayTimer,10);
}

function displayTimer(){
    milliseconds+=10;
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;
    }}

function btnStopClicked(){
    document.querySelector('#btnStart').disabled = false
    document.querySelector('#btnStop').disabled = true
    clearInterval(refreshint)
}

function btnRestartClicked(){
    flag=false
    document.getElementById("timer").innerHTML='08:00'
}
function btnBpClicked(){
    let t= seconds+milliseconds/1000
    let brzina=(15/t).toFixed(2)
    document.getElementById("btnBp").innerHTML=brzina+' m/s'
    clearInterval(int);
    [milliseconds,seconds] = [0,0];
    
}

function submitSave(){
    let ss=btnSwimSpeed.innerHTML
    let tim=cbtim1.checked? 1 : 2
    let pl1=document.querySelector('#inppl1').value
    let pl2=document.querySelector('#inppl2').value
    let q
    if (cbq1.checked) {
        q=1
    }else if(cbq2.checked){
        q=2
    }else if(cbq3.checked){
        q=3
    }else if(cbq4.checked){
        q=4
    }
    speedData={
        swim_speed:ss,
        tim:tim,
        player1:pl1,
        player2:pl2,
        quarter:q
    }
    // localStorage.clear()
    // localStorage.setItem("Speed", JSON.stringify(speedData));
}

function btnStart1Clicked(){
    document.querySelector('#btnStart1').disabled = true
    document.querySelector('#btnStop1').disabled = false
    if(!flag1){
        clearInterval(refreshint1)
        startTimer1(30,'timer1')
        flag1=true
    }else if(flag1){
        clearInterval(refreshint1)
        let t= document.getElementById("timer1").innerHTML.split(':')
        //console.log()
        startTimer1(60*parseInt( t[0])+parseInt( t[1])-2,'timer1')
    }
}

function btnStop1Clicked(){
    document.querySelector('#btnStart1').disabled = false
    document.querySelector('#btnStop1').disabled = true
    clearInterval(refreshint1)
}

function btnRestart1Clicked(){
    flag1=false
    document.getElementById("timer1").innerHTML='00:30'
}

function btnBp1Clicked(){
    clearInterval(refreshint1)
    document.querySelector('#btnStart1').disabled = true
    document.querySelector('#btnStop1').disabled = false
    startTimer1(20,'timer1')
    flag1=true
}

function btnStart2Clicked(){
    document.querySelector('#btnStart2').disabled = true
    document.querySelector('#btnStop2').disabled = false
    if(!flag2){
        clearInterval(refreshint2)
        startTimer2(30,'timer2')
        flag2=true
    }else if(flag2){
        clearInterval(refreshint2)
        let t= document.getElementById("timer2").innerHTML.split(':')
        //console.log()
        startTimer2(60*parseInt( t[0])+parseInt( t[1])-2,'timer2')
    }
    
}

function btnStop2Clicked(){
    document.querySelector('#btnStart2').disabled = false
    document.querySelector('#btnStop2').disabled = true
    clearInterval(refreshint2)
    let t= document.getElementById("timer2").innerHTML.split(':')
    attackTimeT2=attackTimeT2+30-parseInt(t[1])
    console.log(attackTimeT2)
}

function btnRestart2Clicked(){
    flag2=false
    document.getElementById("timer2").innerHTML='00:30'
}

function btnBp2Clicked(){
    clearInterval(refreshint2)
    document.querySelector('#btnStart2').disabled = true
    document.querySelector('#btnStop2').disabled = false
    startTimer2(20,'timer2')
    flag2=true
}
var attackTimeT1=0
var attackTimeT2=0


function startDisappear() {

    t1.style.display = 'none'
    t2.style.display = 'none'
    t3.style.display = 'none'
    t4.style.display = 'none'
    t5.style.display = 'none'
    t6.style.display = 'none'
    t7.style.display = 'none'
    t8.style.display = 'none'
    t9.style.display = 'none'
    t10.style.display = 'none'
    t11.style.display = 'none'
    t12.style.display = 'none'

}

function createInputEl(id) {
    let inputField = document.createElement('input')
    inputField.setAttribute('type', 'number')
    inputField.setAttribute('min', 0);
    inputField.setAttribute('value', 0);
    inputField.setAttribute('id', id)
    inputField.setAttribute('onchange', 'takeRow(id)')
    inputField.readOnly=true;
    
    if (parseInt(id.slice(0, 2)) % 2) {
        inputField.style.background = 'white'
    }
    return inputField;
}

function createButttonEl(id,znak) {
    let btnField = document.createElement('button')
    btnField.setAttribute('id', id)
    btnField.setAttribute('onclick', 'btnclicked(id)')
    //btnField.setAttribute('innerHTML','dugme')
    btnField.setAttribute('class','btnel')
    btnField.textContent=znak
    return btnField;
}



function btnclicked(id){
    const lastDigit2Str = String(id).slice(-1);
    const firstDig = id.slice(0, -1).slice(-2)

    if (lastDigit2Str == 'g' && id.slice(0,1)=='p') {
        document.getElementById(firstDig+'1').value=Number(document.getElementById(firstDig+'1').value)+1
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit2Str == 'g' && id.slice(0,1)=='m') {
        let v=document.getElementById(firstDig+'1').value
        if(v<1){
            document.getElementById(firstDig+'1').value=0
        }else{document.getElementById(firstDig+'1').value=Number(document.getElementById(firstDig+'1').value)-1}
        
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit2Str == 'a' && id.slice(0,1)=='p') {
        document.getElementById(firstDig+'2').value=Number(document.getElementById(firstDig+'2').value)+1
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit2Str == 'a' && id.slice(0,1)=='m') {
        let v=document.getElementById(firstDig+'2').value
        if(v<1){
            document.getElementById(firstDig+'2').value=0
        }else{document.getElementById(firstDig+'2').value=Number(document.getElementById(firstDig+'2').value)-1}
        
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e) 
    } else if (lastDigit2Str == 'e' && id.slice(0,1)=='p') {
        document.getElementById(firstDig+'3').value=Number(document.getElementById(firstDig+'3').value)+1
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit2Str == 'e' && id.slice(0,1)=='m') {
        let v=document.getElementById(firstDig+'3').value
        if(v<1){
            document.getElementById(firstDig+'3').value=0
        }else{document.getElementById(firstDig+'3').value=Number(document.getElementById(firstDig+'3').value)-1}
        
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)
        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e) 
    }
    else {
        alert('nesto nije dobro index.js 66')
    }
    var MVPs = MVPSort()
    localStorage.clear()
    localStorage.setItem("MVPs", JSON.stringify(MVPs));
}
var playingTime = []
function createTable(personData, i, id) {
    const table = document.querySelector('#' + id)
    personData.forEach(element => {

        let row = table.insertRow();
        row.classList.add('r')

        let cell = row.insertCell(0);
        cell.innerHTML = 0;
        cell.id = 'br' + i
        
        let goals = row.insertCell(1);
        goals.appendChild(createButttonEl('mbtn'+i+'g','-'))
        goals.appendChild(createInputEl("" + i + 1))
        goals.appendChild(createButttonEl('pbtn'+i+'g','+'))

        let assists = row.insertCell(2);
        assists.appendChild(createButttonEl('mbtn'+i+'a','-'))
        assists.appendChild(createInputEl("" + i + 2))
        assists.appendChild(createButttonEl('pbtn'+i+'a','+'))

        let ej = row.insertCell(3);
        ej.appendChild(createButttonEl('mbtn'+i+'e','-'))
        ej.appendChild(createInputEl("" + i + 3))
        ej.appendChild(createButttonEl('pbtn'+i+'e','+'))

        let MVP = row.insertCell(4);
        MVP.innerHTML = 0
        MVP.id = i;


        let played = row.insertCell(5);
        //played.appendChild(createPlayedButttonEl(id))
        played.innerHTML = 'No'
        played.id='pl'+i
       
        played.addEventListener("click",function(i){
            let t= document.getElementById("timer").innerHTML.split(':')
            let sek=60*parseInt(t[0])+parseInt(t[1])
            player = getPLayer(played.id)
            console.log(player)
             if(!player)
             {
                player = {id: played.id, usao:0, izasao: 0}
                playingTime.push(player)
            }  
            //console.log(typeof sek)
            if (played.innerHTML=='No'){
                played.innerHTML='Yes'
                player.usao = sek;
                // console.log('usaoo')
                // console.log(player)
                // console.log(playingTime)
            }else{ 
                played.innerHTML='No'
                player.izasao = sek;
                // console.log('izasaoo')
                // console.log(player)
                // console.log(playingTime)
                let el = document.getElementById(played.id);
                let sum = el.getAttribute('summary') ? el.getAttribute('summary') : 0
                //console.log('SUMA PRE: ' + sum)
                sum =parseInt(sum)  + (player.usao - player.izasao)
                //console.log('SUMA POSLE: ' + sum)
                played.setAttribute('summary', sum)
                // played.setAttribute('ukupno_vreme',)
            }
        });
        
        i += 1;
    });
}

function getPLayer(id) {
    let player;
    if (!playingTime.length) return null;

    playingTime.map(element => {
        // console.log(id)
        // console.log(element.id)
        if (element.id == id) { 
            player = element
            return;
        }
    })
    return player
}

function takeRow(id) {
    const lastDigit2Str = String(id).slice(-1);
    const firstDig = id.slice(0, -1)
    const lastDigit = Number(lastDigit2Str);
    document.querySelector('#pbtn11').value='+'
    if (lastDigit == 1) {

        let g = Number(document.getElementById(id).value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(firstDig + '3').value)

        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit == 2) {
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(id).value)
        let e = Number(document.getElementById(firstDig + '3').value)

        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else if (lastDigit == 3) {
        let g = Number(document.getElementById(firstDig + '1').value)
        let a = Number(document.getElementById(firstDig + '2').value)
        let e = Number(document.getElementById(id).value)

        document.getElementById(firstDig).innerHTML = MVPScoreCalculator(g, a, e)
    } else {
        alert('nesto nije dobro index.js 66')
    }
    var MVPs = MVPSort()
    localStorage.clear()
    localStorage.setItem("MVPs", JSON.stringify(MVPs));
    //console.log(sessionStorage)
}

function MVPScoreCalculator(g, a, e) {
    return 2 * g + a + e *1.5
}


function getPlayingTime(){
    let plt1={}
    let vremeniz1=[]
    let vremeniz2=[]
    for (var i = 1, row; row = tblTim1.rows[i]; i++) {
        let id=row.cells[0].innerHTML
        let vreme
        if(row.cells[5].getAttribute('summary')==null){
            vreme=0
        vremeniz1.push(vreme)}
            else{
                vreme=row.cells[5].getAttribute('summary')
                vremeniz1.push(vreme)
            }
        plt1[id]=vreme
     }
     //console.log(plt1)
     var items1 = Object.keys(plt1).map(function(key) {
        return [key, plt1[key]];
    });
    items1.sort(function(first, second) {
        return second[1] - first[1];
    });
    let tim1PlTime = items1.slice(0, 3)
    
    let plt2={}
    for (var i = 1, row; row = tblTim2.rows[i]; i++) {
        let id=row.cells[0].innerHTML
        let vreme2
        if(row.cells[5].getAttribute('summary')==null){
            vreme2=0
            vremeniz2.push(vreme2)}
            else{
                vreme2=row.cells[5].getAttribute('summary')
                vremeniz2.push(vreme2)
            }
        plt2[id]=vreme2
     }
    //  console.log(vremeniz1)
    //  console.log(vremeniz2)
     var items2 = Object.keys(plt2).map(function(key) {
        return [key, plt2[key]];
    });
    items2.sort(function(first, second) {
        return second[1] - first[1];
    });
    let tim2PlTime = items2.slice(0, 3)
    return [tim1PlTime,tim2PlTime,vremeniz1,vremeniz2]
}



function MVPSort() {
    let plTime=getPlayingTime()
    console.log(plTime)
    //sortiranje prvog tima
    //kljuc je broj igraca, vrednost je MVP score
    let dic1 = {}
    for (let index = 11; index < 24; index++) {
        dic1[tblTim1.rows[index - 10].cells[0].innerHTML] = (parseFloat(document.getElementById(index).innerHTML))
        //console.log( document.getElementById(index).id)
    }

    var items1 = Object.keys(dic1).map(function(key) {
        return [key, dic1[key]];
    });
    items1.sort(function(first, second) {
        return second[1] - first[1];
    });
    tim1mvps = items1.slice(0, 3)


    //sortiranje drugog tima
    let dic2 = {}
    for (let index = 31; index < 44; index++) {
        dic2[tblTim2.rows[index - 30].cells[0].innerHTML] = (parseFloat(document.getElementById(index).innerHTML))
    }

    var items2 = Object.keys(dic2).map(function(key) {
        return [key, dic2[key]];
    });
    items2.sort(function(first, second) {
        return second[1] - first[1];
    });
    tim2mvps = items2.slice(0, 3)

    return [tim1mvps, tim2mvps, t5.innerHTML, t6.innerHTML,plTime]
}


function saveData() {
    let players1 = readTable('tblTim1')
    let players2 = readTable('tblTim2')
    // let MVP1={playerNumber:MVPSort()[0],
    //             MVPScore:MVPSort()[0]}
    // let MVP2={playerNumber:MVPSort()[1][0][0],
    //             MVPScore:MVPSort()[1][0][1]}

    let tim1 = {
        tim_name: MVPSort()[2],
        players: players1,
        MVP: MVPSort()[0],
        playingTime: MVPSort()[4][2],
        plTimeTop3:MVPSort()[4][0]
    }
    let tim2 = {
        tim_name: MVPSort()[3],
        players: players2,
        MVP: MVPSort()[1],
        playingTime: MVPSort()[4][3],
        plTimeTop3:MVPSort()[4][1]
    }
    let matchData = [tim1, tim2]

    const textToBLOB = new Blob([JSON.stringify(matchData)], {
        type: 'text/plain'
    });

    var today = new Date();
    var date = today.getDate() + '_' + (today.getMonth() + 1) + '_' + today.getFullYear()
    var time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
    var dateTime = MVPSort()[2] + '_' + MVPSort()[3] + '_' + date + '_' + time;

    const sFileName = dateTime;

    let newLink = document.createElement("a");
    newLink.download = sFileName;
    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}

function readTable(id) {
    let tbl = document.querySelector('#' + id)
    let gaf = []
    let players = []

    if (id == 'tblTim1') {
        document.querySelectorAll('#tblTim1 td input[type="number"]')
            .forEach(x => {
                gaf.push(x.value)
            });
    } else if (id == 'tblTim2') {
        document.querySelectorAll('#tblTim2 td input[type="number"]')
            .forEach(x => {
                gaf.push(x.value)
            });
    }


    for (let i = 1; i < tbl.rows.length; i++) {
        let broj_igraca = tbl.rows.item(i).cells[0].innerHTML;
        let mvpScore = tbl.rows.item(i).cells[4].innerHTML;
        let played = tbl.rows.item(i).cells[5].innerHTML;
        let goals = gaf[(i - 1) * 3]
        let assists = gaf[(i - 1) * 3 + 1]
        let ejdr = gaf[(i - 1) * 3 + 2]
        let player = {
            Number: broj_igraca,
            Goals: goals,
            Assists: assists,
            Ejections: ejdr,
            MVPScore: mvpScore,
            Played: played
        }
        players.push(player)
    }
    return players
}

function mvpTblopened() {
    var MVPs = MVPSort()
    localStorage.setItem("MVPs", JSON.stringify(MVPs));
    //console.log(sessionStorage)
    window.open('http://127.0.0.1:5500/MVP.html', '_blank');
}

async function loadFromFile() {
    let [fileHandle] = await window.showOpenFilePicker();
    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    text = JSON.parse(text)
    fileName = fileHandle.name;

    updateTables(text)
    loadAppear()
}

function updateTables(text) {
    var tim1 = text[0]
    var tim2 = text[1]

    var tim1_name = tim1.tim_name
    var players1 = tim1.players
    var mvp1 = tim1.MVP
    var playingTime1=tim1.playingTime
    var plTimeTop3t1=tim1.plTimeTop3

    var tim2_name = tim2.tim_name
    var players2 = tim2.players
    var mvp2 = tim2.MVP
    var playingTime2=tim2.playingTime
    var plTimeTop3t2=tim2.plTimeTop3

    //tim 1
    document.querySelector('#btnTim1').innerHTML = tim1_name;
    cbltim1.innerHTML=tim1_name
    for (let i = 11; i < 24; i++) {
        document.getElementById('br' + i).innerHTML = players1[i - 11].Number;
        document.getElementById(i + '1').value = players1[i - 11].Goals;
        document.getElementById(i + '2').value = players1[i - 11].Assists;
        document.getElementById(i + '3').value = players1[i - 11].Ejections;
        //document.getElementById('pl'+i).innerHTML = players1[i - 11].Played;
        document.getElementById('pl'+i).innerHTML = playingTime1[i - 11];
        document.getElementById('' + i).innerHTML = players1[i - 11].MVPScore;
    }


    //tim 2
    document.querySelector('#btnTim2').innerHTML = tim2_name;
    cbltim2.innerHTML=tim2_name
    for (let i = 31; i < 44; i++) {
        document.getElementById('br' + i).innerHTML = players2[i - 31].Number;
        document.getElementById(i + '1').value = players2[i - 31].Goals;
        document.getElementById(i + '2').value = players2[i - 31].Assists;
        document.getElementById(i + '3').value = players2[i - 31].Ejections;
        //document.getElementById('pl'+i).innerHTML = players2[i - 31].Played;
        document.getElementById('pl'+i).innerHTML = playingTime2[i - 31];
        document.getElementById('' + i).innerHTML = players2[i - 31].MVPScore;
    }

    localStorage.setItem("MVPs", JSON.stringify([mvp1, mvp2, tim1_name, tim2_name,[plTimeTop3t1,plTimeTop3t2]]));
    window.open('http://127.0.0.1:5500/MVP.html', '_blank');
}

function loadAppear() {
    t1.style.display = 'block'
    t2.style.display = 'none'
    t3.style.display = 'none'
    t4.style.display = 'none'
    t5.style.display = 'inline'
    t6.style.display = 'inline'
    t7.style.display = 'inline'
    t8.style.display = 'inline'
    t9.style.display = 'none'
    t10.style.display = 'none'
    t11.style.display = 'none'
    t12.style.display = 'none'
    t6.disabled = false
}

function createNewGame() {
    createAppear()
    //inputValidation()
}

function createAppear() {
    t1.style.display = 'none'
    t2.style.display = 'none'
    t3.style.display = 'inline'
    t4.style.display = 'inline'
    t5.style.display = 'inline'
    t6.style.display = 'inline'
    t7.style.display = 'none'
    t8.style.display = 'none'
    t9.style.display = 'inline'
    t10.style.display = 'none'
    t11.style.display = 'none'
    t12.style.display = 'none'
    t6.disabled = true
    t5.innerHTML = 'Team 1'
    t6.innerHTML = 'Team 2'
}

function inputValidation() {
    if (t3.value == null || t3.value == '' || t4.value == null || t4.value == '') {
        alert("Please Fill All Required Fields");
        return false
    } else {
        return true
    }
}

function next1() {
    if (inputValidation()) {
        t5.innerHTML = t3.value
        t6.innerHTML = t4.value
        cbltim1.innerHTML=t3.value
        cbltim2.innerHTML=t4.value

        t3.style.display = 'none'
        t4.style.display = 'none'
        t9.style.display = 'none'
        //inputPlayersNumbers()
        initializeTable('tblTim1')
        initializeTable('tblTim2')
        loadAppear()
        t6.disabled = false
    }
}

// function inputPlayersNumbers() {
//     t10.style.display = 'inline'
//     t11.style.display = 'inline'
//     t12.style.display = 'inline'
//     for (let i = 1; i < 14; i++) {
//         //tabela 1
//         let row = t10.insertRow();
//         row.classList.add('r')

//         let num = row.insertCell(0);
//         num.appendChild(createInputNum('inNumT1' + i, i))

//         let num1 = row.insertCell(1);
//         num1.appendChild(createInputNum('inNumT2' + i, i))
//     }
// }

// function createInputNum(id, i) {
//     let inputField = document.createElement('input')
//     inputField.setAttribute('type', 'number')
//     inputField.setAttribute('min', 0);
//     //inputField.setAttribute('value', 0);
//     inputField.setAttribute('id', id)
//     inputField.setAttribute('class', 'inNum')
//     inputField.setAttribute('placeholder', 'Enter player ' + i + ' number')
//     return inputField
// }

// function next2() {
//     let numt1 = []
//     let numt2 = 0;

//     document.querySelectorAll('#tblplnum1 input[class="inNum"]')
//         .forEach(x => {
//             numt1.push(x.value)
//         });
//     numt1.forEach(element =>
//         numt2 = element == '' ? numt2 : numt2 += 1);
    
//     if (numt2 == 26 && compare(numt1)) {
//         initializeTable('tblTim1')
//         initializeTable('tblTim2')
//         loadAppear()
//         t6.disabled = false
//         for (let i = 11; i < 24; i++) {
//             document.querySelector('#br' + i).innerHTML = numt1[(i - 11) * 2]
//         }
//         for (let i = 31; i < 44; i++) {
//             document.querySelector('#br' + i).innerHTML = numt1[(i - 31) * 2 + 1]
//         }
//     } else {
//         alert("Please Fill All Required Fields");
//     }
// }

// function compare(niz){
//     let niz1=[]
//     let niz2=[]
//     let n1=0
//     let n2=0
//     for (let i = 0; i < 13; i++) {
//         niz1.push(niz[i*2])
//         niz2.push(niz[(i*2+1)])
//     }
//     niz1=niz1.sort()
//     niz2=niz2.sort()
//     for (let i = 0; i < 12; i++) {
//         if(niz1[i]!=niz1[i+1]){
//             n1+=1
//         }
//         if(niz2[i]!=niz2[i+1]){
//             n2+=1
//         }
//     }
//     if (n1==12 && n2==12){
//         return true
//     }else{
//         alert('Numbers cant be same')
//         return false
//     }
// }

function initializeTable(id) {
    let tbl = document.querySelector('#' + id)

    if (id == 'tblTim1') {
        document.querySelectorAll('#tblTim1 td input[type="number"]')
            .forEach(x => {
                x.value = 0
            });
    } else if (id == 'tblTim2') {
        document.querySelectorAll('#tblTim2 td input[type="number"]')
            .forEach(x => {
                x.value = 0
            });
    }


    for (let i = 1; i < tbl.rows.length; i++) {
        tbl.rows.item(i).cells[0].innerHTML = i;
        tbl.rows.item(i).cells[4].innerHTML = 0;
        tbl.rows.item(i).cells[5].innerHTML = 'No';
    }

}





//  let s = seconds < 10 ? "0" + seconds : seconds;
//  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

//  timerRef.innerHTML = ` ${s} : ${ms}`;
