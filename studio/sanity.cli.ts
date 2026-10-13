import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
  },
  typegen: {
    path: '../sanity/lib/**/*.ts',
    schema: 'schema.json',
    generates: '../sanity.types.ts',
    overloadClientMethods: true,
  },
})
