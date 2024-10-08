import { MiniProfile, Posts, Stories, Suggestions } from '.'

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ">
      {/* section left */}
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {/* section right -> will be showed only on xl displays */}
      <section className="hidden xl:inline-grid md:col-span-1">
        <div className="fixed top-16">
          <MiniProfile />
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
