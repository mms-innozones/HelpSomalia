var splashTime=3000;

function splash()
{
	var t=setTimeout("next()",splashTime);
}

function next()
{
	window.location="choose_lang.html";
}

