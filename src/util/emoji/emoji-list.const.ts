import { Emoji } from './emoji.type';

const baseUrl =
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/';

export const emojiList: Emoji[] = [
  {
    id: 'smiley_smile',
    src: baseUrl + 'smiling-face-with-smiling-eyes_1f60a.png',
  },
  {
    id: 'smiley_frown',
    src: baseUrl + 'white-frowning-face_2639.png',
  },
  {
    id: 'smiley_angry',
    src: baseUrl + 'pouting-face_1f621.png',
  },
  {
    id: 'smiley_shocked',
    src: baseUrl + 'face-screaming-in-fear_1f631.png',
  },
  {
    id: 'smiley_hearts',
    src: baseUrl + 'smiling-face-with-heart-shaped-eyes_1f60d.png',
  },
  {
    id: 'smiley_raised',
    src: baseUrl + 'face-with-one-eyebrow-raised_1f928.png',
  },
  {
    id: 'smiley_shush',
    src: baseUrl + 'face-with-finger-covering-closed-lips_1f92b.png',
  },
  {
    id: 'smiley_sleep',
    src: baseUrl + 'sleeping-face_1f634.png',
  },
  {
    id: 'smiley_party',
    src: baseUrl + 'face-with-party-horn-and-party-hat_1f973.png',
  },
  {
    id: 'waving',
    src: baseUrl + 'waving-hand-sign_1f44b.png',
  },
  {
    id: 'thumbs_up',
    src: baseUrl + 'thumbs-up-sign_1f44d.png',
  },
  {
    id: 'thumbs_down',
    src: baseUrl + 'thumbs-down-sign_1f44e.png',
  },
  {
    id: 'ok',
    src: baseUrl + 'ok-hand-sign_1f44c.png',
  },
  {
    id: 'fingers_crossed',
    src: baseUrl + 'hand-with-index-and-middle-fingers-crossed_1f91e.png',
  },
  {
    id: 'raised_hand_man',
    src: baseUrl + 'man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png',
  },
  {
    id: 'raised_hand_woman',
    src: baseUrl + 'woman-raising-hand-type-1-2_1f64b-1f3fb-200d-2640-fe0f.png',
  },
  {
    id: 'cake',
    src: baseUrl + 'shortcake_1f370.png',
  },
  {
    id: 'lit',
    src: baseUrl + 'fire_1f525.png',
  },
  {
    id: 'hourglass',
    src: baseUrl + 'hourglass_231b.png',
  },
  {
    id: 'party',
    src: baseUrl + 'party-popper_1f389.png',
  },
  {
    id: 'magic',
    src: baseUrl + 'crystal-ball_1f52e.png',
  },
  { id: 'telephone', src: baseUrl + 'telephone-receiver_1f4de.png' },
  { id: 'microphone', src: baseUrl + 'microphone_1f3a4.png' },
  {
    id: 'walking_woman',
    src: baseUrl + 'woman-walking-type-1-2_1f6b6-1f3fb-200d-2640-fe0f.png',
  },
  {
    id: 'walking_man',
    src: baseUrl + 'man-walking-type-1-2_1f6b6-1f3fb-200d-2642-fe0f.png',
  },
  { id: 'joker', src: baseUrl + 'playing-card-black-joker_1f0cf.png' },
  { id: 'wtf', src: baseUrl + 'exclamation-question-mark_2049.png' },
];
