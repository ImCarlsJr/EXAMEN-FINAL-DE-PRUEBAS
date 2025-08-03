describe('Pruebas Restful Booker', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';
  let token = '';

  it('GET /ping debe responder 201 o 200', () => {
    cy.request(`${baseUrl}/ping`).then((response) => {
      expect([200, 201]).to.include(response.status);
    });
  });

  it('POST /auth debe devolver token', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/auth`,
      body: {
        username: 'admin',
        password: 'password123'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
      token = response.body.token;
    });
  });

  it('POST /booking debe crear una reserva', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/booking`,
      body: {
        firstname: 'Carlos',
        lastname: 'Test',
        totalprice: 150,
        depositpaid: true,
        bookingdates: {
          checkin: '2025-08-01',
          checkout: '2025-08-03'
        },
        additionalneeds: 'Desayuno'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('bookingid');
    });
  });
});
