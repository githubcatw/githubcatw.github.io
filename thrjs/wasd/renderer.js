var camera, scene, renderer;
var geometry, material, mesh;
var ballmesh, ballgeom;
var speed = 0.05;
var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    ballgeom = new THREE.SphereGeometry( 0.2, 32, 32 );
    material = new THREE.MeshNormalMaterial();

    mesh = new THREE.Mesh( geometry, material );
    ballmesh = new THREE.Mesh( ballgeom, material );
    scene.add( mesh );
    scene.add(ballmesh);
    ballmesh.position.y += 0.5;
	ballmesh.position.z -= 1;

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

}

function animate() {

    requestAnimationFrame( animate );
    mesh.rotation.x += 0;
    mesh.rotation.y += speed;
    ballmesh.rotation.z += speed;
	ballmesh.position.x += Math.sin(ballmesh.rotation.z - speed);
    ballmesh.position.y = ballmesh.position.x;
	// W
	if (keys[87]) {camera.position.z -= 0.05; }
	// A
	if (keys[65]) {camera.position.x -= 0.05; }
	// S
	if (keys[83]) {camera.position.z += 0.05; }
	// D
	if (keys[68]) {camera.position.x += 0.05; }

	renderer.render( scene, camera );
}