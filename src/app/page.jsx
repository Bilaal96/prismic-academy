import { createClient } from '@/prismicio';
import * as prismic from '@prismicio/client';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';

function queryHomepage() {
  const client = createClient();
  return client.getSingle('homepage');
}

export async function generateMetadata() {
  const page = await queryHomepage();

  return {
    // title: 'EIE - Engineering Intelligent Environments',
    // description: 'Farming solutions start-up that aims to revolutionize the way farmers work.',

    openGraph: {
      title: page.data.meta_title,
      description: page.data.meta_description,
      // page.data.meta_image is returned as a structured object
      // Use the asImageSrc() helper method to parse the structured object and output the expected metadata
      images: prismic.asImageSrc(page.data.meta_image),
    },
  };
}

export default async function Home() {
  const page = await queryHomepage();
  console.log(page.data.slices);

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
