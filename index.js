const Svet=document.querySelectorAll(".Svet")
let activeLight=0;
setInterval(()=>{
    changeLight()
},2000)

function changeLight(){
Svet[activeLight].className='Svet'
activeLight++

if(activeLight > 2){
    activeLight = 0;
}

const curentLight =Svet[activeLight]
curentLight.classList.add(curentLight.getAttribute("color"))
}