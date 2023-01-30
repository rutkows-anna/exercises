import axios from "axios";

interface IpApiResponse {
  country: string;
  as: string;
  query: string;
}

interface IpAddressData extends Omit<IpApiResponse, "query"> {
  ip: IpApiResponse["query"];
}

export const fetchIpAddresses = async (
  ipAddresses: string[]
): Promise<IpAddressData[]> => {
  try {
    const response = await axios.post(
      `http://ip-api.com/batch?fields=as,query,country`,
      ipAddresses
    );
    return response.data.map(({ country, as, query }: IpApiResponse) => ({
      country,
      as,
      ip: query,
    }));
  } catch (error) {
    return Promise.reject(error);
  }
};

// EXERCISE COMMENT
// I would improve the code by using a BATCH endpoint with a POST method,
// allowing multiple IP addresses to be queried in a single request.
