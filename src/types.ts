import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface SingleBlogType {
  status: number;
  commentsCount: number;
  likesCount: number;
  isBookmarked: boolean;
  isLiked: boolean;
  tags: string[];
  related: SingleBlogType[];
  comments: SingleCommentType[];
  _id: string;
  title: string;
  titleBrief: string;
  slug: string;
  hashId: string;
  briefText: string;
  category: {
    _id: string;
    title: string;
    englishTitle: string;
  } | null;
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
  bookmarkedUsers?: any;
  likedUsers?: any;
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

export interface SingleCommentType {
  status: number;
  _id: string;
  writer: {
    _id: string;
    name: string;
  };
  postId: string;
  responseTo: string | null;
  content: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CategoryListPropsType {
  categoryData: SingleCategory[];
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
  blogsData: SingleBlogType[];
}

export interface SinglePostPropsType {
  post: SingleBlogType;
}

export interface PostInteractionsPropsType {
  post: SingleBlogType;
  isSmall: boolean;
  className: string;
}

export interface CommentPropsType {
  comment: SingleCommentType;
}

export interface LoginHookFormType {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<any>;
  formState:
    | {
        errors: {
          email?: { message: string; type: string; ref: HTMLInputElement };
          password?: { message: string; type: string; ref: HTMLInputElement };
        };
        isValid: boolean;
      }
    | {
        errors: any;
        isValid: boolean;
      };
}

// export interface RegisterDataType {
//   confirmPassword?: string;
//   email: string;
//   password: string;
// }

export interface LoginDataType {
  email: string;
  password: string;
}

export interface InputPropsType {
  label: string;
  name: string;
  type: string;
  error: string;
  validation: any;
}
