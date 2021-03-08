let start;

start = document.querySelector("#start");

// console.log(start);

// start.onclick = function() {
//     alert("Ты нажал на кнопку!");
// }

// start.onclick = function() {
//     alert("Ты нажал на кнопку еще раз!");
// }

// start.addEventListener('click', function(){
//     alert("Ты нажал на кнопку!");
// });

// start.addEventListener('click', function(){
//     alert("Ты нажал на кнопку еще раз!");
// });

start.addEventListener('mouseenter', function(event) {
    console.log(event);
    let target = event.target;
	target.style.display = 'none';
    // console.log('Произошло событие!: ' + event.type + " на элементе " + event.target);
});

