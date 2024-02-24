const Loader = () => {
  return (
    <div className="shadow rounded-md max-w-full w-full mx-auto my-5">
      <div className="animate-pulse flex space-x-2">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-6 bg-[#111213] rounded"></div>
          <div className="h-6 bg-[#111213] rounded"></div>
          <div className="space-y-3">
            <div className="h-2 bg-[#111213] rounded"></div>
            <div className="h-2 bg-[#111213] rounded"></div>
            <div className="grid grid-cols-2 gap-14 space-x-64">
              <div className="h-2 bg-[#111213] w-44 rounded"></div>
              <div className="h-2 bg-[#111213] w-44 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
