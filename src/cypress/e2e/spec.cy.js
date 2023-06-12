/// <reference types="cypress" />

describe("Acesso ao formulário 'Novo Requerimento'", () => {
  const navigateToNovoRequerimento = function () {
    cy.visit("localhost:3000/requerimentos");
    cy.get(".btn").click();

    cy.url().should("include", "/novo");
  };

  it("Deve retornar à rota '/requerimentos' ao desistir de solicitar novo requerimento", () => {
    navigateToNovoRequerimento();

    cy.get(".btn-light").click();

    cy.url().should("include", "/requerimentos");
  });

  it("Deve retornar à rota '/requerimentos' após solicitação de novo requerimento (sem selecionar as opções)", () => {
    navigateToNovoRequerimento();

    cy.get("#inputArgumentacao").type(
      "Gostaria de solicitar uma revisão da minha nota da A1."
    );

    cy.get(".btn-danger").click();

    cy.url().should("include", "/requerimentos");
  });

  it("Deve retornar à rota '/requerimentos' após solicitação de novo requerimento", () => {
    navigateToNovoRequerimento();

    cy.get("#inputDisciplina").select(
      "ADS030 - Manutenção de Software e DevOps"
    );
    cy.get("#inputProva").select("A1");
    cy.get("#inputArgumentacao").type(
      "Gostaria de solicitar uma revisão da minha nota da A1."
    );

    cy.get(".btn-danger").click();

    cy.url().should("include", "/requerimentos");
  });
});
