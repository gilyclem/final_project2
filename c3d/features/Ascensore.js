var Feature = require('./Feature.js');

Feature.inherits(Ascensore, Feature);

function Ascensore(feature) {
	Feature.call(this, feature);
}

Ascensore.prototype.style =  {
							prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
    					};

Ascensore.prototype.in_graph = true;

Ascensore.prototype.in_2D_map = false;

Ascensore.prototype.get3DModel = function() {
	var ascensore = new THREE.Object3D();

	var legno = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/base_legno2.jpg");
    legno.map = texture;
	
	var anta1 = new THREE.Mesh(new THREE.BoxGeometry(1,2.1,0.05), legno);
	var anta2 = new THREE.Mesh(new THREE.BoxGeometry(1,2.1,0.05), legno);
	var lato1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2.1,0.35), legno);
	var lato2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2.1,0.35), legno);
	var sovrapporta = new THREE.Mesh(new THREE.BoxGeometry(0.1,1.9,0.35), legno);
	sovrapporta.rotation.z+=Math.PI/2;
	lato1.position.x+=1;
	anta1.position.x-=0.505;
	anta2.position.x+=0.505;
	lato2.position.x-=1;
	sovrapporta.position.y+=1;
	ascensore.add(anta1);
	ascensore.add(anta2);
	ascensore.add(lato1);
	ascensore.add(lato2);
	ascensore.add(sovrapporta);
	ascensore.rotation.x+=Math.PI/2;
	ascensore.position.z+=1;
	ascensore.position.y-=3.95;
	ascensore.scale.set(1,1.2,1);

	var mat_oro = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/button.jpg");
    mat_oro.map = texture;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.4,0.02), mat_oro);
	spessore.position.x-=1.5;
	ascensore.add(spessore);
	
	return ascensore;
};

module.exports = Ascensore;