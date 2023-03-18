// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
//almacene los valores


const formulario = document.getElementById("formulario");
const guardar = document.getElementById("datos");
const Limpiar = document.getElementById("Limpiar");
const Name = document.getElementById("nombre");
const lastname = document.getElementById("apellido");
const id = document.getElementById("cedula");
const old = document.getElementById("edad");
const phone = document.getElementById("telefono");
const email = document.getElementById("email");
const genero = document.getElementById("genero");
const Estadocivil = document.getElementById("Estadocivil");
const hobbys = document.getElementById("hobbys");


const foto = document.getElementById("foto");
const imgPreview = document.getElementById("img-preview");

foto.addEventListener("change", (event) => {
    const file = event.target.files[0];
    imgPreview = file.value;
   
    foto = imgPreview;

});




//comprovacion


function Validate() {
    
   
    let isValid = true;
    const valueName = Name.value;
    if (valueName == "" || valueName == null || valueName == undefined) {
        Name.classList.add("input-error");
        isValid = false;
    } else {
        Name.classList.remove("input-error");
        Name.classList.add("input-correct");
    }
    //validad apellido

    const valuelastname = lastname.value;

    if (valuelastname == "" || valuelastname == null || valuelastname == undefined) {
        lastname.classList.add("input-error");
        isValid = false;
    } else {
        lastname.classList.remove("input-error");
        lastname.classList.add("input-correct");
    }
        //validad cedula

    const valueid = id.value;

    if (valueid == "" || valueid == null || valueid == undefined) {
        id.classList.add("input-error");
        isValid = false;
    } else {
        id.classList.remove("input-error");
        id.classList.add("input-correct");
    }

    //edad
    const valueold = old.value;

    if (valueold < 18 || valueold == null || valueold == undefined) {
        window.alert("la edad debe ser mayor a 18")
        old.classList.add("input-error");
        isValid = false;
    } else {
        old.classList.remove("input-error");
        old.classList.add("input-correct");
    }
    //phone
    const valuephone = phone.value;

    if (valuephone == "" || valuephone == null || valuephone == undefined) {
        phone.classList.add("input-error");
        isValid = false;
    } else {
        phone.classList.remove("input-error");
        phone.classList.add("input-correct");
    }

    const valueemail = email.value;

    if (valueemail == "" || valueemail == null || valueemail == undefined) {
        email.classList.add("input-error");
        isValid = false;
    } else {
        email.classList.remove("input-error");
        email.classList.add("input-correct");
    }
       //phone

    const valuegenero = genero.value;
  
    if (valuegenero == "Masculino" || valuegenero == "Femenino") {
        genero.classList.add("input-correct");
       
    } else {
        isValid = false;
        genero.classList.add("input-error");
    }
       //phone
    debugger
    const valueEstadocivil = Estadocivil.value;
    

    if (valueEstadocivil == "Soltero" || valueEstadocivil == "Casado") {
        Estadocivil.classList.add("input-correct");
       
    } else {
        isValid = false
        Estadocivil.classList.add("input-error");
    }
       //phone
    const valuehobby = hobbys.value;

    if (valuehobby == "" || valuehobby == null || valuehobby == undefined) {
        hobbys.classList.add("input-error");
        isValid = false;
    } else {
        hobbys.classList.remove("input-error");
        hobbys.classList.add("input-correct");
    }

    const valuefoto = foto.value;
   

    if (valuefoto == "" || valuefoto == null || valuefoto == undefined) {
        foto.classList.add("input-error");
        isValid = false;
    } else {
        foto.classList.remove("input-error");
        foto.classList.add("input-correct");
    }
    if (isValid == false || isValid == null || isValid == undefined) {
        window.alert("debe completar los datos")
    } else {
        formulario.submit()
    }
    
    return isValid;

};





function clear() {
    const inputs = formulario.getElementsByTagName("input");
    
 
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "Enviar") {
            continue
        }
        inputs[i].value = "";
    }
};

guardar.addEventListener('click', function (e) {
  
    e.preventDefault();
    Validate()
    
   
   
})




Limpiar.addEventListener('click', function (a) {

    a.preventDefault();
   
    clear();
})

