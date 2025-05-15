//your JS code here. If required.
const c = document.getElementById('counter');
const btn = document.getElementById('btn');
let count = parseInt(c.innerText);


btn.addEventListener('click', () =>{
	alert(count);
	count++;
	
	c.innerText = count;
	
});
