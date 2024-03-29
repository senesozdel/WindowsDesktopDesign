
var parola = "salih123"



function gecis(){
    location.href ="./desktop.html"
}
function loginegecis(){
    location.href ="./login.html"
}

function loading(){

    ilerlemeBar = document.getElementsByClassName("progress-bar");


}
function logineGec(){

    setInterval(loginegecis,3000)

    var progressBar=document.getElementById("progressBar");
  document.getElementById("progress-container").style.display="flex";
  document.getElementById("power-button").style.display="none"

    var progressValue=0;

    function progressBarUpdate(){
        if(progressValue<100){
            progressValue+=10;
            progressBar.style.width=progressValue+"%";
            progressBar.innerHTML=progressValue+" %";
            progressBar.setAttribute("aria-valuenow",progressValue);
        }
    }

    setInterval(progressBarUpdate,200);
}

function login(){

let girilenParola = document.getElementById("password").value

console.log(girilenParola)

if(girilenParola != ""){
    if(girilenParola == parola){

        
        setInterval(gecis,3000)

            var progressBar=document.getElementById("progressBar");
          document.getElementById("progress-container").style.display="block"
            var progressValue=0;
        
            function progressBarUpdate(){
                if(progressValue<100){
                    progressValue+=25;
                    progressBar.style.width=progressValue+"%";
                    progressBar.innerHTML=progressValue+" %";
                    progressBar.setAttribute("aria-valuenow",progressValue);
                }
            }
        
            setInterval(progressBarUpdate,500);
        
    }
    else{
        alert("tekrar şifre giriniz")
      
    }
}
else{
    alert("boş geçilemez")
}


}
let baslatWindow = document.getElementById("baslat");

function baslatGoster(){

   
    baslatWindow.style.display = "flex"


}
function baslatKapat(){



    setInterval(document.getElementById("baslat").style.opacity ="0",2000)

}
function saat() {
    var simdi = new Date();
    var gun = simdi.getDate()
    var ay = simdi.getMonth()
    var yil = simdi.getFullYear()
    var saat = simdi.getHours();
    var dakika = simdi.getMinutes();
    var saniye = simdi.getSeconds();

    saat = saat < 10 ? "0" + saat : saat;
    dakika = dakika < 10 ? "0" + dakika : dakika;
    saniye = saniye < 10 ? "0" + saniye : saniye;




    var clock = saat + ":" + dakika + ":" + saniye + " "+" " + gun +":"+ay+":"+ yil;

    document.getElementById("tarih").innerText = ` ${clock}`;
}
function poweregecis(){
   
    location.href ="./power.html"
}
function pcKapat(){
    document.getElementById("anaKapsayici").style.display = "none"
    document.getElementById("kapatDivi").style.display = "block"
    document.getElementById("kapatDivi").style.width ="100%";
    document.getElementById("kapatDivi").style.height ="100vh";
    document.getElementById("kapatalert").style.display = "block"
    setInterval(poweregecis,2000)

}

function albumBarSelected(){
    document.getElementById("albumBar").style.backgroundColor ="red"
}
function filesBarSelected(){
    document.getElementById("filesBar").style.backgroundColor ="red"
}
function gamesBarSelected(){
    document.getElementById("gamesBar").style.backgroundColor ="red"
}
function bilgisayarBarSelected(){
    document.getElementById("bilgisayarBar").style.backgroundColor ="red"
}

function albumBarClose(){
    document.getElementById("albumBar").style.backgroundColor ="#F8F9FA"
   
}
function filesBarClose(){
    document.getElementById("filesBar").style.backgroundColor ="#F8F9FA"
   
}
function gamesBarClose(){
    document.getElementById("gamesBar").style.backgroundColor ="#F8F9FA"
   
}
function bilgisayarBarClose(){
    document.getElementById("bilgisayarBar").style.backgroundColor ="	#F8F9FA"
   
}

setInterval(saat, 1000);
saat()

function buyut(){
    document.getElementById("album").style.display ="none"
}
function kucult(){
    document.getElementById("album").style.display ="block"
}

function oynat(){
    var video = document.getElementsByClassName("video");
  video.play();
}


