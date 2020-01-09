var scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
var controls = new THREE.OrbitControls(camera);
camera.position.z = 250;
controls.update()

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.ConeGeometry(50, 160, 30);
var material = new THREE.MeshBasicMaterial({color: 0xFF8C00, transparent:true, opacity:0.4});
var cone1 = new THREE.Mesh(geometry, material);
cone1.rotation.x = Math.PI;
scene.add(cone1);

var geometry2 = new THREE.ConeGeometry(50, 160, 30);
var material2 = new THREE.MeshBasicMaterial({color: 0xFF8C00, transparent:true, opacity:0.4});
var cone2 = new THREE.Mesh(geometry2, material2);
cone2.position.y -= 160;
scene.add(cone2);

var geometry3 = new THREE.PlaneGeometry(80, 80);
var material3 = new THREE.MeshBasicMaterial({color: 0xFF0000});
var circle = new THREE.Mesh(geometry3, material3);
circle.position.y += 40;
circle.rotation.x = Math.PI / 2;
scene.add(circle);

var geometry4 = new THREE.PlaneGeometry(80, 80);
var material4 = new THREE.MeshBasicMaterial({color: 0xFF0000});
var circle2 = new THREE.Mesh(geometry4, material4);
circle2.position.y += 40;
circle2.rotation.x = Math.PI / 2;
circle2.rotation.y = Math.PI;
scene.add(circle2);

var geometry5 = new THREE.PlaneGeometry(80, 80);
var material5 = new THREE.MeshBasicMaterial({color: 0x00FF00});
var elipse = new THREE.Mesh(geometry5, material5);
elipse.position.y -= 140;
elipse.rotation.x = 2 * Math.PI / 3;
elipse.rotation.z = Math.PI / 4;
scene.add(elipse);

var geometry6 = new THREE.PlaneGeometry(80, 80);
var material6 = new THREE.MeshBasicMaterial({color: 0x00FF00});
var elipse2 = new THREE.Mesh(geometry6, material6);
elipse2.position.y -= 140;
elipse2.rotation.x = 2 * Math.PI / 3;
elipse2.rotation.y = Math.PI;
scene.add(elipse2);

var geometry7 = new THREE.PlaneGeometry(140, 140);
var material7 = new THREE.MeshBasicMaterial({color: 0x0000FF});
var parabola = new THREE.Mesh(geometry7, material7);
parabola.position.y += 20;
parabola.rotation.x = Math.PI / 16;

scene.add(parabola);

var geometry8 = new THREE.PlaneGeometry(140, 140);
var material8 = new THREE.MeshBasicMaterial({color: 0x0000FF});
var parabola2 = new THREE.Mesh(geometry8, material8);
parabola2.position.y += 20;
parabola2.rotation.x = Math.PI / 16;
parabola2.rotation.y = Math.PI;
scene.add(parabola2);

var geometry9 = new THREE.PlaneGeometry(350, 350);
var material9 = new THREE.MeshBasicMaterial({color: 0x804FB3, transparent:true, opacity:0.85});
var hyperbola = new THREE.Mesh(geometry9, material9);
hyperbola.position.y -= 80;
hyperbola.rotation.x = Math.PI / 32;
scene.add(hyperbola);

var geometry10 = new THREE.PlaneGeometry(350, 350);
var material10 = new THREE.MeshBasicMaterial({color: 0x804FB3, transparent:true, opacity:0.85});
var hyperbola2 = new THREE.Mesh(geometry10, material10);
hyperbola2.position.y -= 80;
hyperbola2.rotation.x = Math.PI / 32;
hyperbola2.rotation.y = Math.PI;
scene.add(hyperbola2);

var animate = function () {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
};

animate();
