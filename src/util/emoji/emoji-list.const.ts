import { Emoji, EmojiVariants } from './emoji.type';

const emojiVariantMapping: Record<EmojiVariants, string> = {
  [EmojiVariants.APPLE]: 'apple/237/',
  [EmojiVariants.WHATSAPP]: 'whatsapp/238/',
  [EmojiVariants.MICROSOFT]: 'microsoft/209/',
  [EmojiVariants.TWITTER]: 'twitter/259/',
  [EmojiVariants.GOOGLE]: 'google/241/',
  [EmojiVariants.OPENMOJI]: 'openmoji/252/',
};

const baseUrl =
  'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/';

export const emojiList: (variant: EmojiVariants) => Emoji[] = (variant) => {
  const emojiSrc = (file: string) => {
    return baseUrl + emojiVariantMapping[variant] + file;
  };

  return [
    {
      id: 'smiley_smile',
      src: emojiSrc('smiling-face-with-smiling-eyes_1f60a.png'),
    },
    {
      id: 'smiley_frown',
      src: emojiSrc('slightly-frowning-face_1f641.png'),
    },
    {
      id: 'smiley_angry',
      src: emojiSrc('pouting-face_1f621.png'),
    },
    {
      id: 'smiley_shocked',
      src: emojiSrc('face-screaming-in-fear_1f631.png'),
    },
    {
      id: 'smiley_hearts',
      src: emojiSrc('smiling-face-with-heart-shaped-eyes_1f60d.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc(
          'smiling-face-with-heart-eyes_1f60d.png'
        ),
        [EmojiVariants.TWITTER]: emojiSrc(
          'smiling-face-with-heart-eyes_1f60d.png'
        ),
        [EmojiVariants.OPENMOJI]: emojiSrc(
          'smiling-face-with-heart-eyes_1f60d.png'
        ),
      },
    },
    {
      id: 'smiley_raised',
      src: emojiSrc('face-with-one-eyebrow-raised_1f928.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('face-with-raised-eyebrow_1f928.png'),
        [EmojiVariants.TWITTER]: emojiSrc('face-with-raised-eyebrow_1f928.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc(
          'face-with-raised-eyebrow_1f928.png'
        ),
      },
    },
    {
      id: 'smiley_shush',
      src: emojiSrc('face-with-finger-covering-closed-lips_1f92b.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('shushing-face_1f92b.png'),
        [EmojiVariants.TWITTER]: emojiSrc('shushing-face_1f92b.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('shushing-face_1f92b.png'),
      },
    },
    {
      id: 'smiley_sleep',
      src: emojiSrc('sleeping-face_1f634.png'),
    },
    {
      id: 'smiley_party',
      src: emojiSrc('face-with-party-horn-and-party-hat_1f973.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('partying-face_1f973.png'),
        [EmojiVariants.TWITTER]: emojiSrc('partying-face_1f973.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('partying-face_1f973.png'),
      },
    },
    {
      id: 'waving',
      src: emojiSrc('waving-hand-sign_1f44b.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('waving-hand_1f44b.png'),
        [EmojiVariants.TWITTER]: emojiSrc('waving-hand_1f44b.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('waving-hand_1f44b.png'),
      },
    },
    {
      id: 'thumbs_up',
      src: emojiSrc('thumbs-up-sign_1f44d.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('thumbs-up_1f44d.png'),
        [EmojiVariants.TWITTER]: emojiSrc('thumbs-up_1f44d.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('thumbs-up_1f44d.png'),
      },
    },
    {
      id: 'thumbs_down',
      src: emojiSrc('thumbs-down-sign_1f44e.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('thumbs-down_1f44e.png'),
        [EmojiVariants.TWITTER]: emojiSrc('thumbs-down_1f44e.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('thumbs-down_1f44e.png'),
      },
    },
    {
      id: 'ok',
      src: emojiSrc('ok-hand-sign_1f44c.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('ok-hand_1f44c.png'),
        [EmojiVariants.TWITTER]: emojiSrc('ok-hand_1f44c.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('ok-hand_1f44c.png'),
      },
    },
    {
      id: 'fingers_crossed',
      src: emojiSrc('hand-with-index-and-middle-fingers-crossed_1f91e.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('crossed-fingers_1f91e.png'),
        [EmojiVariants.TWITTER]: emojiSrc('crossed-fingers_1f91e.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('crossed-fingers_1f91e.png'),
      },
    },
    {
      id: 'raised_hand_man',
      src: emojiSrc('man-raising-hand_1f64b-200d-2642-fe0f.png'),
    },
    {
      id: 'raised_hand_woman',
      src: emojiSrc('woman-raising-hand_1f64b-200d-2640-fe0f.png'),
    },
    {
      id: 'cake',
      src: emojiSrc('shortcake_1f370.png'),
    },
    {
      id: 'on_fire',
      src: emojiSrc('fire_1f525.png'),
    },
    {
      id: 'hourglass',
      src: emojiSrc('hourglass-with-flowing-sand_23f3.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('hourglass-not-done_23f3.png'),
        [EmojiVariants.TWITTER]: emojiSrc('hourglass-not-done_23f3.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('hourglass-not-done_23f3.png'),
      },
    },
    {
      id: 'party',
      src: emojiSrc('party-popper_1f389.png'),
    },
    {
      id: 'magic',
      src: emojiSrc('crystal-ball_1f52e.png'),
    },
    {
      id: 'telephone',
      src: emojiSrc('telephone-receiver_1f4de.png'),
    },
    {
      id: 'microphone',
      src: emojiSrc('microphone_1f3a4.png'),
    },
    {
      id: 'walking_woman',
      src: emojiSrc('woman-walking_1f6b6-200d-2640-fe0f.png'),
    },
    {
      id: 'walking_man',
      src: emojiSrc('man-walking_1f6b6-200d-2642-fe0f.png'),
    },
    {
      id: 'joker',
      src: emojiSrc('playing-card-black-joker_1f0cf.png'),
      altSrc: {
        [EmojiVariants.GOOGLE]: emojiSrc('joker_1f0cf.png'),
        [EmojiVariants.TWITTER]: emojiSrc('joker_1f0cf.png'),
        [EmojiVariants.OPENMOJI]: emojiSrc('joker_1f0cf.png'),
      },
    },
    {
      id: 'wtf',
      src: emojiSrc('exclamation-question-mark_2049.png'),
    },
  ];
};
