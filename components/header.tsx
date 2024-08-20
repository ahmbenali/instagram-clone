import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm p-3">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        {/* logo desktop */}
        {/*   <div className="hidden lg:inline-flex relative w-24">
            <Image
              src="/logo_desktop.webp"
              alt="Instagram Logo"
              layout="fill"
              objectFit="contain"
            />
          </div> */}
        <Link
          href="/"
          className="hidden lg:inline-flex "
        >
          <Image
            src="/logo_desktop.webp"
            alt="Instagram Logo"
            // width={96}
            // height={96}
            width="0"
            height="0"
            sizes="100vw"
            className="w-24 h-auto"
          />
        </Link>
        {/* logo mobile*/}
        <Link
          href="/"
          className="lg:hidden w-auto"
        >
          <Image
            src="/logo_mobile.webp"
            alt="Instagram Logo"
            // width={40}
            // height={40}
            width="0"
            height="0"
            sizes="100vw"
            className="w-10 h-auto"
          />
        </Link>

        {/* searchbox */}
        <div className="relative max-w-xs ">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="w-5 h-5 to-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 bg-gray-50 border border-gray-300 text-sm rounded-md  py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          />
        </div>

        {/* menu items */}
        {/* login button */}
        {/* <button className="text-sm font-semibold text-blue-500">Log In</button> */}
        <div className="flex justify-end items-center space-x-4">
          <HomeIcon className="navBtn" />
          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45" />
            <div className="absolute -top-1 -right-1 text-xs w-4 h-4 bg-red-500 rounded-full flex justify-center items-center text-white animate-pulse p-2">
              10
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <MenuIcon className="h-6  md:hidden cursor-pointer" />
          <HeartIcon className="navBtn" />
          <Image
            src="/profile_img.gif"
            alt=""
            width={30}
            height={30}
            className="rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Header
