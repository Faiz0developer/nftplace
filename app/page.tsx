import Image from "next/image";

import "../scss/index.scss";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="app__container">
      <Navbar />
    </div>
  );
}
