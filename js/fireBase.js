var firebaseConfig = {
    apiKey: "AIzaSyBMLBvvrXnb843P5k3adwPVuoTulaFEWG0",
    authDomain: "website-403e6.firebaseapp.com",
    databaseURL: "https://website-403e6.firebaseio.com",
    projectId: "website-403e6",
    storageBucket: "website-403e6.appspot.com",
    messagingSenderId: "1014734734716",
    appId: "1:1014734734716:web:d526cecb7aa971826b90f9",
    measurementId: "G-LPTTNZWJPY"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();
  
  

document.getElementById('btn-enviar').addEventListener('click',enviar);

function enviar(){

    let names=document.getElementById('namesf').value
    let surnames=document.getElementById('surnamesf').value
    let email=document.getElementById('emailf').value
    let celphone=document.getElementById('celphonef').value
    let message=document.getElementById('messagef').value

    if(!names=="" && !surnames=="" && !email==""  && !message=="" && email.indexOf('@')!=-1 && celphone.length==9){
        db.collection("users").add({
            names: names,
            surnames: surnames,
            email: email,
            celphone: celphone,
            message: message,
    
            date: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString()
            
        })
        .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id)
            alert(`Generalmente responde en menos de 24h.`)
            window.location.replace('./')
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
    }else{
        alert(`Asegúrese que sus datos estén correcto`)
    }
}

