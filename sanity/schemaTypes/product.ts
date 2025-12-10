import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'inspiredBy',
      title: 'Inspired By (e.g. Dior Sauvage)',
      type: 'string',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'For Her', value: 'for-her' },
          { title: 'For Him', value: 'for-him' },
          { title: 'Unisex', value: 'unisex' },
        ],
      },
    }),
    defineField({
      name: 'initial',
      title: 'Big Initial Letter (e.g. "B")',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true, // Allows cropping
      },
    }),
  ],
})