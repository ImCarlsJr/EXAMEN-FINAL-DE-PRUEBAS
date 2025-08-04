describe('Automation Exercise - E2E Simuladas', () => {
  const BASE_URL = 'https://automationexercise.com';

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('1. GET /products desde frontend simulado', () => {
    cy.contains('Products').click();
    cy.url().should('include', '/products');
    cy.get('.product-image-wrapper').should('have.length.greaterThan', 0);
  });

  it('2. POST /signup (registro de usuario)', () => {
    const name = 'Test' + Date.now();
    const email = test${Date.now()}@mail.com;

    cy.contains('Signup / Login').click();
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    cy.get('#id_gender1').check();
    cy.get('input[data-qa="password"]').type('Password123');
    cy.get('select[data-qa="days"]').select('10');
    cy.get('select[data-qa="months"]').select('June');
    cy.get('select[data-qa="years"]').select('1995');
    cy.get('[data-qa="first_name"]').type('Saul');
    cy.get('[data-qa="last_name"]').type('Velez');
    cy.get('[data-qa="company"]').type('PUCEM');
    cy.get('[data-qa="address"]').type('Calle 1');
    cy.get('[data-qa="address2"]').type('Calle 2');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('Manabi');
    cy.get('[data-qa="city"]').type('Portoviejo');
    cy.get('[data-qa="zipcode"]').type('110101');
    cy.get('[data-qa="mobile_number"]').type('09765431355')
    cy.get('button[data-qa="create-account"]').click();

    cy.contains('Account Created!').should('exist');
    cy.contains('Continue').click();
    cy.contains(Logged in as ${name}).should('exist');
  });

  it('3. PUT simulado (editar perfil)', () => {
    // No existe PUT real, pero simulamos editar y guardar
    const name = 'Test' + Date.now();
    const email = test${Date.now()}@mail.com;
    cy.get(':nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type(name);
    cy.get('[data-qa="login-password"]').type('Password123');
    cy.contains('Delete Account').should('exist'); // Página logueada
  });

  it('4. DELETE /cart (eliminar producto del carrito)', () => {
    cy.contains('Products').click();
    cy.get('.product-overlay').first().invoke('show');
    cy.get('.add-to-cart').first().click();
    cy.contains('Continue Shopping').click();
    cy.contains('Cart').click();

    cy.get('.cart_quantity_delete').first().click();
    cy.contains('Cart is empty').should('exist');
  });

  it('5. Navegación entre endpoints', () => {
    cy.contains('Products').click();
    cy.url().should('include', '/products');
    cy.contains('Cart').click();
    cy.url().should('include', '/view_cart');
    cy.contains('Signup / Login').click();
    cy.url().should('include', '/login');
    cy.contains('Contact us').click();
    cy.url().should('include', '/contact_us');
  });

  it('6. Validación de DOM', () => {
    cy.contains('Products').click();
    cy.get('.product-image-wrapper').first().should('be.visible');
    cy.get('input#search_product').should('exist');
    cy.get('footer').should('be.visible');
  });

  it('7. Interacción con formularios', () => {
    cy.contains('Contact us').click();
    cy.get('input[data-qa="name"]').type('Carlos');
    cy.get('input[data-qa="email"]').type('carlos@mail.com');
    cy.get('input[data-qa="subject"]').type('Consulta');
    cy.get('textarea[data-qa="message"]').type('Este es un mensaje de prueba.');
    cy.get('input[data-qa="submit-button"]').click();
    cy.contains('Success!').should('exist');
  });

  it('8. Manejo de errores (login fallido)', () => {
    cy.contains('Signup / Login').click();
    cy.get('input[data-qa="login-email"]').type('fake@mail.com');
    cy.get('input[data-qa="login-password"]').type('wrongpassword');
    cy.get('button[data-qa="login-button"]').click();
    cy.contains('Your email or password is incorrect!').should('exist');
  });

  it('9. Verificación de tiempos (carga de productos)', () => {
    const start = Date.now();
    cy.contains('Products').click();
    cy.get('.product-image-wrapper').should('exist').then(() => {
      const duration = Date.now() - start;
      expect(duration).to.be.lessThan(1000); // 1 segundo
    });
  });

  it('10. Validación encadenada (agregar → ver en carrito)', () => {
    cy.contains('Products').click();
    cy.get('.product-overlay').first().invoke('show');
    cy.get('.add-to-cart').first().click();
    cy.contains('Continue Shopping').click();
    cy.contains('Cart').click();

    cy.get('.cart_description').should('exist');
  });
});
