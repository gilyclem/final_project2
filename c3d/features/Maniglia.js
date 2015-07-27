var Feature = require('./Feature.js');

Feature.inherits(Maniglia, Feature);

function Maniglia(feature) {
	Feature.call(this, feature);
}

Maniglia.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Maniglia.prototype.in_graph = true;

Maniglia.prototype.in_2D_map = false;

Maniglia.prototype.get3DModel = function() {
	var maniglia = new THREE.Object3D();

	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );
	
	var appendino_geo = new THREE.CylinderGeometry( 0.02, 0.02,0.7 ,32);
	var braccio_geo = new THREE.CylinderGeometry( 0.015, 0.015, 0.15 ,32);

	var appendino = new THREE.Mesh( appendino_geo, metal ) ;
	var braccio1 = new THREE.Mesh( braccio_geo, metal ) ;
	var braccio2 = new THREE.Mesh( braccio_geo, metal ) ;
	
	appendino.rotation.z-=Math.PI/2;
	appendino.position.y-=0.2;
	appendino.position.z+=0.45;
	braccio1.position.z+=0.45;
	braccio1.position.x+=0.25;
	braccio1.position.y-=0.1;
	braccio2.position.z+=0.45;
	braccio2.position.x-=0.25;
	braccio2.position.y-=0.1;
	
	maniglia.add(braccio1);
	maniglia.add(braccio2);
	maniglia.add(appendino);
	maniglia.rotation.z+=Math.PI/2;
    maniglia.position.z+=1;
    maniglia.scale.set(0.4,0.4,0.4);
	return maniglia;
};

module.exports = Maniglia;