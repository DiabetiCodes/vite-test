import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className='bg-gray-200 '>
        <div className='container px-6 py-4 mx-auto lg:flex lg:h-128 lg:py-16 '>
          <div className='flex items-center justify-center w-full mt-2 lg:h-96 lg:w-1/2 order-1'>
            <img
              className='object-cover w-full max-w-2xl rounded-md lg:h-full md:drop-shadow-md'
              src='https://source.unsplash.com/user/erondu/1600x900'
              alt='apple watch photo'
            />
          </div>
          <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/2'>
            <div className='max-w-2xl lg:max-w-lg mt-8 lg:mt-0'>
              <h1 className='text-xl tracking-wide text-gray-800 lg:text-4xl'>
                Set your Title
              </h1>
              <p className='mt-4 text-gray-600'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia
                asperiores alias vero magnam recusandae adipisci ad vitae
                laudantium quod rem voluptatem eos accusantium cumque.
              </p>
              <div className='mt-6'>
                <Link
                  to='#'
                  className='inline-block px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-teal-500 rounded-md hover:dark:bg-gray-800'
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mx-auto lg:flex px-6 py-4 my-8 items-center justify-center w-full'>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center'>
          Lorem ipsum
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center'>
          Lorem ipsum
        </div>
        <div className='flex flex-col items-center w-full lg:flex-row lg:w-1/3 justify-center'>
          Lorem ipsum
        </div>
      </div>
    </>
  );
}
