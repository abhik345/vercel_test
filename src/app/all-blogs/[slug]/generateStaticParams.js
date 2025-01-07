// /app/all-blogs/[slug]/generateStaticParams.js

import { fetchData } from "@/lib/api";  // Your API or data fetching function

export async function generateStaticParams() {
  const blogs = await fetchData("/blogs");  // Fetch the list of blogs

  // Generate the paths based on the blogs and their slugs
  return blogs.map(blog => ({
    slug: blog.slug,  // This is the dynamic part of the URL
  }));
}
