var Feature = require('./Feature.js');

Feature.inherits(Portapenne, Feature);

function Portapenne(feature) {
    Feature.call(this, feature);
}

Portapenne.prototype.style = {
                            prefix: "fa",
                            icon: "minus",
                            zIndex: 3
                        };

Portapenne.prototype.in_graph = true;

Portapenne.prototype.in_2D_map = false;

Portapenne.prototype.get3DModel = function() {
    var portapenne = new THREE.Object3D();
    var metal = new THREE.MeshPhongMaterial( {color: 0xa8bac3} );

   var g_base_pp = new THREE.CircleGeometry(0.045, 27);
    var g_interno = new THREE.CylinderGeometry(0.035, 0.035, 0.11, 8, 3, true);
    var g_esterno = new THREE.CylinderGeometry(0.045, 0.045, 0.11, 8, 3, true);
    var g_anello = new THREE.RingGeometry(0.035, 0.045,8);
    var g_penna =  new THREE.CylinderGeometry(0.005, 0.005, 0.16, 16);

    var texture = THREE.ImageUtils.loadTexture("assets/textures/gold.jpg");
    var gold = new THREE.MeshPhongMaterial();
    gold.map = texture;
    gold.side=THREE.DoubleSide;

    var m_penna = [];
    m_penna[0] = new THREE.MeshPhongMaterial({color: 0xffffff});
    m_penna[1] = new THREE.MeshPhongMaterial({color: 0xffffff});
    m_penna[2] = new THREE.MeshPhongMaterial({color: 0xffffff});

    for (var i = 0; i < 2; i++) {
        var portapenne = new THREE.Object3D();
        var base_pp = new THREE.Mesh(g_base_pp, gold);
        var interno = new THREE.Mesh(g_interno, gold);
        var esterno = new THREE.Mesh(g_esterno, gold);
        var anello = new THREE.Mesh(g_anello,gold);

        base_pp.rotation.x = -Math.PI/2;
        interno.rotation.x = Math.PI/2;
        esterno.rotation.x = Math.PI/2;

        interno.position.z = 0.055;
        esterno.position.z = 0.055;
        anello.position.z = 0.11;

        portapenne.add(base_pp);
        base_pp.add(interno);
        base_pp.add(esterno);
        base_pp.add(anello);

        for (var j = 0; j < 5; j++) {
            var penna = new THREE.Mesh(g_penna, m_penna[Math.floor(Math.random()*3)]);
            penna.rotation.set(Math.PI/2, Math.PI/2.5 * j, Math.PI/7);
            penna.position.z = 0.075;
            base_pp.add(penna);
        };

        portapenne.position.set(1 * i + (1-i) * -0.4, 0.0251, 0.25);  };
    return portapenne;
};

module.exports = Portapenne;

 
  
