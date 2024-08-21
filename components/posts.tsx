import Post from './post'

function Posts() {
  return (
    <div>
      {dummy_data.map(post => (
        <Post
          key={post.userId}
          {...post}
        />
      ))}
    </div>
  )
}

const dummy_data = [
  {
    userId: '1',
    username: 'ahmed',
    userImg: '/profile_img.gif',
    img: '/sun-set.webp',
    caption:
      'This is my first post. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ,description auto block comment prefix body',
  },
  {
    userId: '2',
    username: 'mido',
    userImg: '/profile_img.gif',
    img: '/palms.jpeg',
    caption:
      'This is my second post Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ,description auto block comment prefix body',
  },
  {
    userId: '3',
    username: 'sara',
    userImg: '/sara-profile.jpg',
    img: '/space-galaxy.jpg',
    caption:
      'This is my second post Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ,description auto block comment prefix body',
  },
]

export default Posts
