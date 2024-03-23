//----------Hari-------------


//------------ audio -------------


// const songButton= document.querySelector("#songButton");
// const songButton2= document.querySelector("#songButton2");
// const songNotif = document.querySelector("#songNotif");
var songNotif= new Audio('music/notification.mp3');
var songButton = new Audio('music/click button.mp3');
var songButton2 = new Audio('music/clickbutton2.mp3');
 
function playNotif(){
  songNotif.play();
}
function playButton1(){
  songButton.play();
}
function playButton2(){
  songButton2.play();
}

// -------------- catatan ----------

const catatan = document.querySelector("#note1");
const animasi = document.querySelector(".login");


var i = 1;

// const catatan2 = document.querySelector("#note2");
function notes(){
  
    document.querySelector(".btnPesan").style.display = "none";
    if(i==1){
      animasi.style.animation = "fade2 1s" ;
      
    catatan.innerHTML = catatan2[i-1];
    
    document.getElementById("balas").style.display = "none";
    document.getElementById("balas2").style.display = "none";
    document.getElementById("hr").style.display = "none";
  // catatan.style.display = "none";
  // catatan2.style.display = "flex";
    
     i++;
    }else if(i==2){
      animasi.style.animation = "fade 1s" ;
       catatan.innerHTML = catatan2[i-1]; 
       setTimeout(display,2000);
        i++;
        
    }else if(i==3){
      animasi.style.animation = "fade2 1s" ;
        catatan.innerHTML= catatan2[i-1];
        setTimeout(display,4000);
        i++;
    }else if(i==4){
        animasi.style.animation = "fade 1s" ;
        catatan.innerHTML= catatan2[i-1]
        setTimeout(displayKado,2000);
        i++;
    }else if(i==5){
        kado.style.display = "none";
        catatan.innerHTML= catatan2[i-1]
        setTimeout(display,4000);
        i++;
    }

}

// ---------------- Button -------------

      const btnPesan = document.querySelector(".btnPesan");
      const emotlucu = document.querySelector(".emotlucu");
      const kado = document.querySelector(".img_kado");

      function displayKado(){
        kado.style.display = "flex";
        playNotif();
      }


      function display(){
        // emotlucu.style.display = "flex";
        btnPesan.style.display = "flex";
        playNotif();
      }
      
//------------------- Page 1 Button ---------------
function balas(){
    swal({
    title: "Alhamdulillah...",
    text: "Ada pesan belum dibaca",
    icon: "gif/emotlucu2.gif",
  });
  playButton1();
  setTimeout(display,4000);
  notes();
  
  }
  function tidak(){
    swal({
  title: "Aww! I'll give you a hug.Cheer up !",
  text: "Ada pesan belum dibaca",
  icon: "gif/peluk.gif",
      });

  playButton1();
  setTimeout(display,4000);
  notes();
  
  }

// --------------message typing---------------

  function message(pesan){
    let currentText = "";
    let currentWord = "";
   
    let letterCount = 0;
    function messageType(){
    currentWord = pesan;
    currentText = currentWord.slice(0,++letterCount);
    document.getElementById("note1").innerHTML = currentText;
    if(currentText.length != currentWord.length){
      setTimeout(messageType,80);
      }
    }
    messageType();
  }
  