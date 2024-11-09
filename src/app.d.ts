import { Db, MongoClient } from 'mongodb'

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
  declare var mongoClient: MongoClient
  declare var mongoClientPromise: any

  namespace App {
    interface Locals {
      db: Db
    }

    interface Error {
      message: string
      errorId: string
    }

    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
