import Post from './post'
import Category from './category'
import Trail from './trail'
import LifeCycleHooks from './hooks/lifeCycle'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.trail = new Trail(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
