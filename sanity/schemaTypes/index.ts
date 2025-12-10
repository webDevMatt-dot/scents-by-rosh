import { type SchemaTypeDefinition } from 'sanity'
import product from './product' // Import the file you just created

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product], // Add 'product' to this array
}