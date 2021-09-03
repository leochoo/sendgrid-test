require("dotenv").config();

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "leochoodev@gmail.com", // Change to your recipient
  from: "leochootest@gmail.com", // Change to your verified sender
  templateId: "d-43903e12c5a241959a1f60bb52564a59",
  dynamicTemplateData: {
    subject: "Testing Templates",
    name: "Some One",
    city: "Denver",
  },
};

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode);
    console.log(response[0].headers);
  })
  .catch((error) => {
    console.error(error);
  });
