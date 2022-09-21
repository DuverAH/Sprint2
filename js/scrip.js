function validarFormulario(){
    // var userAdmin=document.getElementById("admin").;
    // var userPiloto=document.getElementById("piloto").value;
    // var userUsuario=document.getElementById("usuario").value;
    // console.log(userAdmin);
    // console.log(userPiloto);
    // console.log(userUsuario);
    if (document.getElementById("admin").checked){
        open("formAdmin.html");
        console.log("admin");
        //<a href="formAdmin.html"></a>
    }if (document.getElementById("piloto").checked) {
        console.log("piloto");
        open("formPiloto.html");
    }if (document.getElementById("usuario").checked){
        console.log("usuario");
        open("formUser.html");
    }
}