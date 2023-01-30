import axios from "axios";

export const fetchIpAddresses = async (ipAddresses) => {
  try {
    const responses = await Promise.all(
      ipAddresses.map(async (address) => {
        const resposne = await axios.get(
          `http://ip-api.com/json/${address}?fields=country,as,query`
        );
        const { country, as, query: ip } = resposne.data;
        return { ip, country, as };
      })
    );
    return responses;
  } catch (error) {
    return Promise.reject(error);
  }
};
