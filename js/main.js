             // 3 button de switche
let control1=document.querySelector("#control1");
let control2=document.querySelector("#control2");
let control3=document.querySelector("#control3");

        // les 3 div 
let section_posts=document.querySelector(".section_posts");
let section_saved=document.querySelector(".section_saved");
let section_tagged=document.querySelector(".section_tagged");

           // div content after
let colon3_d1=document.querySelector(".colon3_d1");
let colon3_d2=document.querySelector(".colon3_d2");
let colon3_d3=document.querySelector(".colon3_d3");
          

              
    section_posts.style.display="block";
    section_saved.style.display="none";
    section_tagged.style.display="none";

   // onclick sure button POSTS
colon3_d1.onclick=()=>{  
    section_posts.style.display="block";
    section_saved.style.display="none";
    section_tagged.style.display="none";

    control1.className="actev";
    control2.classList.remove("actev")
    control3.classList.remove("actev")

}

   // onclick sure button saved
colon3_d2.onclick=()=>{
    section_posts.style.display="none";
    section_saved.style.display="block";
    section_tagged.style.display="none";

    control2.className="actev";
    control1.classList.remove("actev")
    control3.classList.remove("actev")
}

   // onclick sure button tagged
colon3_d3.onclick=()=>{
    section_posts.style.display="none";
    section_saved.style.display="none";
    section_tagged.style.display="block";

    control3.className="actev";
    control2.classList.remove("actev")
    control1.classList.remove("actev")

}
    
 // _______________________________________ like__________________________________________________________________________


let im1=document.querySelectorAll(".im1");   //  imge
let link1=Array.from(document.querySelectorAll(".link1"));   //icone de like
let span_lik=Array.from(document.querySelectorAll(".span_lik"));  // span nomber de like


for(let i=0;i<im1.length;i++){
    if(window.localStorage.getItem(i)==0){
        link1[i].style.color="white";    // icone de like
        span_lik[i].textContent=0;       // span nomber de like
    }else if(window.localStorage.getItem(i)==1){
        link1[i].style.color="red";    // icone de lik
        span_lik[i].textContent=1;      // span nomber de like
    }else{
        window.localStorage.setItem(i,0);
    }
}

im1.forEach(function(e, i) {
    e.addEventListener('click', function() {
        if(window.localStorage.getItem(i)==1){
            link1[i].style.color="white";   // icone de lik
            window.localStorage.setItem(i,0);
            span_lik[i].textContent=0;      // span nomber de like
            
        }else{
            link1[i].style.color="red";    // icone de lik
            span_lik[i].textContent=1;      // span nomber de like
            window.localStorage.setItem(i,1);
        }
       
       

    });});