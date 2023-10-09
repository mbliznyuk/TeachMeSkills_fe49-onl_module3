export type UserChoice = 'like' | 'dislike' | null;

export interface PostCardModel {
  id: number;
  image?: string;
  text: string;
  date: string;
  lesson_num: number;
  likes_amount: number;
  dislikes_amount: number;
  user_choice: UserChoice;
  isFavorite: boolean;
  title: string;
  author: number;
}

export const defaultPostCardModel: PostCardModel = {
  id: 0,
  image: '',
  text: '',
  date: '',
  lesson_num: 0,
  likes_amount: 0,
  dislikes_amount: 0,
  user_choice: 'like',
  isFavorite: false,
  title: '',
  author: 0,
};
