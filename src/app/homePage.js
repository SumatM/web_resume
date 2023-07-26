import Left from "./left";
import Right from "./right";

const HomePage = () => {
  return (
    <div className="flex p-8 relative mt-[3rem] z-50">
      {/* left  */}
      <Left />
      {/* right  */}
      <Right />
    </div>
  );
};

export default HomePage;
