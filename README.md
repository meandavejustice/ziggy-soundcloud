# ziggy-soundcloud

[![NPM](https://nodei.co/npm/ziggy-soundcloud.png?downloads=true)](https://npmjs.org/package/ziggy-soundcloud)

soundcloud plugin for [ziggy](https://github.com/jarofghosts/ziggy) irc bot.

## Usage

_You need to have a clientID from soundcloud._

``` javascript
var Ziggy = require('ziggy')
var scPlugin = require('ziggy-soundcloud')

var ziggy = Ziggy({
  server: 'irc.freenode.org',
  nickname: 'scbot',
  plugins: [{
    name: 'soundcloud plugin',
    setup: scPlugin,
    settings: {"soundcloud-client-id": "your-soundcloud-client-id"}
  }],
  channels: ['#butts']
})

ziggy.start()
```

Once the client connects, chatterz can invoke the command with `!sc {track or artist query}`.

For starters you can try: `!sc philip grass`
