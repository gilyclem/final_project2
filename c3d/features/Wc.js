var Feature = require('./Feature.js');

Feature.inherits(Wc, Feature);

function Wc(feature) {
	Feature.call(this, feature);
}

Wc.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Wc.prototype.in_graph = true;

Wc.prototype.in_2D_map = false;

Wc.prototype.get3DModel = function() {
	var water = new THREE.Object3D();
	//Materiali
	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff});
	mat_bianco.side = THREE.DoubleSide;

	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );

	var acqua = new THREE.MeshPhongMaterial( {color: 0xccffff});
	acqua.transparent=true;
	acqua.opacity=0.2;
	acqua.side = THREE.DoubleSide;

	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/pulsante.jpg");
    var pulsante = new THREE.MeshPhongMaterial( {color: 0xffffff});
    pulsante.map = texture1;

	//Forme
	var semisfera1_geo = new THREE.SphereGeometry(0.5, 32, 32, 0, Math.PI, 0, Math.PI);
	var semisfera1 = new THREE.Mesh( semisfera1_geo, mat_bianco ) ;
	semisfera1.rotation.x+=Math.PI/2;

	var semisfera2_geo = new THREE.SphereGeometry(0.4, 32, 32, 0, Math.PI, 0, Math.PI);
	var semisfera2 = new THREE.Mesh( semisfera2_geo, mat_bianco ) ;
	semisfera2.rotation.x+=Math.PI/2;

	var tavoletta_geo = new THREE.TorusGeometry(0.4, 0.1, 16, 32);
	var tavoletta = new THREE.Mesh( tavoletta_geo, mat_bianco ) ;
	tavoletta.rotation.x+=Math.PI/2;

	var dietro_geo = new THREE.CylinderGeometry( 0.15, 0.15, 0.3 ,32);
	var dietro = new THREE.Mesh( dietro_geo, mat_bianco ) ;
	dietro.position.y-=0.5;
	dietro.position.x+=0.5;
	dietro.rotation.z+=Math.PI/2;
	
	var acqua_geo = new THREE.CylinderGeometry( 0.3, 0.3, 0.01 ,32);
	var acqua_mesh = new THREE.Mesh( acqua_geo, acqua ) ;
	acqua_mesh.position.y-=0.3;

	var base_geo = new THREE.CylinderGeometry( 0.35, 0.4, 0.3 ,32);
	var base = new THREE.Mesh( base_geo, mat_bianco ) ;
	base.position.y-=0.5;

	var sciacquone_geo = new THREE.BoxGeometry( 0.8, 0.5, 0.03);
	var sciacquone = new THREE.Mesh( sciacquone_geo, pulsante ) ;
	sciacquone.position.y+=2;
	sciacquone.position.x+=0.6;
	sciacquone.rotation.y+=Math.PI/2;
	
	var maniglione_geo = new THREE.TorusGeometry(0.1, 0.05, 16, 32, Math.PI);
	var maniglione1 = new THREE.Mesh( maniglione_geo, mat_bianco ) ;
	maniglione1.rotation.z+=Math.PI/2;
	maniglione1.position.z-=0.7;
	maniglione1.position.y+=1;
	maniglione1.position.x-=0.6;

	var maniglione2_geo = new THREE.CylinderGeometry( 0.05, 0.05, 1.2 ,32);
	var maniglione2 = new THREE.Mesh( maniglione2_geo, mat_bianco ) ;
	maniglione2.rotation.z+=Math.PI/2;
	maniglione2.position.z-=0.7;
	maniglione2.position.y+=0.9;

	var maniglione3 = new THREE.Mesh( maniglione2_geo, mat_bianco ) ;
	maniglione3.rotation.z+=Math.PI/2;
	maniglione3.position.z-=0.7;
	maniglione3.position.y+=1.1;

	var coperchio_geo = new THREE.CylinderGeometry( 0.45, 0.45, 0.04 ,32);
	var coperchio = new THREE.Mesh( coperchio_geo, mat_bianco ) ;
	coperchio.rotation.z+=5/6*Math.PI/2;
	coperchio.position.x+=0.5;
	coperchio.position.y+=0.55;
	
	var perno_geo = new THREE.CylinderGeometry( 0.03, 0.03, 0.2 ,32);
	var perno = new THREE.Mesh( perno_geo, mat_bianco ) ;
	perno.rotation.x+=Math.PI/2;
	perno.position.x+=0.4;
	perno.position.y+=0.12;	

	water.add(maniglione1);
	water.add(maniglione2);
	water.add(maniglione3);

	water.add(semisfera1);
	water.add(semisfera2);
	water.add(tavoletta);
	water.add(sciacquone);
	water.add(coperchio);
	water.add(acqua_mesh);
	water.add(dietro);
	water.add(perno);
	water.add(base);
	
	water.rotation.x+=Math.PI/2;
	water.position.z+=1;
	water.scale.set(0.6,0.5,0.5);
	return water;
};

module.exports = Wc;