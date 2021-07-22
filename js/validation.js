function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var title = document.getElementById("title").value;
    var message = document.getElementById("message").value;

    if(!name || name == ""){
        alert("Name is empty!"); 
        return false;   
    }

    if(!email || email == ""){
        alert("Email is empty!")
        return false;
    }
    
    if(!title || title == ""){
        alert("Title is empty!")
        return false;
    }

    if(!message || message == ""){
        alert("Message is empty!");
        return false;
    }
    
    console.log("Name: "+name);
    console.log("Email: "+email);
    console.log("Title: "+title);
    console.log("Message: "+message);
    send();
    return true;
}

function send(){
    alert("Thank you for your feedback!");
}