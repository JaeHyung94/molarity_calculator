const Explain = ({ name, mw, sol }) => {

  const found = (name, mw) => {
    return (
      <div className="my-5">
        <div className="font-medium text-md mb-5">
          <span>Searching for </span>
          <span className="font-medium text-red-400">"{name}"</span>
        </div>
      </div>
    );
  };
  const notFound = name => {
    return (
      <div className="my-5 font-bold text-md">
        <h5 className="text-red-600">Cannot Found "{name}". Please try again</h5>
      </div>
    );
  };

  if (mw === "Not Found") {
    return notFound(name);
  } else {
    return found(name, mw);
  }
};

export default Explain;
