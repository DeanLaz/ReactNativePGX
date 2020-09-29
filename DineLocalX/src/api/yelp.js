import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer b7UWs-OzCerW8XRVcYG43zPoxOuj9yAYYmrZKFTzO12A2Jp0W__7HMsGtG5v9rSatiJviylOutmSXuRxrwqdYTmUlr37qJJw_6z_N-qj9raKsWIBsOTaPRORfHJyX3Yx",
  },
});
