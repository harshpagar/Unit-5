import "./index.css";
import image from "./free-jpg-242.jpeg";

let root = document.getElementById("root");

let navbar=document.createElement("div");
navbar.id="navbar"

let logo =document.createElement("img");
logo.src=image;



navbar.append(logo);

root.append(navbar);