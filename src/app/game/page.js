import HeaderText from "@/components/HeaderText";
import Navbar from "@/components/Navbar";
import GameCarousel from "./_components/GameCarousel";
import Footer from "@/components/Footer";
import MostPlayed from "./_components/MostPlayed";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className="pt-32 bg-sharp-black text-white px-14">
        <HeaderText
          header="Games"
          description="Hey champ! hit the bank and get your asserts to play a game."
        />
        <GameCarousel />
        <MostPlayed />
        <Footer />
      </div>
    </>
  );
}
