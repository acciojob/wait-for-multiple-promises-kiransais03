//your JS code here. If required.
let tbody = document.getElementById("output");

let promise1 =new Promise(func1);


function func1() {
	setTimeout(resolve,2000)
}

 let promise2 =new Promise(func2);

function func2() {
	setTimeout(resolve,1000)
}


let promise3 =new Promise(func3);

function func3() {
	setTimeout(resolve,2000)
}


Promise.all([promise1,promise2,promise3]).then(addtoui)

function addtoui() {
	
	   let trow=document.createElement('tr');
	    trow.innerHTML =`<td>Promise 1</td>
			<td>2</td>
   <td>Promise 2</td>
			<td>1</td>
   <td>Promise 3</td>
			<td>3</td>
   <td>Total</td>
			<td>${time}</td>`
	tbody.append(trow)
}