describe("Pizza Order Form - Multiple Ingredients Selection Test", () => {
  beforeEach(() => {
    // Testten önce sayfayı ziyaret et
    cy.visit("http://localhost:5173/order");
  });

  it("should allow selecting multiple ingredients", () => {
    const ingredientsToSelect = ["Pepperoni", "Tavuk Izgara", "Mısır"];

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

    cy.get('[data-cy="extras"]').should("be.visible");
  });
});
