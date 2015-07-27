var Feature = require('./Feature.js');

Feature.inherits(Scaffale, Feature);

function Scaffale(feature) {
	Feature.call(this, feature);
}

Scaffale.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Scaffale.prototype.in_graph = true;

Scaffale.prototype.in_2D_map = false;

Scaffale.prototype.get3DModel = function() {
	var scaffale = new THREE.Object3D();
	//Materiali
	var texture = THREE.ImageUtils.loadTexture("assets/textures/base-legno.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    var legno = new THREE.MeshPhongMaterial();
    legno.map = texture;
	legno.map.repeat.set(2, 2);
	
	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/monitor.jpg");
    var monitor_mat = new THREE.MeshPhongMaterial( {color: 0xffffff});
    monitor_mat.map = texture2;

	var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture5 = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    mat_nero.map = texture5;
	//Forme
	var pannello1 = new THREE.Mesh(new THREE.BoxGeometry(2.05,4,0.04), legno);
	pannello1.position.x-=0.7;
	pannello1.position.z-=0.5;
	pannello1.position.y+=1.25;

	var cassetti1 = new THREE.Mesh(new THREE.BoxGeometry(2.05,2.5,0.6), legno);
	cassetti1.position.x-=0.7;
	cassetti1.position.z-=0.2;
	cassetti1.position.y+=2;

	var cassetti2 = new THREE.Mesh(new THREE.BoxGeometry(2.05,1,0.6), legno);
	cassetti2.position.x-=0.7;
	cassetti2.position.z-=0.2;
	cassetti2.position.y-=0.3;

	var cassetti3 = new THREE.Mesh(new THREE.BoxGeometry(2.05,1,0.6), legno);
	cassetti3.position.x-=0.7;
	cassetti3.position.z-=0.2;
	cassetti3.position.y+=0.66;

	var cassetti4 = new THREE.Mesh(new THREE.BoxGeometry(2.05,1,0.6), legno);
	cassetti4.position.x-=0.7;
	cassetti4.position.z-=0.2;
	cassetti4.position.y+=1.74;

	var pannello3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.04), legno);
	pannello3.position.x-=0.18;
	pannello3.position.y+=2.75;
	pannello3.position.z+=0.1;

	var pannello4 = new THREE.Mesh(new THREE.BoxGeometry(1,1,0.04), legno);
	pannello4.position.x-=1.2;
	pannello4.position.y+=2.75;
	pannello4.position.z+=0.1;

	var pannello5 = new THREE.Mesh(new THREE.BoxGeometry(1,0.9,0.04), legno);
	pannello5.position.x-=0.18;
	pannello5.position.y-=0.3;
	pannello5.position.z+=0.1;

	var pannello6 = new THREE.Mesh(new THREE.BoxGeometry(1,0.9,0.04), legno);
	pannello6.position.x-=1.2;
	pannello6.position.y-=0.3;
	pannello6.position.z+=0.1;

	var pannello7 = new THREE.Mesh(new THREE.BoxGeometry(1,0.9,0.04), legno);
	pannello7.position.x-=0.18;
	pannello7.position.y+=0.65;
	pannello7.position.z+=0.1;

	var pannello8= new THREE.Mesh(new THREE.BoxGeometry(1,0.9,0.04), legno);
	pannello8.position.x-=1.2;
	pannello8.position.y+=0.65;
	pannello8.position.z+=0.1;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.8,0.04), mat_nero);
	var monitor = new THREE.Mesh(new THREE.PlaneGeometry(1.2,0.8), monitor_mat);	
	spessore.position.x-=0.7;
	spessore.position.y+=1.75;
	spessore.position.z+=0.1;
	monitor.position.x-=0.7;
	monitor.position.y+=1.75;
	monitor.position.z+=0.15;
	
	scaffale.add(pannello1);
	scaffale.add(pannello3);
	scaffale.add(pannello4);
	scaffale.add(pannello5);
	scaffale.add(pannello6);
	scaffale.add(pannello7);
	scaffale.add(pannello8);
	scaffale.add(cassetti1);
	scaffale.add(cassetti2);
	scaffale.add(cassetti3);
	scaffale.add(cassetti4);
	scaffale.add(spessore);
	scaffale.add(monitor);
//	scaffale.add(maniglia);
//	scaffale.add(maniglia2);


	scaffale.rotation.x+=Math.PI/2;
	scaffale.scale.set(0.43,0.6,0.5);
	scaffale.position.z+=0.4;
	return scaffale;
};

module.exports = Scaffale;