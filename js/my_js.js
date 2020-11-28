
   

const aboutMe = document.getElementById("showAboutMe");
const showMe = document.getElementById('aboutMe');
const closeBtn = document.getElementById('close');

aboutMe.addEventListener("click",()=>{

 // toggle display between none and block
 if (showMe.style.display === "none"){
 showMe.style.display = 'block';  }
 else {
     showMe.style.display = 'none';
 }

});

closeBtn.addEventListener("click",()=>{
 showMe.style.display = 'none';
});



