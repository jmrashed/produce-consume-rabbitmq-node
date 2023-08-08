const amqp = require('amqplib');

const AMQP_URL = 'amqp://localhost'; // RabbitMQ server URL

async function consumeMessages() {
    try {
        const connection = await amqp.connect(AMQP_URL);
        const channel = await connection.createChannel();

        const queueName = 'test_queue';

        await channel.assertQueue(queueName);

        console.log('Waiting for messages. To exit, press Ctrl+C.');

        channel.consume(queueName, (message) => {
            if (message) {
                console.log(`Received message: ${message.content.toString()}`);
                channel.ack(message); // Acknowledge the message
            }
        });
    } catch (error) {
        console.error('Error consuming messages:', error);
    }
}

consumeMessages();
