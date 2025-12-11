import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteContent',
  title: 'Site Images',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (e.g. "Main Site Images")',
      type: 'string',
    },
    // --- HOME PAGE ---
    defineField({
      name: 'heroImage',
      title: 'Home: Main Hero Background',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'forHerImage',
      title: 'Home: For Her Collection',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'forHimImage',
      title: 'Home: For Him Collection',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'unisexImage',
      title: 'Home: Unisex Collection',
      type: 'image',
      options: { hotspot: true },
    }),
    // --- ABOUT PAGE ---
    defineField({
      name: 'aboutHeroImage',
      title: 'About: Hero Background',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'founderImage',
      title: 'About: Founder Portrait',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
})