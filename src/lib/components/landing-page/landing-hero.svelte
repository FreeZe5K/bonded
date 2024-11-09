<script lang="ts">
  let query: string = $state<string>('')
</script>

<!--
<h1>Bonded.app</h1>
<p class="text-xs italic text-stone-400">Coming soon</p>
-->

<!--
<div class="py-16 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <h2
      class="max-w-2xl text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
    >
      Search by name to find people and get contact information for over 200 million adults.
    </h2>
    <form class="mt-10 max-w-lg">
      <div class="flex gap-x-4">
        <label for="email-address" class="sr-only">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          autocomplete="email"
          required
          class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Subscribe</button
        >
      </div>
      <p class="mt-4 text-sm/6 text-stone-900">
        We care about your data. Read our <a
          href="#"
          class="font-semibold text-indigo-600 hover:text-indigo-500">privacy&nbsp;policy</a
        >.
      </p>
    </form>
  </div>
</div>
-->

<!--
<div class="relative isolate px-6 pt-14 lg:px-8">
  <div class="mx-auto max-w-2xl py-8 sm:py-10 lg:py-12">
    <div class="text-center">
      <h1 class="text-balance text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
        Transparency, for every stage of commitment
      </h1>
      <p class="mt-8 text-pretty text-lg font-medium text-stone-500 sm:text-xl/8">
        Whether single, dating, or committed, uncover hidden red flags and get instant notifications
        if your partner is found on dating sites or involved in suspicious activity.
      </p>
      <form class="mt-10 max-w-lg">
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="lp-name"
            name="name"
            type="text"
            autocomplete="name"
            class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
            placeholder="Name or phone number"
            required
            bind:value={query}
          />
          <a
            type="button"
            class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            href={`/profiles?q=${query}`}
          >
            Search
          </a>
        </div>
      </form>
    </div>
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <div
        class="relative rounded-full px-3 py-1 text-sm/6 text-stone-600 ring-1 ring-stone-900/10 hover:ring-stone-900/20"
      >
        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"
          ><span class="absolute inset-0" aria-hidden="true"></span>Read more
          <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </div>
  </div>
</div>
-->

<main>
  <div class="relative isolate">
    <!--
    <svg
      class="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-stone-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
          width="200"
          height="200"
          x="50%"
          y="-1"
          patternUnits="userSpaceOnUse"
        >
          <path d="M.5 200V.5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-stone-50">
        <path
          d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
          stroke-width="0"
        />
      </svg>
      <rect
        width="100%"
        height="100%"
        stroke-width="0"
        fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
      />
    </svg>
    <div
      class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
      aria-hidden="true"
    >
      <div
        class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        style="clip-path: polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
      ></div>
    </div>
    -->
    <div class="">
      <!-- overflow-hidden -->
      <div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div class="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1
              class="text-pretty text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl"
            >
              Transparency, for every stage of commitment
            </h1>
            <p
              class="mt-8 text-pretty text-lg font-medium text-stone-500 sm:max-w-md sm:text-xl/8 lg:max-w-none"
            >
              Whether single, dating, or committed, uncover hidden red flags and get instant
              notifications if your partner is found on dating sites or involved in suspicious
              activity.
            </p>
            <form class="mt-10 max-w-lg">
              <div class="flex gap-x-4">
                <label for="lp-name" class="sr-only">Name or phone number</label>
                <input
                  id="lp-name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  class="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  placeholder="Name or phone number"
                  required
                  bind:value={query}
                />
                <a
                  type="button"
                  class="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  href={`/profiles?q=${query}`}
                >
                  Search
                </a>
              </div>
            </form>
            <p class="mt-3 text-sm text-stone-500">
              We care about the protection of your data. Read our
              <a href="/privacy" class="font-medium text-stone-900 underline">Privacy Policy</a>.
            </p>
            <!--
            <div class="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Get started</a
              >
              <a href="#" class="text-sm/6 font-semibold text-stone-900"
                >Live demo <span aria-hidden="true">→</span></a
              >
            </div>
            -->
          </div>
          <div
            class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
          >
            <div
              class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
            >
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-stone-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-stone-900/10"
                ></div>
              </div>
            </div>
            <div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-stone-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-stone-900/10"
                ></div>
              </div>
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-stone-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-stone-900/10"
                ></div>
              </div>
            </div>
            <div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-stone-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-stone-900/10"
                ></div>
              </div>
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                  alt=""
                  class="aspect-[2/3] w-full rounded-xl bg-stone-900/5 object-cover shadow-lg"
                />
                <div
                  class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-stone-900/10"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
