function check_pass(){
    let senha = document.getElementById("senha").value;
    let senha_confirm = document.getElementById("senha_confirm").value;
    let msg_alert = document.getElementById("msg_alert");

if(senha.length != 0) {
    if(senha == senha_confirm) {
        msg_alert.textContent="senhas compativeis";
        msg_alert.style.backgroundColor= "#08ce61";
    } else{
        msg_alert.textContent="senhas são diferentes";
        msg_alert.style.backgroundColor= "#cc0606";
    }
} 

else{
    alert("digite uma senha");
        message.textContent = ""; 
}
    
}