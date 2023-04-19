var total_par = 0//atribuir aqui os valores iniciais
var total_impar = 0//atribuir aqui os valores iniciais

for (i = 1; i <= 20; i++) {
  var quadrado = i ** 2;
  console.log(quadrado);
 if(quadrado % 2 == 0) {
    total_par = total_par + quadrado  
 } 
 else { 
   total_impar = total_impar + quadrado
}
}

console.log ("A soma de quadrados pares: ", total_par);
console.log ("A soma de quadrados ímpares: ", total_impar);

