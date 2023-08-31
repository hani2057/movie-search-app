import { SearchWrapper, LoadingWrapper, SpinnerComponent } from "./style";

interface SpinnerProps {
  type: "search" | "loading";
}

export const Spinner = ({ type }: SpinnerProps) => {
  return (
    <>
      {type === "search" ? (
        <SearchWrapper>
          <SpinnerComponent />
        </SearchWrapper>
      ) : (
        <LoadingWrapper>
          <SpinnerComponent />
        </LoadingWrapper>
      )}
    </>
  );
};
