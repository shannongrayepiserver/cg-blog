import Header from "@/components/Header";
import { Inter } from "next/font/google";
import Head from "next/head";
import {useHomePageQuery} from "@/generated";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const data = useHomePageQuery().data;
    console.log(data);
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
            <p className="text-2xl">Index Page</p>
            {data?.HomePage?.items && data.HomePage?.items[0]?._children?.Content?.items?.map((content) => {
                return(
                    <p>{content.__typename} - {content.Name}</p>);
            })}
        </div>
        {/* <div
          className="hero min-h-screen bg-cover bg-[url('https://hello-world.opti-demo.xyz/globalassets/pexels-office.jpg')] image-full"
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-8xl font-bold">wherever you meet!</h1>
              <p className="mb-5 text-2xl">
                Alloy solves the two most pressing problems in long distance
                collaboration – better communication and better project
                management
              </p>
              <button className="btn btn-primary">Read more</button>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
        <div className="m-4 card w-96 bg-base-100 shadow-xl basis-[90%] md:basis-[40%] lg:basis-[30%]">
            <figure>
              <img className="object-cover w-full h-64"
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1736&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Alloy Plan</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
          <div className="m-4 card w-96 bg-base-100 shadow-xl basis-[90%] md:basis-[40%] lg:basis-[30%]">
            <figure>
              <img className="object-cover w-full h-64"
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Alloy Track</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
          <div className="m-4 card w-96 bg-base-100 shadow-xl basis-[90%] md:basis-[40%] lg:basis-[30%]">
            <figure>
              <img className="object-cover w-full h-64"
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Alloy Meet</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Read more</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
