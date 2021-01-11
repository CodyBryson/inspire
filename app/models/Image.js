export default class Image {

  constructor(data) {
    this.id = data.id
    this.url = data.url
  }

  get Template() {
    return `
    "background: linear-gradient(rgba(0, 0, 0, 0.5),rgba(0,0,0,0.5)),url(${this.url});"
  `
  }
}