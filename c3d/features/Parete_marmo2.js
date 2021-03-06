var Feature = require('./Feature.js');

Feature.inherits(Parete_marmo2, Feature);

function Parete_marmo2(feature) {
	Feature.call(this, feature);
}

Parete_marmo2.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Parete_marmo2.prototype.in_graph = true;

Parete_marmo2.prototype.in_2D_map = false;

Parete_marmo2.prototype.get3DModel = function() {
	var parete = new THREE.Object3D();

	var lato1 = 2;
	var lato2 = 3.5;
	 
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/marmo_chiaro.jpg");
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    var marmo = new THREE.MeshPhongMaterial();
    marmo.map = texture1;
	marmo.map.repeat.set(lato1, lato2);
    var piastrelle = new THREE.Mesh(new THREE.BoxGeometry(lato1, 0.05, lato2), marmo);
    parete.add(piastrelle);
	return parete;
};

module.exports = Parete_marmo2;