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

export const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes in milliseconds
export const VIDEO_POOL_SIZE = 20
