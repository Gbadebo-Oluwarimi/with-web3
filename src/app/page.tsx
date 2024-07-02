import Image from "next/image";
import Header from "../../Components/Header";
import Prenav from "../../Components/Prenav";
import localFont from "next/font/local";
import Tab from "../../Components/Tab";
import Card from "../../Components/Card";
import Table from "../../Components/Table/Table";

const myfont2 = localFont({
  src: "./font/Radomir-Tinkov-Gilroy-ExtraBold.ttf",
});

export default function Home() {
  return (
    <div
      className="min-h-screen overflow-hidden text-[#dfe5ec]"
      style={myfont2.style}
    >
      <Prenav />
      <Header />
      <Tab />
      <Card />
      <Table />
    </div>
  );
}
