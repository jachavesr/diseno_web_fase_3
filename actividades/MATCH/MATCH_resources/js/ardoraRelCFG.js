//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=3;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="BUEN TRABAJO"; messageTime=""; messageError="VUELVE A INTENTARLO"; messageErrorG="VUELVE A INTENTARLO"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TUFUQ0g"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>IDEAS</p>","<p>BINARIO</p>","<p>COMPUTADOR</p>","<p>DESARROLLADOR</p>","<p>TRABAJO EN EQUIPO</p>","<p>SISTEMA OPERATIVO</p>","<p>HARDWARE</p>"];
var iL=["<div  align='center'><img src='MATCH_resources/media/5.jpg'></div>","<div  align='center'><img src='MATCH_resources/media/1.jpg'></div>","<div  align='center'><img src='MATCH_resources/media/2.png'></div>","<div  align='center'><img src='MATCH_resources/media/3.jpg'></div>","<div  align='center'><img src='MATCH_resources/media/7.jpg'></div>","<div  align='center'><img src='MATCH_resources/media/6.jpg'></div>","<div  align='center'><img src='MATCH_resources/media/4.jpg'></div>"];
var order=["","","","","","",""]; orderR=["","","","","","",""];indexR=0; indexL=0;
var cR=["<p>HARDWARE</p>","<p>COMPUTADOR</p>","<p>DESARROLLADOR</p>","<p>IDEAS</p>","<p>TRABAJO EN EQUIPO</p>","<p>BINARIO</p>","<p>SISTEMA OPERATIVO</p>"]; ansRL=["Mw","NQ","MQ","Mg","NA","Ng","MA"];
var iR=["","","","","","",""];
var auR=[7,3,4,1,5,2,6];
