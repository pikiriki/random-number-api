# Random Number API

A small Node.js server that responds with a random integer from 1 to 100, including both endpoints.

## Requirements

Node.js must be installed.

No additional packages are required.

## Run

Open a terminal inside the project folder.

Run: `node server.js`

Visit: http://localhost:3000

Stop the server with Control + C in its terminal.

## How it works

1. Node starts the server and listens on port 3000.
2. The browser sends a request.
3. The request handler calculates a random integer.
4. String(...) converts the number into text.
5. res.end(...) sends the text and finishes the response.
6. The browser displays the response.

## Random-number formula

`Math.floor(Math.random() * 100) + 1`

- Math.random() produces a value from 0 up to, but excluding, 1.
- Multiplying by 100 expands that range.
- Math.floor(...) produces an integer from 0 to 99.
- Adding 1 shifts the range to 1 through 100.

The calculation runs inside the handler, once per request.
Random values can repeat.

## Scope

The same handler responds to every requested path.
Responses contain plain number text, not an HTML page.