
function showHide(){
    let id=document.getElementById('container-flex');
    let burger=document.getElementById('burger-button');
    if(id.style.left==""||id.style.left=="-50em"){
        
        id.style.left="0em";
       
    }else
   {
        id.style.left="-50em";

    }
}

function mygalery(id){
    location.href="./galeria.html?id="+id;
}


