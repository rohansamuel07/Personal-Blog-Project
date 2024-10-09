import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border-t-8 border-teal-500 bg-gray-900 text-white py-8">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1 gap-8">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white shadow-lg">
                Rohan's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6 mt-5 text-sm">
            <div>
              <Footer.Title title="About" className="text-lg mb-3 text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-300 transition-all duration-300"
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-300 transition-all duration-300"
                >
                  Rohan's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-lg mb-3 text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/rohansamuel07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-teal-300 transition-all duration-300"
                >
                  Github
                </Footer.Link>
                <Footer.Link href="#" className="hover:underline hover:text-teal-300 transition-all duration-300">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-lg mb-3 text-teal-400" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="hover:underline hover:text-teal-300 transition-all duration-300">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="hover:underline hover:text-teal-300 transition-all duration-300">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="my-6 border-gray-600" />
        <div className="w-full sm:flex sm:items-center sm:justify-between text-sm">
          <Footer.Copyright
            href="#"
            by="Rohan's Blog"
            year={new Date().getFullYear()}
            className="text-gray-400"
          />
          <div className="flex gap-6 sm:mt-0 mt-4">
            <Footer.Icon href="#" icon={BsFacebook} className="hover:text-teal-300 transition-all duration-300" />
            <Footer.Icon href="#" icon={BsInstagram} className="hover:text-teal-300 transition-all duration-300" />
            <Footer.Icon href="#" icon={BsTwitter} className="hover:text-teal-300 transition-all duration-300" />
            <Footer.Icon href="https://github.com/rohansamuel07" icon={BsGithub} className="hover:text-teal-300 transition-all duration-300" />
            <Footer.Icon href="#" icon={BsDribbble} className="hover:text-teal-300 transition-all duration-300" />
          </div>
        </div>
      </div>
    </Footer>
  );
}
