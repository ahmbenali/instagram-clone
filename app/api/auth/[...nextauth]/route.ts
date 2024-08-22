import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

interface SessionUser {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
  username?: string
  uid?: string | null | undefined
}

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // ...add more providers here
  ],
  // secret: process.env.NEXTAUTH_SECRET!,
  // pages: {
  //   signIn: '/login',
  // },
  callbacks: {
    async session({ session, token }) {
      if (session?.user) {
        session.user = {
          ...session.user,
          username: session.user.name!.split(' ').join('').toLocaleLowerCase(),
          uid: token.sub,
        } as SessionUser
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }
