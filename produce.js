const amqp = require('amqplib');

const AMQP_URL = 'amqp://localhost'; // RabbitMQ server URL

async function produceMessage() {
    try {
        const connection = await amqp.connect(AMQP_URL);
        const channel = await connection.createChannel();

        const queueName = 'test_queue';
        const randomNumber =Math.random();
        const message = 'Hello, RabbitMQ!' +  'Your random number is ' + randomNumber;

        await channel.assertQueue(queueName);
        channel.sendToQueue(queueName, Buffer.from(message));

        console.log(`Message sent: ${message}`);

        await channel.close();
        await connection.close();
    } catch (error) {
        console.error('Error producing message:', error);
    }
}

produceMessage();
