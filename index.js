const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the bot
const client = new Client({
    authStrategy: new LocalAuth()
});

// Show the QR code in the terminal
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('SCAN THIS QR CODE WITH YOUR WHATSAPP:');
});

// Message when the bot is ready
client.on('ready', () => {
    console.log('Legend-Turbo-V1 is ONLINE!');
});

// Simple test command
client.on('message', message => {
	if(message.body === '.test') {
		message.reply('System active. Legend-Turbo-V1 is running.');
	}
});

client.initialize();
