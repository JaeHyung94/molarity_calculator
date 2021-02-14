import Weigth from "../components/Molweight";

const Home = () => {
  return (
    <div className="w-full h-screen pb-24 flex flex-col justify-center items-center">
      <h1 className="text-5xl font-normal text-indigo-600 mb-10">Molarity Calculator</h1>
      <Weigth></Weigth>
    </div>
  );
};

export default Home;
