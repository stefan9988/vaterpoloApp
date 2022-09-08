const mvpTbl1 = document.querySelector('#tabelaMVP1')
const mvpTbl2 = document.querySelector('#tabelaMVP2')
const timeTbl1 = document.querySelector('#tabelaPT1')
const timeTbl2 = document.querySelector('#tabelaPT2')
const speedTbl1 = document.querySelector('#tabelaSS1')
const speedTbl2 = document.querySelector('#tabelaSS2')
const attackTime1 = document.querySelector('#AttackTime1')
const attackTime2 = document.querySelector('#AttackTime2')

window.onload = () => {
    get()
}
window.addEventListener('storage', get())
function get() {
    // console.log("loaaaddd")
    let MVPs = JSON.parse(localStorage.getItem("MVPs"));
    //let Speed=JSON.parse(localStorage.getItem("Speed"));
    //let tim=Speed[0]
    //let broj=Speed[1]
    //let cetvrtina=Speed[2]
    //let brzina=Speed[3]
    //console.log(Speed)
    let MVP1 = MVPs[0]
    let MVP2 = MVPs[1]
    let tim1_name = MVPs[2]
    let tim2_name = MVPs[3]
    let playingTime = MVPs[4]
    
    if(MVPs[5] !=null){
        MVPs[5].forEach(speed => {
            let ss=speed.swim_speed
        let tim=speed.tim
        let player1=speed.player1
        let player2=speed.player2
        let q=speed.quarter
        loadSpeedTbl(tim,player1,player2,q,ss)
        });
    if(MVPs[5]!= null && MVPs[6]!= null){
        console.log(MVPs)
    }       
        
    }
    console.log(MVPs)
    loadMvpTbl(MVP1, mvpTbl1,0)
    loadMvpTbl(MVP2, mvpTbl2,0)
    loadMvpTbl(playingTime[0], timeTbl1,1)
    loadMvpTbl(playingTime[1], timeTbl2,1)
    //loadSpeedTbl(tim,broj,cetvrtina,brzina)
    document.querySelector('#h2Tim1').innerHTML = tim1_name;
    document.querySelector('#h2Tim2').innerHTML = tim2_name;
    let minutes1 = Math.floor(MVPs[6] / 60);
    let seconds1 = MVPs[6] % 60;
    let minutes2 = Math.floor(MVPs[7] / 60);
    let seconds2 = MVPs[7] % 60;
    attackTime1.innerHTML='Attack time: '+ minutes1 + ' min ' + seconds1 + ' sec'
    attackTime2.innerHTML='Attack time: '+ minutes2 + ' min ' + seconds2 + ' sec'
    //sessionStorage.clear()
}

function loadMvpTbl(mvp, oTable,v) {
    var rowLength = oTable.rows.length;
    for (i = 1; i < rowLength; i++) {
        var oCells = oTable.rows.item(i).cells;
        var cellLength = oCells.length;
        for (var j = 0; j < cellLength; j++) {
            if(v==0){
                oTable.rows[i].cells[j].innerHTML = mvp[i - 1][j]
            }else if(v==1){
                let totalSeconds=mvp[i - 1][j]
                let minutes = Math.floor(totalSeconds / 60);
                let seconds = totalSeconds % 60;
                oTable.rows[i].cells[0].innerHTML = mvp[i - 1][0]
                oTable.rows[i].cells[1].innerHTML = minutes+' min '+seconds+' sec'
            }
            
        }
    }
}

function loadSpeedTbl(tim,igrac1,igrac2,cetvrina,brzina){
    if(tim==1){
        speedTbl1.rows[cetvrina].cells[0].innerHTML=igrac1
        speedTbl1.rows[cetvrina].cells[1].innerHTML=brzina
        speedTbl2.rows[cetvrina].cells[0].innerHTML=igrac2
    }else{
        speedTbl2.rows[cetvrina].cells[0].innerHTML=igrac2
        speedTbl2.rows[cetvrina].cells[1].innerHTML=brzina
        speedTbl1.rows[cetvrina].cells[0].innerHTML=igrac1
    }
    
    // table.rows[cetvrina].cells[0].innerHTML=broj
    // table.rows[cetvrina].cells[1].innerHTML=brzina
    
}

function tblrefresh() {
    location.reload()
}