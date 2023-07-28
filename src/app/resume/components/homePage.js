import Left from "./left";
import Right from "./right";

const HomePage = () => {
  return (
    <div  className="flex p-5 sm:pl-5 lg:pl-10 relative mt-[3rem] z-50 ">
      {/* left  */}
      <Left />
      {/* right  */}
      <Right />
    </div>
  );
};

export default HomePage;
