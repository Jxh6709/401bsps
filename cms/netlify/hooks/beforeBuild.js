import generatePostApi from '../build/generate-post-api'
import generateCategoryApi from '../build/generate-category-api'
import copyStaticToDist from '../build/copy-static-to-dist'
import generateTrailApi from '../build/generateTrailApi'

export default () => {
  generatePostApi()
  generateCategoryApi()
  generateTrailApi()
  copyStaticToDist()
}
