var Feature = require('./Feature.js');

Feature.inherits(Pavimento_marmo_chiaro, Feature);

function Pavimento_marmo_chiaro(feature) {
	Feature.call(this, feature);
}

Pavimento_marmo_chiaro.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Pavimento_marmo_chiaro.prototype.in_graph = true;

Pavimento_marmo_chiaro.prototype.in_2D_map = false;

Pavimento_marmo_chiaro.prototype.get3DModel = function() {
	var pavimento = new THREE.Object3D();

	var lato1 = 3;
	var lato2 = 2.1;
	 
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/marmo_chiaro.jpg");
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    var marmo = new THREE.MeshPhongMaterial({color:0xffffff});
    marmo.map = texture1;
	marmo.map.repeat.set(lato1, lato2);
	marmo.transparent=false;
    var piastrelle = new THREE.Mesh(new THREE.BoxGeometry(lato1, 0.05, lato2), marmo);
    piastrelle.rotation.x = Math.PI/2;
    pavimento.add(piastrelle);

	return pavimento;
};

module.exports = Pavimento_marmo_chiaro;