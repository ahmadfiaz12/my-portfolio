import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Kenneth J. Dutton',
    role: 'Web Developer',
    feedback:
      'Nam libero tempore cumsouta nobise est eligendi optio cumque nihil impedit quominus id quod maxime placeat facere possimus.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'Rodolfo E. Shannon',
    role: 'CEO & Founder',
    feedback:
      'At vero eoset accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Sarah P. Hill',
    role: 'Project Manager',
    feedback:
      'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    name: 'John K. Doe',
    role: 'UI/UX Designer',
    feedback:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    name: 'Marsha A. White',
    role: 'Software Engineer',
    feedback:
      'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    name: 'Michael C. Green',
    role: 'Marketing Lead',
    feedback:
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    name: 'Emily R. Watson',
    role: 'Creative Director',
    feedback:
      'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat.',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-gray-400 uppercase">Clients Testimonials</p>
          <h2 className="text-5xl font-bold">
            I've <span className="text-green-400">1253+ Clients</span> Feedback
          </h2>
          <p className="text-gray-500 mt-4 max-w-md">
            Sed ut perspiciatis unde omnis natus totam rem aperiam eaque inventore veritatis.
          </p>
          <div className="flex space-x-3 mt-6">
            <button
              id="prevButton"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-400 transition"
            >
              <BsArrowLeft className="text-white" />
            </button>
            <button
              id="nextButton"
              className="bg-green-400 p-3 rounded-full hover:bg-gray-800 transition"
            >
              <BsArrowRight className="text-black" />
            </button>
          </div>
        </div>

        {/* Swiper Testimonial Slider */}
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
              <div className="bg-gray-900 p-6 rounded-xl text-center shadow-lg transform transition duration-300 hover:scale-105">
                <div className="flex justify-center items-center mb-4">
                  <FaQuoteLeft className="text-green-400 text-4xl" />
                </div>
                <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
                <div className="flex items-center justify-center">
                  <img
                    className="w-16 h-16 rounded-full border-2 border-green-400 mr-4"
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                  />
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-green-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
