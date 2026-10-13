import { defineQuery } from 'next-sanity'

export const COURSE_CATALOG_QUERY = defineQuery(`
  *[_type == "course"] | order(popular desc, title asc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage{alt, asset->{_id, url, metadata{dimensions}}},
    level,
    price,
    popular,
    studentCount,
    category->{_id, title, "slug": slug.current},
    instructor->{_id, name, "slug": slug.current, photo{asset->{_id, url}}},
    "moduleCount": count(modules),
    "lessonCount": count(modules[].lessons[])
  }
`)

export const COURSE_BY_SLUG_QUERY = defineQuery(`
  *[_type == "course" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    coverImage{alt, asset->{_id, url, metadata{dimensions}}},
    level,
    price,
    popular,
    studentCount,
    category->{_id, title, "slug": slug.current},
    instructor->{_id, name, "slug": slug.current, photo{asset->{_id, url}}},
    learningOutcomes[]{_key, icon, title, description},
    modules[]{
      _key,
      title,
      summary,
      lessons[]{
        _key,
        "lesson": @->{
          _id,
          title,
          "slug": slug.current,
          duration,
          thumbnail{alt, asset->{_id, url, metadata{dimensions}}}
        }
      }
    }
  }
`)

export const LESSON_BY_SLUG_QUERY = defineQuery(`
  *[_type == "lesson" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    videoUrl,
    thumbnail{alt, asset->{_id, url, metadata{dimensions}}},
    duration,
    freePreview,
    studentCount,
    notes,
    keyPoints[]{_key, text},
    proTip,
    resources[]{_key, type, title, description, url},
    "instructor": *[_type == "course" && references(^._id)][0].instructor->{
      _id, name, "slug": slug.current, photo{asset->{_id, url}}
    },
    "course": *[_type == "course" && references(^._id)][0]{
      _id,
      title,
      "slug": slug.current,
      "modules": modules[]{
        _key,
        title,
        "lessonIds": lessons[]._ref
      }
    }
  }
`)

export const INSTRUCTOR_BY_SLUG_QUERY = defineQuery(`
  *[_type == "instructor" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo{alt, asset->{_id, url, metadata{dimensions}}},
    expertise,
    bio,
    "courses": *[_type == "course" && references(^._id)]{
      _id,
      title,
      "slug": slug.current,
      summary,
      level,
      coverImage{alt, asset->{_id, url}}
    }
  }
`)

export const CATEGORY_LIST_QUERY = defineQuery(`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`)

export const CATEGORY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "courses": *[_type == "course" && references(^._id)]{
      _id,
      title,
      "slug": slug.current,
      summary,
      level,
      coverImage{alt, asset->{_id, url}}
    }
  }
`)
