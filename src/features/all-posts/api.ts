import { PostCardModel } from '#ui/post_card/post-card.model';
import { mockedPostCardModels } from '../../mocked-data';

export const api = {
  getAllPosts: () => {
    return new Promise<PostsResponse>((resolve) =>
      setTimeout(
        () => resolve({ isOk: true, posts: mockedPostCardModels }),
        3000
      )
    );
  },
};

interface PostsResponse {
  isOk: boolean;
  posts: PostCardModel[];
}
