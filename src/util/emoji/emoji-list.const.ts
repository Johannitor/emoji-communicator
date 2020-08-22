import { Emoji } from './emoji.type';

export enum EmojiVariants {
  APPLE = 'apple/237/',
  WHATSAPP = 'whatsapp/238/',
  MICROSOFT = 'microsoft/209/',
  // TODO: Find a way to make these work as they have an other image url
  // TWITTER = 'twitter/259/',
  // GOOGLE = 'google/241/',
  // OPENMOJI = 'openmoji/252/',
}

const baseUrl =
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/';

export const emojiList: (variant?: EmojiVariants) => Emoji[] = (
  variant = EmojiVariants.MICROSOFT
) => [
  {
    id: 'smiley_smile',
    src: baseUrl + variant + 'smiling-face-with-smiling-eyes_1f60a.png',
  },
  {
    id: 'smiley_frown',
    src: baseUrl + variant + 'white-frowning-face_2639.png',
  },
  {
    id: 'smiley_angry',
    src: baseUrl + variant + 'pouting-face_1f621.png',
  },
  {
    id: 'smiley_shocked',
    src: baseUrl + variant + 'face-screaming-in-fear_1f631.png',
  },
  {
    id: 'smiley_hearts',
    src: baseUrl + variant + 'smiling-face-with-heart-shaped-eyes_1f60d.png',
  },
  {
    id: 'smiley_raised',
    src: baseUrl + variant + 'face-with-one-eyebrow-raised_1f928.png',
  },
  {
    id: 'smiley_shush',
    src: baseUrl + variant + 'face-with-finger-covering-closed-lips_1f92b.png',
  },
  {
    id: 'smiley_sleep',
    src: baseUrl + variant + 'sleeping-face_1f634.png',
  },
  {
    id: 'smiley_party',
    src: baseUrl + variant + 'face-with-party-horn-and-party-hat_1f973.png',
  },
  {
    id: 'waving',
    src: baseUrl + variant + 'waving-hand-sign_1f44b.png',
  },
  {
    id: 'thumbs_up',
    src: baseUrl + variant + 'thumbs-up-sign_1f44d.png',
  },
  {
    id: 'thumbs_down',
    src: baseUrl + variant + 'thumbs-down-sign_1f44e.png',
  },
  {
    id: 'ok',
    src: baseUrl + variant + 'ok-hand-sign_1f44c.png',
  },
  {
    id: 'fingers_crossed',
    src:
      baseUrl +
      variant +
      'hand-with-index-and-middle-fingers-crossed_1f91e.png',
  },
  {
    id: 'raised_hand_man',
    src:
      baseUrl +
      variant +
      'man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png',
  },
  {
    id: 'raised_hand_woman',
    src:
      baseUrl +
      variant +
      'woman-raising-hand-type-1-2_1f64b-1f3fb-200d-2640-fe0f.png',
  },
  {
    id: 'cake',
    src: baseUrl + variant + 'shortcake_1f370.png',
  },
  {
    id: 'on_fire',
    src: baseUrl + variant + 'fire_1f525.png',
  },
  {
    id: 'hourglass',
    src: baseUrl + variant + 'hourglass_231b.png',
  },
  {
    id: 'party',
    src: baseUrl + variant + 'party-popper_1f389.png',
  },
  {
    id: 'magic',
    src: baseUrl + variant + 'crystal-ball_1f52e.png',
  },
  { id: 'telephone', src: baseUrl + variant + 'telephone-receiver_1f4de.png' },
  { id: 'microphone', src: baseUrl + variant + 'microphone_1f3a4.png' },
  {
    id: 'walking_woman',
    src:
      baseUrl +
      variant +
      'woman-walking-type-1-2_1f6b6-1f3fb-200d-2640-fe0f.png',
  },
  {
    id: 'walking_man',
    src:
      baseUrl + variant + 'man-walking-type-1-2_1f6b6-1f3fb-200d-2642-fe0f.png',
  },
  {
    id: 'joker',
    src: baseUrl + variant + 'playing-card-black-joker_1f0cf.png',
  },
  { id: 'wtf', src: baseUrl + variant + 'exclamation-question-mark_2049.png' },
];
