import { defineField, defineType } from 'sanity'

export const learningOutcome = defineType({
  name: 'learningOutcome',
  title: 'Learning outcome',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon name',
      type: 'string',
      description: 'Optional icon identifier for the web application.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.required().max(200),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'description' },
  },
})
