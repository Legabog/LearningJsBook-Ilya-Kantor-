'use strict'
 let n = prompt('Введите конечное значение интервала', '');
nexPrime:
 for (let i=2;i<n;i++){


 	for(let j=2;j<i;j++){
 		if(i%j == 0) continue nexPrime;
 	}

 	alert(i);
 }