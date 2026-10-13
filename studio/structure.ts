import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Minerva')
    .items([
      S.documentTypeListItem('course').title('Courses'),
      S.documentTypeListItem('lesson').title('Lessons'),
      S.divider(),
      S.documentTypeListItem('instructor').title('Instructors'),
      S.documentTypeListItem('category').title('Categories'),
    ])
