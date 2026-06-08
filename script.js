function login() {
    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if (usuario === "mario" && password === "1234") {
        alert("Correcto");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}