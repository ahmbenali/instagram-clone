'use client'

import {
  CameraIcon,
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
  XIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore'
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { app } from '~/firebase'

function Header() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [imageFileUrl, setImageFileUrl] = useState('')
  const filePickerRef = useRef<HTMLInputElement>(null)
  const [imageFileUploading, setImageFileUploading] = useState(false)
  const [postUploading, setPostUploading] = useState(false)
  const [caption, setCaption] = useState('')
  const db = getFirestore(app)

  // handle add image to post
  const addImageToPost = (ev: ChangeEvent<HTMLInputElement>) => {
    const file = ev.target.files?.[0] // the first file

    // select image from local computer
    if (file) {
      setSelectedFile(file)
      setImageFileUrl(URL.createObjectURL(file))
      // console.log(file, URL.createObjectURL(file))
    }
  }

  // upload image to cloudinary
  useEffect(() => {
    const uploadImageToStorage = async () => {
      setImageFileUploading(true)

      const storage = getStorage(app)
      const fileName = new Date().getTime() + '-' + selectedFile?.name

      const storageRef = ref(storage, fileName)
      const uploadTask = uploadBytesResumable(storageRef, selectedFile!)

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100

          console.log('Upload is ' + progress + '% done')
        },
        error => {
          console.log(error)
          setImageFileUploading(false)
          setImageFileUrl('')
          setSelectedFile(null)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setImageFileUrl(downloadURL)
            setImageFileUploading(false)
            // setSelectedFile(null)
          })
        }
      )
    }

    // console.log('SESSION: ', session)

    if (selectedFile) uploadImageToStorage()
  }, [selectedFile])

  const handleUploadPost = async () => {
    setPostUploading(true)

    const docRef = await addDoc(collection(db, 'posts'), {
      username: session?.user?.name!.split(' ').join('').toLocaleLowerCase(),
      profileImg: session?.user?.image,
      image: imageFileUrl,
      timestamp: serverTimestamp(),
      caption,
    })

    // console.log('docRef: ', docRef)
    setPostUploading(false)
    setIsOpen(false)

    /*  if (!imageFileUrl) return

    const post = {
      username: session?.user?.name,
      profileImg: session?.user?.image,
      image: imageFileUrl,
    }
    console.log(post) */
  }

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm p-3">
      <div className="flex justify-between items-center mx-auto max-w-6xl">
        {/* logo desktop */}
        <Link
          href="/"
          className="hidden lg:inline-flex "
        >
          <Image
            src="/logo_desktop.webp"
            alt="Instagram Logo"
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

          <UserGroupIcon className="navBtn" />
          <MenuIcon className="h-6  md:hidden cursor-pointer" />
          <HeartIcon className="navBtn" />

          {session && (
            <>
              <PlusCircleIcon
                onClick={() => setIsOpen(true)}
                className="navBtn hover:text-red-600"
              />
              <Image
                src={session?.user?.image!}
                alt={session?.user?.name!}
                width={30}
                height={30}
                className="rounded-full cursor-pointer"
                onClick={() => signOut()}
              />
            </>
          )}

          {!session && (
            <button
              className="text-sm font-semibold text-blue-500"
              onClick={() => signIn()}
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Add pop-up modal for media uploading  */}
      <Modal
        isOpen={isOpen}
        className={`${
          isOpen ? 'block' : 'hidden'
        } max-w-lg bg-white w-[90%] p-6 absolute top-56 left-[50%] translate-x-[-50%] border-2 rounded-m shadow-md`}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
      >
        <div className="flex-col-center h-[100%]">
          {selectedFile && (
            <Image
              /* remove file on click */
              onClick={() => setSelectedFile(null)}
              src={imageFileUrl}
              alt=""
              width={24}
              height={24}
              className={`w-full object-contain cursor-pointer max-h-[250px] ${
                imageFileUploading ? 'animate-pulse' : ''
              }`}
            />
          )}

          {!selectedFile && (
            <CameraIcon
              onClick={() => filePickerRef.current?.click()}
              className="w-10 h-10 text-gray-400 cursor-pointer"
            />
          )}
          <input
            hidden
            type="file"
            accept="image/*"
            ref={filePickerRef}
            onChange={addImageToPost}
          />
        </div>
        <input
          type="text"
          maxLength={150}
          placeholder="Enter caption..."
          className=" m-4 w-full border-0 text-center  focus:ring-0 placeholder-gray-500 outline-none"
          onChange={ev => setCaption(ev.target.value)}
        />
        <button
          onClick={handleUploadPost}
          disabled={
            !selectedFile ||
            imageFileUploading ||
            !caption.trim() ||
            postUploading
          }
          className="bg-red-600 w-full p-2 text-white rounded-lg shadow-md hover:brightness-105 transform transition-all duration-150 ease-out disabled:bg-gray-200 disabled:cursor-not-allowed disabled:hover:brightness-100"
        >
          Upload Post
        </button>
        <XIcon
          onClick={() => setIsOpen(false)}
          className="h-5 w-5 cursor-pointer absolute top-2 right-2 hover:text-red-600 transform transition-all duration-150 ease-out"
        />
      </Modal>
    </div>
  )
}

export default Header
