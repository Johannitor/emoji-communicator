import React from 'react';
import useEmojiVariant from '../../hooks/useEmojiVariant';
import { emojiVariantSelectOptions } from '../../util/emoji/variantSelectOptions';

export function VariantSelect() {
  const { variant, setVariant } = useEmojiVariant();

  return (
    <select
      className="p-2 border border-gray-500 rounded w-32"
      value={variant}
      onChange={(e) => {
        setVariant(Number(e.target.value));
      }}>
      {emojiVariantSelectOptions.map((variant) => (
        <option key={variant.value} value={variant.value}>
          {variant.label}
        </option>
      ))}
    </select>
  );
}
