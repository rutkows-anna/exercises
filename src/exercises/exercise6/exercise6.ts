import axios from "axios";

interface IpAddressData {
  country: string;
  as: string;
  ip: string;
  status: "success" | "fail";
}

export const fetchIpAddresses = async (
  ipAddresses: string[]
): Promise<IpAddressData[]> => {
  try {
    const responses = await Promise.all(
      ipAddresses.map(async (address) => {
        const resposne = await axios.get(
          `http://ip-api.com/json/${address}?fields=country,as,query,status`
        );
        const { country, as, status, query: ip } = resposne.data;
        return { country, as, status, ip } as IpAddressData;
      })
    );
    return responses.filter(({ status }) => status !== "fail");
  } catch (error) {
    return Promise.reject(error);
  }
};

// EXERCISE COMMENT
// I would include an additional 'status' field in the request, which has a value of either
// 'success' or 'fail'. If the value is 'fail', it will not be included in the return.
