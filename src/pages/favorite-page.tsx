import { FavoriteTitle } from "../components/favorite-title";
import { FlexDiv } from "../components/common";
import { FavoriteList } from "../components/favorite-list";

export const FavoritePage = () => {
  return (
    <FlexDiv direction="column">
      <FavoriteTitle />
      <FavoriteList />
    </FlexDiv>
  );
};
