export type CategoryColor = 'purple' | 'green' | 'blue'

export type PostCategory = 'Origin Story' | 'Design' | 'Product' | 'Engineering'

export interface Post {
  id: number
  slug: string
  title: string
  subtitle: string
  category: PostCategory
  categoryColor: CategoryColor
  date: string
  readTime: string
  author: string
  excerpt: string
  body: string
  featured?: boolean
}

export interface NavLink {
  label: string
  to: string
  external?: boolean
}