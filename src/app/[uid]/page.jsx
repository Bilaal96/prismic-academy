import { notFound } from 'next/navigation';
import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';

// Dynamic segments not included in generateStaticParams will return a 404
export const dynamicParams = false;

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType('marketing_page');

  return pages.map((page) => ({ uid: page.uid }));
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client.getByUID('marketing_page', params.uid);

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export default async function MarketingPage({ params }) {
  const client = createClient();
  const page = await client
    .getByUID('marketing_page', params.uid)
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}
