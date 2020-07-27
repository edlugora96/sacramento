const feathers = require("@feathersjs/feathers")
const socketio = require("@feathersjs/socketio-client")
const io = require("socket.io-client")
const auth = require("@feathersjs/authentication-client")

const socket = io("https://propertysonoma.com", {
  extraHeaders: {
    credentials: "include",
  },
})
const app = feathers()
const options = {
  header: "Authorization",
  path: "/authentication",
  jwtStrategy: "jwt",
  entity: "user",
  service: "users",
  cookie: "feathers-jwt",
  storageKey: "feathers-jwt",
  storage: process.browser && window.localStorage,
}

// Setup the transport (Rest, Socket, etc.) here
app.configure(
  socketio(socket, {
    timeout: 15000,
  })
)

// Available options are listed in the "Options" section
app.configure(auth(options))

export default app
