// Inicializar un arreglo para almacenar los registros  
let clientes = [];

// Función para insertar un nuevo cliente  
document.getElementById('insertButton').addEventListener('click', function () {
  const cedula = document.getElementById('cedula').value;
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const direccion = document.getElementById('direccion').value;
  const telefono = document.getElementById('telefono').value;
  const email = document.getElementById('email').value;
  const gender = document.getElementById('gender').value;

  // Crear un objeto cliente  
  const cliente = {
    cedula,
    nombre,
    apellido,
    direccion,
    telefono,
    email,
    gender  
  };

  // Agregar el cliente al arreglo  
  clientes.push(cliente);
  alert('Cliente insertado con éxito.');
  mostrarResultados();
  limpiarFormulario();
});

// Función para mostrar los resultados  
function mostrarResultados() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h3>Clientes Registrados:</h3>';
  
  clientes.forEach((cliente, index) => {
    resultDiv.innerHTML += `<p>${index + 1}. Cédula: ${cliente.cedula}, Nombre: ${cliente.nombre} ${cliente.apellido}</p>`;
  });
}

// Función para limpiar el formulario  
function limpiarFormulario() {
  document.getElementById('clientForm').reset();
}

// Función para modificar un cliente  
document.getElementById('modifyButton').addEventListener('click', function () {
  const cedula = prompt("Ingrese la cédula del cliente a modificar:");
  const cliente = clientes.find(c => c.cedula === cedula);

  if (cliente) {
    cliente.nombre = prompt("Ingrese el nuevo nombre:", cliente.nombre) || cliente.nombre;
    cliente.apellido = prompt("Ingrese el nuevo apellido:", cliente.apellido) || cliente.apellido;
    cliente.direccion = prompt("Ingrese la nueva dirección:", cliente.direccion) || cliente.direccion;
    cliente.telefono = prompt("Ingrese el nuevo teléfono:", cliente.telefono) || cliente.telefono;
    cliente.email = prompt("Ingrese el nuevo email:", cliente.email) || cliente.email;
    cliente.gender = prompt("Ingrese el nuevo género (masculino/femenino/otro):", cliente.gender) || cliente.gender;

    alert('Cliente modificado con éxito.');
    mostrarResultados();
  } else {
    alert('Cliente no encontrado.');
  }
});

// Función para eliminar un cliente  
document.getElementById('deleteButton').addEventListener('click', function () {
  const cedula = prompt("Ingrese la cédula del cliente a eliminar:");
  const index = clientes.findIndex(c => c.cedula === cedula);

  if (index !== -1) {
    clientes.splice(index, 1);
    alert('Cliente eliminado con éxito.');
    mostrarResultados();
  } else {
    alert('Cliente no encontrado.');
  }
});

// Función para consultar un cliente  
document.getElementById('consultButton').addEventListener('click', function () {
  const cedula = prompt("Ingrese la cédula del cliente a consultar:");
  const cliente = clientes.find(c => c.cedula === cedula);

  if (cliente) {
    alert(`Cliente encontrado: \nCédula: ${cliente.cedula} \nNombre: ${cliente.nombre} ${cliente.apellido} \nDirección: ${cliente.direccion} \nTeléfono: ${cliente.telefono} \nEmail: ${cliente.email} \nGénero: ${cliente.gender}`);
  } else {
    alert('Cliente no encontrado.');
  }
});

// Función para salir (limpiar la memoria)
document.getElementById('exitButton').addEventListener('click', function () {
  clientes = [];
  alert('Se han eliminado todos los registros.');
  mostrarResultados();
});
