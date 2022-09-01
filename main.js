let sentence, jjakpri, holpri;
let ex = document.querySelector('#export');
function holjjak(){
    jjakpri = '';
    holpri = '';
    sentence = [...document.querySelector('.inp').value];
    for(i=0;i<sentence.length;i+=2){
        jjakpri += sentence[i];
    }
    for(i=1;i<sentence.length;i+=2){
        holpri += sentence[i];
    }
    ex.innerHTML=`
        홀수(1,3,5 ... 번째) 출력 공간 : <br> 
        ${jjakpri} <br><br>
        짝수 출력 공간(2,4,6 ... 번째) : <br> 
        ${holpri} <br>
    `;
    console.log('3'+'4');
}


let holsentence, jjaksentence, jjakWrite, holWrite, holjjakpri, maxLength;
let ex2 = document.querySelector('.mixExport');
function holjjakMix(){
    holjjakpri='';
    holsentence='';
    jjaksentence='';
    holsentence = [...document.querySelector('.holwrite').value];
    jjaksentence = [...document.querySelector('.jjakwrite').value];

    if(holsentence.length>jjaksentence.length)
    maxLength = holsentence.length;
    if(holsentence.length<jjaksentence.length)
    maxLength = jjaksentence.length;
    if(holsentence.length==jjaksentence.length)
    maxLength = holsentence.length;

    for(i=0;i<maxLength;i++){
        if(jjaksentence[i]!=null)
        holjjakpri+=jjaksentence[i];
        if(holsentence[i]!=null)
        holjjakpri+=holsentence[i];
    }
    
    ex2.innerHTML=`
        짝홀 합체 출력 공간 : <br> 
        ${holjjakpri} <br><br>
    `;
    console.log('3'+'4');
}

let alphaSen = '';
let countPri = document.querySelector('.alphaSen');
let alphaPri = document.querySelector('.alphaPri');
let inHtml = "";
let minNum = 65;
let maxNum = 90;
let plusNum = 32; // or 32
let recordNum = new Array();
//65~90 || 97~122
function setBig(){
    plusNum = 0;
    countAlpha();

}
function setSmall(){
    plusNum = 32;
    countAlpha();
}
function countAlpha() {
    alphaSen = '';
    inHtml = '';
    
    alphaSen = [...document.querySelector('.alphaSen').value];

    for(i=minNum;i<=maxNum;i++){
        recordNum[i]=0;
    }
    for(i=minNum + plusNum;i<=maxNum + plusNum;i++){
        recordNum[i]=0;
    }
    
    for(i=0;i<alphaSen.length;i++){
        for(j=minNum + plusNum;j<=maxNum + plusNum;j++){
            if(alphaSen[i].charCodeAt(0)==j){
                recordNum[j] += 1;
                console.log(recordNum[j]);
            }
        }

        for(j=minNum;j<=maxNum;j++){
            if(alphaSen[i].charCodeAt(0)==j){
                recordNum[j] += 1;
                console.log(recordNum[j]);
            }
        }
    }
    for(i=minNum;i<=maxNum + plusNum;i++){
        if (i==91) {inHtml += '<br><hr>'; i=97}
        inHtml += (String.fromCharCode(i)+' : '+recordNum[i]+'<br>')
        
    }    
    alphaPri.innerHTML=`
        출력 : <br> 
        ${inHtml} <br><br>
    `;
}
