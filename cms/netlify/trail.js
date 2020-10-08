import { getMixins } from './mixins'

class Trail {
  constructor(axios) {
    this.slug = 'trail'
    this.slugPlural = 'trails'
    this.pretty = 'Trail'
    this.plural = 'Trails'
    this.axios = axios
    this.editUrl = '/admin/#/collections/trails/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Trail.prototype, getMixins)

export default Trail
