const getInputElement = require('../helpers/get-input-element')

module.exports = function () {
  this.When(/^I visit the main page$/, async () => {
    return driver.get(shared.host.siteRoot);
  });

  // Expect one input with name=keyword, enabled, type=text
  this.Then(/^I should see the keyword search box$/, async () => {
    const input_elements = await getInputElement('name', 'keyword')
    expect(input_elements.length).to.equal(1)
    
    // check the attributes are correct
    const keyword_box = input_elements[0]

    const type_attribute = await keyword_box.getAttribute('type')
    expect(type_attribute).to.equal('text');

    const disabled_attribute = await keyword_box.getAttribute('disabled')
    expect(disabled_attribute).to.be.null;
  });

  // Expect one input with placeholder="Start typing an address", enabled, type=text
  this.Then(/^I should see the location search box$/, async () => {
    const input_elements = await getInputElement('name', 'address-autosuggest')
    expect(input_elements.length).to.equal(1)

    // check the attributes are correct
    const location_box = input_elements[0]
    
    const type_attribute = await location_box.getAttribute('type')
    expect(type_attribute).to.equal('text');

    const disabled_attribute = await location_box.getAttribute('disabled')
    expect(disabled_attribute).to.be.null;
  });

  // expect more than one category button
  this.Then(/^I should see some category selectors$/, async () => {
    categories = await getInputElement('css', '.category__container > .category__button');
    expect(categories.length).to.be.above(1);
  });
}