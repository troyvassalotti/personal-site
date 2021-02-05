const {
  html
} = require('common-tags');

module.exports = function () {
  return html `
  <form class="contact-form" name="contactForm" netlify netlify-honeypot="bot-field" action="/pages/success/">
    <label style="display: none;">Don’t fill this out: <input name="bot-field"></label>
    <label for="name">Name<input name="name" type="text" id="name" required></label>
    <label for="email">Email<input name="email" type="email" id="email" required></label>
    <label for="message">Message<textarea name="message" id="message" required placeholder="Say hi!"></textarea></label>
    <input type="submit" value="Submit" class="button" id="submit">
  </form>`
}