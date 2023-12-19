// Funciones globales

const existeElementoId = (array, idReferencia) => {
    let existe = array.some( elemento => elemento.id === idReferencia );
    return existe;
  }
  
  // Sección de usuarios
  // STOCK DE Inventario
  let inventario =[
    { producto: "Esmalte semipermanente", precio: 1000, stock: 1100 },
    { producto: "TOP Coat", precio: 1200, stock: 300 },
    { producto: "Base", precio: 1200, stock: 300 },
    { producto: "Polygel", precio: 3000, stock: 120 },
    { producto: "Limas", precio: 250, stock: 2000 },
    { producto: "Cabinas", precio: 15000, stock: 50 },
    { producto: "Adornos", precio: 3500, stock: 3000 },
  ];
  // STOCK DE Inventario

  
  let userId = 1;
  let usuarios = [];
  let carritoDeCompras = [];
  
  class Usuario {
    constructor(nombreCompleto) {
      this.nombreCompleto = nombreCompleto;
      this.id = userId;
    }
  }
  
  const agregarAlCarrito = (producto) => {
    carritoDeCompras.push(producto);
};
  const agregarUsuario = (usuario) => {
      usuarios.push(usuario);
      userId++
  };
  
  const eliminarUsuario = ( id ) => {
  
    if(existeElementoId(usuarios, id)) {
      usuarios = usuarios.filter(usuario => usuario.id !== id);
    } else {
      alert("No existe ningún usuario con ese ID");
    }
  };
  
  const mostrarUsuarios = () => {
      let nombresUsuarios = usuarios.map( usuario => `ID: ${usuario.id} | Nombre: ${usuario.nombreCompleto}` );
      // verificar si hay elementos en el array 
      if(nombresUsuarios.length > 0) {
        alert(nombresUsuarios.join("\n"));
      } else {
        alert("No hay usuarios registrados");
      }
  };
  
  // Sección de mascotas
  
  // Sección de Menus
  
  const menuUsuarios = () => {
    let estado = true;
  
    while (estado) {
      let opcion = parseInt(
        prompt(
          `
          Bienvenido a Menú de usuarios
          1 - Mostrar usuarios
          2 - Agregar un usuario
          3 - Eliminar un usuario
          4 - Volver
          `
        )
      );
  
      switch (opcion) {
        case 1:
          mostrarUsuarios();
          break;
        case 2:
          let nombreCompleto = prompt("Ingrese su nombre completo");

          let usuario = new Usuario(nombreCompleto);
          agregarUsuario(usuario);
          break;
        case 3:
          let idUsuario = parseInt(prompt("Ingrese el ID del usuario a eliminar"));
          eliminarUsuario(idUsuario);
          break;
        case 4:
          estado = false;
          menuPrincipal();
          break;
  
        default:
          alert("Ingrese una opción válida");
          break;
      }
    }
  };
  const mostrarCarrito = () => {
    alert(carritoDeCompras);
}
  const menuInventario = () => {
    let estado = true;
   
    while (estado) {
       let opcion = parseInt(
         prompt(
           `
           Bienvenido a Menú de inventario
           1 - Mostrar productos
           2 - Elegir producto
           3 - Carrito de compras
           4 - cm
           `
         )
       );
   
       switch (opcion) {
         case 1:
           mostrarInventario();
           break;
         case 2:
           let idProducto = parseInt(prompt(`Ingrese el ID del producto a agregar \n `))  ;
           
           // Agregar lógica para agregar el producto al carrito de compras
           break;
         case 3:
           mostrarCarrito();
           break;
        case 4: 
        estado = false;
           menuPrincipal();
         default:
           alert("Ingrese una opción válida");
           break;
       }
    }
   };
  
   const mostrarInventario = () => {
    let productosInventario = inventario.map(
       (producto, index) => `ID: ${index + 1} | Producto: ${producto.producto} | Precio: ${producto.precio} | Stock: ${producto.stock}`
    );
   
    if (productosInventario.length > 0) {
       alert(productosInventario.join("\n"));
    } else {
       alert("No hay productos en el inventario");
    }
   };
   1
  let estado = true;
  const menuPrincipal = () => {
   while (estado) {
      let opcion = parseInt(
        prompt(
          `
          Bienvenid@ a nuestra tienda de Valentime Nails
          1 - Registrese
          2 - Carrito de compras
          3 - Salir
          `
        )
      );
      switch (opcion) {
        case 1:
          menuUsuarios();
          break;
        case 2:
          let productoSeleccionado = menuInventario();
          break;
        case 3:
          estado = false;
          break;
        default:
          alert("Ingrese una opción válida");
          break;
      }
   }
  };
  
  menuPrincipal();
  