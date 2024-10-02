let a=document.getElementById("a");
let b=document.getElementById("b");
let buttonAdd=document.getElementById("buttonAdd");
let c=document.getElementById("c");

buttonAdd.addEventListener("click",(ev)=>{
    alert(a.value+b.value);
    c.value=Number(a.value)+Number(b.value)
});