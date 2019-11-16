import axios from "axios";

export default ({ phone, orderId, description }) => {
  return axios({
    url: "/.netlify/functions/sendSMS",
    method: "POST",
    data: {
      phone,
      order: orderId,
      description
    }
  });
};
