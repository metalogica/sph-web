const sendEmail = () => {
  const name = document.querySelector('.contact-us-name').value;
  const email = document.querySelector('.contact-us-email').value;
  const phone = document.querySelector('.contact-us-phone').value;
  const company = document.querySelector('.contact-us-company').value;
  const body = document.querySelector('.contact-us-body').value;
  
  Email.send({
    SecureToken: '1b22389b-2bdb-4f73-a377-02702bcf3f22',

    To: 'enquiries@speirhunter.com',
    From: email,
    Subject: `New Enquiry From: ${name}`,
    Body: `
      Name: ${name}<br>
      Phone Number: ${phone}<br>
      Company: ${company}<br>
      Email: ${email}<br>
      <br>
      <br>
      ${body}
    `,
  })
  .then(() => alert('Thank you for your enquiry! We will be in touch shortly.'))
  .catch(() => alert('Sorry, something went wrong! Please email us using your standard email client at: enquiries@speirhunter.com'))
}

const sendButton =  document.querySelector('.contact-us-button');
sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  sendEmail();
});
