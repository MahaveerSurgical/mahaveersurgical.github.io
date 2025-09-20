// EmailJS initialization
(function() {
  emailjs.init("AV3h8pejUn9Ce9_2N"); 
})();

function sendMail(event) {
  event.preventDefault();

  // Set timestamp before sending
  document.getElementById("time").value = new Date().toLocaleString();

  emailjs.sendForm(
      "service_jnmc0ua",
      "template_ybvg95h", 
    event.target
)
    .then(() => {
      alert("Message sent successfully ✅");
      event.target.reset();
    }, (error) => {
      alert("Failed to send message ❌ " + JSON.stringify(error));
    });
}