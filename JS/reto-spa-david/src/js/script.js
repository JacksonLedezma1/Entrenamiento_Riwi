const routes = {
  "/": "src/html/login.html",
  "/users": "src/html/users.html",
  "/newuser": "src/html/newuser.html",
  "/about": "src/html/about.html",
};

document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.getAttribute("href"));
  }
});

export async function navigate(pathname) {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  // 🚫 Ya logueado y quiere volver a login → redirigir a users
  if (pathname === "/" && user) {
    return navigate("/users");
  }

  // 🔒 No logueado y quiere entrar a cualquier ruta que no sea login
  if (!user && pathname !== "/") {
    Swal.fire("Ups", "Primero iniciá sesión", "warning");
    return navigate("/");
  }

  // 🔒 Protección para rol de admin
  if (pathname === "/newuser" && user?.role !== "admin") {
    Swal.fire("Acceso denegado", "No tienes permisos para entrar aquí", "error");
    return navigate("/users");
  }

  const route = routes[pathname];
  if (!route) return navigate("/");

  try {
    const html = await fetch(route).then((res) => res.text());

    if (pathname === "/") {
      // Ocultar app y mostrar login
      document.getElementById("app").style.display = "none";
      document.getElementById("login-content").innerHTML = html;

      const { setupLogin } = await import("./login.js");
      setupLogin();
    } else {
      // Mostrar contenido de la app
      document.getElementById("login-content").innerHTML = "";
      document.getElementById("app").style.display = "flex";
      document.getElementById("content").innerHTML = html;

      if (pathname === "/users") {
        const { setupUsers } = await import("./users.js");
        setupUsers();
      }

      if (pathname === "/newuser") {
        const { setupNewUser } = await import("./newuser.js");
        setupNewUser();
      }

      if (pathname === "/about") {
        const { setupAbout } = await import("./about.js");
        setupAbout?.();
      }
    }

    history.pushState({}, "", pathname);
  } catch (err) {
    console.error("Error navegando:", err);
    Swal.fire("Ups", "Algo salió mal al cargar la ruta", "error");
    if (pathname !== "/") navigate("/");
  }
}
// 🔘 Logout
document.addEventListener("click", (e) => {
  if (e.target.id === "logout-btn") {
    Swal.fire({
      title: "¿Cerrar sesión?",
      text: "Tu sesión actual se cerrará",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, cerrar",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("loggedUser");
        navigate("/");
      }
    });
  }
});


// Volver a ruta previa con validación
window.addEventListener("popstate", () => navigate(location.pathname));

// 🔐 Primera validación al cargar la app
navigate(location.pathname);
