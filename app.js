//Discord
require('dotenv').config();
const { Client, IntentsBitField } = require("discord.js");
const client = new Client({
    intents: [
      IntentsBitField.Flags.Guilds,
      IntentsBitField.Flags.GuildMembers,
      IntentsBitField.Flags.GuildMessages,
      IntentsBitField.Flags.MessageContent,
    ],
  });

//Express
const express = require('express')
const { createServer } = require('node:http');
const { join } = require('node:path');
const app = express()
const port = 3000

//Socket
const http = require('http')
const server = createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(join(__dirname + '/index.html'))
})
  
const players = {}


io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('send message', (msg) => {
        client.channels.cache.get('1181854731728076813').send(msg)
    })
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

console.log('Server loaded')

client.on('ready', (c) => {
    console.log(`${c.user.tag} is online.`);
})

client.login(process.env.TOKEN);

//general chanel: 1181854731728076810
// js server : 1181854731728076810