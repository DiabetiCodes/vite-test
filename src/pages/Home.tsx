import { Link } from 'react-router-dom';
import { faker } from '@faker-js/faker';
import Graph from '../assets/images/graph.svg';
import People from '../assets/images/people.svg';
import Plane from '../assets/images/plane.svg';

  //Tailwind color options
  const colors = [
    'amber', 'blue', 'cyan', 'emerald', 'fuchsia', 'gray',
    'green', 'indigo', 'lime', 'neutral', 'orange', 'pink',
    'purple', 'red', 'rose', 'sky', 'slate', 'stone',
    'teal', 'violet', 'yellow', 'zinc',
  ];

  //Tailwind color values
  const values = [
    100, 200, 300, 400, 500, 600, 700, 800, 900
  ]

  //Select random color from colorArray, store generated value
  let randColor = colors[Math.floor(Math.random() * colors.length)]
  let randVal = values[Math.floor(Math.random() * values.length)]

  //Need to find a way to apply this as a custom and COMPLETE CSS class so Tailwind doesn't strip it
  const newColor = 'bg=' + randColor + '-' + randVal

export default function Home() {

  return (
    <>
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
                  className={`inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform md:shadow-md  hover:dark:bg-gray-800 bg-${randColor}-${randVal}`}
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
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-300 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <Link to='#'>
          <img src={People} alt="Network" width='80' className='mb-4 mx-auto' />
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-300 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <Link to='#'>
            <img src={Plane} alt="Deliver" width='80' className='mb-4 mx-auto fill-teal-600 stroke-amber-200' />
            <h3 className='font-bold capitalize text-teal-800 hover:text-amber-300 mb-2'>{faker.company.catchPhrase()}</h3>
            <p>{faker.lorem.sentences(2, '\n')}</p>
          </Link>
        </div>
      </div>
      <div className='container mx-auto lg:block px-6 py-4 my-8 items-center justify-center w-full'>
        <h1 className='text-3xl text-center mb-4 text-teal-500'>{faker.company.catchPhrase()}</h1>
        <p className='text-center'>{faker.lorem.paragraphs(5)}</p>
      </div>
    </>
  );
}
