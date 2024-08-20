import Image from 'next/image'

type Props = {
  username: string
  img: string
}

function Story({ username, img }: Props) {
  return (
    <div>
      <Image
        src={img}
        alt=""
        width={24}
        height={24}
        className="w-14 h-14  rounded-full  border-2 p-[2px] border-red-200  object-contain cursor-pointer transform transition-all duration-150 ease-out hover:scale-110"
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story
