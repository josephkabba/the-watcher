export interface ArticalResponse {
  status: string;
  article: Story;
}

export interface Story {
  source_url: string;
  published: string;
  published_method_found: string;
  published_guess_accuracy: string;
  title: string;
  text: string;
  authors: string[];
  images: string[];
  author: string;
  top_image: string;
  meta_image: string;
  meta_keywords: string[];
  tags: string[];
  meta_description: string;
  meta_lang: string;
  title_lang: string;
  text_lang: string;
  meta_favicon: string;
}