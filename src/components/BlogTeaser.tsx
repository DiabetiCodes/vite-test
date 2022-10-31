import { faker } from '@faker-js/faker';
import { Link } from 'react-router-dom';

export default function BlogTeaser() {
  return (
    <div className='pattern-dots pattern-gray-200 pattern-bg-transparent pattern-opacity-100 pattern-size-2 pt-8'>
      <h1 className='text-3xl text-center mb-4 text-teal-800 capitalize'>{faker.company.catchPhrase()}</h1>
      <div className='container mx-auto lg:flex px-6 py-4 my-10 items-center justify-center w-full '>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <div className='max-w-lg mx-auto'>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
              <Link to='#'>
                <img
                  className='object-cover w-full max-w-2xl rounded-md lg:h-full md:shadow-md bg-gray-200'
                  src={faker.image.abstract()}
                  alt={faker.lorem.words(5)}
                />
              </Link>
              <div className='p-5'>
                <Link to='#'>
                  <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 capitalize'>
                  {faker.company.catchPhrase()}
                  </h5>
                </Link>
                <p className='font-normal text-gray-700 mb-3'>
                {faker.lorem.sentence(10)}
                </p>
                <Link
                  className='text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center capitalize'
                  to='#'
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <div className='max-w-lg mx-auto'>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
              <Link to='#'>
                <img
                  className='object-cover w-full max-w-2xl rounded-md lg:h-full md:shadow-md bg-gray-200'
                  src={faker.image.abstract()}
                  alt={faker.lorem.words(5)}
                />
              </Link>
              <div className='p-5'>
                <Link to='#'>
                  <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 capitalize'>
                  {faker.company.catchPhrase()}
                  </h5>
                </Link>
                <p className='font-normal text-gray-700 mb-3'>
                {faker.lorem.sentence(10)}
                </p>
                <Link
                  className='text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
                  to='#'
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center text-center px-4'>
          <div className='max-w-lg mx-auto'>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5'>
              <Link to='#'>
                <img
                  className='object-cover w-full max-w-2xl rounded-md lg:h-full md:shadow-md bg-gray-200'
                  src={faker.image.abstract()}
                  alt={faker.lorem.words(5)}
                />
              </Link>
              <div className='p-5'>
                <Link to='#'>
                  <h5 className='text-gray-900 font-bold text-2xl tracking-tight mb-2 capitalize'>
                  {faker.company.catchPhrase()}
                  </h5>
                </Link>
                <p className='font-normal text-gray-700 mb-3'>
                {faker.lorem.sentence(10)}
                </p>
                <Link
                  className='text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'
                  to='#'
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
