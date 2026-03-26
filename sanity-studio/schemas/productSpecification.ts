import { defineField, defineType } from 'sanity'

export const productSpecification = defineType({
  name: 'productSpecification',
  title: 'Product Specification',
  type: 'object',
  fields: [
    defineField({
      name: 'key',
      title: 'Specification Name',
      type: 'string',
      description: 'e.g. Inner Diameter, Weight, Dynamic Load Rating',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. 10 mm, 0.04 kg',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { key: 'key', value: 'value' },
    prepare({ key, value }) {
      return {
        title: key,
        subtitle: value,
      }
    },
  },
})
