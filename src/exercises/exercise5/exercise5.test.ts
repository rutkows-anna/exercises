import { fetchIpAddresses } from "./exercise5";

describe("fetchIpAddresses", () => {
  it("returns the expected data for valid IP addresses", async () => {
    expect.assertions(1);
    const data = await fetchIpAddresses([
      "1.1.1.1",
      "2.2.2.2",
      "3.3.3.3",
      "4.4.4.4",
    ]);
    expect(data).toEqual([
      { country: "Australia", as: "AS13335 Cloudflare, Inc.", ip: "1.1.1.1" },
      { country: "France", as: "AS3215 Orange S.A.", ip: "2.2.2.2" },
      { country: "Germany", as: "", ip: "3.3.3.3" },
      {
        country: "United States",
        as: "AS3356 Level 3 Parent, LLC",
        ip: "4.4.4.4",
      },
    ]);
  });
});
