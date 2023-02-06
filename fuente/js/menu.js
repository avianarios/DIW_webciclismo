const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

/* Toggle mobile menu */
/*Se controla el despliegue del menú añadiéndole una clase "active". Cuando existe, el menú se despliega. Cuando no, se repliega
Esta función hace que si la lista ul que forma el menú no tiene la clase "active" la añade y si la tiene, la quita. También cambia el icono según esté deplegada o no*/
function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
/*    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";*/
    toggle.querySelector("a").innerHTML = "<i class='ri-menu-line'></i>";
  } else {
    menu.classList.add("active");
/*    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";*/
    toggle.querySelector("a").innerHTML = "<i class='ri-close-line'></i>";
  }
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
