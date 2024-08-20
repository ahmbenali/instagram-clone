import Feed from '~/components/feed'

function home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Feed />
    </div>
  )
}

export default home
