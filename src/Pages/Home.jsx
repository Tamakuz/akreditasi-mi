import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const visi = [
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
];

const misi = [
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
  {
    text: "To add a slider go to Theme Options Homepage and choose page slider",
  },
];

//! Jika menggunakan function yang statementnya lebih dari satu sebaiknya menggunakan function declaration

const Home = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: "Home" });
  }, []);

  return (
    <Layout>
      <>
        <section className="relative w-full h-[400px]">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/picsum/536/354"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-full h-full object-cover"
                src="https://picsum.photos/536/354"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center backdrop-brightness-50">
            <h1 className="text-orange-500 text-4xl font-bold">
              Politama Surakarta
            </h1>
          </div>
        </section>
        <section className="px-20 py-10 flex gap-10 justify-center items-center">
          <div className="card w-96 bg-base-100 shadow">
            <figure className="border-b-2 border-red-500 ">
              <img
                src="https://p4mp.polindra.ac.id/wp-content/uploads/2022/04/220px-Politeknik-Negeri-Indramayu-220x127.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">VISI</h2>
              {visi.map((item, i) => {
                return (
                  <div key={i} className="flex gap-2 w-full h-fit">
                    <span className="text-gray-800 font-bold">{i+1}.</span>
                    <p>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow">
            <figure className="border-b-2 border-red-500 ">
              <img
                src="https://p4mp.polindra.ac.id/wp-content/uploads/2022/04/220px-Politeknik-Negeri-Indramayu-220x127.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">MISI</h2>
              {misi.map((item, i) => {
                return (
                  <div key={i} className="flex gap-2 w-full h-fit">
                    <span className="text-gray-800 font-bold">{i+1}.</span>
                    <p>
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;
