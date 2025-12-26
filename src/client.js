import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'c9ne3cpn', 
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2025-12-26', 
})