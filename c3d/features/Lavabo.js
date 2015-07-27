var Feature = require('./Feature.js');

Feature.inherits(Lavabo, Feature);

function Lavabo(feature) {
	Feature.call(this, feature);
}

Lavabo.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Lavabo.prototype.in_graph = true;

Lavabo.prototype.in_2D_map = false;

Lavabo.prototype.get3DModel = function() {

    var lavabo = new THREE.Object3D();
    var rubinetto_tot = new THREE.Object3D();
	//Materiali
    var vetro = new THREE.MeshPhongMaterial( {color: 0xccffff});
    vetro.transparent=true;
	vetro.opacity=0.5;
	vetro.side = THREE.DoubleSide;
	
	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );
	//Forme
	var piano = new THREE.Shape();
	piano.moveTo( -1, -0.5 );
	piano.lineTo( 1, -0.5 );
	piano.lineTo( 1, 0.5 );
	piano.lineTo( -1, 0.5);
	piano.lineTo( -1, -0.5 );
    var shape = new THREE.Shape();
	shape.moveTo( 0.3, 0 );
	shape.absarc( 0, 0, 0.3, 0, 2 * Math.PI, true );
	piano.holes.push( shape );   

	var semisfera = new THREE.SphereGeometry(0.3, 32, 32, 0, Math.PI, 0, Math.PI);
	var semisfera_mesh = new THREE.Mesh( semisfera, vetro ) ;
	semisfera_mesh.rotation.x+=Math.PI/2;

	var extrudeSettings = {
	amount:0.06,
	bevelEnabled:false
	};

	var piano_geo2 = new THREE.ExtrudeGeometry( piano, extrudeSettings );
	var piano1 = new THREE.Mesh( piano_geo2, vetro ) ;		
	piano1.rotation.x+=Math.PI/2;

	var rubinetto_geo = new THREE.TorusGeometry(0.15, 0.03, 16, 32,Math.PI);
	var rubinetto = new THREE.Mesh( rubinetto_geo, metal ) ;
	rubinetto.rotation.y+=Math.PI/2;
	rubinetto.position.z+=0.2;
	rubinetto.position.y-=0.2;
	rubinetto.position.x+=0.25;

	var tubo_geo = new THREE.CylinderGeometry( 0.03, 0.03,0.3 ,32);
	var tubo = new THREE.Mesh( tubo_geo, metal ) ;
	tubo.position.x+=0.4;
	tubo.position.y+=0.2;

	rubinetto.position.y+=0.52;
	rubinetto.position.z-=0.2;
	rubinetto.rotation.y+=Math.PI/2;

	rubinetto_tot.add(rubinetto);
	rubinetto_tot.add(tubo);
	rubinetto_tot.rotation.y+=Math.PI/2;
	rubinetto_tot.position.z+=0.05;
	rubinetto_tot.position.y-=0.1;

	var tubo_geo = new THREE.CylinderGeometry( 0.05, 0.05, 0.5 , 32 );
	var tappo_geo = new THREE.CylinderGeometry( 0.07, 0.07, 0.01 ,32);
	
	var appendino_geo = new THREE.CylinderGeometry( 0.02, 0.02, 2 ,32);
	var appendino = new THREE.Mesh( appendino_geo, metal ) ;
	appendino.rotation.z-=Math.PI/2;
	appendino.position.y-=0.2;
	appendino.position.z+=0.45;

	var braccio_geo = new THREE.CylinderGeometry( 0.015, 0.015, 0.15 ,32);
	var braccio1 = new THREE.Mesh( braccio_geo, metal ) ;
	braccio1.position.z+=0.45;
	braccio1.position.x+=0.9;
	braccio1.position.y-=0.1;
	var braccio2 = new THREE.Mesh( braccio_geo, metal ) ;
	braccio2.position.z+=0.45;
	braccio2.position.x-=0.9;
	braccio2.position.y-=0.1;

	var tappo = new THREE.Mesh( tappo_geo, metal ) ;
	tappo.position.y-=0.27;

	var tubo1 = new THREE.Mesh( tubo_geo, metal ) ;
	tubo1.position.y-=0.52;

	var tubo2 = new THREE.Mesh( tubo_geo, metal ) ;
	tubo2.rotation.x-=Math.PI/2;
	tubo2.position.y-=0.75;
	tubo2.position.z-=0.2;

	var tubo_geo2 = new THREE.CylinderGeometry( 0.03, 0.03,0.22 ,32);
	var tubo3 = new THREE.Mesh( tubo_geo2, metal ) ;
	tubo3.position.z-=0.4;
	tubo3.position.y-=0.03;
	tubo3.rotation.x+=Math.PI/2;

	lavabo.add(piano1);
	lavabo.add(tubo1);
	lavabo.add(tappo);
	lavabo.add(tubo2);
	lavabo.add(tubo3);
	lavabo.add(braccio1);
	lavabo.add(braccio2);
	lavabo.add(appendino);
	lavabo.add(semisfera_mesh);
	lavabo.add(rubinetto_tot);
	lavabo.rotation.x+=Math.PI/2;
	lavabo.position.z+=1;

	lavabo.scale.set(0.6,0.5,0.5);
	return lavabo;
};

module.exports = Lavabo;