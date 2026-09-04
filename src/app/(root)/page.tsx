import { PreviewLarge } from "@/shared/components/preview-large/preview-large";
import { Preview } from "@/shared/components/preview/preview";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <PreviewLarge
          title="Project Title"
          description="Project Description"
          width={600}
          height={400}
        />
        <Preview
          title="Project Title"
          description="Project Description"
          width={300}
          height={200}
        />
        <Preview
          title="Project Title"
          description="Project Description"
          width={300}
          height={200}
        />
        <Preview
          title="Project Title"
          description="Project Description"
          width={300}
          height={200}
        />
      </section>
      <article>
        <header>
          <h2>Who am i?</h2>
        </header>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
        <Image 
          src="https://placehold.co/600x600/png"
          alt="About Me"
          width={300}
          height={200}
/>
      </article>
    </main>
  );
}
