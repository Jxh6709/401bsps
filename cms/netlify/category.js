import { getMixins } from './mixins'

class Category {
  constructor(axios) {
    this.slug = 'property'
    this.slugPlural = 'properties'
    this.pretty = 'Property'
    this.plural = 'Properties'
    this.axios = axios
  }
}

// Mixins
Object.assign(Category.prototype, getMixins)
export default Category
