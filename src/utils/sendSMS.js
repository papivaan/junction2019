import axios from "axios";

export default ({ phone, orderId, description, employeeId }) => {
  return axios({
    url: "/.netlify/functions/sendSMS",
    method: "POST",
    data: {
      phone,
      order: orderId,
      description,
      employeeId
    }
  })
    .then(() => console.log("Great success!"))
    .catch(e => console.error(e));
};
