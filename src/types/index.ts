export type Article = {
  id: string;
  slug: string;
  title: string;
  author: string;
  publishedAt: string;
  category: string;
  excerpt: string;
  content: string;
  imageId: string;
};

export type Event = {
  id: string;
  date: string;
  city: string;
  arena: string;
  details: string;
};
