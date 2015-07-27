var Feature = require('./Feature.js');

Feature.inherits(Registro, Feature);

function Registro(feature) {
	Feature.call(this, feature);
}

Registro.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Registro.prototype.in_graph = true;

Registro.prototype.in_2D_map = false;

Registro.prototype.get3DModel = function() {
	var registro = new THREE.Object3D();
	var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );

  	var texture = THREE.ImageUtils.loadTexture("assets/textures/carta.jpg");
    var carta = new THREE.MeshBasicMaterial();
    carta.map = texture;

	var g_copertina = new THREE.BoxGeometry(0.27, 0.01, 0.43);
    var m_copertina = new THREE.MeshPhongMaterial({color: 0x03AB0F});
    var g_pagine = new THREE.BoxGeometry(0.25, 0.03, 0.4);
    var m_pagine = new THREE.MeshPhongMaterial({color: 0xEEEEEE});

    var pagine = new THREE.Mesh(g_pagine, metal);
    pagine.rotation.z = 2 * Math.PI/180;
    pagine.position.set(0.5, 0.058, 0);
    registro.add(pagine);

    var copertina = [];

    for (var i = 0; i < 5; i++) {
        copertina[i] = new THREE.Mesh(g_copertina,carta);
        copertina[i].position.y = Math.pow(-1, i) * 0.02;
        pagine.add(copertina[i]);
    };

    var g_anelli = new THREE.TorusGeometry(0.035, 0.0025, 20, 50);

    var anelli = [];

    for (var i = 0; i < 8; i++) {
        anelli[i] = new THREE.Mesh(g_anelli, metal);
        anelli[i].position.set(0.151, 0, -0.175 + (0.05 * i));  
        pagine.add(anelli[i]);
    };
    registro.scale.set(0.6,0.3,0.6);

	return registro;
};

module.exports = Registro;