export default class Quote {

  constructor(data) {
    this.id = data.quote.id
    this.body = data.quote.body
    this.author = data.quote.author
    this.authorlink = data.quote.author_permalink
  }

  get Template() {
    return `
  <h5 class="text-light">"${this.body}"</h5>
  <p class="text-light">${this.author}</p>
  `
  }
}