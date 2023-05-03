export interface TiktokVideos {
  awemeList: AwemeList[]
}

export interface AwemeList {
  aweme_id: string
  desc: string
  create_time: number
  author: AwemeListAuthor
  music: AddedSoundMusicInfo
  cha_list: ChaList[] | null
  video: Video
  share_url: string
  user_digged: number
  statistics: Statistics
  status: Status
  rate: number
  text_extra: TextExtra[]
  is_top: number
  label_top: LabelTop
  share_info: ChaListShareInfo
  distance: string
  video_labels: any[]
  is_vr: boolean
  is_ads: boolean
  aweme_type: number
  cmt_swt: boolean
  image_infos: null
  risk_infos: RiskInfos
  is_relieve: boolean
  sort_label: string
  position: null
  uniqid_position: null
  author_user_id: number
  bodydance_score: number
  geofencing: null
  is_hash_tag: number
  is_pgcshow: boolean
  region: string
  video_text: any[]
  collect_stat: number
  label_top_text: null
  group_id: string
  prevent_download: boolean
  nickname_position: null
  challenge_position: null
  item_comment_settings: number
  with_promotional_music: boolean
  long_video: null
  item_duet: number
  item_react: number
  desc_language: string
  interaction_stickers: InteractionSticker[] | null
  misc_info: string
  origin_comment_ids: null
  commerce_config_data: null
  distribute_type: number
  video_control: VideoControl
  has_vs_entry: boolean
  need_vs_entry: boolean
  anchors: Anchor[] | null
  hybrid_label: null
  with_survey: boolean
  geofencing_regions: null
  aweme_acl: AwemeACL
  cover_labels: null
  mask_infos: any[]
  search_highlight: null
  playlist_blocked: boolean
  green_screen_materials: null
  interact_permission: InteractPermission
  question_list: null
  content_desc: string
  content_desc_extra: any[]
  products_info: null
  follow_up_publish_from_id: number
  disable_search_trending_bar: boolean
  music_begin_time_in_ms: number
  music_end_time_in_ms: number
  item_distribute_source: string
  item_source_category: number
  branded_content_accounts: null
  is_description_translatable: boolean
  follow_up_item_id_groups: string
  is_text_sticker_translatable: boolean
  text_sticker_major_lang: string
  original_client_text: OriginalClientText
  music_selected_from: string
  tts_voice_ids: null
  reference_tts_voice_ids: null
  voice_filter_ids: null
  reference_voice_filter_ids: null
  music_title_style: number
  animated_image_info: AnimatedImageInfo
  added_sound_music_info: AddedSoundMusicInfo
  origin_volume: string
  music_volume: string
  muf_comment_info_v2: null
  behind_the_song_music_ids: null
  behind_the_song_video_music_ids: null
  video_reply_info?: VideoReplyInfo
  playlist_info?: PlaylistInfo
  stickers?: string
  sticker_detail?: StickerDetail
}

export interface AddedSoundMusicInfo {
  id: number
  id_str: string
  title: string
  author: string
  album: string
  cover_hd: LabelTop
  cover_large: LabelTop
  cover_medium: LabelTop
  cover_thumb: LabelTop
  play_url: LabelTop
  schema_url: string
  source_platform: number
  start_time: number
  end_time: number
  duration: number
  extra: string
  user_count: number
  position: null
  collect_stat: number
  status: number
  offline_desc: string
  owner_id?: string
  owner_nickname: string
  is_original: boolean
  mid: string
  binded_challenge_id: number
  redirect: boolean
  is_restricted: boolean
  author_deleted: boolean
  is_del_video: boolean
  is_video_self_see: boolean
  owner_handle: string
  author_position: null
  prevent_download: boolean
  prevent_item_download_status: number
  external_song_info: ExternalSongInfo[]
  sec_uid?: string
  avatar_thumb?: LabelTop
  avatar_medium?: LabelTop
  avatar_large?: LabelTop
  preview_start_time: number
  preview_end_time: number
  is_commerce_music: boolean
  is_original_sound: boolean
  artists: null
  lyric_short_position: null
  mute_share: boolean
  tag_list: null
  is_author_artist: boolean
  is_pgc: boolean
  search_highlight: null
  multi_bit_rate_play_info: null
  tt_to_dsp_song_infos: null
  recommend_status: number
  strong_beat_url?: LabelTop
}

export interface LabelTop {
  uri: string
  url_list: string[]
  width: number
  height: number
  data_size?: number
}

export interface ExternalSongInfo {
  h5_url: string
  partner_name: string
  partner_song_id: string
  external_song_key: string
}

export interface Anchor {
  keyword: string
  id: string
  type: number
  icon: LabelTop
  extra: string
  log_extra: string
  description: string
  thumbnail: LabelTop
  actions: Action[]
  component_key: string
}

export interface Action {
  icon: LabelTop
  schema: string
  action_type: number
}

export interface AnimatedImageInfo {
  type: number
  effect: number
}

export interface AwemeListAuthor {
  uid: string
  short_id: string
  nickname: string
  signature: string
  avatar_thumb: LabelTop
  avatar_medium: LabelTop
  follow_status: number
  is_block: boolean
  custom_verify: string
  unique_id: string
  room_id: number
  authority_status: number
  verify_info: string
  share_info: AuthorShareInfo
  with_commerce_entry: boolean
  verification_type: number
  enterprise_verify_reason: string
  is_ad_fake: boolean
  followers_detail: null
  region: string
  commerce_user_level: number
  platform_sync_info: null
  is_discipline_member: boolean
  secret: number
  prevent_download: boolean
  geofencing: null
  video_icon: LabelTop
  follower_status: number
  comment_setting: number
  duet_setting: number
  download_setting: number
  cover_url: LabelTop[]
  language: string
  item_list: null
  is_star: boolean
  type_label: any[]
  ad_cover_url: null
  comment_filter_status: number
  avatar_168x168: LabelTop
  avatar_300x300: LabelTop
  relative_users: null
  cha_list: null
  sec_uid: string
  need_points: null
  homepage_bottom_toast: null
  can_set_geofencing: null
  white_cover_url: null
  user_tags: null
  bold_fields: null
  search_highlight: null
  mutual_relation_avatars: null
  social_info: string
  events: null
  matched_friend: MatchedFriend
  advance_feature_item_order: null
  advanced_feature_info: null
  user_profile_guide: null
  shield_edit_field_info: null
  can_message_follow_status_list: null
  account_labels: null
}

export interface MatchedFriend {
  video_items: null
}

export interface AuthorShareInfo {
  share_url: string
  share_desc: string
  share_title: string
  share_qrcode_url: LabelTop
  share_title_myself: string
  share_title_other: string
  share_desc_info: string
  now_invitation_card_image_urls: null
}

export interface AwemeACL {
  download_general: DownloadGeneral
  download_mask_panel: DownloadGeneral
  share_list_status: number
  share_general: DownloadGeneral
  platform_list: null
}

export interface DownloadGeneral {
  code: number
  show_type: number
  transcode: number
  mute: boolean
  extra?: string
  toast_msg?: string
}

export interface ChaList {
  cid: string
  cha_name: string
  desc: string
  schema: string
  author: ChaListAuthor
  user_count: number
  share_info: ChaListShareInfo
  connect_music: any[]
  type: number
  sub_type: number
  is_pgcshow: boolean
  collect_stat: number
  is_challenge: number
  view_count: number
  is_commerce: boolean
  hashtag_profile: string
  cha_attrs: null
  banner_list: null
  show_items: null
  search_highlight: null
}

export interface ChaListAuthor {
  followers_detail: null
  platform_sync_info: null
  geofencing: null
  cover_url: null
  item_list: null
  type_label: null
  ad_cover_url: null
  relative_users: null
  cha_list: null
  need_points: null
  homepage_bottom_toast: null
  can_set_geofencing: null
  white_cover_url: null
  user_tags: null
  bold_fields: null
  search_highlight: null
  mutual_relation_avatars: null
  events: null
  advance_feature_item_order: null
  advanced_feature_info: null
  user_profile_guide: null
  shield_edit_field_info: null
  can_message_follow_status_list: null
  account_labels: null
}

export interface ChaListShareInfo {
  share_url: string
  share_desc: string
  share_title: string
  bool_persist: number
  share_title_myself: string
  share_title_other: string
  share_signature_url: string
  share_signature_desc: string
  share_quote: string
  share_desc_info: string
  now_invitation_card_image_urls: null
  share_link_desc?: string
  share_button_display_mode?: number
  button_display_stratege_source?: string
}

export interface InteractPermission {
  duet: number
  stitch: number
  duet_privacy_setting: number
  stitch_privacy_setting: number
  upvote: number
  allow_adding_to_story: number
  allow_create_sticker: AllowCreateSticker
}

export interface AllowCreateSticker {
  status: number
}

export interface InteractionSticker {
  type: number
  index: number
  track_info: string
  attr: string
  text_info?: string
  text_sticker_info?: TextStickerInfo
}

export interface TextStickerInfo {
  text_size: number
  text_color: string
  bg_color: string
  text_language: string
  alignment: number
  source_width: number
  source_height: number
}

export interface OriginalClientText {
  markup_text: string
  text_extra: TextExtra[] | null
}

export interface TextExtra {
  start: number
  end: number
  user_id?: UserID
  type: number
  is_commerce?: boolean
  sub_type?: number
  line_idx?: number
  tag_id?: string
  hashtag_name?: string
  sec_uid?: string
  hashtag_id?: string
}

export enum UserID {
  Empty = '',
  The6653003346419449857 = '6653003346419449857',
  The6777810417679959046 = '6777810417679959046',
  The6988119424722338822 = '6988119424722338822',
}

export interface PlaylistInfo {
  mix_id: string
  name: string
}

export interface RiskInfos {
  vote: boolean
  warn: boolean
  risk_sink: boolean
  type: number
  content: string
}

export interface Statistics {
  aweme_id: string
  comment_count: number
  digg_count: number
  download_count: number
  play_count: number
  share_count: number
  forward_count: number
  lose_count: number
  lose_comment_count: number
  whatsapp_share_count: number
  collect_count: number
}

export interface Status {
  aweme_id: string
  is_delete: boolean
  allow_share: boolean
  allow_comment: boolean
  is_private: boolean
  with_goods: boolean
  private_status: number
  in_reviewing: boolean
  reviewed: number
  self_see: boolean
  is_prohibited: boolean
  download_status: number
}

export interface StickerDetail {
  id: string
  name: string
  children: null
  owner_id: string
  tags: null
  sec_uid: string
  linked_anchors: null
  attributions: null
}

export interface Video {
  play_addr: PlayAddr
  cover: LabelTop
  height: number
  width: number
  dynamic_cover: LabelTop
  origin_cover: LabelTop
  ratio: string
  download_addr: LabelTop
  has_watermark: boolean
  bit_rate: BitRate[]
  duration: number
  play_addr_h264: PlayAddr
  cdn_url_expired: number
  need_set_token: boolean
  CoverTsp: number
  misc_download_addrs?: string
  tags: null
  big_thumbs: null
  play_addr_bytevc1: PlayAddr
  is_bytevc1: number
  meta: string
  source_HDR_type: number
  cover_is_custom?: boolean
}

export interface BitRate {
  gear_name: GearName
  quality_type: number
  bit_rate: number
  play_addr: PlayAddr
  is_bytevc1: number
  dub_infos: null
  HDR_type: string
  HDR_bit: string
}

export enum GearName {
  Adapt540_1 = 'adapt_540_1',
  AdaptLower720_1 = 'adapt_lower_720_1',
  AdaptLowest1080_1 = 'adapt_lowest_1080_1',
  Lower540_1 = 'lower_540_1',
  Lowest540_1 = 'lowest_540_1',
}

export interface PlayAddr {
  uri: string
  url_list: string[]
  width: number
  height: number
  url_key: string
  data_size: number
  file_hash: string
}

export interface VideoControl {
  allow_download: boolean
  share_type: number
  show_progress_bar: number
  draft_progress_bar: number
  allow_duet: boolean
  allow_react: boolean
  prevent_download_type: number
  allow_dynamic_wallpaper: boolean
  timer_status: number
  allow_music: boolean
  allow_stitch: boolean
}

export interface VideoReplyInfo {
  aweme_id: number
  comment_id: number
  alias_comment_id: number
  user_name: string
  comment_msg: string
  comment_user_id: number
  user_avatar: LabelTop
  collect_stat: number
}
