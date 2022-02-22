///para agregar user
function capturarUser() {
  function regUser(nombreUser, apellidoUser) {
    this.nombreUser = nombreUser;
    this.apellidoUser = apellidoUser;
  }

  capturarUserNom = document.getElementById("Inputtext1").value;
  capturaUserApell = document.getElementById("Inputtext2").value;
  localStorage.setItem("NombreUser", capturarUserNom);
  localStorage.setItem("ApellidoUser", capturaUserApell);

  nuevoRegistroUser = new regUser(capturarUserNom, capturaUserApell);
  console.log(nuevoRegistroUser);

  if (capturarUserNom === "" || capturaUserApell === "") {
    alert("Ingrese los campos requeridos");
  }

  agregarUser();
}

///evento al boton de acceder
btnguardar = document.getElementById("btnguardar");

btnguardar.addEventListener("click", capturarUser);

/**/

let registrosUser = [];
function agregarUser() {
  nombreUsuario = localStorage.getItem("NombreUser");
  apellidoUsuario = localStorage.getItem("ApellidoUser");
  registrosUser.push(nuevoRegistroUser);
  document.getElementById("user").innerHTML =
    "<h5><span class='badge badge-secondary'>Bienvenido</span></h5>" +
    nombreUsuario +
    " " +
    apellidoUsuario;
}

/** */
function capturar() {
  function RegAlumno(nombre, apellido, curso, nota1, nota2, nota3, nota4) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.curso = curso;
    this.nota1 = nota1;
    this.nota2 = nota2;
    this.nota3 = nota3;
    this.nota4 = nota4;
  }

  capturaNombre = document.getElementById("nombre").value;
  capturaApellido = document.getElementById("apellido").value;
  capturaCurso = document.getElementById("curso").value;
  capturaNota1 = parseInt(document.getElementById("nota1").value);
  capturaNota2 = parseInt(document.getElementById("nota2").value);
  capturaNota3 = parseInt(document.getElementById("nota3").value);
  capturaNota4 = parseInt(document.getElementById("nota4").value);
  localStorage.setItem("NombreAlumno", capturaNombre);
  localStorage.setItem("ApellidoUser", capturaApellido);
  localStorage.setItem("RegCurso", capturaCurso);
  localStorage.setItem("RegNota1", capturaNota1);
  localStorage.setItem("RegNota2", capturaNota2);
  localStorage.setItem("RegNota3", capturaNota3);
  localStorage.setItem("RegNota4", capturaNota4);

  sumaNotas = capturaNota4 + capturaNota1 + capturaNota2 + capturaNota3;
  promedio = sumaNotas / 4;
  console.log(promedio);
  /**estado de aprobacion o desaprobado del alumno */
  function estadAlumno() {
    estado1 = "Aprobado";
    estado2 = "Reprobado";

    if (promedio >= 11) {
      return estado1;
      console.log();
    } else {
      return estado2;
    }
  }
  EstadoAlumno = estadAlumno();
  console.log(EstadoAlumno);
  /*** */

  nuevoRegistro = new RegAlumno(
    capturaNombre,
    capturaApellido,
    capturaCurso,
    capturaNota1,
    capturaNota2,
    capturaNota3,
    capturaNota4
  );
  console.log(nuevoRegistro);

  if (
    capturaNombre === "" ||
    capturaApellido === "" ||
    capturaCurso === "" ||
    capturaNota1 === "" ||
    capturaNota2 === "" ||
    capturaNota3 === "" ||
    capturaNota4 === ""
  ) {
    alert("Falta ingresar datos, Revisa por favor!");
  }

  agregar();
}

/*evento lick para capturar registros de alumnos*/
let boton = document.getElementById("boton");
boton.addEventListener("click", capturar);
/*** */

let bdAlumnos = [];
let jsondbAlumnos = ("data", JSON.stringify(bdAlumnos));
let old_data = JSON.parse(localStorage.getItem("data"));
localStorage.setItem("data", JSON.stringify(old_data));

function agregar() {
  nombreUsuario = localStorage.getItem("NombreUser");
  apellidoUsuario = localStorage.getItem("ApellidoUser");

  nombreAlumno = localStorage.getItem("NombreAlumno");
  apellidoAlumno = localStorage.getItem("ApellidoUser");
  cursoAlumno = localStorage.getItem("RegCurso");
  nota1Alumno = localStorage.getItem("RegNota1");
  nota2Alumno = localStorage.getItem("RegNota2");
  nota3Alumno = localStorage.getItem("RegNota3");
  nota4Alumno = localStorage.getItem("RegNota4");

  bdAlumnos.push(nuevoRegistro);
  console.log(bdAlumnos);
  document.getElementById("tabla").innerHTML +=
    "<tbody><tr><td>" +
    nuevoRegistro.nombre +
    "</td><td>" +
    nuevoRegistro.apellido +
    "</td><td>" +
    nuevoRegistro.curso +
    "</td><td>" +
    nuevoRegistro.nota1 +
    "</td><td>" +
    nuevoRegistro.nota2 +
    "</td><td>" +
    nuevoRegistro.nota3 +
    "</td><td>" +
    nuevoRegistro.nota4 +
    "</td><td>" +
    promedio +
    "</td><td>" +
    EstadoAlumno +
    "</td><td><button id='btnEliminar'  class='borrar btn btn-light'  type='reset' >Eliminar</button></td></tr></tbody>";
}

/*jquery */
//para borrar
$(function () {
  $(document).on("click", ".borrar", function (event) {
    event.preventDefault();
    $(this).closest("tr").remove();
  });

  //para cambiar fondo a modo oscuro del html

  $(".checkbox").click(function () {
    if ($("input.checkbox").is(":checked")) {
      $(".theme").attr("href", "dark.css");
    } else {
      $(".theme").attr("href", "ligth.css");
    }
  });
  //mostrar y ocultar lista
  $("#botonContraer").click(function () {
    $("td").hide(400);
  });

  $("#botonMostrar").click(function () {
    $("td").show(400);
  });

  $(function () {
    var $element = $("#mensaje1");
    setInterval(function () {
      $element.fadeIn(1000, function () {
        $element.fadeOut(1200, function () {
          $element.fadeIn(1200);
        });
      });
    }, 5000);
  });
  //para exportar a excel
  $("#btnExport").click(function () {
    $("#tabla").table2excel({
      // exclude CSS class

      exclude: ".noExl",

      name: "Worksheet Name",

      filename: "registro de Notas",

      fileext: ".xls", // extension del archivo
    });
  });
});
