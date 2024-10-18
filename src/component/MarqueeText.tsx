import "./comp.css";
import Colors from "../contants/colors";

const MarqueeText = () => {
  return (
    <div className="marquee-wrapper bg-black py-24">
      <div className="marquee-content space-x-8">
        {/* First Text Style */}
        <span className="text-[150px] text-nowrap uppercase font-semibold text-white">
          Front end developer
        </span>

        {/* Rounded Image */}
        <div
          className="box h-20 w-32 mt-10 rounded-xl"
          style={{
            background: Colors.primaryColor,
          }}
        ></div>

        {/* Second Text Style */}
        <span className="text-[150px] textOutline uppercase font-semibold text-nowrap">
          Front end developer
        </span>

        {/* Rounded Image */}
        <div
          className="box h-20 w-32 rounded-xl"
          style={{
            background: Colors.primaryColor,
          }}
        ></div>

        {/* More spans for related content */}
        <span className="text-[150px] text-nowrap uppercase font-semibold text-white">
          Web development
        </span>

        {/* Rounded Image */}
        <div
          className="box h-20 w-32 rounded-xl"
          style={{
            background: Colors.primaryColor,
          }}
        ></div>

        <span className="text-[150px] textOutline uppercase font-semibold text-nowrap">
          React expert
        </span>

        {/* Rounded Image */}
        <div
          className="box h-20 w-32 rounded-xl"
          style={{
            background: Colors.primaryColor,
          }}
        ></div>

        <span className="text-[150px] uppercase font-semibold text-nowrap">
          Front end developer
        </span>

        {/* Repeat the content to ensure seamless scrolling */}
        <span className="text-[150px] text-nowrap uppercase font-semibold text-white">
          Front end developer
        </span>

        <div
          className="box h-20 w-32 rounded-xl"
          style={{
            background: Colors.primaryColor,
          }}
        ></div>

        <span className="text-[150px] textOutline uppercase font-semibold text-nowrap">
          Web development
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
