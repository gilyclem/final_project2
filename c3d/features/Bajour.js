var Feature = require('./Feature.js');

Feature.inherits(Bajour, Feature);

function Bajour(feature) {
	Feature.call(this, feature);
}

Bajour.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Bajour.prototype.in_graph = true;

Bajour.prototype.in_2D_map = false;

Bajour.prototype.get3DModel = function() {
	var lampada = new THREE.Object3D();

	var texture = THREE.ImageUtils.loadTexture("assets/textures/crema.jpg");
    var stoffa = new THREE.MeshPhongMaterial( {color: 0xffffff});
    stoffa.map = texture;
	stoffa.side = THREE.DoubleSide;

	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );
    
	var base_geo = new THREE.CylinderGeometry( 0.2, 0.2, 0.01 ,32);
	var piano = new THREE.Mesh( base_geo, metal ) ;
	
	var zampa_geo = new THREE.CylinderGeometry( 0.01, 0.02, 1,4);
	var zampa = new THREE.Mesh( zampa_geo, metal ) ;
	zampa.position.y+=0.5;

	var semisfera = new THREE.SphereGeometry(0.3, 4, 4, 0, Math.PI, 0, Math.PI);
	var copriluce = new THREE.Mesh( semisfera, stoffa ) ;
	copriluce.rotation.x-=Math.PI/2;
	copriluce.position.y+=1;
	
	lampada.add(zampa);
	lampada.add(piano);
	lampada.add(copriluce);
	lampada.rotation.x+=Math.PI/2;
	lampada.position.z+=0.5;
	lampada.scale.set(0.3,0.3,0.3);
	return lampada;
};

module.exports = Bajour;