import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import { useRouter } from 'next/router';
import {useQuery, gql} from "@apollo/client";
import {useGetContentQuery} from "@/generated";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const url = "/" + slug.join('/');
  const data = useGetContentQuery({ url: url}).data;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-col justify-center">
        <div>
          <p className="text-2xl">Slug Page: {slug.join('/')}</p>
            <p>{data?.Content?.items[0]?._fulltext}</p>
        </div>
      </div>
    </>
  );
}
