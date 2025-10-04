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

export const COMMENTS = [
  {
    id: 1,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.',
    time: '2d',
    likes: 441
  },
  {
    id: 2,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Jovencillo emponzoñado de whisky: ¡Qué figurota exhibe!',
    time: '2d',
    likes: 441
  },
  {
    id: 3,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú',
    time: '2d',
    likes: 441
  },
  {
    id: 4,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.',
    time: '2d',
    likes: 441
  },
  {
    id: 5,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Benjamín pidió una bebida de kiwi y fresa. Noé, sin vergüenza, la más exquisita champaña del menú',
    time: '2d',
    likes: 441
  },
  {
    id: 6,
    profile: {
      link: 'https://github.com/voluspak',
      avatar: 'https://p16-amd-va.tiktokcdn.com/img/tos-maliva-avt-0068/3ad69a1807d5ae8c1764411e3f6d1316~c5_720x720.jpeg',
      name: 'IvanChoooo'
    },
    comment: 'Un jugoso zumo de piña y kiwi bien frío es exquisito y no lleva alcohol.',
    time: '2d',
    likes: 441
  }
]

// API Configuration
export const RAPIDAPI_HOST: string = 'tiktok-scraper7.p.rapidapi.com'
export const RAPIDAPI_BASE_URL: string = `https://${RAPIDAPI_HOST}`
export const API_ENDPOINT: string = '/api/hello'

// Cache Configuration
export const CACHE_DURATION: number = 5 * 60 * 1000 // 5 minutes in milliseconds
export const DEFAULT_TTL: number = 60 * 1000 // 1 minute in milliseconds
export const DEFAULT_TTL_MS: number = 30 * 1000 // 30 seconds in milliseconds
export const VIDEO_POOL_SIZE: number = 20
export const MIN_CACHE_SIZE: number = 5 // Minimum videos in cache before calling API

// API Actions
export const API_ACTIONS = {
  LIST: 'list',
  DETAIL: 'detail',
  COMMENTS: 'comments'
} as const

export type ApiAction = typeof API_ACTIONS[keyof typeof API_ACTIONS]

// Regions
export const REGIONS = ['us', 'gb', 'ca', 'au', 'de', 'fr', 'it', 'es'] as const

export type Region = typeof REGIONS[number]

// Viewport (Mobile dimensions - iPhone 14 Pro Max)
export const MOBILE_WIDTH = 430
export const MOBILE_HEIGHT = 932

// Styles
export const BOTTOM_NAV_ITEMS_STYLE: string = 'flex flex-col justify-center items-center'
