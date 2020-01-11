'use strict'

let myPerson = Object.create(
	{},
	{
		name: {
			value : "Oleg",
			writable: true,
			enumerable: true,
			configurable: true
		},

		surname: {
			value : "Dosov",
			writable: true,
			enumerable: true,
			configurable: true
		},

		dateOfBirth: {
			value : new Date(1996,8,25),
			writable: true,
			enumerable: true,
			configurable: true
		},

		getFullAge: {
			get () {
				return new Date().getFullYear() - this.dateOfBirth.getFullYear();
			}
		},

		getFullName: {
			get() {
				return this.name + " " + this.surname;
			}
		},	

		setFullBirth: {
			set (value) {
				value = (value+"").split(",");
				this.dateOfBirth = new Date(+value[0], +value[1], +value[2]);
			}
		},
		
		setFullName: {
			set(value) {
				if (value) {
					value = value.split(' ');
					this.name = value[0];
					this.surname = value[1];
				} else{
					alert('Введите что то');
				};
			}
		}
	}
)

Object.defineProperty(myPerson, "phone", {
	value: +79408686620,
	writable: true,
	enumerable: true,
	configurable: true
});


for(let key in myPerson) {
	console.log(key, myPerson[key]);
};