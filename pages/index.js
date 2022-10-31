import Head from "next/head";
import HomePage from "../components/HomePage";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <meta property="og:image" content="/images/dacadeImage.png" />
        <title>NEAR dev 101</title>
      </Head>
      <HomePage />
    </div>
  );
}
