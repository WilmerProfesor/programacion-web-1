let botones = document.getElementsByClassName("bottonBasic");
let screen = document.getElementById("screen");

let datoOrig, datoModif, dato;
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        datoOrig=screen.value;
        screen.value += botones[i].value;
        datoModif=screen.value;
        try{
            result= eval(datoModif);
            dato=datoModif;
        }catch(error){
            dato=datoOrig;
        }        
        screen.value =dato;
    })
} 


alert("Hi")
alertSwal.fire("HOla Mundo");
Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success"
  });

  alert("Paso")

// if(typeof(result)== "number"){
//     screen.value=result;    
// }else{
//     screen.value="ERROR---"+result;
// }