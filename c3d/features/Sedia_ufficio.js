var Feature = require('./Feature.js');

Feature.inherits(Sedia_ufficio, Feature);

function Sedia_ufficio(feature) {
	Feature.call(this, feature);
}

Sedia_ufficio.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Sedia_ufficio.prototype.in_graph = true;

Sedia_ufficio.prototype.in_2D_map = false;

Sedia_ufficio.prototype.get3DModel = function() {
	var sedia = new THREE.Object3D();

	var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    mat_nero.map = texture;

    var base = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.5), mat_nero);
      	
	var ruota1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota1.position.y-=0.44;
	ruota1.rotation.x+=Math.PI/2;
	ruota1.position.x+=Math.cos(Math.PI/6)/4;
	ruota1.position.z+=Math.sin(Math.PI/6)/4;

	var ruota2 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota2.position.y-=0.44;
	ruota2.rotation.x+=Math.PI/2;
	ruota2.position.x+=Math.cos(3*Math.PI/6)/4;
	ruota2.position.z+=Math.sin(3*Math.PI/6)/4;
	
	var ruota3 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota3.position.y-=0.44;
	ruota3.rotation.x+=Math.PI/2;
	ruota3.position.x+=Math.cos(5*Math.PI/6)/4;
	ruota3.position.z+=Math.sin(5*Math.PI/6)/4;

	var ruota4 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota4.position.y-=0.44;
	ruota4.rotation.x+=Math.PI/2;
	ruota4.position.x+=Math.cos(7*Math.PI/6)/4;
	ruota4.position.z+=Math.sin(7*Math.PI/6)/4;

	var ruota5 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota5.position.y-=0.44;
	ruota5.rotation.x+=Math.PI/2;
	ruota5.position.x+=Math.cos(11*Math.PI/6)/4;
	ruota5.position.z+=Math.sin(11*Math.PI/6)/4;

	var ruota6 = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.03,32), mat_nero);
	ruota6.position.y-=0.44;
	ruota6.rotation.x+=Math.PI/2;
	ruota6.position.x+=Math.cos(9*Math.PI/6)/4;
	ruota6.position.z+=Math.sin(9*Math.PI/6)/4;

	var palo = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.4,32), mat_nero);
	palo.position.y-=0.2;

	var bordo1 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5,32), mat_nero);
	bordo1.position.z+=0.25;
	bordo1.rotation.z+=Math.PI/2;

	var bordo2 = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.5,32), mat_nero);
	bordo2.position.y+=0.65;
	bordo2.position.z-=0.285;
	bordo2.rotation.z+=Math.PI/2;

        var schienale = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.1, 0.7), mat_nero);
	schienale.position.z-=0.25;
	schienale.position.y+=0.3;
	schienale.rotation.x+=14/15*Math.PI/2;

	var bracciolo_geo = new THREE.TorusGeometry(0.3, 0.03, 16, 32,Math.PI/2);
	var bracciolo1 = new THREE.Mesh( bracciolo_geo, mat_nero ) ;
	bracciolo1.rotation.y+=Math.PI/2;
	bracciolo1.rotation.x+=Math.PI/2;
	bracciolo1.position.z-=0.25;
	bracciolo1.position.y+=0.05;
	bracciolo1.position.x+=0.2;

	var bracciolo2 = new THREE.Mesh( bracciolo_geo, mat_nero ) ;
	bracciolo2.rotation.y+=Math.PI/2;
	bracciolo2.rotation.x+=Math.PI/2;
	bracciolo2.position.z-=0.25;
	bracciolo2.position.y+=0.05;
	bracciolo2.position.x-=0.2;

	var asse1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.5), mat_nero);
	asse1.position.y-=0.4;
	asse1.rotation.y+=2*Math.PI/6;

	var asse2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.5), mat_nero);
	asse2.position.y-=0.4;
	asse2.rotation.y+=4*Math.PI/6;

	var asse3 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.03, 0.5), mat_nero);
	asse3.position.y-=0.4;
	asse3.rotation.y+=6*Math.PI/6;

	sedia.add(schienale);
	sedia.add(bracciolo1);
	sedia.add(bracciolo2);
	sedia.add(base);
	sedia.add(palo);
	sedia.add(asse1);
	sedia.add(asse2);
	sedia.add(asse3);
    sedia.add(ruota1);
	sedia.add(ruota2);
	sedia.add(ruota3);	
	sedia.add(ruota4);
	sedia.add(ruota5);
	sedia.add(ruota6);
	sedia.add(bordo1);
	sedia.add(bordo2);
	sedia.rotation.x+=Math.PI/2;
	sedia.position.z+=0.5;
	sedia.scale.set(0.6,0.6,0.6);
	return sedia;
};

module.exports = Sedia_ufficio;