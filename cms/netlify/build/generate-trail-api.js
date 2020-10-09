import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateTrailApi = () => {
  const contentDir = `${rootDir}/content/trails`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/trails.json`
  const metaFile = `${apiDir}/trails-meta.json`
  const pages = siteConfig.posts.perPage
  const doneMessage = `{totalNumber} trails generated in trails API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/trails`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateTrailApi
