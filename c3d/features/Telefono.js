var Feature = require('./Feature.js');

Feature.inherits(Telefono, Feature);

function Telefono(feature) {
	Feature.call(this, feature);
}

Telefono.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Telefono.prototype.in_graph = true;

Telefono.prototype.in_2D_map = false;

Telefono.prototype.get3DModel = function() {
	var telefono = new THREE.Object3D();

	var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    mat_nero.map = texture;
	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/telefono.jpg");
    var mat = new THREE.MeshPhongMaterial( {color: 0x000000});
    mat.map = texture2;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.2,0.05), mat_nero);
	var superficie = new THREE.Mesh(new THREE.PlaneGeometry(0.2,0.2), mat);
	superficie.position.z+=0.03;

	telefono.add(superficie);
	telefono.add(spessore);
	telefono.rotation.x+=Math.PI/2;
	return telefono;
};

module.exports = Telefono;