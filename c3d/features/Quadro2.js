var Feature = require('./Feature.js');

Feature.inherits(Quadro2, Feature);

function Quadro2(feature) {
	Feature.call(this, feature);
}

Quadro2.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Quadro2.prototype.in_graph = true;

Quadro2.prototype.in_2D_map = false;

Quadro2.prototype.get3DModel = function() {
	var quadro = new THREE.Object3D();

	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/thurner.jpg");
    var mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    mat.map = texture;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(2,1.5,0.02), mat_bianco);
	var superficie = new THREE.Mesh(new THREE.PlaneGeometry(2,1.5), mat);
	superficie.position.z+=0.0205;

	quadro.add(superficie);
	quadro.add(spessore);
	quadro.rotation.x+=Math.PI/2;
	quadro.position.z+=1;
	//quadro.scale.set(0.6,0.6,0.6);
	return quadro;
};

module.exports = Quadro2;