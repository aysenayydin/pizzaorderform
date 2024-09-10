import { slowCypressDown } from "cypress-slow-down";
// slow down each command by the default amount
// which is 1 second
slowCypressDown(100);
describe("Submit Test", () => {
  beforeEach(() => {
    // Testten önce sayfayı ziyaret et
    cy.visit("http://localhost:5173/order");
  });

  it("should allow selecting multiple ingredients", () => {
    const ingredientsToSelect = ["Pepperoni", "Tavuk Izgara", "Mısır", "Kekik"];

    // Malzemeleri sırayla seç
    ingredientsToSelect.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`).check();
    });

    // Seçilen malzemelerin kontrol edildiğinden emin ol
    ingredientsToSelect.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`).should(
        "be.checked"
      );
    });
    cy.get('[data-cy="breadType"]').select("İnce hamur");
    cy.get('[data-cy="size"]').check("Küçük");
    cy.get('[data-cy="name"]').type("Mehmet");
    cy.get('[data-cy="submit"]').click();
  });
});
