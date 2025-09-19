export const ICONS_COLORS_REFERENCE = {
  likeIcon: 'LIKE_ACTIVE',
  bookmarkIcon: 'BOOKMARK_ACTIVE',
  defaultColor: 'INACTIVE_DEFAULT'
}

export const ICONS_COLORS = {
  [ICONS_COLORS_REFERENCE.likeIcon]: 'text-red-500 fill-red-500',
  [ICONS_COLORS_REFERENCE.defaultColor]: 'text-white fill-white',
  [ICONS_COLORS_REFERENCE.bookmarkIcon]: 'fill-yellow-500'
}

export const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds
export const VIDEO_POOL_SIZE = 20
