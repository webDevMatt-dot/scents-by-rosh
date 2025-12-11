import { type SchemaTypeDefinition } from 'sanity'
import product from './product' 
import siteContent from './siteContent' // Import the new file

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, siteContent], // Add it to the list
}