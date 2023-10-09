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
