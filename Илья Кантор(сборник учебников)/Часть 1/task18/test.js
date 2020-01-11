'use strict'

let user = {};

user.name = 'Джон';
alert(user.name);

user.surname = 'Смит';
alert(user.surname);

user.name = 'Пит';
alert(user.name);

delete user.name;
alert(user.name);