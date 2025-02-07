import familyImg from '../assets/images/family.avif';

export default function HeroImage() {
  return (
    <div className=" relative flex flex-col justify-between items-center">
      <div className="absolute w-[150px] h-[150px] bg-blue-900 rounded-full md:hidden lg:hidden block left-[-90px] top-1 z-10 m  "></div>
      <div className="w-full relative overflow-hidden pb-8 flex justify-center">
        <img
          src={familyImg}
          alt=""
          id="heroImage"
          className="x-45 md:hidden lg:block  max-h-44 lg:max-h-full xl:max-w-[70%] overflow-hidden object-cover w-[80%] lg:flex-grow radius-20%"
          style={{
            clipPath:
              'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
          }}
        />
      </div>
      <img
        src={familyImg}
        alt=""
        className=" min-w-lg h-[100%] object-cover md:block lg:hidden sm:hidden hidden md:max-h-40 rounded-lg"
      />
    </div>
  );
}
