function parse() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
	  var parsed = JSON.parse(this.responseText);
      i = 0;
      x = " ";
      for (i in parsed) {
        x += parsed[i].content + " " + parsed[i].username + "<br>";
      }

      document.getElementById("messages").innerHTML = x;
    }
  };
  xmlhttp.open("GET", "data.json", true);
  xmlhttp.send();
}