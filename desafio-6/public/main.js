const socket = io();

socket.on('messages', data => {
  let html = '';

  data.forEach(message => {
    html = `${html}
    <li><em>${message.author}</em> says: ${message.text}</li>`
  });

  document.getElementById('chatContent').innerHTML = `${html}`;
});

socket.on('message-added', message => {
  let html = document.getElementById('chatContent').innerHTML;
console.log({html})
  html = `${html}
  <li><em>${message.author}</em> says: ${message.text}</li>`;

  document.getElementById('chatContent').innerHTML = `${html}`;
});

const sendMessage = (that) => {
  const message = {
    author: that.author.value,
    text: that.text.value
  };
  socket.emit('new-message', message);
};
