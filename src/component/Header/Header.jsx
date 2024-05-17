import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Experience', href: '#experience', current: false },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <>
      <div className="min-h-full sticky top-0 z-10">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <h1 className="text-white font-semibold text-3xl">Porfolio</h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
















// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Header() {
//   return (
//     <Disclosure as="nav" className="bg-gray-950 text-white shadow-md">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16 items-center">
//               <div className="flex">
//                 <h2 className="text-xl font-bold" style={{ color: 'white' }}>Portfolio</h2>
//                 <div className="hidden sm:ml-6 sm:flex">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                           'rounded-md px-3 py-2 text-sm font-medium'
//                         )}
//                         aria-current={item.current ? 'page' : undefined}
//                         style={{ color: 'white' }}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   type="button"
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                   onClick={() => console.log("View notifications")}
//                 >
//                   <span className="sr-only">View notifications</span>
//                 </button>
//                 <Menu as="div" className="ml-3 relative">
//                   <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
//                     <span className="sr-only">Open user menu</span>
//                   </Disclosure.Button>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//                 <button
//                   type="button"
//                   className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
//                   onClick={() => console.log("View notifications")}
//                 >
//                   {open ? (
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <Disclosure.Panel className="sm:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               {navigation.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={classNames(
//                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                     'block px-3 py-2 rounded-md text-base font-medium'
//                   )}
//                   aria-current={item.current ? 'page' : undefined}
//                   style={{ color: 'white' }}
//                 >
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   )
// }







// // import { Fragment } from 'react'
// // import { Disclosure, Menu, Transition } from '@headlessui/react'
// // import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// // const navigation = [
// //   { name: 'Dashboard', href: '#', current: true },
// //   { name: 'Team', href: '#', current: false },
// //   { name: 'Projects', href: '#', current: false },
// //   { name: 'Calendar', href: '#', current: false },
// // ]

// // function classNames(...classes) {
// //   return classes.filter(Boolean).join(' ')
// // }
// // export default function Header() {
// //   return (
// //     <Disclosure as="nav" className="bg-gray-400">
// //       {({ open }) => (
// //         <>
// //           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
// //             <div className="relative flex h-16 items-center justify-between">
// //               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
// //                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
// //                   <span className="absolute -inset-0.5" />
// //                   <span className="sr-only">Open main menu</span>
// //                   {open ? (
// //                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
// //                   ) : (
// //                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
// //                   )}
// //                 </Disclosure.Button>
// //               </div>
// //               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
// //                 <div className="flex flex-shrink-0 items-center">
// //                   <img
// //                     className="h-8 w-auto"
// //                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
// //                     alt="Your Company"
// //                   />
// //                 </div>
// //                 <div className="hidden sm:ml-6 sm:block">
// //                   <div className="flex space-x-4">
// //                     {navigation.map((item) => (
// //                       <a
// //                         key={item.name}
// //                         href={item.href}
// //                         className={classNames(
// //                           item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// //                           'rounded-md px-3 py-2 text-sm font-medium'
// //                         )}
// //                         aria-current={item.current ? 'page' : undefined}
// //                       >
// //                         {item.name}
// //                       </a>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
// //                 <button
// //                   type="button"
// //                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
// //                 >
// //                   <span className="absolute -inset-1.5" />
// //                   <span className="sr-only">View notifications</span>
// //                   <BellIcon className="h-6 w-6" aria-hidden="true" />
// //                 </button>

// //                 {/* Profile dropdown */}
// //                 <Menu as="div" className="relative ml-3">
// //                   <div>
// //                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
// //                       <span className="absolute -inset-1.5" />
// //                       <span className="sr-only">Open user menu</span>
// //                       <img
// //                         className="h-8 w-8 rounded-full"
// //                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
// //                         alt=""
// //                       />
// //                     </Menu.Button>
// //                   </div>
// //                   <Transition
// //                     as={Fragment}
// //                     enter="transition ease-out duration-100"
// //                     enterFrom="transform opacity-0 scale-95"
// //                     enterTo="transform opacity-100 scale-100"
// //                     leave="transition ease-in duration-75"
// //                     leaveFrom="transform opacity-100 scale-100"
// //                     leaveTo="transform opacity-0 scale-95"
// //                   >
// //                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                           >
// //                             Your Profile
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                           >
// //                             Settings
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <a
// //                             href="#"
// //                             className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
// //                           >
// //                             Sign out
// //                           </a>
// //                         )}
// //                       </Menu.Item>
// //                     </Menu.Items>
// //                   </Transition>
// //                 </Menu>
// //               </div>
// //             </div>
// //           </div>

// //           <Disclosure.Panel className="sm:hidden">
// //             <div className="space-y-1 px-2 pb-3 pt-2">
// //               {navigation.map((item) => (
// //                 <Disclosure.Button
// //                   key={item.name}
// //                   as="a"
// //                   href={item.href}
// //                   className={classNames(
// //                     item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
// //                     'block rounded-md px-3 py-2 text-base font-medium'
// //                   )}
// //                   aria-current={item.current ? 'page' : undefined}
// //                 >
// //                   {item.name}
// //                 </Disclosure.Button>
// //               ))}
// //             </div>
// //           </Disclosure.Panel>
// //         </>
// //       )}
// //     </Disclosure>
// //   )
// // }
