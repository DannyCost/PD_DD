//JavaScript
let l = [1,2,3];
console.log(l);


//TypeScript
let l1:number[] = [2,3,4];
console.log(l1);

let l2:string[] = ["Victor", "Maria", "João"];
console.log(l2);

//Interação - Javascript
console.log(l1.length);
for(let i=0; i<l1.length; i++){
    console.log(i, l1[i])
}
for(let i in l1){
    console.log(i, l1[i]);
}

//for..of - para quando a gente precisa somente dos valores de l1
for(let elemento of l1){
    console.log(elemento);
}


// //Tipagem
//console.log(l1.length);
// //Unico "for" que aceita tipagem
//for(let i:number=0; i<l1.length; i++){
//    console.log(i, l1[i])
//}

// //"for in" e "for off" não aceitam tipagem por enquanto.

//for(let i in l1){
//    console.log(i, l1[i]);
//}

// //for..of - para quando a gente precisa somente dos valores de l1
//for(let elemento of l1){
//    console.log(elemento);
//}


//Operações sobre lista
let lista:number[] = [10,20,30,40];
//inserir elementos
lista.push(58);
console.log(lista)


//remover elementos
lista.splice(2,3);
console.log(lista)