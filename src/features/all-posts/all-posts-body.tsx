import { ListOfPosts } from '#features/list-of-posts/list-of-posts';
import { AllPostsNavigationFooter } from '#features/post-navigation-footer/all-posts-navigation-footer';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { TabModel, Tabs } from '#ui/tabs/tab';
import { styled } from 'styled-components';

type AllPostsProps = {
  postCards: PostCardModel[];
  tabs: TabModel[];
};

export const AllPosts: React.FC<AllPostsProps> = ({ postCards, tabs }) => {
  return (
    <>
      <TabsWrapper>
        <Tabs tabs={tabs}></Tabs>
      </TabsWrapper>
      <AllPostsWrapper>
        <ListOfPosts postCards={postCards}></ListOfPosts>
      </AllPostsWrapper>
      <AllPostsNavigationFooter></AllPostsNavigationFooter>
    </>
  );
};

const AllPostsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
`;

const TabsWrapper = styled.div`
  margin-bottom: 25px;
`;
