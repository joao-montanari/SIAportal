import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BsPenFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import InputMask from 'react-input-mask';

import { AiOutlineUser, AiOutlineCalendar } from 'react-icons/ai';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlineDocumentDuplicate } from 'react-icons/hi';
import { BiPhone } from 'react-icons/bi';
import { IoIosTransgender } from 'react-icons/io';

export default function ModalEditUser() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className='bg-[#88185D] justify-center flex p-3 rounded-full hover:bg-[#cd298e] duration-300 shadow-md'
      >
        <BsPenFill
          className='m-auto text-white'
          size={25}
        />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <button 
                    type='button'
                    className='absolute top-0 right-0 mt-6 mr-4 rounded-md hover:bg-red-100 duration-300'
                    onClick={() => setIsOpen(false)}
                  >
                    <GrFormClose size={30} className='text-gray-400' />
                  </button>
                  
                  <Dialog.Title as="h3" className="text-2xl font-medium leading-6 text-gray-900">
                    Editar informações de cadastro
                  </Dialog.Title>
                  
                  <form className='mt-3 columns-2'>
                    <div className=''>
                      <label className='pl-1'>Nome:</label>
                      <div className='flex'>
                        <AiOutlineUser className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                        <input 
                          type="text"
                          className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' 
                        />
                      </div>
                    </div>
                    <div className='mt-2'>
                      <label className='pl-1'>E-mail:</label>
                        <div className='flex'>
                          <MdOutlineEmail className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                          <input 
                            type="email" 
                            className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' 
                          />
                        </div>
                    </div>
                    <div className='mt-2'>
                      <label className='pl-1'>Nascimento:</label>
                        <div className='flex'>
                          <AiOutlineCalendar className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                          <input 
                            type="date" 
                            className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' 
                          />
                        </div>
                    </div>
                    <div className='mt-2'>
                      <label className='pl-1'>Telefone:</label>
                        <div className='flex'>
                          <BiPhone className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                          <InputMask 
                            type="text" 
                            mask="(99) 99999-9999"
                            className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' 
                          />
                        </div>
                    </div>
                    <div className='mt-2'>
                      <label className='pl-1'>CPF:</label>
                        <div className='flex'>
                          <HiOutlineDocumentDuplicate className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                          <InputMask 
                            type="text" 
                            mask="999.999.999-99"
                            className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' 
                          />
                        </div>
                    </div>
                    <div className='mt-2'>
                      <label className='pl-1'>Gênero:</label>
                        <div className='flex'>
                          <IoIosTransgender className='bg-[#88185D] text-white h-8 w-8 border-l-2 border-[#88185D]'/>
                          <select type="text" className='border-2 border-[#88185D] w-80 p-1 pl-2 text-sm h-8 rounded-tr-lg rounded-br-lg' >
                            <option value="I">Selecionar</option>
                            <option value="F">Feminino</option>
                            <option value="M">Mascuino</option>
                            <option value="N">Não binário</option>
                          </select>
                        </div>
                    </div>
                  </form>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="float-right inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      Salvar
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}