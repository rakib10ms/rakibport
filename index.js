
//skill section code start //
const skill=document.querySelector('#skill');
skill.addEventListener('load',geeet);

function geeet(e){
	console.log(e.screenY)
}

 const progress=document.querySelectorAll('.wrap');

   progress.forEach((item)=>{
     function getItems (){
    item.style.width=item.getAttribute('data-done') +'%';
    item.style.opacity=1;
    setTimeout(getItems,2000);
     }

     getItems ()

  })

  //skill section code end //




  //counter section code start

const counters = document.querySelectorAll('.counterEl');
const speed = 1;

window.addEventListener('DOMContentLoaded',getCounter);



function getCounter(){
counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;
		if (count < target) {
			counter.innerText = count + speed;
			setTimeout(updateCount,10);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});
}

getCounter()

//counter section code end
