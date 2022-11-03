const Page = require('./page');

class FindACausePage extends Page {
  get searchInput() {
    return $('#sagc-hero-search-input');
  }

  get searchResults() {
    return $('#sagc-hero-search-input-auto-suggest');
  }

  get submitButton() {
    return $('#sagc-hero-search-submit');
  }

  async fillInSearchInput(cause) {
    await this.searchInput.click();
    await this.searchInput.setValue(cause);
  }

  async selectCause(number) {
    await this.searchResults.$$('li')[number - 1].click();
    await this.submitButton.click();
  }
}

module.exports = new FindACausePage();
