
import aboutimg from "../assets/aboutimg.jpg";
import { about } from "../constants";

const Aboutus = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        About Us
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-9 w-full lg:w-1/2">
          <img src={aboutimg} alt="about" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {about.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div>
                <p className="text-md text-neutral-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aboutus;


