test("Fetch All Pharmacy Order", async () => {
  const res = await fetch("http://localhost:3000/pharmacy");
  const data = await res.json();

  data.forEach((order: any) => {
    expect(order).toEqual(
      expect.objectContaining({
        integrationName: expect.any(String),
        name: expect.any(String),
        address: expect.any(String),
        city: expect.any(String),
        state: expect.any(String),
        zipcode: expect.any(String),
        country: expect.any(String),
        fax: expect.any(String),
        phone: expect.any(String),
      })
    );
  });
});
