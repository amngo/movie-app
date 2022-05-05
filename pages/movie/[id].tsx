import { Movie } from "components/Movie";
import { NextPageContext } from "next";

interface Props {
  id: string;
}

function Movies({ id }: Props) {
  return <Movie id={id} />;
}

export default Movies;

Movies.getInitialProps = async (
  appContext: NextPageContext,
): Promise<Props> => {
  return { id: appContext.query.id as string };
};
