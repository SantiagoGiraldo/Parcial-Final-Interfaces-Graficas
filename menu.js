/*Codigo JavaScript*/
var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function (){
	nav.classList.toggle('mostrar');
})

var rojo = $('.rojo');

rojo.on('click',function(){
	$('body').css('background', 'red');
});
