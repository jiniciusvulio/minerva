import { UserIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const instructor = defineType({
  name: 'instructor',
  title: 'Instructor',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'expertise',
      title: 'Expertise',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (rule) => rule.required().min(1).max(8),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 6,
      validation: (rule) => rule.required().max(2000),
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'expertise.0', media: 'photo' },
  },
})
