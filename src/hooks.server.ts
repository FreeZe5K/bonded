import { type Handle } from '@sveltejs/kit' // redirect,

// Import the sequence function from SvelteKit
import { sequence } from '@sveltejs/kit/hooks'
import dbPromise from '$lib/server/db'
// import { handle as authHandle } from '$lib/auth'

import type { MongoClient } from 'mongodb'
// import type { Session } from '@auth/core/types'
// import { dev } from '$app/environment'

export const dbHandle = async ({ event, resolve }: { event: any; resolve: any }): Promise<any> => {
  // Get the database client promise and wait for it to resolve
  const mongoClient: MongoClient = await dbPromise

  // Attach the database to the event with the db of the current environment
  // event.locals.db = mongoClient.db(dev ? 'dev' : 'prod')
  event.locals.db = mongoClient.db('bonded')

  /*
  // protect requests to all routes that start with /protected-routes
  if (event.route.id?.startsWith('/(protected)')) {
    // Get the session from the event (created in the authHandle)
    const session: Session | null = await event.locals.auth()

    // Check if there is a session set
    if (!session) {
      // The user is not signed in. Redirect them to the login page
      throw redirect(303, '/')
    }
  }
  */

  // Resolve the event to keep the request going
  return resolve(event)
}

// Return the handles one after another
// authHandle,
export const handle: Handle = sequence(dbHandle)
