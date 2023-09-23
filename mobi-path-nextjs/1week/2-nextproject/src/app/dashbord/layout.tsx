import Head from "next/head";
import Image from "next/image";
import Cat from "../assets/images/cat.jpg";
import { Homemade_Apple } from "@next/font/google";

export function Home() {
  return (
    <div>
      <Head>
        <title>Font Test</title>
        <meta name="description" content="Font Test" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        Homemade Apple Font (Next 12)
        <Image src={Cat} alt="cat" />
      </main>
    </div>
  );
}

const homemadeApple = Homemade_Apple({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home2() {
  return (
    <main className={homemadeApple.className}>
      Homemade Apple Font (Next 13)
      <Image src={Cat} alt="cat" />
    </main>
  );
}
