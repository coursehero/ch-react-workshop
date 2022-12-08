describe('Course Hero main flow', () => {
  it('tests the search functionality', () => {
    // data for mocking the /search endpoint
    const searchData = [
      { value: 'DADA-101', label: 'Defence against Dark Arts' },
      { value: 'MSC 102', label: 'Muddle Studies' },
    ]

    // data for mocking the /doc-info endpoint
    const docInfoData = {
      department: 'DADA-101',
      name: 'Defence against Dark Arts',
      related: ['APP', 'HOW'],
      school: 'Hogwarts School of Witchcraft and Wizardry',
      text: 'Phasellus ultrices elit eget condimentum blandit. Suspendisse facilisis gravida laoreet. Sed sodales lorem eget odio vehicula suscipit. Vestibulum sit amet est in ligula blandit pulvinar ac a leo. Donec eu ante vitae neque laoreet rhoncus sed non dolor. Donec tempor, ex bibendum ultrices eleifend, risus lectus placerat nulla, at aliquam nulla nulla a nisl. Mauris vitae maximus augue. Sed convallis porta leo, non suscipit est iaculis sit amet. Curabitur accumsan tincidunt pretium. Ut dictum, metus sed lobortis interdum, enim lorem aliquam neque, eu convallis lectus turpis ut ante. Mauris odio est, posuere a nulla a, sagittis luctus felis. In semper leo vel commodo fringilla. Integer porta purus odio. Fusce mattis eget tellus at porta.',
    }

    // TODO:

    // 1: mock the two endpoints

    cy.visit('/')

    // 2: search for a text on the page

    // 3: test for accessibility violations using aXe

    // 4: type 'a' into the search box and select the first option

    // 5: verify that you're redirected to DocLanding
    //    search for the Unlock button
  })
})
