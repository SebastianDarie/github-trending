import useDevelopers from "../hooks/useDevelopers";
import { MainLayout } from "../modules/MainLayout";
import { UserCard } from "../ui/UserCard";

interface DevelopersPageProps {}

const DevelopersPage: React.FC<DevelopersPageProps> = ({}) => {
  const { data, error, isLoading } = useDevelopers();

  return (
    <MainLayout>
      {data?.map((developer) => (
        <UserCard key={developer.rank} user={developer} />
      ))}
    </MainLayout>
  );
};

export default DevelopersPage;
