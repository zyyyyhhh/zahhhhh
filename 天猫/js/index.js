/*
* @Author: dell
* @Date:   2017-09-18 18:46:17
* @Last Modified by:   dell
* @Last Modified time: 2017-09-19 19:40:07
*/
window.onload = function(){
	let a = document.getElementsByClassName('aside1')[0];
	let b = a.getElementsByTagName('li');
	let c = document.getElementsByClassName('item');
	let d = document.getElementsByClassName('bein1')[0];
	let e = d.getElementsByTagName('li');
	let f = document.getElementsByClassName('bein-center')[0];
	let g = f.getElementsByTagName('li');
	let beijing = document.getElementsByClassName('beijing1')[0];


	for(let i=0;i<c.length;i++){
		b[i].onmouseover = function(){
			c[i].style.display = 'block';
		}
		b[i].onmouseout = function(){
			c[i].style.display = 'none';
		}
	}


	for(let i=0;i<g.length;i++){
		g[i].onmouseover = function(){
			for(let i=0;i<g.length;i++){
				g[i].style.background = 'rgba(161, 164, 166, 0.5)';
				g[i].style.borderColor = 'rgba(161, 164, 166, 0.5)';
				e[i].style.display = 'none';

			}
				g[i].style.background = 'rgba(255, 255, 255, 0.6)';
				g[i].style.borderColor = 'red';
				e[i].style.display = 'block';
				num = i;
		}
	}



	let t;
	t = setInterval(move, 2000);
	let num = 0;
	function move(){
		num++;
		if(num == e.length){
			num = 0;
		}
		for(let i=0;i<e.length;i++){
			e[i].style.display = 'none';
			g[i].style.background = 'rgba(161, 164, 166, 0.5)';
				g[i].style.borderColor = 'rgba(161, 164, 166, 0.5)';
		}
		e[num].style.display = 'block';
		g[num].style.background = 'rgba(255, 255, 255, 0.6)';
		g[num].style.borderColor = 'red';
	}


		beijing.onmouseover = function(){
			clearInterval(t);
		}
		beijing.onmouseout = function(){
			t = setInterval(move, 2000);
		}
	
}