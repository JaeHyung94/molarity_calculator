import Weigth from "../components/Molweight";

const Home = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl sm:text-5xl font-normal text-indigo-600 mb-10">Molarity Calculator</h1>
      <Weigth></Weigth>
    </div>
  );
};

export default Home;
