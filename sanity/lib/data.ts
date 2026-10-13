import 'server-only'

import type {
  CATEGORY_BY_SLUG_QUERY_RESULT,
  CATEGORY_LIST_QUERY_RESULT,
  COURSE_BY_SLUG_QUERY_RESULT,
  COURSE_CATALOG_QUERY_RESULT,
  INSTRUCTOR_BY_SLUG_QUERY_RESULT,
  LESSON_BY_SLUG_QUERY_RESULT,
} from '../../sanity.types'

import { getSanityClient } from './client'
import {
  CATEGORY_BY_SLUG_QUERY,
  CATEGORY_LIST_QUERY,
  COURSE_BY_SLUG_QUERY,
  COURSE_CATALOG_QUERY,
  INSTRUCTOR_BY_SLUG_QUERY,
  LESSON_BY_SLUG_QUERY,
} from './queries'

const FETCH_OPTIONS = { next: { revalidate: 60 } }

export type CourseCatalogItem = COURSE_CATALOG_QUERY_RESULT[number]
export type CourseDetail = NonNullable<COURSE_BY_SLUG_QUERY_RESULT>
export type LessonDetail = NonNullable<LESSON_BY_SLUG_QUERY_RESULT>
export type InstructorDetail = NonNullable<INSTRUCTOR_BY_SLUG_QUERY_RESULT>
export type CategorySummary = CATEGORY_LIST_QUERY_RESULT[number]
export type CategoryDetail = NonNullable<CATEGORY_BY_SLUG_QUERY_RESULT>

export async function getCourses() {
  return getSanityClient().fetch(
    COURSE_CATALOG_QUERY,
    {},
    FETCH_OPTIONS,
  )
}

export async function getCourseBySlug(slug: string) {
  return getSanityClient().fetch(
    COURSE_BY_SLUG_QUERY,
    { slug },
    FETCH_OPTIONS,
  )
}

export async function getLessonBySlug(slug: string) {
  return getSanityClient().fetch(
    LESSON_BY_SLUG_QUERY,
    { slug },
    FETCH_OPTIONS,
  )
}

export async function getInstructorBySlug(slug: string) {
  return getSanityClient().fetch(
    INSTRUCTOR_BY_SLUG_QUERY,
    { slug },
    FETCH_OPTIONS,
  )
}

export async function getCategories() {
  return getSanityClient().fetch(
    CATEGORY_LIST_QUERY,
    {},
    FETCH_OPTIONS,
  )
}

export async function getCategoryBySlug(slug: string) {
  return getSanityClient().fetch(
    CATEGORY_BY_SLUG_QUERY,
    { slug },
    FETCH_OPTIONS,
  )
}
