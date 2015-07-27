var Feature = require('./Feature.js');

Feature.inherits(Postazione, Feature);

function Postazione(feature) {
	Feature.call(this, feature);
}

Postazione.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Postazione.prototype.in_graph = true;

Postazione.prototype.in_2D_map = false;

Postazione.prototype.get3DModel = function() {
	var postazione = new THREE.Object3D();
	//Materiali
	var texture1 = THREE.ImageUtils.loadTexture("assets/textures/case.jpg");
    var pc_mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    pc_mat.map = texture1;

	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/base-legno.jpg");
    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
    var legno = new THREE.MeshPhongMaterial();
    legno.map = texture2;
	legno.map.repeat.set(2, 2);
	
	var texture3 = THREE.ImageUtils.loadTexture("assets/textures/monitor.jpg");
    var monitor_mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    monitor_mat.map = texture3;

	var texture4 = THREE.ImageUtils.loadTexture("assets/textures/tastiera.jpg");
    var tastiera_mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    tastiera_mat.map = texture4;

	var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture5 = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    mat_nero.map = texture5;
	//Forme
	var processore = new THREE.Mesh(new THREE.BoxGeometry(0.5,1,1), pc_mat);
	
	var desk1 = new THREE.Mesh(new THREE.BoxGeometry(2,1,0.04), legno);	
	desk1.rotation.x+=Math.PI/2;
	desk1.position.y+=0.75;
	desk1.position.x-=0.7;
	
	var desk2 = new THREE.Mesh(new THREE.BoxGeometry(0.6,1,0.04), legno);	
	desk2.rotation.x+=Math.PI/2;
	desk2.position.y-=0.52;

	var lato1 = new THREE.Mesh(new THREE.BoxGeometry(0.04,1.5,1), legno);	
	var lato2 = new THREE.Mesh(new THREE.BoxGeometry(0.04,1.5,1), legno);	
	var lato3 = new THREE.Mesh(new THREE.BoxGeometry(0.04,1.5,1), legno);	
	lato1.position.x+=0.3;
	lato2.position.x-=0.3;
	lato3.position.x-=1.7;

	var pannello1 = new THREE.Mesh(new THREE.BoxGeometry(2.05,4,0.04), legno);
	pannello1.position.x-=0.7;
	pannello1.position.z-=0.5;
	pannello1.position.y+=1.25;

	var cassetti = new THREE.Mesh(new THREE.BoxGeometry(2.05,1,0.6), legno);
	cassetti.position.x-=0.7;
	cassetti.position.z-=0.2;
	cassetti.position.y+=2.75;
	var pannello3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.04), legno);
	pannello3.position.x-=0.18;
	pannello3.position.y+=2.75;
	pannello3.position.z+=0.1;
	var pannello4 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.04), legno);
	pannello4.position.x-=1.2;
	pannello4.position.y+=2.75;
	pannello4.position.z+=0.1;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,0.7,0.04), mat_nero);
	var monitor = new THREE.Mesh(new THREE.PlaneGeometry(1.5,0.7), monitor_mat);
	
	spessore.position.x-=0.7;
	spessore.position.y+=1.5;
	spessore.position.z-=0.45;
	monitor.position.x-=0.7;
	monitor.position.y+=1.5;
	monitor.position.z-=0.42;

	var spessore2 = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.04,0.35), mat_nero);
	var tastiera = new THREE.Mesh(new THREE.PlaneGeometry(0.7,0.35), tastiera_mat);
	tastiera.rotation.x-=Math.PI/2;
	
	spessore2.position.x-=0.7;
	spessore2.position.y+=0.8;
	spessore2.position.z+=0.1;
	tastiera.position.x-=0.7;
	tastiera.position.y+=0.83;
	tastiera.position.z+=0.1;

	postazione.add(lato1);
	postazione.add(lato2);
	postazione.add(lato3);
	postazione.add(desk1);
	postazione.add(desk2);
	postazione.add(processore);
	postazione.add(pannello1);
	postazione.add(pannello3);
	postazione.add(pannello4);
	postazione.add(cassetti);
	postazione.add(spessore);
	postazione.add(monitor);
	postazione.add(spessore2);
	postazione.add(tastiera);
	
	postazione.rotation.x+=Math.PI/2;
	postazione.scale.set(0.45,0.6,0.5);
	postazione.position.z+=0.4;
	return postazione;
};

module.exports = Postazione;