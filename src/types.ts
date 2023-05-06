export interface SingleBlogType {
  status: number;
  commentsCount: number;
  likesCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
  tags: string[];
  related: string[];
  comments: string[];
  _id: string;
  title: string;
  titleBrief: string;
  slug: string;
  hashId: string;
  briefText: string;
  category: string | null;
  text: string;
  coverImage: string;
  readingTime: number;
  author: {
    biography: string;
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SingleCategory {
  color: string;
  createdAt: string;
  description: string;
  englishTitle: string;
  title: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

export interface indexPropsType {
  blogsData: {
    docs: SingleBlogType[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
  categoryData: SingleCategory[];
}

export interface BlogListPropsType {
  blogsData: {
    docs: SingleBlogType[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
  };
}
