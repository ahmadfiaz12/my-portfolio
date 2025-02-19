import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import Colors from '../contants/colors';
import testimonials from '../constants/content';




const Testimonials: React.FC = () => {
  return (
    <div className="bg-black text-white p-5 py-20 md:py-28 lg:px-24">
      <div className="w-full flex flex-col md:flex-row gap-10">
        <div className="mb-8 w-full md:w-[40%]">
          <p className="text-sm text-gray-400 uppercase" data-aos="fade-up" data-aos-duration="1000">Clients Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-semibold">
            I've <span className="" style={{
              color: Colors.primaryColor
            }}>10+ Clients</span> Feedback
          </h2>
          <p className="text-gray-500 mt-4 max-w-md" data-aos="fade-up" data-aos-duration="1000">
            Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis.
          </p>
          <div className="flex space-x-3 mt-6">
            <button data-aos="fade-up" data-aos-duration="1000"
              id="prevButton"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#c9f31d] transition hover:text-black"
            >
              <BsArrowLeft  />
            </button>
            <button data-aos="fade-up" data-aos-duration="1000"
              id="nextButton"
              className="bg-[#c9f31d] p-3 rounded-full hover:bg-[#c9f31d] transition"
            >
              <BsArrowRight className="text-black" />
            </button>
          </div>
        </div>

        {/* Swiper Testimonial Slider */}
        <div className='w-full md:w-[60%]'>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop
          navigation={{
            nextEl: '#nextButton',
            prevEl: '#prevButton',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-transparent border-2 border-gray-600 h-full md:h-[300px] p-6 rounded-xl text-center shadow-lg transform transition duration-300" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex justify-center items-center mb-4">
                  <FaQuoteLeft className="text-[#c9f31d] 400 text-4xl" />
                </div>
                <p className="text-gray-300 mb-4 leading-6">{testimonial.feedback}</p>
                <div className="flex items-center justify-center">
                  <img
                    className="w-16 h-16 rounded-full  object-cover mr-4"
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-[#c9f31d] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
