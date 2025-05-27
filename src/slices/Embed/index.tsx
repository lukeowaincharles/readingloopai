import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Container from "@/components/container";

/**
 * Props for `Embed`.
 */
export type EmbedProps = SliceComponentProps<Content.EmbedSlice>;

/**
 * Component for "Embed" Slices.
 */
const Embed: FC<EmbedProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Container>
        <div dangerouslySetInnerHTML={{
          __html: slice.primary.embedfield.html || "",
        }} />
      </Container>
    </section>
  );
};

export default Embed;
