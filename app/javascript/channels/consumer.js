// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import { createConsumer } from "@rails/actioncable"

export default createConsumer()

// // Specify a different URL to connect to
// createConsumer('https://ws.example.com/cable')

// // Use a function to dynamically generate the URL
// createConsumer(getWebSocketURL)

// function getWebSocketURL {
//   const token = localStorage.get('auth-token')
//   return `https://ws.example.com/cable?token=${token}`
// }
