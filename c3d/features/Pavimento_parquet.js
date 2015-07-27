var Feature = require('./Feature.js');

Feature.inherits(Pavimento_parquet, Feature);

function Pavimento_parquet(feature) {
	Feature.call(this, feature);
}

Pavimento_parquet.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Pavimento_parquet.prototype.in_graph = true;

Pavimento_parquet.prototype.in_2D_map = false;

Pavimento_parquet.prototype.get3DModel = function() {
	var pavimento = new THREE.Object3D();

	var lato1 = 7.5;
	var lato2 = 33.6;
	
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/parquet.jpg");
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    var parquet = new THREE.MeshPhongMaterial();
    parquet.map = texture1;
	parquet.map.repeat.set(lato1, lato2);
    var piastrelle = new THREE.Mesh(new THREE.BoxGeometry(lato1, 0.05, lato2), parquet);
    piastrelle.rotation.x+=Math.PI/2;
    pavimento.add(piastrelle);
	return pavimento;
};

module.exports = Pavimento_parquet;