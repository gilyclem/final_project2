var Feature = require('./Feature.js');

Feature.inherits(Divano_grigio, Feature);

function Divano_grigio(feature) {
	Feature.call(this, feature);
}

Divano_grigio.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Divano_grigio.prototype.in_graph = true;

Divano_grigio.prototype.in_2D_map = false;

Divano_grigio.prototype.get3DModel = function() {
	var divano = new THREE.Object3D();
	//Materiali
	var tessuto = new THREE.MeshPhongMaterial( {color: 0xdcdcdc} );
	var texture = THREE.ImageUtils.loadTexture("assets/textures/tessuto_grigio.jpg");
	tessuto.map = texture;

	var legno = new THREE.MeshPhongMaterial( {color: 0x0000dc} );
	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/legno.jpg");
	legno.map = texture2;

	//Forme
	var bracciolo_geo = new THREE.Shape();
	bracciolo_geo.moveTo( 0, 0 );
	bracciolo_geo.lineTo( 1, 0 );
	bracciolo_geo.lineTo( 1, 1 );
	bracciolo_geo.lineTo( 0, 0.5);
	bracciolo_geo.lineTo( 0, 0);

	var extrudeSettings = {
	amount:0.2,
	bevelEnabled:false
	};

	var bracciolo_geo2 = new THREE.ExtrudeGeometry( bracciolo_geo, extrudeSettings );
	var bracciolo1 = new THREE.Mesh( bracciolo_geo2, tessuto  ) ;
	var bracciolo2 = new THREE.Mesh( bracciolo_geo2, tessuto  ) ;			
	bracciolo2.position.z+=2;
	
	var schienale_geo = new THREE.BoxGeometry( 0.2,1,2.2 );
	var schienale = new THREE.Mesh( schienale_geo, tessuto  ) ;

	var cuscino_geo = new THREE.BoxGeometry( 1.8,0.2,0.8 );
	var cuscino_geo2 = new THREE.BoxGeometry( 1.8,0.8,0.2 );

	var base = new THREE.Mesh( cuscino_geo, tessuto  ) ;
	base.rotation.y+=Math.PI/2;
	base.position.x+=0.4;
	base.position.z+=1.1;
	base.position.y+=0.1;

	var base2_geo = new THREE.BoxGeometry( 2.2,0.05,1.1 );
	var base2 = new THREE.Mesh( base2_geo, legno  ) ;
	base2.rotation.y+=Math.PI/2;
	base2.position.x+=0.55;
	base2.position.z+=1.1;
	base2.position.y-=0.03;

	var cuscino1 = new THREE.Mesh( cuscino_geo, tessuto ) ;
	cuscino1.rotation.y+=Math.PI/2;
	cuscino1.position.x+=0.45;
	cuscino1.position.z+=1.1;
	cuscino1.position.y+=0.2;

	var cuscino2 = new THREE.Mesh( cuscino_geo2, tessuto  ) ;
	cuscino2.rotation.y+=Math.PI/2;
	cuscino2.position.x+=0.9;
	cuscino2.position.z+=1.1;
	cuscino2.position.y+=0.5;
	
	var cuscino3_geo = new THREE.CylinderGeometry( 0.1, 0.1, 1.7 , 32 );
	var cuscino3 = new THREE.Mesh( cuscino3_geo, tessuto ) ;
	cuscino3.rotation.x+=Math.PI/2;
	cuscino3.position.x+=0.7;
	cuscino3.position.z+=1.1;
	cuscino3.position.y+=0.4;

	var piede_geo = new THREE.CylinderGeometry( 0.09, 0.02, 0.4 , 4 );
	var piede1 = new THREE.Mesh( piede_geo, legno );
	var piede2 = new THREE.Mesh( piede_geo, legno );
	var piede3 = new THREE.Mesh( piede_geo, legno );
	var piede4 = new THREE.Mesh( piede_geo, legno );
	piede1.position.set(1,0,2.1);
	piede2.position.set(1,0,0.1);
	piede3.position.set(0.15,0,2.1);
	piede4.position.set(0.15,0,0.1);
	schienale.position.set(1,0.5,1.1);

	divano.add(bracciolo1);
	divano.add(bracciolo2);
	divano.add(schienale);
	divano.add(base);
	divano.add(base2);
	divano.add(cuscino1);
	divano.add(cuscino2);
	divano.add(cuscino3);
	divano.add(piede1);
	divano.add(piede2);
	divano.add(piede3);
	divano.add(piede4);
	
	
	divano.rotation.y+=Math.PI/2;
	divano.rotation.x+=Math.PI/2;
	divano.position.z+=0.3;
	divano.scale.set(0.6,0.6,0.6);
	return divano;
};

module.exports = Divano_grigio;