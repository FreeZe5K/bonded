import { redirect } from '@sveltejs/kit'
import { ObjectId } from 'mongodb'

// Import necessary types
import type { PageServerLoad } from './$types'
// import type { Session } from '@auth/core/types'

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({
  locals,
}: {
  locals: App.Locals
  cookies: any
}): Promise<any> => {
  // Get the session data
  // const session: any = await locals.auth() // Session | null

  const profiles = await locals.db
    .collection('profiles')
    .find({}, { projection: { _id: 0, id: { $toString: '$_id' }, firstName: 1, lastName: 1 } })
    ?.limit(25)
    .toArray()

  console.log('found.profiles', profiles)

  // Sanity check to make sure the session exists
  // if (session?.id) {
  // Delete the session from the database
  // await locals.db.collection('sessions').deleteOne({ _id: new ObjectId(session?.id) })

  // Delete the auth cookies we generated upon login
  // cookies.delete('authjs.callback-url', { path: '/' })
  // cookies.delete('authjs.session-token', { path: '/' })
  // cookies.delete('authjs.csrf-token', { path: '/' })
  // }

  // Redirect the user to the login page
  // redirect(303, '/')

  return { profiles }
}
