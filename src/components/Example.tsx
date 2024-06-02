export function Example() {
  return (
    <div className='px-10 py-20 bg-gray-100'>
      <div className='py-10 flex items-start'>
        <h1 className='text-2xl font-bold mr-10'>Search your character</h1>
      </div>
      <div className='py-10 flex items-start'>
        <div className='relative w-1/2'>
          <input type='text' placeholder='Name of character' className='w-full h-full pr-20 pl-4 py-4 rounded border' />
          <div className='absolute right-0 top-0 w-70 h-70 p-4 rounded-r-lg bg-red-500 flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6 text-white'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-6a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
        {['Character One', 'Character Two', 'Character Three'].map((character) => (
          <div className='w-470 h-670 border-solid bg-white overflow-hidden'>
            <img className='w-full h-1/2' src='https://via.placeholder.com/150' alt={character} />
            <div className='p-4 h-1/2 flex flex-col justify-between'>
              <div>
                <h2 className='font-bold text-lg mb-2'>{character}</h2>
                <p className='text-gray-700 mb-3'>Character description goes here...</p>
              </div>
              <div className='self-end'>
                <button className='p-5 w-38 h-7 bg-gray-700 text-white font-semibold rounded flex justify-center items-center'>
                  <span>Read more</span>
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className='h-6 w-6 ml-2'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14 5l7 7m0 0l-7 7m7-7H3' />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
