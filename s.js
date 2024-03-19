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
var i = 1;
// const catatan2 = document.querySelector("#note2");
function notes(){
    document.querySelector(".btnPesan").style.display = "none";
    if(i==1){
    document.getElementById("note1").innerHTML="Mudah2 an suka yo dengan buatanku. Hehe , tapii ini khususs loo. First time to build this. agak2 canggung sii "
    document.getElementById("balas").style.display = "none";
    document.getElementById("balas2").style.display = "none";
    document.getElementById("hr").style.display = "none";
  // catatan.style.display = "none";
  // catatan2.style.display = "flex";
    
     i++;
    }else if(i==2){
        document.getElementById("note1").innerHTML="Aku ada kabar buatmu niii, kepo yaaa? hehe"
        setTimeout(display,4000);
        i++;
    }else if(i==3){
        document.getElementById("note1").innerHTML="Sebenernyaa, ini si udah lama mau ku buat tapi cuman takut ajaa. Akhirnya memberanikan diri buat. Yang terpenting buat bahagia. toh aku juga seneng buatnya sampe berjam2 pun tak lakukan wkwk  "
        setTimeout(display,4000);
        i++;
    }else if(i==4){
        document.getElementById("note1").innerHTML="Langsung saja kita mainn gamee..."
        setTimeout(display,4000);
        i++;
    }

}

// ---------------- Button -------------

      const btnPesan = document.querySelector(".btnPesan");
      const emotlucu = document.querySelector(".emotlucu");
      
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