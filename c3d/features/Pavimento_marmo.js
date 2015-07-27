var Feature = require('./Feature.js');

Feature.inherits(Pavimento_marmo, Feature);

function Pavimento_marmo(feature) {
	Feature.call(this, feature);
}

Pavimento_marmo.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Pavimento_marmo.prototype.in_graph = true;

Pavimento_marmo.prototype.in_2D_map = false;

Pavimento_marmo.prototype.get3DModel = function() {
	var pavimento = new THREE.Object3D();

	var lato1 = 9.5;
	var lato2 = 33.6;
	 
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/marmo.jpg");
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    var marmo = new THREE.MeshPhongMaterial();
    marmo.map = texture1;
	marmo.map.repeat.set(lato1, lato2);
    var piastrelle = new THREE.Mesh(new THREE.BoxGeometry(lato1, 0.05, lato2), marmo);
    piastrelle.rotation.x+=Math.PI/2;
    pavimento.add(piastrelle);
	return pavimento;
};

module.exports = Pavimento_marmo;