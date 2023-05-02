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

export const OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'tiktok-all-in-one.p.rapidapi.com'
  }
}
