export {}
describe("app", () => {
  it("redirects to /movies on load", () => {
    cy.visit("http://localhost:3000/");
    cy.url().should("include", "/movies");
  });

  it("navigates to movie details when a movie item is clicked", () => {
    let movieItem = cy.get('a[class*="movie_item_link"]').first();

    let movieDetailsUrl = cy.$$(".movie_item_link").attr("href");

    movieItem.click();
    cy.url().should("include", movieDetailsUrl);
  });

  // function to simulate the chrome offline
  const goOffline = () => {
    cy.log("**go offline**")
      .then(() => {
        return Cypress.automation("remote:debugger:protocol", {
          command: "Network.enable",
        });
      })
      .then(() => {
        return Cypress.automation("remote:debugger:protocol", {
          command: "Network.emulateNetworkConditions",
          params: {
            offline: true,
            latency: -1,
            downloadThroughput: -1,
            uploadThroughput: -1,
          },
        });
      });
  };

  it("show the No Network Alert when internet connection is lost", () => {
    goOffline();

    cy.get(".offline_container").contains(
      "Network is Offline. Now using cached data"
    );
  });
});
