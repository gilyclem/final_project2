var Feature = require('./Feature.js');

Feature.inherits(Tavolino_rotondo, Feature);

function Tavolino_rotondo(feature) {
	Feature.call(this, feature);
}

Tavolino_rotondo.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Tavolino_rotondo.prototype.in_graph = true;

Tavolino_rotondo.prototype.in_2D_map = false;

Tavolino_rotondo.prototype.get3DModel = function() {
	var tavolino = new THREE.Object3D();

	var legno = new THREE.MeshPhongMaterial( {color: 0xffffff} );
	var texture = THREE.ImageUtils.loadTexture("assets/textures/legno.jpg");
	legno.map = texture;
	legno.side = THREE.DoubleSide;

	var tavolino_geo = new THREE.CylinderGeometry( 0.6, 0.6, 0.01 ,32);
	var piano1 = new THREE.Mesh( tavolino_geo, legno ) ;
	var piano2 = new THREE.Mesh( tavolino_geo, legno ) ;
	piano2.position.y+=0.2;
	var zampa_geo = new THREE.CylinderGeometry( 0.02, 0.01, 0.4 ,4);
	var zampa1 = new THREE.Mesh( zampa_geo, legno ) ;
	var zampa2 = new THREE.Mesh( zampa_geo, legno ) ;
	var zampa3 = new THREE.Mesh( zampa_geo, legno ) ;
	var zampa4 = new THREE.Mesh( zampa_geo, legno ) ;
	zampa1.position.x=0.6*Math.sin(Math.PI/4);	
	zampa1.position.z=0.6*Math.cos(Math.PI/4);
	zampa2.position.x=0.6*Math.sin(-Math.PI/4);	
	zampa2.position.z=0.6*Math.cos(-Math.PI/4);
	zampa3.position.x=0.6*Math.sin(3*Math.PI/4);	
	zampa3.position.z=0.6*Math.cos(3*Math.PI/4);
	zampa4.position.x=0.6*Math.sin(-3*Math.PI/4);	
	zampa4.position.z=0.6*Math.cos(-3*Math.PI/4);
	tavolino.add(piano1);
	tavolino.add(piano2);
	tavolino.add(zampa1);
	tavolino.add(zampa2);
	tavolino.add(zampa3);
	tavolino.add(zampa4);

	tavolino.rotation.x+=Math.PI/2;
	tavolino.position.z+=0.5;
	tavolino.scale.set(0.5,0.5,0.5);
	return tavolino;
};

module.exports = Tavolino_rotondo;