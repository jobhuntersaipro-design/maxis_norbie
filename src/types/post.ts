export type PostBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'tip'; text: string }

export interface Post {
  slug: string
  title: string // used as <h1>
  image: string // /blog/<slug>.jpg (16:9, in /public)
  excerpt: string
  date: string // ISO date
  readMins: number
  category: string
  seoTitle: string
  seoDescription: string
  keywords: string[]
  blocks: PostBlock[]
}
