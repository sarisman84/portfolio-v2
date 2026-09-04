import Image from "next/image";
import { PreviewLargeProps } from "./preview-large.props";

export function PreviewLarge({title, description, imageUrl, width, height} : PreviewLargeProps) {

  return (
    <article>
      <header>
        <h2>{title}</h2>
      </header>
      <p>
        {description}
      </p>
      <a href="/projects/project-id">Read More</a>
      <Image
        src={imageUrl ?? `https://placehold.co/${width * 2}x${height * 2}/png`}
        alt="Project Image"
        width={width}
        height={height}
      />
    </article>
  );
}
