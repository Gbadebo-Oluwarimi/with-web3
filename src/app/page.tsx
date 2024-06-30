import Image from "next/image";
import Header from "../../Components/Header";
import Prenav from "../../Components/Prenav";
import Tab from "../../Components/Tab";
import Card from "../../Components/Card";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Prenav />
      <Header />
      <Tab />
      <Card />
    </div>
  );
}
