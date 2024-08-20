import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'

import Image from 'next/image'

type Props = {
  userId: string
  username: string
  userImg: string
  img: string
  caption: string
}

function Post({ userId, username, userImg, img, caption }: Props) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* header */}
      <div className="flex items-center p-5">
        <Image
          src={userImg}
          alt={caption}
          width={0}
          height={0}
          sizes="100vw"
          className=" w-12 h-12 rounded-full object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* image */}
      <Image
        src={img}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="object-cover w-full"
      />

      {/* buttons */}
      <div className="flex p-4 items-center gap-4">
        <HeartIcon className="btn" />
        <ChatIcon className="btn" />
        <PaperAirplaneIcon className="btn" />
        <BookmarkIcon className="btn ml-auto" />
      </div>

      {/* caption */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* comments area */}

      {/* input box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0 outline-none"
          type="text"
          placeholder="Add a nice comment..."
        />
        <button
          type="submit"
          className="font-semibold text-blue-400"
        >
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
