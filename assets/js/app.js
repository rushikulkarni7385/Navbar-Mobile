let cl= console.log;


const iconHideShow = document.getElementById("toggle");
const navbarHideShow = document.querySelector(".nav");
cl(navbarHideShow);

const onhideShowLi = (e)=>{
      cl("trigger");
      navbarHideShow.classList.toggle("display");
   
      iconHideShow.classList.toggle("fa-close");
     //  

}



iconHideShow.addEventListener("click", onhideShowLi)




