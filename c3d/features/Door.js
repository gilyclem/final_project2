var Feature = require('./Feature.js');

Feature.inherits(Door, Feature);

function Door(feature) {
	Feature.call(this, feature);
}

Door.prototype.get3DModel = function() {
	var porta = new THREE.Object3D();

	var legno = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/base_legno2.jpg");
    legno.map = texture;
	
	//var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,1,0.02), mat_nero);
	var anta = new THREE.Mesh(new THREE.BoxGeometry(0.5,2.1,0.05), legno);
	var lato1 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0.35), legno);
	var lato2 = new THREE.Mesh(new THREE.BoxGeometry(0.1,2,0.35), legno);
	var sovrapporta = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.9,0.35), legno);
	sovrapporta.rotation.z+=Math.PI/2;
	lato1.position.x+=0.5;
	anta.position.x-=0.5;
	lato2.position.x-=0.5;
	sovrapporta.position.y+=0.95;
	porta.add(anta);
	porta.add(lato1);
	porta.add(lato2);
	porta.add(sovrapporta);
	porta.rotation.x+=Math.PI/2;
	porta.position.z+=1;
	porta.position.x+=0.5;


	var maniglia = new THREE.Object3D();
	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );
	
	var appendino_geo = new THREE.CylinderGeometry( 0.02, 0.02,0.7 ,32);
	var braccio_geo = new THREE.CylinderGeometry( 0.015, 0.015, 0.15 ,32);

	var appendino = new THREE.Mesh( appendino_geo, metal ) ;
	var braccio1 = new THREE.Mesh( braccio_geo, metal ) ;
	var braccio2 = new THREE.Mesh( braccio_geo, metal ) ;
	var appendino2 = new THREE.Mesh( appendino_geo, metal ) ;
	var braccio3 = new THREE.Mesh( braccio_geo, metal ) ;
	var braccio4 = new THREE.Mesh( braccio_geo, metal ) ;
	
	appendino.rotation.z-=Math.PI/2;
	appendino.position.y-=0.2;
	appendino.position.z+=0.45;


	appendino2.rotation.z-=Math.PI/2;
	appendino2.position.y+=0.2;
	appendino2.position.z+=0.45;

	braccio1.position.z+=0.45;
	braccio1.position.x+=0.25;
	braccio1.position.y-=0.1;
	braccio2.position.z+=0.45;
	braccio2.position.x-=0.25;
	braccio2.position.y-=0.1;

	braccio3.position.z+=0.45;
	braccio3.position.x+=0.25;
	braccio3.position.y+=0.1;
	braccio4.position.z+=0.45;
	braccio4.position.x-=0.25;
	braccio4.position.y+=0.1;
	
	maniglia.add(braccio1);
	maniglia.add(braccio2);
	maniglia.add(appendino);
	maniglia.add(braccio3);
	maniglia.add(braccio4);
	maniglia.add(appendino2);
	
	maniglia.rotation.z+=Math.PI/2;
	maniglia.rotation.y+=Math.PI/2;
    maniglia.position.x-=0.55;
    //maniglia.position.y-=1;
    maniglia.scale.set(0.4,0.4,0.4);

    porta.add(maniglia);
    
	return porta;
};


Door.prototype.style =  {
							color: "#000000",
							zIndex: 6
    					};

Door.prototype.in_graph = true;
Door.prototype.in_2D_map = true;

module.exports = Door;