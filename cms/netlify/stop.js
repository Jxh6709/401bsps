import { getMixins } from './mixins'

class Stop {
  constructor(axios) {
    this.slug = 'stop'
    this.slugPlural = 'stops'
    this.pretty = 'Stop'
    this.plural = 'Stops'
    this.axios = axios
    this.editUrl = '/admin/#/collections/stops/entries'
  }
  getEditUrl(slug) {
    return `${this.editUrl}/${slug}`
  }
}

// Mixins
Object.assign(Stop.prototype, getMixins)

export default Stop
