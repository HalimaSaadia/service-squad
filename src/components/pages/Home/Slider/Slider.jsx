import { Typewriter } from "react-simple-typewriter";

const Slider = () => {
  return (
    <div className="carousel w-full relative -top-20 ">
      <div id="slide1" className="carousel-item relative  h-[500px] md:h-[600px] w-full">
        <div
          className="hero  "
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1316432905/photo/cleaning-home.webp?b=1&s=170667a&w=0&k=20&c=nnr5UkGpEkW7yM1jpJ1XJZ1V-yQiYJLE0ar9ViuTCjI=)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-white">
             <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                <Typewriter
                loop={false}
                  typeSpeed={40}
                  words={[
                    "Experience a spotless home without lifting a finger. Our cleaning services are thorough, reliable, and tailored to your needs",
                  ]}
                />
              </h1> 
              
              
            </div>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1410436592/photo/this-faucet-is-leaking-again.webp?b=1&s=170667a&w=0&k=20&c=8ghisMAnSK6H_tu3AH3ev8Qqorflv2jMsUsNEOdFogE=)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-white">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                <Typewriter
                  typeSpeed={40}
                  loop={false}
                  words={[
                    "From leaky faucets to complete plumbing overhauls, we've got you covered. Trust our experts for fast, efficient, and affordable plumbing solutions",
                  ]}
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://media.istockphoto.com/id/1327489339/photo/professional-landscaping-team-working-in-garden.webp?b=1&s=170667a&w=0&k=20&c=p3wc0flISKtHKAua3EWmF2oc-JrMyzYGS6BK9fITNnU=)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-white">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                <Typewriter
                  typeSpeed={40}
                  loop={false}
                  words={[
                    "Transform your outdoor space into a beautiful oasis. Our landscaping services are designed to enhance the curb appeal and functionality of your property",
                  ]}
                />
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
