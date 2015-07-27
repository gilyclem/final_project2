var Feature = require('./Feature.js');

Feature.inherits(Comodino, Feature);

function Comodino(feature) {
	Feature.call(this, feature);
}

Comodino.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Comodino.prototype.in_graph = true;

Comodino.prototype.in_2D_map = false;

Comodino.prototype.get3DModel = function() {

	var actdrop = new THREE.Object3D();
	//Materiali
	var mat_grigio = new THREE.MeshPhongMaterial( {color: 0xdcdcdc} );
	var fronte_mat = new THREE.MeshPhongMaterial( {color: 0xdcdcdc} );
	var rivista_mat = new THREE.MeshPhongMaterial( {color: 0xffffff} );
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/cassetto.jpg");
	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/magazine.jpg");
	fronte_mat.map = texture1;
	rivista_mat.map = texture2;

	//Forme
	var actdrop_geo = new THREE.BoxGeometry( 0.3, 0.3 , 0.5 );
	var frontale_geo = new THREE.PlaneGeometry( 0.3, 0.5 );
	var mobiletto = new THREE.Mesh( actdrop_geo, mat_grigio);
	var rivista_geo = new THREE.PlaneGeometry( 0.1, 0.17 );
	var rivista = new THREE.Mesh(rivista_geo, rivista_mat);
	var frontale = new THREE.Mesh(frontale_geo, fronte_mat);
	frontale.material.side = THREE.DoubleSide;
	frontale.rotation.x+=Math.PI/2;
	frontale.position.y-=0.155;
	rivista.position.z+=0.255;
	rivista.rotation.z+=Math.PI/6;
	actdrop.add(frontale);
	actdrop.add(mobiletto);
	actdrop.add(rivista);
	
	//actdrop.position.z+=0.25;
	return actdrop;

};

module.exports = Comodino;