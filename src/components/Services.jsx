import { services } from "../constants";

const Services = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
       Services
      </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {services.map((services, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {services.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{services.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {services.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;