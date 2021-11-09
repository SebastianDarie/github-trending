import Image from "next/image";
import Link from "next/link";
import SvgFork from "../icons/ForksIcon";
import SvgStar from "../icons/StarsIcon";
import { Repo } from "../types/data-types";

interface RepoCardProps {
  repo: Repo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  return (
    <article
      key={repo.rank}
      className="border-subtle border-t border-solid p-4"
    >
      <div className="flex float-right"></div>
      <h1 className="md:text-xl">
        <Link href={repo.url}>
          <a className="text-accent">
            <span>{repo.username} / </span> {repo.repositoryName}
          </a>
        </Link>
      </h1>
      <p className="mt-1 pr-6 text-fg-muted w-3/4">{repo.description}</p>
      <div className="flex justify-between items-center mt-2 text-fg-muted text-xs">
        <div className="flex">
          <span className="flex ml-0 mr-4">{repo.language}</span>
          <a
            href={`${repo.url}/stargazers`}
            className="flex mr-4 text-fg-muted"
          >
            <SvgStar />
            {repo.totalStars}
          </a>
          <a
            href={`${repo.url}/network/members.${repo.repositoryName}`}
            className="flex mr-4 text-fg-muted"
          >
            <SvgFork />
            {repo.forks}
          </a>
          <span className="flex">
            Built by
            {repo.builtBy.map((user, index) => (
              <a key={index} href={user.url}>
                <div className="relative mb-1 mx-1 w-5 h-5">
                  <Image
                    src={user.avatar}
                    alt={user.username}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </a>
            ))}
          </span>
        </div>
        <span className="flex">
          <SvgStar />
          {repo.starsSince} stars today
        </span>
      </div>
    </article>
  );
};
