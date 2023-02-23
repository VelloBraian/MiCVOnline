let toggle=document.getElementById('toggle');
let label_toggle=document.getElementById('label_toggle');
toggle.addEventListener('change',(event)=>{
    let checked=event.target.checked;
    document.body.classList.toggle('dark');
    if (checked==true){
        label_toggle.innerHTML='<i class="bi bi-sun"></i>';
        label_toggle.style.color="white";
    }else{
        label_toggle.innerHTML='<i class="bi bi-moon"></i>';
    label_toggle.stykle.color="white";
    }
    
})

function cambiar_fondo() {
    var elemento = document.getElementById ('left_s');
    var style = getComputedStyle (elemento);
    var bgColor =style.backgroundColor;

    if(bgColor == 'rgb(255, 255, 255)'){
        document.getElementById('left_s').style.backgroundColor = '#808080'
    }
    else
    {
        document.getElementById('left_s').style.background = '#fff'
    }
}
