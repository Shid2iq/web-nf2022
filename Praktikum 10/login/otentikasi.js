function login(){
    event.preventDefault();
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(uname == "ahmad2017" && pass == "integrity"){
        location.replace("success.html");
        alert("login Berhasil");
    } else {
        alert("Login Gagal");
    }
}