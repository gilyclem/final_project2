// (1) dependencies
var utilities = require('./utilities.js');

// (2) private things
var featureClasses = {};
featureClasses['Feature'] = require('../features/Feature.js');
featureClasses['Antenna'] = require('../features/Antenna.js');
featureClasses['BadgeReader'] = require('../features/BadgeReader.js');
featureClasses['Chair'] = require('../features/Chair.js');
featureClasses['Door'] = require('../features/Door.js');
featureClasses['External_wall'] = require('../features/External_wall.js');
featureClasses['FireExtinguisher'] = require('../features/FireExtinguisher.js');
featureClasses['GraphNode'] = require('../features/GraphNode.js');
featureClasses['Hotspot'] = require('../features/Hotspot.js');
featureClasses['Internal_wall'] = require('../features/Internal_wall.js');
featureClasses['Level'] = require('../features/Level.js');
featureClasses['Light'] = require('../features/Light.js');
featureClasses['Room'] = require('../features/Room.js');
featureClasses['Server'] = require('../features/Server.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');
featureClasses['Table'] = require('../features/Table.js');
featureClasses['Window'] = require('../features/Window.js');
featureClasses['Stair'] = require('../features/Stair.js');
featureClasses['Bed'] = require('../features/Bed.js');

featureClasses['Ascensore'] = require('../features/Ascensore.js');
featureClasses['Bajour'] = require('../features/Bajour.js');
featureClasses['Comodino'] = require('../features/Comodino.js');
featureClasses['Divano_grigio'] = require('../features/Divano_grigio.js');
featureClasses['Divano_verde'] = require('../features/Divano_verde.js');
featureClasses['Doccia'] = require('../features/Doccia.js');
featureClasses['Lampada'] = require('../features/Lampada.js');
featureClasses['Lavabo'] = require('../features/Lavabo.js');
featureClasses['Lettino'] = require('../features/Lettino.js');
featureClasses['Maniglia'] = require('../features/Maniglia.js');
featureClasses['Monitor'] = require('../features/Monitor.js');
featureClasses['Parete_legno'] = require('../features/Parete_legno.js');
featureClasses['Parete_marmo'] = require('../features/Parete_marmo.js');
featureClasses['Parete_marmo2'] = require('../features/Parete_marmo2.js');
featureClasses['Parete_marmo3'] = require('../features/Parete_marmo3.js');
featureClasses['Parete_marmo4'] = require('../features/Parete_marmo4.js');
featureClasses['Pavimento_marmo'] = require('../features/Pavimento_marmo.js');
featureClasses['Pavimento_marmo2'] = require('../features/Pavimento_marmo2.js');
featureClasses['Pavimento_marmo_chiaro'] = require('../features/Pavimento_marmo_chiaro.js');
featureClasses['Pavimento_parquet'] = require('../features/Pavimento_parquet.js');
featureClasses['Poltrona_grigia'] = require('../features/Poltrona_grigia.js');
featureClasses['Poltrona_verde'] = require('../features/Poltrona_verde.js');
featureClasses['Poltrona_grigia2'] = require('../features/Poltrona_grigia2.js');
featureClasses['Porta_legno'] = require('../features/Porta_legno.js');
featureClasses['Portapenne'] = require('../features/Portapenne.js');
featureClasses['Postazione'] = require('../features/Postazione.js');
featureClasses['Quadro'] = require('../features/Quadro.js');
featureClasses['Quadro2'] = require('../features/Quadro2.js');
featureClasses['Reception'] = require('../features/Reception.js');
featureClasses['Registro'] = require('../features/Registro.js');
featureClasses['Scaffale'] = require('../features/Scaffale.js');
featureClasses['Sedia_braccioli_rossa'] = require('../features/Sedia_braccioli_rossa.js');
featureClasses['Sedia_braccioli_verde'] = require('../features/Sedia_braccioli_verde.js');
featureClasses['Sedia_ufficio'] = require('../features/Sedia_ufficio.js');
featureClasses['Tabellone'] = require('../features/Tabellone.js');
featureClasses['Tavolino_rotondo'] = require('../features/Tavolino_rotondo.js');
featureClasses['Tavolo_bianco'] = require('../features/Tavolo_bianco.js');
featureClasses['Telefono'] = require('../features/Telefono.js');
featureClasses['Wc'] = require('../features/Wc.js');
featureClasses['Wc2'] = require('../features/Wc2.js');

function capitaliseFirstLetter(featureClass) {
	return featureClass.charAt(0).toUpperCase() + featureClass.slice(1);
}

// (3) public/exported things
var self = module.exports = {
	generateFeature: function(feature) {
		var newFeature;
		var featureClass = capitaliseFirstLetter(feature.properties.class);
		if (featureClass in featureClasses) {
			newFeature = new featureClasses[featureClass](feature);
		} else {
			newFeature = new featureClasses['Feature'](feature);
		}
		return newFeature;
	}
}; //close module.exports