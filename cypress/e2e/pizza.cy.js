describe("Pizza Order Form - Name Input Test", () => {
  beforeEach(() => {
    // Testten önce sayfayı ziyaret et
    cy.visit("http://localhost:5173/order");
  });

  it("should allow entering a name into the input field", () => {
    // İsim alanına metin gir
    cy.get('[data-cy="name"]').type("Hasan");

    // Girilen metnin doğru olduğundan emin ol
    cy.get('[data-cy="name"]').should("have.value", "Hasan");
  });
});
