
//==============================
// Elements
//==============================

const cards=document.querySelectorAll(".certificate-card");

const popup=document.getElementById("popup");

const closeBtn=document.getElementById("closePopup");

const popupImage=document.getElementById("popupImage");

const popupTitle=document.getElementById("popupTitle");

const popupCourse=document.getElementById("popupCourse");

const popupCategory=document.getElementById("popupCategory");

const popupYear=document.getElementById("popupYear");

const verifyBtn=document.getElementById("verifyBtn");

const downloadBtn=document.getElementById("downloadBtn");

//==============================
// Open Popup
//==============================

cards.forEach(card=>{

    card.addEventListener("click",()=>{

        popupImage.src=card.dataset.image;

        popupTitle.textContent=card.dataset.title;

        popupCourse.textContent=card.dataset.course;

        popupCategory.textContent=card.dataset.category;

        popupYear.textContent=card.dataset.year;

        verifyBtn.href=card.dataset.verify;

        downloadBtn.href=card.dataset.download;

        popup.style.display="flex";

    });

});



//==============================
// Close Popup
//==============================

closeBtn.onclick=()=>{

    popup.style.display="none";

};

popup.onclick=(e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

};

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.style.display="none";

    }

});



