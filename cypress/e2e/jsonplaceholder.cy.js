describe('Pruebas JSONPlaceholder', () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  it('GET /posts debe devolver 200 y lista de posts', () => {
    cy.request(`${baseUrl}/posts`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.length.above(0);
    });
  });

  it('GET /posts/1 debe devolver post con id 1', () => {
    cy.request(`${baseUrl}/posts/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(1);
    });
  });

  it('POST /posts debe crear un nuevo post', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/posts`,
      body: {
        title: 'Nuevo Post',
        body: 'Contenido del post',
        userId: 1
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('PUT /posts/1 debe actualizar un post', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/posts/1`,
      body: {
        id: 1,
        title: 'Actualizado',
        body: 'Contenido actualizado',
        userId: 1
      },
      headers: {
        'Content-type': 'application/json'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('DELETE /posts/1 debe devolver 200 o 204', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/posts/1`
    }).then((response) => {
      expect([200, 204]).to.include(response.status);
    });
  });
});
