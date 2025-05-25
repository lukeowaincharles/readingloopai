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
      <div key={i} className="p-4 flex flex-col items-center bg-white border-2 border-teal-500 rounded-lg text-center shadow-lg w-full md:w-[25%]">
        {item.icon && <PrismicNextImage className="w-10 h-10" field={item.icon} />}
        {item.title && <h2 className="text-xl font-bold py-4">{item.title}</h2>}
        {item.description && <p className="text-zinc-600">{item.description}</p>}
      </div>
    );
  });
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-8 pb-[128] bg-green-50"
    >
      <Container>
        <div className="flex flex-wrap justify-center gap-4">
          {IconFeatureContent}
        </div>
      </Container>
    </section>
  );
};

export default IconFeatureGrid;
