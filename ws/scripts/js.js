// splash stuff
var splashTime=3000;

function splash()
{
	var t=setTimeout("next()",splashTime);
}

function next()
{
	window.location="choose_lang.html";
}

// Cookies

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
	    {
	    return unescape(y);
	    }
	 }
}

function checkCookie(c_name)
{
	var c_value=getCookie(c_name);
	if (c_value!=null && c_value!="") 		//cookie found
	  return c_value;
	else 						//cookie not found "first time"	    
	{	setCookie("SomaliaAppLang","Arabic",365);	//setting Default lang Arabic
		return "Arabic";
	}
}

function eraseCookie(c_name) {
	createCookie(c_name,"",-1);
}


//language
function setLanguageArabic()
{	
	setCookie("SomaliaAppLang", "Arabic", 1);
	//this.language = "Arabic";
}

function setLanguageEnglish()
{
	setCookie("SomaliaAppLang", "English", 1);
	//this.language = "English";
}

function getLanguage()
{	
	return checkCookie("SomaliaAppLang");
	//return this.language;
}

// row clickable
function ChangeColor(tableRow, highLight)
    {
    if (highLight)
    {
      tableRow.style.backgroundColor = '#525859';
    }
    else
    {
      tableRow.style.backgroundColor = '#e8e8e8';
    }
  }

function DoNav(theUrl)
  {
  	document.location.href = theUrl;
  }

