import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Container from "@/components/container";

/**
 * Props for `IconFeatureGrid`.
 */
export type IconFeatureGridProps =
  SliceComponentProps<Content.IconFeatureGridSlice>;

/**
 * Component for "IconFeatureGrid" Slices.
 */
const IconFeatureGrid: FC<IconFeatureGridProps> = ({ slice }) => {
  const IconFeatureContent = slice.primary.features.map((item, i) => {
    return (
      <div key={i} className="p-4">
        <PrismicNextImage field={item.icon} />
        <PrismicRichText field={item.title} />
        <PrismicRichText field={item.description} />
      </div>
    );
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* @TODO: This may need to change, flex might be a better option */}
          {IconFeatureContent}
        </div>
      </Container>
    </section>
  );
};

export default IconFeatureGrid;
