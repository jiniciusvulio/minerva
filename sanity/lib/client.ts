import 'server-only'

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

let client: ReturnType<typeof createClient> | undefined

export function getSanityClient() {
  if (client) return client

  const token = process.env.SANITY_API_READ_TOKEN
  if (!token) {
    throw new Error('Missing environment variable: SANITY_API_READ_TOKEN')
  }

  client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    perspective: 'published',
    useCdn: false,
  })

  return client
}
