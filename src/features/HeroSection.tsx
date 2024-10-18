
import "./home.css"
import Colors from '../contants/colors'
import smilingImage from "../assets/images/IT-Business-Benefits-Image.webp"

const HeroSection = () => {
  return (
    <>
      <div className="flex h-[100%] text-white p-24">
        <div className="flex flex-col gap-10 w-full">
          <div className="short-title font-bold text-sm relative -bottom-28">FRONT END DEVELOPER</div>
          <div className="flex items-end gap-20">
            <div className="hello font-bold text-[190px]">HELLO</div>
            <div className={`im font-bold text-7xl`} style={{
              color: Colors.primaryColor
            }}>I,M</div>
          </div>
          <div className="flex w-full justify-end">
            <div className="name uppercase underline text-8xl font-bold">Ahmad Fiaz</div>
          </div>
          <div className="blurry-bg-badge mt-10">FRONT END DEVELOPER</div>
        </div>

      </div>
      <section className="bg-black text-white min-h-screen flex items-center justify-center px-10">
        <div className="container mx-auto p-10">
          {/* Top Section */}
          <div className="mb-10">
            <p className="text-gray-300 text-lg">
              *Introduction of Myself
            </p>
            <h1 className="text-6xl font-bold">
              I&apos;m a digital <span className="text-lime-500">designer</span> studio <br />
              connecting brands to people <br />
              through
            </h1>
            <p className="text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        </div>
        {/* Statistics Section */}
        <div className="flex justify-between items-center mt-16">
          {/* Left circle */}
          <div className="relative text-center">
            <div className="w-32 h-32 rounded-full border border-gray-600 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold">10+</h3>
              <p className="text-gray-400">Project Completed</p>
            </div>
          </div>

          {/* Play button */}
          <div className="relative text-center">
            <div className="w-32 h-32 rounded-full bg-lime-500 text-black flex items-center justify-center text-center">
              <p className="font-semibold">PLAY</p>
            </div>
          </div>

          {/* Right Circle */}
          <div className="relative text-center">
            <div className="w-32 h-32 rounded-full border border-gray-600 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-gray-400">Satisfied Customers</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Images Section */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-start space-y-6 lg:space-y-0 lg:space-x-6">
     
          <img
            src={smilingImage}
            alt="Person Smiling"
            className="w-48 h-48 lg:h-[500px] lg:w-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-12 h-12 bg-lime-500 transform -translate-x-6 -translate-y-6"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 bg-lime-500 transform translate-x-6 translate-y-6"></div>
        </div>

        {/* Right Text Section */}
        <div className="mt-12 lg:mt-0 lg:ml-12 lg:max-w-md">
          <h3 className="text-xl font-light text-gray-400">What I Do</h3>
          <h2 className="text-4xl font-semibold text-white mt-2">
            Real <span className="text-lime-500">Problem Solutions</span> Experience
          </h2>
          <p className="text-gray-400 mt-4">
            At vero eos et accusamus etodio dignissimos ducimus praesen tium voluptat corrupti quos dolores quas molestias.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
              <span className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4">✓</span>
              5+ Years Of Experience
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4">✓</span>
              Professional Web Designer
            </li>
            <li className="flex items-center">
              <span className="w-6 h-6 bg-lime-500 rounded-full flex items-center justify-center text-black font-semibold text-sm mr-4">✓</span>
              Mobile Apps Design
            </li>
          </ul>

          <button className="mt-8 py-3 px-6 bg-lime-500 text-black font-semibold rounded-full hover:bg-lime-600 transition-all">
            Learn More →
          </button>
        </div>
      </section>
    </>
  )
}

export default HeroSection
