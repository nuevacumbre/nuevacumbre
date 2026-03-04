import ContactForm from './ContactForm.vue'

describe('<ContactForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ContactForm)
  })
})