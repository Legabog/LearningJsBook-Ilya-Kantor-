function work(a,b) {
	alert( a + b );
}

function decoratorSpy(func) {

    function wrapper(...args) {

		wrapper.calls.push(args);
		return func.apply(this, arguments);
	}

	wrapper.calls = [];

	return wrapper;
}


work = decoratorSpy(work);

work(1, 2);
work(4, 5);


for (let args of work.calls) {
	alert('calls:' + args.join());
}

