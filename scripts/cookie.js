function doSomething()
{
	var name = getCookie("name");
    if (name == "")
    {
    	name = prompt("Please enter your name", "");
        setCookie("name", name, 1);
    }
    else
    {
    	alert("Hi "+name+"!");
    }
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var testCookies=[];
testCookies["broName"] = "Kartik";

function getCookie(cname) {
  
  if (window.location.href.startsWith("file:///") && cname == "broName") return "Kartik B";
  
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
