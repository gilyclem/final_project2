var Feature = require('./Feature.js');

Feature.inherits(Tavolo_bianco, Feature);

function Tavolo_bianco(feature) {
	Feature.call(this, feature);
}

Tavolo_bianco.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Tavolo_bianco.prototype.in_graph = true;

Tavolo_bianco.prototype.in_2D_map = false;

Tavolo_bianco.prototype.get3DModel = function() {
	var tavolo = new THREE.Object3D();

	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff});
	var spessore = new THREE.Mesh(new THREE.BoxGeometry(4,0.5,0.1), mat_bianco);
	tavolo.add(spessore);
	tavolo.position.z+=0.7;
	return tavolo;
};

module.exports = Tavolo_bianco;