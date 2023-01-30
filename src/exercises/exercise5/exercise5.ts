import axios from "axios";

interface IpAddressData {
  country: string;
  as: string;
  ip: string;
}

export const fetchIpAddresses = async (
  ipAddresses: string[]
): Promise<IpAddressData[]> => {
  try {
    const responses = await Promise.all(
      ipAddresses.map(async (address) => {
        const resposne = await axios.get(
          `http://ip-api.com/json/${address}?fields=country,as,query`
        );
        const { country, as, query: ip } = resposne.data;
        return { country, as, ip };
      })
    );
    return responses;
  } catch (error) {
    return Promise.reject(error);
  }
};
