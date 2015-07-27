var Feature = require('./Feature.js');

Feature.inherits(Window, Feature);

function Window(feature) {
	Feature.call(this, feature);
}

Window.prototype.style =  {
							color: "#0000FF",
							zIndex: 7
    					};

Window.prototype.get3DModel = function() {
	var finestra = new THREE.Object3D();

	//var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	//var texture = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    //mat_nero.map = texture;

	var legno = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/base_legno2.jpg");
    legno.map = texture;
	
	//var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,1,0.02), mat_nero);
	var lato1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,1.57,0.35), legno);
	var lato2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,1.57,0.35), legno);
	var sovrapporta = new THREE.Mesh(new THREE.BoxGeometry(0.1,1.9,0.35), legno);
	var sottoporta = new THREE.Mesh(new THREE.BoxGeometry(0.1,1.9,0.35), legno);
	sovrapporta.rotation.z+=Math.PI/2;
	sottoporta.rotation.z+=Math.PI/2;
	lato1.position.x+=1;
	lato2.position.x-=1;
	lato1.position.y+=0.01;
	lato2.position.y+=0.01;
	sovrapporta.position.y+=0.75;
	sottoporta.position.y-=0.73;
	finestra.add(lato1);
	finestra.add(lato2);
	finestra.add(sovrapporta);
	finestra.add(sottoporta);

	var vetro = new THREE.MeshPhongMaterial( {color: 0x1c1c1c});
	vetro.transparent=true;
	vetro.opacity=0.4;
	vetro.side = THREE.DoubleSide;

	//var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,1,0.02), mat_nero);
	var superficie = new THREE.Mesh(new THREE.PlaneGeometry(2,2), vetro);
	superficie.position.z+=0.0205;

	finestra.add(superficie);
	//monitor.add(spessore);
	finestra.rotation.x+=Math.PI/2;
	finestra.position.z+=0.7;
	finestra.position.x+=1;
	//monitor.position.x+=1;
	//monitor.scale.set(0.6,0.6,0.6);
	return finestra;
};

Window.prototype.in_graph = false;
Window.prototype.in_2D_map = true;

module.exports = Window;