var no_answer = document.querySelector('#no');

function change_pos()
{
	no_answer.style.top = (Math.floor(Math.random() * 40) + 45).toString() + "%";
	no_answer.style.right = (Math.floor(Math.random() * 50)).toString() + "%";
}
no_answer.onmouseover = change_pos;