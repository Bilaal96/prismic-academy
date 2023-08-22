import Button from '@/components/Button';
import { PrismicRichText } from '@prismicio/react';

import { bgColors } from '@/utils/tailwind-utils';

/**
 * @typedef {import("@prismicio/client").Content.TextSliceSlice} TextSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSliceSlice>} TextSliceProps
 * @param {TextSliceProps}
 */
const TextSlice = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className={`${
          slice.primary.text_align ?? 'text-center'
        } py-24 gap-16 inline-flex flex-col items-center w-screen ${
          slice.primary.background_colour
            ? bgColors[slice.primary.background_colour]
            : bgColors.Grey
        }`.trim()}
      >
        <div className="container gap-6 flex flex-col items-center">
          <PrismicRichText field={slice.primary.text_field} />
          {slice.variation === 'callToActionButton' && (
            <Button
              link={slice.primary.button_link}
              label={slice.primary.button_label}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default TextSlice;
