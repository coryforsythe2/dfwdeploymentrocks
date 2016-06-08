var jid="592502_dfwdeploymentrocks-cforsythe2";
var roomPassword="";
var room="dfwdeploymentrocks-cforsythe2";


var wobot = require('wobot');

var b = new wobot.Bot({
  jid: jid+'@chat.hipchat.com/bot',
  password: roomPassword
});

b.connect();


b.onConnect(function() {
  console.log(' -=- > Connect');
  this.join(room+'@conf.hipchat.com');

  // fetch and print roster contacts (buddy list)
  this.getRoster(function(err, items, stanza) {
    if (err) {
      console.log(' -=- > Error getting roster: ' + err);
      return;
    }
    items.forEach(function(item) {
      console.log(' -=- > Roster contact: ' + item.name);
    });
  });
});

b.onInvite(function(roomJid, fromJid, reason) {
  console.log(' -=- > Invite to ' + roomJid + ' by ' + fromJid + ': ' + reason);
  this.join(roomJid);
});

b.onPing(function() {
  console.log(' -=- > Ping? Pong!');
});

b.onDisconnect(function() {
  console.log(' -=- > Disconnect');
});

b.onError(function(error, text, stanza) {
  console.log(' -=- > Error: ' + error + ' (' + text + ')');
});

b.onMessage(function(channel, from, message) {
  console.log(' -=- > ' + from + '@' + channel + ' said: ' + message);
  b.message(jid+'@conf.hipchat.com',"Oh really? is that important to you?");
});

b.onPrivateMessage(function(jid, message) {
  console.log(' -=- > ' + jid + ' pm\'d: ' + message);
});
