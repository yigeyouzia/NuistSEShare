//定义全部接口返回数据都拥有ts类型
export interface ResponseData {
    code: number
    message: string
    ok: boolean
}

export interface LessonDetail {
    file_id: Number,
    file_belongs_to_lesson: String,
    file_name: String,
    file_type: String,
    file_size: Number,
    file_path: String,
    file_belong_to_term: Number
}

export interface AllLessons extends ResponseData {
    data: LessonDetail[]
}

export interface LessonLink extends ResponseData {
    download_link: String
}