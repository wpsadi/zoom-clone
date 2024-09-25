import Image from 'next/image';
import LoadingCircle from "@/assets/icons/loading-circle.svg"
const Loader = () => {
  return (
    <div className="flex-center h-screen w-full">
      <div className="">
      <LoadingCircle/>
      </div>
     
    </div>
  );
};

export default Loader;