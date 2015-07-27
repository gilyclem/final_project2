var Feature = require('./Feature.js');

Feature.inherits(Reception, Feature);

function Reception(feature) {
	Feature.call(this, feature);
}

Reception.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Reception.prototype.in_graph = true;

Reception.prototype.in_2D_map = false;

Reception.prototype.get3DModel = function() {
	var station = new THREE.Object3D();
	
	var tavolo_geo = new THREE.TorusGeometry( 3, 0.6, 6, 32, 7/4*Math.PI );
	
	var texture = THREE.ImageUtils.loadTexture("assets/textures/marmorosso.jpg");
    var marmorosso = new THREE.MeshPhongMaterial();
    marmorosso.map = texture;

    var texture = THREE.ImageUtils.loadTexture("assets/textures/marmoverde.jpg");
    var marmoverde = new THREE.MeshPhongMaterial();
    marmoverde.map = texture;

	var box_geo = new THREE.BoxGeometry( 1.5,1.5,0.4 );
	var box_geo2 = new THREE.BoxGeometry( 4.5,1.7,0.05 );
	var box_geo3 = new THREE.BoxGeometry( 3.5,1.3,0.05 );
	var material = new THREE.MeshBasicMaterial( {color: 0xdcdcdc} );
	
	var tavolo = new THREE.Mesh(tavolo_geo, marmorosso);
	var pannello = new THREE.Mesh(box_geo,marmorosso);
	var piano1 = new THREE.Mesh(box_geo2, marmoverde);
	
	pannello.material.side = THREE.DoubleSide;
	pannello.rotation.x+=Math.PI/2;
	pannello.position.x+=3;
	
	piano1.position.y+=1.75;

	station.add(tavolo);
	station.add(piano1);
	station.add(pannello);
	
	station.scale.set(0.6,0.3,0.6);
	return station;
};

module.exports = Reception;