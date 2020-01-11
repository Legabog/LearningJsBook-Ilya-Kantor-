'use strict'
// mini task_1
let array = [1, true, "Lega", 5, 999];
let [elem1, elem2, elem3, ...arr] = array
alert(`${elem1} - ${elem2} - ${elem3}`);
// mini task_2
let [ e1, e2] = array.reverse();
alert(e2);
// mini task_3
let [, el2] = array;
// mini task_4
let [, eleme2 = 'bbb', eleme3 = 'eee' ] = array;
// mini task_5
let {name, surname, age} = {name: 'Петр', 'surname': 'Петров', 'age' = 20};
// mini task_6
let {name = 'Аноном', surname = 'Анонимович', age = '? лет'} = {name: 'Петр', 'surname': 'Петров', 'age' = 20};