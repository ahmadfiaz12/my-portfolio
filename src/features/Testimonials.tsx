import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';
import Colors from '../contants/colors';

const testimonials = [
  {
    id: 1,
    name: 'Kenneth J. Dutton',
    role: 'Web Developer',
    feedback:
      "His expertise in front-end development brought our ideas to life with impeccable attention to detail. He truly understands how to create engaging user experiences.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Rodolfo E. Shannon',
    role: 'CEO & Founder',
    feedback:
      "The ability to transform complex requirements into intuitive interfaces is outstanding. His commitment to quality and his creative approach make him a reliable partner for any project.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Ali Haider',
    role: 'Project Manager',
    feedback:
      "It’s rare to find a front-end developer as dedicated and skilled. He not only delivers on time but exceeds expectations with clean, maintainable code and a focus on user satisfaction.",
    imageUrl: 'https://res.cloudinary.com/db0mj1uoe/image/upload/v1724755492/Website/Team/nyqoi4nukn1oqlomnhuv.jpg',
  },
  {
    id: 4,
    name: 'John K. Doe',
    role: 'UI/UX Designer',
    feedback:
      "Collaborating was a pleasure. He seamlessly integrated our UI/UX designs into a smooth, responsive interface that perfectly matched our vision. His attention to design aesthetics is top-notch.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Shahzaib Abid',
    role: 'Software Engineer',
    feedback:
      "His front-end skills are exceptional. He quickly adapted to our tech stack and worked effortlessly with the team. His code is clean, and his approach to solving problems is practical and innovative.",
    imageUrl: 'https://res.cloudinary.com/db0mj1uoe/image/upload/v1724755490/Website/Team/trikndepemedrkzi8wei.png',
  },
  {
    id: 6,
    name: 'Michael C. Green',
    role: 'Marketing Lead',
    feedback:
      "His designs are not only visually appealing but also optimized for performance. His work helped us achieve faster load times and a smoother user experience, which directly improved our conversion rates.",
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Emily R. Watson',
    role: 'Creative Director',
    feedback:
      "His understanding of modern web design trends is impressive. He consistently delivers interfaces that are not only beautiful but also user-friendly and functional.",
    imageUrl: 'https://via.placeholder.com/150',
  },
];


const Testimonials: React.FC = () => {
  return (
    <div className="bg-black text-white py-28 lg:px-24">
      <div className="w-full flex">
        <div className="mb-8 w-[40%]">
          <p className="text-sm text-gray-400 uppercase">Clients Testimonials</p>
          <h2 className="text-5xl font-semibold">
            I've <span className="" style={{
              color: Colors.primaryColor
            }}>10+ Clients</span> Feedback
          </h2>
          <p className="text-gray-500 mt-4 max-w-md">
            Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis.
          </p>
          <div className="flex space-x-3 mt-6">
            <button
              id="prevButton"
              className="bg-gray-800 p-3 rounded-full hover:bg-[#c9f31d] transition hover:text-black"
            >
              <BsArrowLeft  />
            </button>
            <button
              id="nextButton"
              className="bg-[#c9f31d] p-3 rounded-full hover:bg-[#c9f31d] transition"
            >
              <BsArrowRight className="text-black" />
            </button>
          </div>
        </div>

        {/* Swiper Testimonial Slider */}
        <div className='w-[60%]'>

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
              <div className="bg-transparent border-2 border-gray-600 h-[350px] p-6 rounded-xl text-center shadow-lg transform transition duration-300">
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
