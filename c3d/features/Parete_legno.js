var Feature = require('./Feature.js');

Feature.inherits(Parete_legno, Feature);

function Parete_legno(feature) {
	Feature.call(this, feature);
}

Parete_legno.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Parete_legno.prototype.in_graph = true;

Parete_legno.prototype.in_2D_map = false;

Parete_legno.prototype.get3DModel = function() {
	var parete = new THREE.Object3D();

	var lato1 = 4.3;
	var lato2 = 3.5;
	 
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/base_legno3.jpg");
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    var legno = new THREE.MeshPhongMaterial();
    legno.map = texture1;
	legno.map.repeat.set(lato1, 1);
    var lastre = new THREE.Mesh(new THREE.BoxGeometry(lato1, 0.05, lato2), legno);
    parete.add(lastre);
	return parete;
};

module.exports = Parete_legno;