import { defineField, defineType } from 'sanity'

export const keyPoint = defineType({
  name: 'keyPoint',
  title: 'Lesson key point',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Key point',
      type: 'string',
      validation: (rule) => rule.required().max(180),
    }),
  ],
  preview: {
    select: { title: 'text' },
  },
})
