function validateform(){
    let username= document.getElementById("name").value;
    let email= document.getElementById("email").value;
    let message= document.getElementById("message").value;
   
    const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(username===""){
        alert("Name cannot be left empty");
        return;
    }
    if(email===""){
        alert("Email cannot be left empty");
        return;
    }
    if(!emailRegex.test(email)){
        alert("Email invalid")
        return;
    }
    if(message===""){
        alert("Message cannot be left empty");
        return;
    }
 
}