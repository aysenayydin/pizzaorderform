import { slowCypressDown } from "cypress-slow-down";
// Cypress yavaş çalışması için eklenti
slowCypressDown(400);

describe("Pizza Order Form Tests", () => {
  beforeEach(() => {
    // Testten önce sayfayı ziyaret et
    cy.visit("http://localhost:5173/order");
  });

  it("name input check", () => {
    cy.get('[data-cy="name"]').type("Hasan");
    cy.get('[data-cy="name"]').should("have.value", "Hasan");
  });

  it("multiple ingredients check", () => {
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

  it("form submit", () => {
    cy.get('[data-cy="size"]').check("Küçük");

    cy.get('[data-cy="breadType"]').select("İnce hamur");

    const ingredientsToSelect = ["Pepperoni", "Tavuk Izgara", "Mısır", "Kekik"];
    ingredientsToSelect.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`).check();
    });

    ingredientsToSelect.forEach((ingredient) => {
      cy.get(`input[type="checkbox"][value="${ingredient}"]`).should(
        "be.checked"
      );
    });
    cy.get('[data-cy="name"]').type("Mehmet");
    cy.get('[data-cy="submit"]').click();
    cy.url().should("contains", "/success");
  });

  it("error control", () => {
    // Submit butonunun başlangıçta devre dışı olduğunu kontrol et
    cy.get('[data-cy="submit"]').should("be.disabled");

    // Geçersiz değer girerek hata mesajı tetikle
    cy.get('[data-cy="name"]').clear().type("Me");
    cy.get('[data-cy="name-error"]').should(
      "contain",
      "Lütfen adınızı en az 3 harf giriniz."
    );

    cy.get('[data-cy="extras"]').check(["Pepperoni", "Tavuk Izgara", "Mısır"]); // 3malzeme seç
    cy.get('[data-cy="extras-error"]').should(
      "contain",
      "Lütfen en az 4 en fazla 10 malzeme seçiniz."
    );
  });
});
