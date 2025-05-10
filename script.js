//your JS code here. If required.
const c = document.getElementById('counter');
const btn = document.getElementById('btn');
let count = parseInt(c.innerText, 10);


btn.addEventListener('click', () =>{
	count++;
	alert(count);
	c.innerText = count;
	
});
