test("Fetch All Pharmacy Order", async () => {
  const res = await fetch("http://localhost:3000/order");
  const data = await res.json();

  data.forEach((order: any) => {
    expect(order).toEqual(
      expect.objectContaining({
        orderId: expect.any(String),
        pharmacyId: expect.any(String),
      })
    );
  });
});

test("Fetch Health Mart Pharmacy Order", async () => {
  const res = await fetch("http://localhost:3000/order/healthmart");
  const data = await res.json();

  data.forEach((order: any) => {
    expect(order).toEqual(
      expect.objectContaining({
        orderId: expect.any(String),
        pharmacyId: expect.any(String),
      })
    );
  });
});

test("Fetch Care Plus Pharmacy Order", async () => {
  const res = await fetch("http://localhost:3000/order/careplus");
  const data = await res.json();

  data.forEach((order: any) => {
    expect(order).toEqual(
      expect.objectContaining({
        orderId: expect.any(String),
        pharmacyId: expect.any(String),
      })
    );
  });
});

test("Fetch Quick Care Pharmacy Order", async () => {
  const res = await fetch("http://localhost:3000/order/quickcare");
  const data = await res.json();

  data.forEach((order: any) => {
    expect(order).toEqual(
      expect.objectContaining({
        orderId: expect.any(String),
        pharmacyId: expect.any(String),
      })
    );
  });
});

test("Create Health Mart Pharmacy Order and check with orderId", async () => {
  const createRes = await fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pharmacyId: "healthmart",
      product: "Painkiller",
      quantity: 1,
      customerInfo: {
        custName: "John",
        custAddress: "123 Street",
        custCity: "City",
        custState: "State",
        custZipcode: "12345",
        custCountry: "Country",
      },
    }),
  });
  const order = await createRes.json();

  expect(order).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  const res = await fetch(
    `http://localhost:3000/order/${order.pharmacyId}/${order.orderId}`
  );
  const data = await res.json();

  expect(data).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  expect(data.orderId).toEqual(order.orderId);
  expect(data.pharmacyId).toEqual(order.pharmacyId);
});

test("Create Care Plus Pharmacy Order and check with orderId", async () => {
  const createRes = await fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pharmacyId: "careplus",
      product: "Painkiller",
      quantity: 1,
      customerInfo: {
        custName: "John",
        custAddress: "123 Street",
        custCity: "City",
        custState: "State",
        custZipcode: "12345",
        custCountry: "Country",
      },
    }),
  });
  const order = await createRes.json();

  expect(order).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  const res = await fetch(
    `http://localhost:3000/order/${order.pharmacyId}/${order.orderId}`
  );
  const data = await res.json();

  expect(data).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  expect(data.orderId).toEqual(order.orderId);
  expect(data.pharmacyId).toEqual(order.pharmacyId);
});

test("Create Quick Care Pharmacy Order and check with orderId", async () => {
  const createRes = await fetch("http://localhost:3000/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pharmacyId: "quickcare",
      product: "Painkiller",
      quantity: 1,
      customerInfo: {
        custName: "John",
        custAddress: "123 Street",
        custCity: "City",
        custState: "State",
        custZipcode: "12345",
        custCountry: "Country",
      },
    }),
  });
  const order = await createRes.json();

  expect(order).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  const res = await fetch(
    `http://localhost:3000/order/${order.pharmacyId}/${order.orderId}`
  );
  const data = await res.json();

  expect(data).toEqual(
    expect.objectContaining({
      orderId: expect.any(String),
      pharmacyId: expect.any(String),
    })
  );

  expect(data.orderId).toEqual(order.orderId);
  expect(data.pharmacyId).toEqual(order.pharmacyId);
});
