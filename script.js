//your JS code here. If required.
let tbody = document.getElementById("output");

let promise1 =new Promise(func1);

function func1() {
	setTimeout(()=>{resolve("Promise1","2")},2000)
}

promise1.then(function(arg1,arg2) {
	addtoui(arg1,arg2);
}

 let promise2 =new Promise(func2);

function func2() {
	setTimeout(()=>{resolve("Promise2","1")},1000)
}

promise2.then(function(arg1,arg2) {
	addtoui(arg1,arg2);
}

let promise3 =new Promise(func3);

function func3() {
	setTimeout(()=>{resolve("Promise3","3")},2000)
}

promise1.then(function(arg1,arg2) {
	addtoui(arg1,arg2);
}



function addtoui(arg1,arg2) {
	let trow=document.createElement('tr');
	trow.innerHTML =`<td>${arg1}</td>
			<td>${arg2}</td>`
}