import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto px-6 py-8'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1 gap-6'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
                Rohan's
              </span>
              Blog
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-10'>
            <div>
              <Footer.Title title='About' className='mb-2' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block mb-1'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block mb-1'
                >
                  Rohan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' className='mb-2' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/rohansamuel07'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block mb-1'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#' className='block mb-1'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' className='mb-2' />
              <Footer.LinkGroup col>
                <Footer.Link href='#' className='block mb-1'>Privacy Policy</Footer.Link>
                <Footer.Link href='#' className='block mb-1'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className='my-6 border-gray-300' />
        <div className='w-full sm:flex sm:items-center sm:justify-between text-sm'>
          <Footer.Copyright
            href='#'
            by="Rohan's Blog"
            year={new Date().getFullYear()}
            className='mb-4 sm:mb-0'
          />
          <div className="flex gap-6 sm:mt-0 mt-4">
            <Footer.Icon href='#' icon={BsFacebook} />
            <Footer.Icon href='#' icon={BsInstagram} />
            <Footer.Icon href='#' icon={BsTwitter} />
            <Footer.Icon href='https://github.com/rohansamuel07' icon={BsGithub} />
            <Footer.Icon href='#' icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}

