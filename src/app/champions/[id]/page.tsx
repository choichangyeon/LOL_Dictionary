type Props = {
  params: {
    id: string;
  };
};

const ChampionDetailPage = ({ params }: Props) => {
  return <div>{params.id}</div>;
};

export default ChampionDetailPage;
