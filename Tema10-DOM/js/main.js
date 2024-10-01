let a=document.getElementById("a");
let b=document.getElementById("b");
let buttonAdd=document.getElementById("buttonAdd");
let c=document.getElementById("c");

// function suma(){
//     c.value=Number(a.value)+Number(b.value)
// }

// buttonAdd.addEventListener("click",suma());


buttonAdd.addEventListener("click",(ev)=>{
    alert(a.value+b.value);
    c.value=Number(a.value)+Number(b.value)
});