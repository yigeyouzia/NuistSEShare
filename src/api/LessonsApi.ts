import request from '@/util/request'
import type { AllLessons, LessonLink } from '@/types/Lessons'

enum API {
  AllLessons_URL = '/lessons/get',
  LessonDownload_URL = '/lessons/downloadbyid/',
}

export function reqAllLessons() {
  return request.get<any, AllLessons>(API.AllLessons_URL)
}

export function LessonDownload(id: number) {
  return request.get<any, LessonLink>(API.LessonDownload_URL + id)
}
