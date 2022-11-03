import { Form, Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Graph from '../assets/images/graph.svg';
import People from '../assets/images/people.svg';
import Plane from '../assets/images/plane.svg';

import BlogTeaser from '../components/BlogTeaser';
import FormWidget from '../components/FormWidget';
import Randomizer from '../components/global/Randomizer';

let newColor = Randomizer();

console.log(newColor);


export default function Home() {
  return (
    <div>
      <div className='bg-gray-200'>
        <div className='container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 '>
          <div className='flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2 order-1 bg-gray-200' >
            <img
              className='object-cover w-full max-w-2xl rounded-md lg:h-full md:shadow-md bg-gray-200'
              src={faker.image.abstract()}
              alt={faker.lorem.words(5)}
            />
          </div>
          <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/2'>
            <div className='max-w-2xl lg:max-w-lg mt-8 lg:mt-0'>
              <h1 className='text-xl tracking-wide text-gray-800 lg:text-4xl capitalize'>
                {faker.company.catchPhrase()}
              </h1>
              <p className='mt-4 text-gray-600'>
                {faker.lorem.sentences(4)}
              </p>
              <div className='mt-6'>
                <Link
                  to='/'
                  className='inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform md:shadow-md  hover:dark:bg-amber-500 bg-teal-500'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto lg:flex px-6 py-4 my-10 items-center justify-center w-full'>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <Link to='#'>
          <img src={Graph} alt="Improve" width='80' className='mb-4 mx-auto' />
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-500 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <Link to='#'>
          <img src={People} alt="Network" width='80' className='mb-4 mx-auto' />
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-500 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <Link to='#'>
            <img src={Plane} alt="Deliver" width='80' className='mb-4 mx-auto' />
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-500 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
      </div>
      <div className='container mx-auto lg:block px-6 py-4 my-8 items-center justify-center w-full'>
        <h1 className='text-3xl text-center mb-4 text-teal-800 capitalize'>{faker.company.catchPhrase()}</h1>
        <p className='text-center'>{faker.lorem.paragraphs(5)}</p>
      </div>
      <div className='pattern-dots pattern-gray-200 pattern-bg-transparent pattern-opacity-100 pattern-size-2 pt-8'>
        <h1 className='text-3xl text-center mb-4 text-teal-800 capitalize'>{faker.company.catchPhrase()}</h1>
        <BlogTeaser />
      </div>
      <div className='container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 '>
        <div className='flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2 lg:order-2' >
          <FormWidget />
        </div>
        <div className='lg:flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2 lg:order-1 hidden' >
        <img
              className='object-cover w-full max-w-2xl rounded-md lg:h-full md:shadow-md bg-gray-200'
              src={faker.image.business()}
              alt={faker.lorem.words(5)}
            />
          
        </div>
      </div>
    </div>
  );
}
