# Produce and Consume Messages with RabbitMQ using Node.js

This guide demonstrates how to produce and consume messages with RabbitMQ using Node.js and the `amqplib` library.

## Prerequisites

- Node.js installed on your system
- RabbitMQ server running locally or accessible

## Installation

1. Clone this repository:

```sh
   git clone https://github.com/jmrashed/produce-consume-rabbitmq-nodejs.git
```

2. Navigate to the project directory:

```bash
cd produce-consume-rabbitmq-nodejs
```

3. Install dependencies using npm:

```bash
npm install
```

# Usage

## Produce Messages

1. Open a terminal and navigate to the project directory.

2. Run the producer script to send a message to the RabbitMQ queue:

```bash
node produce.js
```

3. The producer will send a message to the queue. You should see an output similar to:

```bash
Message sent: Hello, RabbitMQ!Your random number is 0.6063381710564761
```



## Consume Messages

1. Open a terminal and navigate to the project directory.

2. Run the producer script to send a message to the RabbitMQ queue:

```bash
node consume.js
```

3. The producer will send a message to the queue. You should see an output similar to:

```bash
Received message: Hello, RabbitMQ!Your random number is 0.6063381710564761
```


# Contributing
Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

Fork the repository.

Create a new branch: `git checkout -b feature/new-feature`.

Make changes and commit: `git commit -am 'Add new feature'`.

Push to the branch: `git push origin feature/new-feature`.

Create a pull request.


# License
This project is licensed under the [MIT License](MIT.md) - see the LICENSE file for details.
