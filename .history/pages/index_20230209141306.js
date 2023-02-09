import { Inter } from "@next/font/google";
import Survey from "./Survey";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Survey />
    </>
  );
}
