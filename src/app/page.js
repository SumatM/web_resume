import HomePage from "@/app/homePage";

const backgroundTheme = "#FFA726"

export default function Home() {
  return (
    <div className="w-[60vw] m-auto h-[200vh] border-2 border-black">
      <div
        style={{
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 45.6% 99.41%, 45.6% 99.41%, 45.6% 39.92%, 45.6% 39.92%, 0% 0%)",
            background:`${backgroundTheme}`
        }}
        className="h-[200vh] absolute w-[60vw] "
      ></div>
      <HomePage />
    </div>
  );
}
