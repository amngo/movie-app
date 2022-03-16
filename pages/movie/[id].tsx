import { Movie } from 'components/Movie';
import { NextPage, NextPageContext } from 'next';

interface Props {
  id: string;
}

const Movies: NextPage<Props> = ({ id }): JSX.Element => {
  return <Movie id={id} />;
};

export default Movies;

Movies.getInitialProps = async (
  appContext: NextPageContext
): Promise<Props> => {
  return { id: appContext.query.id as string };
};
