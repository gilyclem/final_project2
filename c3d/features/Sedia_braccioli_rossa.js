var Feature = require('./Feature.js');

Feature.inherits(Sedia_braccioli_rossa, Feature);

function Sedia_braccioli_rossa(feature) {
	Feature.call(this, feature);
}

Sedia_braccioli_rossa.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Sedia_braccioli_rossa.prototype.in_graph = true;

Sedia_braccioli_rossa.prototype.in_2D_map = false;

Sedia_braccioli_rossa.prototype.get3DModel = function() {
	
	var sedia = new THREE.Object3D();

	//Materiali
	var legno = new THREE.MeshPhongMaterial( {color: 0x0000dc} );
	var texture = THREE.ImageUtils.loadTexture("assets/textures/legno.jpg");
	legno.map = texture;

	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/tessuto_rosso.jpg");
   // texture2.wrapS = THREE.RepeatWrapping;
   // texture2.wrapT = THREE.RepeatWrapping;
    var tessuto = new THREE.MeshPhongMaterial();
    tessuto.map = texture2;
	//tessuto.map.repeat.set(5,1);

	//Forme
	var bracciolo_geo = new THREE.Shape();
	bracciolo_geo.moveTo( 0, 0 );
	bracciolo_geo.lineTo( 1, 0 );
	bracciolo_geo.lineTo( 1, 0.5 );
	bracciolo_geo.lineTo( 0, 0.5);
	bracciolo_geo.lineTo( 0, 0);

	var extrudeSettings = {
	amount:0.1,
	bevelEnabled:false
	};

	var bracciolo_geo2 = new THREE.ExtrudeGeometry( bracciolo_geo, extrudeSettings );
	var bracciolo1 = new THREE.Mesh( bracciolo_geo2, tessuto  ) ;
	var bracciolo2 = new THREE.Mesh( bracciolo_geo2, tessuto  ) ;			
	bracciolo1.position.z+=0.51;
	bracciolo2.position.z+=1.59;
	
	var schienale_geo = new THREE.BoxGeometry( 0.2,1,1.2 );
	var schienale = new THREE.Mesh( schienale_geo, tessuto  ) ;

	var cuscino_geo = new THREE.BoxGeometry( 1,0.2,0.8 );
	var cuscino_geo2 = new THREE.BoxGeometry( 0.8,0.8,0.2 );

	var base = new THREE.Mesh( cuscino_geo, tessuto  ) ;
	base.rotation.y+=Math.PI/2;
	base.position.x+=0.4;
	base.position.z+=1.1;
	base.position.y+=0.1;

	var base2_geo = new THREE.BoxGeometry( 1.2,0.05,1.1 );
	var base2 = new THREE.Mesh( base2_geo, legno  ) ;
	base2.rotation.y+=Math.PI/2;
	base2.position.x+=0.55;
	base2.position.z+=1.1;
	base2.position.y-=0.025;

	var cuscino1 = new THREE.Mesh( cuscino_geo, tessuto  ) ;
	cuscino1.rotation.y+=Math.PI/2;
	cuscino1.position.x+=0.45;
	cuscino1.position.z+=1.1;
	cuscino1.position.y+=0.2;

	var cuscino2 = new THREE.Mesh( cuscino_geo2, tessuto  ) ;
	cuscino2.rotation.y+=Math.PI/2;
	
	var piede_geo = new THREE.CylinderGeometry( 0.07, 0.02, 0.6 , 4 );
	var piede1 = new THREE.Mesh( piede_geo, legno );
	var piede2 = new THREE.Mesh( piede_geo, legno );
	var piede3 = new THREE.Mesh( piede_geo, legno );
	var piede4 = new THREE.Mesh( piede_geo, legno );
	piede1.position.set(1,-0.3,1.6);
	piede2.position.set(1,-0.3,0.6);
	piede3.position.set(0.15,-0.3,1.6);
	piede4.position.set(0.15,-0.3,0.6);

	var cuscino3_geo = new THREE.CylinderGeometry( 0.1, 0.1, 0.7 , 32 );
	var cuscino3 = new THREE.Mesh( cuscino3_geo, tessuto  ) ;
	cuscino3.rotation.x+=Math.PI/2;
	cuscino3.position.x+=0.7;
	cuscino3.position.z+=1.1;
	cuscino3.position.y+=0.4;
	cuscino2.position.x+=0.9;
	cuscino2.position.z+=1.1;
	cuscino2.position.y+=0.5;
	schienale.position.set(1,0.5,1.1);	

	sedia.add(bracciolo1);
	sedia.add(bracciolo2);
	sedia.add(schienale);
	sedia.add(base);
	sedia.add(base2);
	sedia.add(cuscino1);
	sedia.add(cuscino2);
	sedia.add(piede1);
	sedia.add(piede2);
	sedia.add(piede3);
	sedia.add(piede4);
	sedia.add(cuscino3);
	
	sedia.rotation.y+=Math.PI/2;
	sedia.rotation.x+=Math.PI/2;
	sedia.position.z+=0.5;
	sedia.scale.set(0.4,0.4,0.4);
	return sedia;
};

module.exports = Sedia_braccioli_rossa;