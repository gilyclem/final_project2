var Feature = require('./Feature.js');

Feature.inherits(Lettino, Feature);

function Lettino(feature) {
	Feature.call(this, feature);
}

Lettino.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Lettino.prototype.in_graph = true;

Lettino.prototype.in_2D_map = false;

Lettino.prototype.get3DModel = function() {
	var lettino = new THREE.Object3D();

	//Materiali
	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );
	var mat_bianco = new THREE.MeshPhongMaterial( {color: 0xffffff} );
	
	var texture = THREE.ImageUtils.loadTexture("assets/textures/stoffa_beiges.jpg");
    var stoffa = new THREE.MeshPhongMaterial( {color: 0xffffff});
    stoffa.map = texture;

	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/trave.jpg");
    var testiera_mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    testiera_mat.map = texture2;
    testiera_mat.side = THREE.DoubleSide;

    //Forme
	var hpiede = 0.5;
	var piede_geo = new THREE.CylinderGeometry( 0.03, 0.03, hpiede , 32 );
	var piede1 = new THREE.Mesh( piede_geo, metal );
	var piede2 = new THREE.Mesh( piede_geo, metal );
	piede2.position.set(2,0,0);
	var piede3 = new THREE.Mesh( piede_geo, metal );
	piede3.position.set(2,0,1);
	var piede4 = new THREE.Mesh( piede_geo, metal );
	piede4.position.set(0,0,1);
	var asse1_geo = new THREE.CylinderGeometry( 0.03, 0.03, 2 , 32 );
	var asse2_geo = new THREE.CylinderGeometry( 0.03, 0.03, 1 , 32 );
	var ruota_geo = new THREE.CylinderGeometry( 0.1, 0.1, 0.02 , 32 );	
	var cuscino_geo = new THREE.CylinderGeometry( 0.1, 0.1, 0.6 , 32 );
	var ruota1 = new THREE.Mesh( ruota_geo, mat_bianco );
	ruota1.rotation.x+=Math.PI/2;
	ruota1.position.y-=0.25;
	piede1.add(ruota1);
	var ruota2 = new THREE.Mesh( ruota_geo, mat_bianco );
	ruota2.rotation.x+=Math.PI/2;
	ruota2.position.y-=0.25;
	piede2.add(ruota2);
	var ruota3 = new THREE.Mesh( ruota_geo, mat_bianco );
	ruota3.rotation.x+=Math.PI/2;
	ruota3.position.y-=0.25;
	piede3.add(ruota3);
	var ruota4 = new THREE.Mesh( ruota_geo, mat_bianco );
	ruota4.rotation.x+=Math.PI/2;
	ruota4.position.y-=0.25;
	piede4.position.set(0,0,1); 
	piede4.add(ruota4);

	var hmaterasso=0.3;

	var materasso_geo = new THREE.BoxGeometry( 1.8, hmaterasso , 0.8 );
	var materasso2_geo = new THREE.CylinderGeometry( 0.15, 0.15, 1.8 , 32 );
	var materasso3_geo = new THREE.CylinderGeometry( 0.15, 0.15, 0.8 , 32 );
	var materasso4_geo = new THREE.SphereGeometry( 0.15);
	var materasso1 = new THREE.Mesh( materasso2_geo, stoffa );
	var materasso2 = new THREE.Mesh( materasso2_geo, stoffa );
	var materasso3 = new THREE.Mesh( materasso3_geo, stoffa);
	var materasso4 = new THREE.Mesh( materasso3_geo, stoffa );
	var materasso5 = new THREE.Mesh( materasso4_geo, stoffa );
	var materasso6 = new THREE.Mesh( materasso4_geo, stoffa );
	var materasso7 = new THREE.Mesh( materasso4_geo, stoffa );
	var materasso8 = new THREE.Mesh( materasso4_geo,stoffa );
	var cuscino = new THREE.Mesh( cuscino_geo,mat_bianco);
	cuscino.position.y+=0.27;
	//cuscino.position.z+=0.05;
	cuscino.position.x-=0.75;
	cuscino.rotation.z+=Math.PI/2;	
	cuscino.rotation.y+=Math.PI/2;	
	materasso1.rotation.z+=Math.PI/2;	
	materasso2.rotation.z+=Math.PI/2;	
	materasso1.position.z+=0.4;
	materasso2.position.z-=0.4;
	materasso3.rotation.x+=Math.PI/2;
	materasso3.position.x+=0.9;
	materasso4.rotation.x+=Math.PI/2;
	materasso4.position.x-=0.9;
	materasso5.position.set(0.9,0,0.4);
	materasso6.position.set(-0.9,0,0.4);
	materasso7.position.set(0.9,0,-0.4);
	materasso8.position.set(-0.9,0,-0.4);
	var materasso = new THREE.Mesh( materasso_geo, stoffa );
	materasso.position.set(1,0.4,0.5);
	materasso.add(materasso1);
	materasso.add(materasso2);
	materasso.add(materasso3);
	materasso.add(materasso4);	
	materasso.add(materasso5);	
	materasso.add(materasso6);
	materasso.add(materasso7);
	materasso.add(materasso8);
	materasso.add(cuscino);

	var asse1 = new THREE.Mesh( asse1_geo, metal );
	var asse2 = new THREE.Mesh( asse1_geo, metal );
	var asse3 = new THREE.Mesh( asse2_geo, metal );
	var asse4 = new THREE.Mesh( asse2_geo, metal );
	asse1.rotation.z+=Math.PI/2;
	asse2.rotation.z+=Math.PI/2;	
	asse3.rotation.x+=Math.PI/2;
	asse4.rotation.x+=Math.PI/2;
	asse1.position.set(1,0,0);
	asse2.position.set(1,0,1);
	asse3.position.set(0,0,0.5);
	asse4.position.set(2,0,0.5);

	var testiera_geo = new THREE.Shape();
	testiera_geo.moveTo( 0.1, 0 );
	testiera_geo.lineTo( 0.9, 0 );
	testiera_geo.lineTo( 1, 0.3 );
	testiera_geo.lineTo( 0.8, 0.5);
	testiera_geo.lineTo( 0.7, 0.4 );
	testiera_geo.lineTo( 0.3, 0.4 );
	testiera_geo.lineTo( 0.2, 0.5);
	testiera_geo.lineTo( 0, 0.3 );
	testiera_geo.lineTo( 0.1, 0 );

	var testiera_geo3 = new THREE.Shape();
	testiera_geo3.moveTo( 0, 0 );
	testiera_geo3.lineTo( 0.2, 0.2 );
	testiera_geo3.lineTo( 0.8, 0.2 );
	testiera_geo3.lineTo( 1.01, 0);
	testiera_geo3.lineTo( 0, 0 );

	var hole1 = new THREE.Path();
	hole1.moveTo(0.2, 0.27);
	hole1.lineTo(0.4, 0.27);
	hole1.lineTo(0.4, 0.34);
	hole1.lineTo(0.2, 0.34);
	hole1.lineTo(0.2, 0.27);

	var hole2 = new THREE.Path();
	hole2.moveTo(0.2, 0.07);
	hole2.lineTo(0.8, 0.07);
	hole2.lineTo(0.8, 0.14);
	hole2.lineTo(0.2, 0.14);
	hole2.lineTo(0.2, 0.07);

	var hole3 = new THREE.Path();
	hole3.moveTo(0.6, 0.27);
	hole3.lineTo(0.8, 0.27);
	hole3.lineTo(0.8, 0.34);
	hole3.lineTo(0.6, 0.34);
	hole3.lineTo(0.6, 0.27);	

	testiera_geo.holes.push(hole1);
	testiera_geo.holes.push(hole3);

	var extrudeSettings = {
	amount:0.06,
	bevelEnabled:false
	};

	var testiera_geo2 = new THREE.ExtrudeGeometry( testiera_geo, extrudeSettings );
	var testiera_ant = new THREE.Mesh( testiera_geo2, mat_bianco  ) ;		
	testiera_ant.position.set(-0.03,0.5,1);
	testiera_ant.rotation.y+=Math.PI/2;

	testiera_geo3.holes.push(hole2);

	var testiera_geo4 = new THREE.ExtrudeGeometry( testiera_geo3, extrudeSettings );
	var testiera_post = new THREE.Mesh( testiera_geo4, mat_bianco  ) ;		
	testiera_post.position.set(1.97,0.51,1);
	testiera_post.rotation.y+=Math.PI/2;

	var testiera_geo5 = new THREE.BoxGeometry( 1.05, 0.25 , 0.06 );
	testiera_ant2 = new THREE.Mesh( testiera_geo5, mat_bianco  ) ;
	testiera_ant2.position.set(0.5,-0.12,0.03);
	testiera_post2 = new THREE.Mesh( testiera_geo5, mat_bianco ) ;
	testiera_post2.position.set(0.5,-0.13,0.03);

	testiera_ant.add(testiera_ant2);
	testiera_post.add(testiera_post2);

	var testiera_geo6 = new THREE.BoxGeometry( 2, 0.7 , 0.06 );
	var testiera_geo7 = new THREE.PlaneGeometry( 2, 0.7);		
	var testiera2 = new THREE.Mesh( testiera_geo6, mat_bianco ) ;
	testiera2.rotation.y+=Math.PI/2;
	testiera2.position.set(-0.2,1.3,0.5);
	var testiera3 = new THREE.Mesh( testiera_geo7, testiera_mat ) ;
	testiera3.rotation.y+=Math.PI/2;
	testiera3.position.set(-0.165,1.3,0.5);

	lettino.add(piede1);
	lettino.add(piede2);
	lettino.add(piede3);
	lettino.add(piede4);
	lettino.add(materasso);
	lettino.add(asse1);
	lettino.add(asse2);
	lettino.add(asse3);
	lettino.add(asse4);
	lettino.add(testiera_ant);
	lettino.add(testiera_post);
	lettino.add(testiera2);
	lettino.add(testiera3);
	lettino.rotation.x+=Math.PI/2;
	lettino.position.z+=0.3;
	lettino.scale.set(0.7,0.7,0.7);
	return lettino;
};

module.exports = Lettino;