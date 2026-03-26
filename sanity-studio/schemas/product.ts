import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g. deep-groove-ball-bearing-6200)',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Ball Bearings, Roller Bearings, Lubricants, Seals',
      options: {
        list: [
          { title: 'Ball Bearings', value: 'Ball Bearings' },
          { title: 'Roller Bearings', value: 'Roller Bearings' },
          { title: 'Lubricants', value: 'Lubricants' },
          { title: 'Bushes', value: 'Bushes' },
          { title: 'Auto Parts', value: 'Auto Parts' },
          { title: 'Journal & Tilting Pad Bearings', value: 'Journal & Tilting Pad Bearings' },
          { title: 'Adaptor Sleeves', value: 'Adaptor Sleeves' },
          { title: 'Seals', value: 'Seals' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subcategory',
      title: 'Subcategory',
      type: 'string',
      description: 'Optional - e.g. Deep Groove Ball Bearings, Greases',
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{ type: 'productSpecification' }],
      description: 'Technical specifications (e.g. Inner Diameter: 10 mm)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Product description for the website',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})
