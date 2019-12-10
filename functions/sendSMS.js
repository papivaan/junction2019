const querystring = require("querystring");
const axios = require("axios");
require("dotenv").config();

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a queryString

  const key = Buffer.from(
    `${process.env.ELKS_USER}:${process.env.ELKS_PASSWD}`
  ).toString("base64");

  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const params = JSON.parse(event.body);
  console.log(params);

  const { phone, order, description, employeeId } = params;

  const message = {
    from: "STARA",
    to: phone,
    message: `You have a new task for work ${order}: ${description}
    
Check all your tasks at: https://oke-app.netlify.com/employee/${employeeId}
    `
  };

  const postData = querystring.stringify(message);

  // Send message with SMS
  return axios({
    url: "https://api.46elks.com/a1/SMS",
    method: "POST",
    headers: {
      Authorization: "Basic " + key,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: postData
  })
    .then(() => ({
      statusCode: 200,
      body: `SMS has been sent to worker`
    }))
    .catch(error => ({
      statusCode: 422,
      body: `Oops! Something went wrong. ${error}`
    }));
};
