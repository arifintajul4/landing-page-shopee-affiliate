import React, { useEffect } from "react";
import Head from "next/head";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useRouter } from "next/router";

const SerbaMurahTiar = () => {
  const router = useRouter();
  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 2,
      spacing: 20,
    },
    loop: true,
  });

  const images = [
    {
      src: "/static/images/1.webp",
      alt: "Serba Murah Tiar",
    },
    {
      src: "/static/images/2.webp",
      alt: "Serba Murah Tiar",
    },
    {
      src: "/static/images/3.webp",
      alt: "Serba Murah Tiar",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      router.push(process.env.NEXT_PUBLIC_GROUP_TAJUL);
    }, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Serba Murah</title>
      </Head>
      <section className="container">
        <h1 className="bg-[#ee4d2d] text-white font-semibold text-center text-md md:text-3xl py-5">
          RACUN PROMO SHOPEE MURAH
        </h1>
        <div className=" md:px-52 py-10">
          <div ref={sliderRef} className="keen-slider rounded">
            {images.map((el, idx) => {
              return (
                <div
                  key={idx}
                  className="keen-slider__slide rounded overflow-hidden relative h-[300px] w-[100px] md:h-[600px] md:w-[50px]"
                >
                  <div
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
                    }}
                    className="absolute bottom-0 left-0 right-0 h-[10rem] z-10"
                  />
                  <Image
                    objectFit="cover"
                    layout="fill"
                    alt={`${el.alt}-${idx}`}
                    src={el.src}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <Image
            width={500 / 2}
            height={252 / 2}
            alt="Gif Anak Panah"
            src="/static/images/anak-panah.gif"
          />
        </div>
        <div className="text-center py-10">
          <a
            href={process.env.NEXT_PUBLIC_GROUP_TAJUL}
            className="text-white md:text-base text-xs cursor-pointer rounded font-bold py-3 px-4 bg-[#ee4d2d]"
          >
            JOIN GROUP RACUN SHOPEE SERBA MURAH
          </a>
        </div>
        <div className="my-10">
          <h1 className="text-center mb-5 font-bold md:text-3xl text-[#ee4d2d]">
            Testimoni Member
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-20">
            <div className="rounded-lg border shadow-lg p-4">
              <div className="flex gap-2 items-start justify-center">
                <Image
                  width={80}
                  height={80}
                  objectFit="cover"
                  className="rounded-full"
                  alt="Profile 1"
                  src="/static/images/profile/1.webp"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-700">
                    Rika Yuliana
                  </h1>
                  <p className="text-gray-500">Ibu Rumah Tangga</p>
                </div>
              </div>
              <p className="text-md md:text-lg text-center mt-5 font-semibold text-gray-600">
                Huhuuhuhu belanja di shopee makin murah berkat grup ini...
                buruan join
              </p>
            </div>
            <div className="rounded-lg border shadow-lg p-4">
              <div className="flex gap-2 items-start justify-center">
                <Image
                  width={80}
                  height={80}
                  objectFit="cover"
                  className="rounded-full"
                  alt="Profile 1"
                  src="/static/images/profile/2.webp"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-700">
                    Backtiar ansory
                  </h1>
                  <p className="text-gray-500">Karyawan</p>
                </div>
              </div>
              <p className="text-md md:text-lg text-center mt-5 font-semibold text-gray-600">
                Top banget sih grup ini !! Biasanya belanja kebutuhan bulanan
                habis banyak karna grup ini jadi hemat banyakkk bunn... love
                sekebon
              </p>
            </div>
            <div className="rounded-lg border shadow-lg p-4">
              <div className="flex gap-2 items-start justify-center">
                <Image
                  width={80}
                  height={80}
                  objectFit="cover"
                  className="rounded-full"
                  alt="Profile 1"
                  src="/static/images/profile/3.webp"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-700">
                    Rati Aprilianti
                  </h1>
                  <p className="text-gray-500">Mahasiswa</p>
                </div>
              </div>
              <p className="text-md md:text-lg text-center mt-5 font-semibold text-gray-600">
                Grup ini terbaik dah, gak hanya promo shopee tapi ada promo
                hotel,makanan, token pln, intinya apa yang murah pasti ada
                infonya.. thank admin
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-black py-4">
        <p className="text-white text-center">
          dibuat dengan <span className="text-red-700">&hearts;</span>{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arifintajul4/"
            rel="noreferrer"
          >
            Tajul Arifin Sirajudin
          </a>
        </p>
      </footer>
    </>
  );
};

export default SerbaMurahTiar;
