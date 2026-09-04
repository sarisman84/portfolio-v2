import Image from "next/image";

export function PreviewLarge() {
  const width: number = 600;
  const height: number = 600;
  return (
    <article>
      <header>
        <h2>Project Title</h2>
      </header>
      <p>
        Project description goes here. This is a brief overview of the project,
        highlighting its main features and objectives.
      </p>
      <Image
        src={`https://picsum.photos/1920/1080`}
        alt="Project Image"
        width={width}
        height={height}
      />
    </article>
  );
}
