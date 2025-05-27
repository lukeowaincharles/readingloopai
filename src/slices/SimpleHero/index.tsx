import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/container";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SimpleHero`.
 */
export type SimpleHeroProps = SliceComponentProps<Content.SimpleHeroSlice>;

/**
 * Component for "SimpleHero" Slices.
 */
const SimpleHero: FC<SimpleHeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-green-50 pt-[40px]"
    >
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <PrismicNextImage className="w-10 h-10" field={slice.primary.icon} />
          <h1 className="text-3xl md:text-6xl font-bold py-5 w-full md:w-[60%]">{slice.primary.title}</h1>
          <p className="pb-5 w-full md:w-[50%] text-zinc-600">{slice.primary.description}</p>
        </div>
      </Container>
    </section>
  );
};

export default SimpleHero;
