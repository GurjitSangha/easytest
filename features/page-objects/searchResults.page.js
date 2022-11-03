const Page = require('./page');

class SearchResultsPage extends Page {
  get results() {
    return $('#primarySearchResults');
  }

  async findCause(cause) {
    await this.results.$$(`p=${cause}`)[0].isExisting();
  }
}

module.exports = new SearchResultsPage();
