let forms = document.querySelectorAll('.form-step');
let closeBtn = document.querySelectorAll(".close-btn");
let submitBtns = document.querySelectorAll(".form-submit");
let radioBtns = document.querySelectorAll(".radio-btn");



radioBtns.forEach((btn,index)=>{
    btn.onclick = (e)=>{

        e.target.parentElement.style.background = `#fcf5ee`;   
        e.target.parentElement.style.border = `1px solid #fbd8b4`;   
        radioBtns.forEach(btn=>{
            if(btn.checked !== true){
                btn.parentElement.style.background = 'transparent';
                btn.parentElement.style.border = 'none';
            }
        })
    }
})




submitBtns.forEach((btn)=>{
    btn.onclick = (e)=>{
        const id = btn.id.split("-")[1];
        forms[id].style.display = 'block';
        forms[id].classList.add('active-step');
        forms[id-1].classList.remove('active-step');

        forms.forEach((e,i)=>{
            setForms(); 
    })
}
})

function setForms(){

    forms.forEach((e,index)=>{
        if(!e.classList.contains('active-step')){
            e.style.display = `none`;
            document.getElementById(`close-btn-${index+1}`).style.display = 'block';
        }else{
            e.style.display = `block`;
            document.getElementById(`close-btn-${index+1}`).style.display = `none`;
        }
    })
}
setForms();

closeBtn.forEach((btn)=>{
    btn.onclick = (e)=>{
        const id = btn.id.split("-")[2];
        forms[id-1].style.display = `block`;
        forms.forEach((e,i)=>{
            if(i == id-1){
                forms[id-1].classList.add('active-step'); 
            }else{
                forms[i].classList.remove('active-step');
            }
            setForms(); 
        })
    }
})
