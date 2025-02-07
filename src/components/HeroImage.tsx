import familyImg from '../assets/images/family.avif';

export default function HeroImage() {
  return (
    <div className="relative flex flex-col justify-between items-center">
      <div>
        <div className="circle w-[150px] h-[150px] bg-blue-900 rounded-full block sm:hidden  md:hidden absolute left-[-5%] top-1 z-10"></div>
      </div>
      <div className="w-full relative overflow-hidden pb-8  ml-44 lg:ml-0 lg:mr-0 mr-20 flex justify-center">
        <img
          src={familyImg}
          alt=""
          id="heroImage"
          className="x-45 sm:hidden lg:block  max-h-44 lg:max-h-full xl:max-w-[70%] xs:hidden  min-w-3xs overflow-hidden object-cover lg:flex-grow"
          style={{
            clipPath:
              'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
          }}
        />
      </div>
      <img
        src={familyImg}
        alt=""
        className=" min-w-lg h-[100%] @max-xs:hidden sm:block object-cover lg:hidden  hidden sm:max-h-40 rounded-lg"
      />
    </div>
  );
}
