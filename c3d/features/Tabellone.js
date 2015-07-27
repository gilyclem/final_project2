var Feature = require('./Feature.js');

Feature.inherits(Tabellone, Feature);

function Tabellone(feature) {
	Feature.call(this, feature);
}

Tabellone.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Tabellone.prototype.in_graph = true;

Tabellone.prototype.in_2D_map = false;

Tabellone.prototype.get3DModel = function() {
	var tabellone = new THREE.Object3D();

	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/piani.jpg");
    var mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    mat.map = texture;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,2,0.02), mat_bianco);
	var superficie = new THREE.Mesh(new THREE.PlaneGeometry(1.5,2), mat);
	superficie.position.z+=0.0205;

	tabellone.add(superficie);
	tabellone.add(spessore);
	tabellone.rotation.x+=Math.PI/2;
	tabellone.position.z+=1;
	tabellone.position.y-=3.8;
	return tabellone;
};

module.exports = Tabellone;