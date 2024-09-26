// alert("Hola mundo");
// console.log("Hola mundo");
// let variable = prompt("Ingrese un dato ")

// ======================================================
// let x=5;
// let y="5";
// console.log(x==y);
// console.log(x===y);
// ======================================================
// let x=5;
// if(x==5){
//     console.log("Es igual a 5");    
// }else{
//     console.log("No es igual a 5");
// }
// key="algo"
// switch (key) {
//     case "Algo":        
//         break;
//     case "algo":
//         break;
//     case "ALGO":
//         break;
//     default:
//         break;
// }
// ======================================================

// for (let i = 0; i < 10; i++) {    
//     if(i==5){
//         continue;
//     }    
//     if(i== 8){
//         break;
//     }
//     console.log(i);
// }

// ======================================================
// const arr=[1,5,3,7,5,2,8,6,9];
// for(let elem of arr){
//     console.log(elem);
    
// }

// ======================================================
// const persona={
//     nombre: "Juan",
//     edad: 18,
//     sexo: true
// };
// for(let key in persona){
//     console.log(key+"-->"+persona[key]);
    
// }

// ======================================================
// let x=10;
// while(x<20){
//     console.log(x);
//     x=x+1;    
// }
// ======================================================
// let x=10;
// do{
//     console.log(x);
//     x+=2;    
// }while(x<20)

// ======================================================
// ARREGLOS
// let x=["Cadena",13,true,'x'];
// console.log(x);

// let texto="esto es una 'cadena' importante";
// let texto2='esto es una "cadena" importante';
// console.log(texto);
// console.log(texto2);

// ======================================================
// let x=["Cadena",13,true,'x'];
// let y=["Otro",12,false,'m'];
// console.log(x.length);
// x.push("Final");
// console.log(x);
// x.unshift("INICIO");
// console.log(x);
// x.shift();
// console.log(x);
// x.pop();
// console.log(x);
// x.splice(1,2);
// console.log(x);
// console.log(x.join("***"));
// console.log(x.concat(y));
// console.log(x);
// console.log(y.indexOf("m"));
// console.log(y.includes("m"));
// y.reverse();
// console.log(y);

// ======================================================
// function suma(a, b){
//     let resultado=a+b;
//     return resultado;
// }
// function suma(a, b, c, v){
//     let resultado=a+b+c+v;
//     return resultado;
// }

// let res=suma(10,25, 12, 24);
// console.log(res);

// ======================================================
// FUNC ANÓNIMAS

// let suma=function(a, b){
//     return a+b;
// }
// console.log(suma(2,4));

// ======================================================
// const fn1=()=>{
//     console.log("Hola mundo");    
// }
// fn1();
// const fn2=m=>{
//     console.log("parametro "+m);    
// }
// fn2(12);
// const fn3=(a,b)=>{
//     console.log("parámetros "+a+"  "+b);
// }
// fn3(12, 25);
// const fn4=(m)=>m*m;
// console.log(fn4(5));
// const fn5=(m)=>{return m*m};
// console.log(fn5(5));
// ======================================================
//OBJETOS LITERALES
// const obj={
//     key:"value",
//     key2:"value2"
// };
// const obj2={key:"value",key2:"value2"};
// console.log(obj.key);
// console.log(obj["key"]);

// ======================================================
// FUNCIÓN CONSTRUCTORA  
// function Persona(nombre, edad, sexo){
//     this.nombre=nombre;
//     this.edad=edad;
//     this.sexo=sexo;
//     this.cumplirAnios=()=>{this.edad=edad+1}
// }

// let obj1=new Persona("jose",18,true);
// obj1.cumplirAnios();
// console.log(obj1);

// ======================================================
// EMPLEANDO LA PALABRA RESERVADA CLASS

class Persona{
    constructor(nombre, edad, sexo){
        this.nombre=nombre;
        this.edad=edad;
        this.sexo=sexo;
    }

    cumplirAnios(){
        this.edad=this.edad+1;
    }
}

const obj1= new Persona("carlos", 20,true);
console.log(obj1);
