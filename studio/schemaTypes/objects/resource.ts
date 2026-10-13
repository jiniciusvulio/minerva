import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const resource = defineType({
  name: 'resource',
  title: 'Lesson resource',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Video', value: 'video' },
          { title: 'Download', value: 'download' },
          { title: 'Website', value: 'website' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({ scheme: ['http', 'https'] }),
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'type' },
  },
})
