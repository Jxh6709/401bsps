import siteConfig from '../../../config/_siteConfig'
import { createPagination, createMeta, createAll } from './helper'
const rootDir = `${__dirname}/../../..`
const generateStopApi = () => {
  const contentDir = `${rootDir}/content/stops`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/stops.json`
  const metaFile = `${apiDir}/stops-meta.json`
  const pages = siteConfig.posts.perPage
  const doneMessage = `{totalNumber} stops generated in stops API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/stops`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateStopApi
