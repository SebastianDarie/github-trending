import useRepositories from "../hooks/useRepositories";
import { repeatComponent } from "../lib/repeatComponent";
import { MainLayout } from "../modules/MainLayout";
import { CardLoader } from "../ui/CardLoader";
import { RepoCard } from "../ui/RepoCard";

interface TrendingPageProps {}

const TrendingPage: React.FC<TrendingPageProps> = ({}) => {
  const { data, error, isLoading } = useRepositories();

  if (isLoading)
    return <MainLayout>{repeatComponent(CardLoader, 5)}</MainLayout>;
  if (error) return <MainLayout>something went wrong...</MainLayout>;

  return (
    <MainLayout>
      {data?.map((repo) => (
        <RepoCard key={repo.rank} repo={repo} />
      ))}
    </MainLayout>
  );
};

export default TrendingPage;
