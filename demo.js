var no_answer = document.querySelector('#no');
var question = document.querySelector('#question');

function change_pos()
{
	no_answer.style.top = (Math.floor(Math.random() * 40) + 45).toString() + "%";
	no_answer.style.right = (Math.floor(Math.random() * 50)).toString() + "%";
}
no_answer.onmouseover = change_pos;

var yes_answer = document.querySelector('#yes');
var background = document.getElementById('background');
var music = document.getElementById('music');

function on_yes()
{
	yes_answer.style.boxShadow = "0px 0px 100px 10px red";
}
yes_answer.onmouseover = on_yes;

function change_background()
{
	question.style.opacity = "0%";
	no_answer.style.opacity = "0%";
	yes_answer.style.opacity = "0%";
	music.setAttribute("src","play.mp3");
	background.style.transition = 'all linear 2s';
	background.style.opacity = "0%";
}
yes_answer.onclick = change_background;

function play_music()
{
	music.play();
}
document.getElementById('body').onmouseover = play_music;