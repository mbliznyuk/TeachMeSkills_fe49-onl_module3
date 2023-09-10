import { Header } from '#features/header/header';
import { AllPostsNavigationFooter } from '#features/post-navigation-footer/all-posts-navigation-footer';
import { Footer } from '#ui/footer/footer';
import { PostCardModel } from '#ui/post_card/post-card.model';
import { SearchedPostCard } from '#ui/post_card/searched_post_card/searched_post_card';
import { Title } from '#ui/title/title';
import { styled } from 'styled-components';

type SearchResultsProps = {
  postCards: PostCardModel[];
};

export const SearchResultsPage: React.FC<SearchResultsProps> = ({
  postCards
}) => {
  return (
    <SearchResults>
      <Header
        usersList={['Artem Malkin', 'Maria Bliznyuk']}
        username="Maria Bliznyuk"
      ></Header>
      <Container>
        <TitleWrapper>
          <Title children={'Search results ‘Astronauts’'} />
        </TitleWrapper>
        <SearchedPostsWrapper>
          {postCards.map((element, id) =>  <SearchedPostCard key={id} postCard={element}></SearchedPostCard>)}  
        </SearchedPostsWrapper>
        <AllPostsNavigationFooter></AllPostsNavigationFooter>
        <Footer></Footer>
      </Container>
    </SearchResults>
  );
};

const SearchResults = styled.div`
  min-height: 100dvh;
  flex-grow: 1;
  background-color: var(--background-primary-color);
`;

const Container = styled.div`
  width: 60%;
  margin: auto;
`;

const TitleWrapper = styled.div`
  margin: auto;
`;

const SearchedPostsWrapper = styled.div`
  width: 100%;
`;
