/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { useState } from 'react';
import { Popover, Transition } from '@headlessui/react'
import {
    BookmarkAltIcon,
    CalendarIcon,
    MenuIcon,
    ShieldCheckIcon,
    SupportIcon,
    XIcon,
    BeakerIcon,
    ChipIcon,
    PlayIcon,
    PhoneIcon,
    HomeIcon,
    PhotographIcon,
    AcademicCapIcon,
    BadgeCheckIcon,
    UserGroupIcon,
    FlagIcon,

} from '@heroicons/react/outline';
import { ChevronDownIcon, CubeTransparentIcon } from '@heroicons/react/solid'
import { Link, a } from 'react-router-dom';

const events = [
    {
        name: 'Techspardha Events',
        description: 'Explore our events in one of the largest techfest Techspardha.',
        href: '/events',
        icon: ChipIcon,
    },
    {
        name: 'Workshops',
        description: 'Get to know our recent and upcoming workshops here.',
        href: '/workshop',
        icon: BeakerIcon,
    }
]
const menu = [
    {
        name: 'About Us',
        href: '/about-us',
        icon: UserGroupIcon
    },
    {
        name: 'Techspardha Events',
        href: '/events',
        icon: ChipIcon,
    },
    {
        name: 'Workshops',
        href: '/workshop',
        icon: BeakerIcon,
    },
    {
        name: 'Gallery',
        href: '/gallery',
        icon: PhotographIcon,
    },
    {
        name: 'Contact us',
        href: '/contact-us',
        icon: PhoneIcon,
    },
    {
        name: 'Study Material',
        href: '/study-material',
        icon: BookmarkAltIcon,
    },
    // {
    //     name: 'Explore',
    //     href: '/explore',
    //     icon: CubeTransparentIcon,
    // },
    // {
    //     name: 'Our Allies',
    //     href: '/our-allies',
    //     icon: UserGroupIcon
    // },

]
const more = [
    // {
    //     name: 'Academics',
    //     description: 'Get all of your questions answered in our forums or contact support.',
    //     href: '/coming-soon',
    //     icon: AcademicCapIcon,
    // },
    // {
    //     name: 'Achievements',
    //     description: 'Learn how to maximize our platform to get the most out of it.',
    //     href: '/coming-soon',
    //     icon: FlagIcon,
    // },
    {
        name: 'Explore',
        description: 'Get to know different information posted by the society.',
        href: '/explore',
        icon: CubeTransparentIcon,
    },
    {
        name: 'Our Allies',
        description: 'Best team with exceptional talents.',
        href: '/our-allies',
        icon: UserGroupIcon
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

    return (
        <Popover className=" relative w-full z-50 left-0 top-0 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-2 sm:py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/" className='flex justify-start'>
                            <img
                                className=" h-12 sm:h-[65px] w-auto "
                                src={require('../images/logo3.png')}
                                alt=""
                            />
                             <img
                                className=" h-12 sm:h-[65px] w-auto"
                                src={require('../images/logo4.png')}
                                alt=""
                            />
                           
                        </Link>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>
                    {/* Navbar items */}
                    <Popover.Group as="nav" className="hidden md:flex space-x-10">
                        <Link to="/about-us" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About Us
                        </Link>
                        <Popover className="relative">
                            {({ open, close }) => (
                                <>
                                    {/* Toggle Button */}
                                    <Popover.Button
                                        className={`group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 ${open ? "text-gray-900" : "text-gray-500"
                                            }`}
                                    >
                                        <span>Events</span>
                                        <ChevronDownIcon
                                            className={`ml-2 h-5 w-5 ${open ? "text-gray-600" : "text-gray-400"} group-hover:text-gray-500`}
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>

                                    {/* Dropdown Menu */}
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute z-10 mt-3 transform px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                                <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                    {events.map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            to={item.href}
                                                            className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                                            onClick={close} // ✅ Close dropdown on click
                                                        >
                                                            <item.icon className="flex-shrink-0 h-6 w-6 text-gray-800" aria-hidden="true" />
                                                            <div className="ml-4">
                                                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>


                        <Link to="/gallery" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Gallery
                        </Link>


                        {more.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="text-base font-medium text-gray-500 hover:text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link to="/study-material" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Study Material
                        </Link>

                        <Link to="/contact-us" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Contact us
                        </Link>
                    </Popover.Group>

                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500" target={'_blank'} href='https://www.facebook.com/InfraSociety'>
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" target={'_blank'} href='https://www.instagram.com/infrastructure.nitkkr/'>
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" target={'_blank'} href='https://www.aedin.com/company/infrastructure-society-nit-kkr/'>
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 z-10 inset-x-0 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">


                        <div className="pt-4 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Link to="/">
                                        <img
                                            className="h-[70px] w-auto sm:h-[70px]"
                                            src={require('../images/white-logo.png')}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    {menu.map((item) => (
                                        <Popover.Button
                                            key={item.name}
                                            as={Link}
                                            to={item.href}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-gray-800" aria-hidden="true" />
                                            <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                                        </Popover.Button>
                                    ))}
                                </nav>
                            </div>
                        </div>


                        <div className="">

                            <nav className='flex flex-row justify-around mt-4 mb-2 font-semibold'>
                                <Popover.Button
                                    as={Link}
                                    to='/explore'>
                                    <p>Explore</p>
                                </Popover.Button>
                                <Popover.Button
                                    as={Link}
                                    to='/our-allies'>
                                    <p>Our Allies</p>
                                </Popover.Button>
                            </nav>

                            <div className="flex  sm:mt-0 mt-4 pb-4 justify-around sm:justify-start">
                                <a className="text-gray-500" target={'_blank'} href='https://www.facebook.com/InfraSociety' >
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500" target={'_blank'} href='https://www.instagram.com/infrastructure.nitkkr/'>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a className="ml-3 text-gray-500" target={'_blank'} href='https://www.aedin.com/company/infrastructure-society-nit-kkr/'>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>

                            </div>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}