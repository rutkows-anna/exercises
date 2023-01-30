import { fetchIpAddresses } from "./exercise6";

describe("fetchIpAddresses", () => {
  it("returns the expected data for valid IP addresses - invalid addresses are not returned", async () => {
    expect.assertions(1);
    const data = await fetchIpAddresses([
      "1111",
      "2.2.2.2",
      "3.3.3.3",
      "4.4.4.4",
    ]);
    expect(data).toEqual([
      {
        country: "France",
        as: "AS3215 Orange S.A.",
        ip: "2.2.2.2",
        status: "success",
      },
      { country: "Germany", as: "", ip: "3.3.3.3", status: "success" },
      {
        country: "United States",
        as: "AS3356 Level 3 Parent, LLC",
        ip: "4.4.4.4",
        status: "success",
      },
    ]);
  });
});
