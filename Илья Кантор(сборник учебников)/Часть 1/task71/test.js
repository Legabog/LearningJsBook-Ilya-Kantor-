// 'use strict'

/*function fib(n) {
	return n <= 1 ? n : fib(n - 1) + fib(n - 2);  
}

alert ( fib(77));*/
// Оптимизированный вариант с использованием for( так как в этом варианте мы перебираем по порядку значение и переприсваиваем их храня в памяти)


function fib(n) {
	let a = 1;
    let b = 1;  
    for (let i = 3; i <= n; i++) {  
	let c = a + b; 
	a = b;
	b = c;
	}
    return b;
}

alert(fib(77));