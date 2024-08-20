import Posts from './posts'
import Stories from './stories'

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      {/* section left */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* section right */}
      <section className="">
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  )
}

export default Feed
