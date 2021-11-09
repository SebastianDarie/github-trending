interface CardLoaderProps {}

export const CardLoader: React.FC<CardLoaderProps> = ({}) => {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-1/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded w-1/4"></div>
            <div className="h-4 bg-gray-400 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
