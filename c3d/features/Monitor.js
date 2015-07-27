var Feature = require('./Feature.js');

Feature.inherits(Monitor, Feature);

function Monitor(feature) {
	Feature.call(this, feature);
}

Monitor.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Monitor.prototype.in_graph = true;

Monitor.prototype.in_2D_map = false;

Monitor.prototype.get3DModel = function() {
	var monitor = new THREE.Object3D();

	var mat_nero = new THREE.MeshPhongMaterial( {color: 0x000000});
	var texture = THREE.ImageUtils.loadTexture("assets/textures/nero.jpg");
    mat_nero.map = texture;
	var texture2 = THREE.ImageUtils.loadTexture("assets/textures/monitor.jpg");
    var mat = new THREE.MeshPhongMaterial( {color: 0x000000});
    mat.map = texture2;

	var spessore = new THREE.Mesh(new THREE.BoxGeometry(1.5,1,0.02), mat_nero);
	var superficie = new THREE.Mesh(new THREE.PlaneGeometry(1.5,1), mat);
	superficie.position.z+=0.0205;

	monitor.add(superficie);
	monitor.add(spessore);
	monitor.rotation.x+=Math.PI/2;
	monitor.position.z+=1;
	monitor.scale.set(0.6,0.6,0.6);
	return monitor;
};

module.exports = Monitor;