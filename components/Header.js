import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-gray-900 text-gray-100 shadow w-full '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row item-center'>
        <Link href='/'>
          <button className='flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0'>
            <Image src='/images/logo.png' width={40} height={40} alt='logo' />
            <span className='ml-3 text-xl'>DevSpace</span>
          </button>
        </Link>
        <nav className='flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto'>
          <Link href='/blog'>
            <button className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              Blog
            </button>
          </Link>
          <Link href='/about'>
            <button className='mx-5 cursor-pointer uppercase hover:text-indigo-300'>
              About
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
