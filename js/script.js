
let lis = document.getElementById('uls');
let checkbx = document.getElementById("checkbx")

lis.addEventListener('click', ()=>{
     if (checkbx.checked = true && nav.style.display == "block" ){
        checkbx.checked = false
     } else{
         lis.classList.add('ulin')
     }
    })