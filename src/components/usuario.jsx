import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment, useState } from 'react'

import { VscBell, VscBellDot } from 'react-icons/vsc'
import { HiUserCircle } from 'react-icons/hi'
import { BsCameraFill, BsTelephoneFill } from 'react-icons/bs'
import { HiDocument } from 'react-icons/hi'
import { FaAddressBook } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

export default function Usuario() {
    const [visualizacao, setVisualizacao] = useState(true);

    const [opcoes, setOpcoes] = useState([
        {
            name: 'Foto',
            href: '##',
            icon: <BsCameraFill className='text-xl ml-1'/>,
        },
        {
            name: 'Manual do Aluno',
            href: '##',
            icon: <HiDocument className='text-xl ml-1'/>,
        },
        {
            name: 'Ouvidoria',
            href: '##',
            icon: <BsTelephoneFill className='text-xl ml-1'/>,
        },
        {
            name: 'Editar Cadastro',
            href: '##',
            icon: <FaAddressBook className='text-xl ml-1'/>,
        },
        {
            name: 'Logout',
            href: '##',
            icon: <MdLogout className='text-xl ml-1'/>,
        },
    ])

    return (
        <div className="w-auto max-w-sm">
            <Popover className="relative">
                {({ open }) => (
                <>
                    <Popover.Button
                        className={`${open ? '' : 'text-opacity-90'} group inline-flex items-center`}
                    >
                        <HiUserCircle className="text-5xl text-gray-400 hover:text-gray-300 duration-300"/>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-14 z-10 mt-3 w-52 -translate-x-1/2 transform px-4 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative grid gap-2 bg-white p-3">
                                  {
                                      opcoes.map((item) => (
                                          <a
                                              key={item.name}
                                              href={item.href}
                                              className="hover:bg-gray-200 rounded-lg px-1 py-2 duration-700"
                                          >
                                              <div className='flex items-center'>
                                                  {item.icon}
                                                  <h1 className='ml-2'>{item.name}</h1>
                                              </div>
                                          </a>
                                      ))
                                  }
                              </div>
                          </div>
                      </Popover.Panel>
                    </Transition>
                </>
                )}
            </Popover>
        </div>
    )
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  )
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  )
}
