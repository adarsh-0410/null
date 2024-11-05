function f1() {
    // Store input from the text field
    
    var username = document.getElementById('username').value;
    var userpwd = document.getElementById('pwd').value;
    if ((username==="")||(userpwd==="")){
        window.alert("Enter the details!")
    }
    else{
        window.location.href="page2.html";
    window.alert("Hello! Welcome "+username);
    }


}