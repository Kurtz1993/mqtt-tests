var mqtt		=	require('mqtt');
var client	=	mqtt.connect('mqtt://localhost:1883', {
	will: { topic: '/LW', payload: 'The client ran away...' }
});

client.on('connect', function () {
	console.log('Connected to server');
	client.subscribe('/test');
	console.log('Suscribed to /test');
});

client.on('message', function (topic, message) {
	console.log('Message received:');
	console.log(message.toString());
});