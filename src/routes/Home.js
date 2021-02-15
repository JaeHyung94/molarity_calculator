import Weigth from "../components/Molweight";
import { useRef } from "react";

const Home = () => {
  const MainDiv = useRef();
  return (
    <div
      ref={MainDiv}
      className="w-full mt-20 min-h-full flex flex-col justify-center items-center"
    >
      <h1 className="text-3xl sm:text-5xl font-normal text-indigo-600 mb-10">
        Molarity Calculator
      </h1>
      <Weigth mainDiv={MainDiv}></Weigth>
    </div>
  );
};

export default Home;
