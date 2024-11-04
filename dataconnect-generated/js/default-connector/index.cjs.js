const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'practica_firebase_productos',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

