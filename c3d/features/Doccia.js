var Feature = require('./Feature.js');

Feature.inherits(Doccia, Feature);

function Doccia(feature) {
	Feature.call(this, feature);
}

Doccia.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Doccia.prototype.in_graph = true;

Doccia.prototype.in_2D_map = false;

Doccia.prototype.get3DModel = function() {
	var doccia = new THREE.Object3D();
	var rubinetto = new THREE.Object3D();
	var sedia = new THREE.Object3D();
	//Parametri
	var lato1 = 6;
	var lato2 = 7;
	var altezza = 3;

	//Materiali
	var manopole = new THREE.MeshPhongMaterial( {color: 0xdcdcdc} );
	var texture = THREE.ImageUtils.loadTexture("assets/textures/doccia.jpg");
	manopole.map = texture;      

	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );

	var vetro = new THREE.MeshPhongMaterial( {color: 0xccffff});
	vetro.transparent=true;
	vetro.opacity=0.5;
	vetro.side = THREE.DoubleSide;

	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff});

	//Forme	
	var lastra = new THREE.Mesh(new THREE.BoxGeometry(2, altezza, 0.05), vetro);
	lastra.position.z-=lato2/2-1.5;
	lastra.position.x-=2;
	lastra.position.y+=altezza/2;
	doccia.add(lastra);
	
	var braccio_geo = new THREE.CylinderGeometry( 0.015, 0.015, 0.15 ,32);
	var braccio1 = new THREE.Mesh( braccio_geo, metal ) ;
	braccio1.position.z+=0.45;
	braccio1.position.x+=0.9;
	braccio1.position.y-=0.3;
	var braccio2 = new THREE.Mesh( braccio_geo, metal ) ;
	braccio2.position.z+=0.45;
	braccio2.position.x-=0.9;
	braccio2.position.y-=0.3;

	var appendino_geo = new THREE.CylinderGeometry( 0.02, 0.02, 2 ,32);
	var appendino = new THREE.Mesh( appendino_geo, metal ) ;
	appendino.rotation.z-=Math.PI/2;
	appendino.position.y-=0.2;
	appendino.position.z+=0.45;
	
	var corrimano = new THREE.Object3D();
	corrimano.add(braccio1);
	corrimano.add(braccio2);
	corrimano.add(appendino);
	corrimano.rotation.x+=Math.PI/2;
	corrimano.position.y+=1.7;
	corrimano.position.x-=1.2;
	corrimano.position.z-=3.2;
	doccia.add(corrimano);

	var tubo_geo = new THREE.CylinderGeometry( 0.03, 0.03, 0.5 ,32);
	var tubo = new THREE.Mesh( tubo_geo, metal ) ;
	tubo.rotation.x+=Math.PI/2;
	tubo.rotation.z+=Math.PI/2;
	tubo.position.y+=2;

	var toro_geo = new THREE.TorusGeometry(0.05, 0.03, 16, 32, Math.PI/2,true);
	var toro = new THREE.Mesh( toro_geo, metal ) ;
	toro.position.y+=1.95;
	toro.position.x+=0.25;

	var bocchettone_geo = new THREE.CylinderGeometry( 0.25, 0.25, 0.03 ,32);
	var bocchettone = new THREE.Mesh( bocchettone_geo, metal ) ;

	rubinetto.add(tubo);
	rubinetto.add(toro);
	rubinetto.add(bocchettone);
	bocchettone.position.y+=1.93;
	bocchettone.position.x+=0.28;

	doccia.add(rubinetto);
	rubinetto.position.x-=3;
	rubinetto.position.z-=3;
	rubinetto.position.y+=0.7;
	
	var schienale = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.5, 0.5), mat_bianco);
	sedia.add(schienale);
	var sedile = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.05, 0.5), mat_bianco);
	sedile.position.x+=0.25;
	sedile.position.y-=0.3;
	sedia.add(sedile);

	var perno_geo = new THREE.CylinderGeometry( 0.04, 0.04, 0.5 ,32);
	var perno = new THREE.Mesh( perno_geo, mat_bianco ) ;
	perno.rotation.x+=Math.PI/2;
	perno.position.y-=0.3;
	
	sedia.add(perno);
	sedia.position.y+=1;
	sedia.position.x-=3;
	sedia.position.z-=3;
	doccia.add(sedia);

	var comandi = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.2, 0.05), mat_bianco);
	comandi.position.y+=1.2;
	comandi.position.x-=2.5;
	comandi.position.z-=3.45;
	var comandi2 = new THREE.Mesh(new THREE.CylinderGeometry( 0.05, 0.05, 0.1 ,32), mat_bianco);
	comandi2.position.y+=1.1;
	comandi2.position.x-=2.5;
	comandi2.position.z-=3.42;
	comandi2.rotation.x+=Math.PI/2;
	var comandi3 = new THREE.Mesh(new THREE.CylinderGeometry( 0.02, 0.05, 0.02 ,32), mat_bianco);
	comandi3.position.y+=1.3;
	comandi3.position.x-=2.5;
	comandi3.position.z-=3.42;
	comandi3.rotation.x+=Math.PI/2;
	var comandi4 = new THREE.Mesh(new THREE.CylinderGeometry( 0.02, 0.05, 0.02 ,32), mat_bianco);
	comandi4.position.y+=1.5;
	comandi4.position.x-=2.5;
	comandi4.position.z-=3.42;
	comandi4.rotation.x+=Math.PI/2;
	var comandi5 = new THREE.Mesh(new THREE.CylinderGeometry( 0.02, 0.05, 0.02 ,32), mat_bianco);
	comandi5.position.y+=1.7;
	comandi5.position.x-=2.5;
	comandi5.position.z-=3.42;
	comandi5.rotation.x+=Math.PI/2;
	
	doccia.add(comandi);
	doccia.add(comandi2);
	doccia.add(comandi3);
	doccia.add(comandi4);
	doccia.add(comandi5);
	
	var scarico_geo = new THREE.CylinderGeometry( 0.1, 0.1, 0.05 ,32);
	var scarico = new THREE.Mesh( scarico_geo, metal ) ;
	scarico.position.y+=0.2;
	scarico.position.x-=1.6;
	scarico.position.z-=3;
	doccia.add(scarico);

	doccia.rotation.x+=Math.PI/2;
	doccia.scale.set(0.6,0.8,0.6);
	return doccia;
};

module.exports = Doccia;