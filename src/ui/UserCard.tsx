import Image from "next/image";
import { Developer } from "../types/data-types";

interface UserCardProps {
  user: Developer;
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <article className="flex p-4">
      <a href="#" className="text-fg-muted text-xs w-4">
        {user.rank}
      </a>
      <div className="mx-4">
        <a href={user.url}>
          <div className="relative w-12 h-12">
            <Image
              src={user.avatar}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </a>
      </div>
      <div className="flex flex-auto">
        <div className="flex w-2/3">
          <div className="md:w-2/4">
            <h1 className="font-semibold text-xl">
              <a href={user.url} className="text-accent hover:underline">
                {user.name}
              </a>
            </h1>
            <p className="font-normal mb-1 text-base">
              <a
                href={user.url}
                className="text-fg-muted hover:text-accent hover:underline"
              >
                {user.username}
              </a>
            </p>
          </div>
          <div className="md:w-2/4">
            <div className="mb-1 text-xs text-fg-muted uppercase">
              Popular Repo
            </div>
            <h1 className="text-base">
              <a
                href={user.popularRepository.url}
                className="text-accent hover:underline"
              >
                {user.popularRepository.repositoryName}
              </a>
            </h1>
            <div className="mb-1 text-xs text-fg-muted">
              {user.popularRepository.description}
            </div>
          </div>
        </div>
        <div className="flex justify-end mr-4 w-1/3">
          <div></div>
        </div>
      </div>
    </article>
  );
};
