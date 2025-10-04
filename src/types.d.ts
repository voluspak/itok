export interface MyApiResponse {
  success: boolean
  action: string
  source?: 'cache' | 'api'
  count: number
  cache_size?: number
  cache_age?: number
  message?: string
  videos: TikTokVideo[]
}

export interface TikTokVideo {
  aweme_id: string
  video_id: string
  region: string
  title: string
  cover: string
  ai_dynamic_cover: string
  origin_cover: string
  duration: number
  play: string
  wmplay: string
  size: number
  wm_size: number
  music: string
  music_info: MusicInfo
  play_count: number
  digg_count: number
  comment_count: number
  share_count: number
  download_count: number
  create_time: number
  anchors: any
  anchors_extras: string
  is_ad: boolean
  commerce_info: CommerceInfo
  commercial_video_info: string
  item_comment_settings: number
  mentioned_users: string
  author: Author
  is_top: number
}

export interface MusicInfo {
  id: string
  title: string
  play: string
  cover: string
  author: string
  original: boolean
  duration: number
  album: string
}

export interface CommerceInfo {
  adv_promotable: boolean
  branded_content_type: number
}

export interface Author {
  id: string
  unique_id: string
  nickname: string
  avatar: string
}

export interface VideoDetail {
  like_count?: number
  comment_count?: number
  view_count?: number
  share_count?: number
  play_count?: number
  digg_count?: number
}

export interface Comment {
  cid?: string
  comment_id?: string
  text?: string
  user?: {
    nickname?: string
    unique_id?: string
    avatar?: string
  }
  create_time?: number
  digg_count?: number
}
