function cors() {  
var xhttp = new XMLHttpRequest();  
xhttp.onreadystatechange = function() {    
    if (this.status == 200) {    
    alert(this.responseText);     
    document.getElementById("demo").innerHTML = this.responseText;    
    }  
};  
xhttp.open("GET", "https://accounts.shutterfly.com/sso/v2/tokens", true);  
xhttp.withCredentials = true;  
xhttp.send();
}
cors();
