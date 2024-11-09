<script lang="ts">
  import { Label } from '$ui/label'
  import * as Sidebar from '$ui/sidebar'

  import ProfileListCard from '$components/profiles/profile-list-card.svelte'

  import Search from 'lucide-svelte/icons/search'

  let { data } = $props()

  $inspect('profiles.data', data)

  const sidebarData = {
    versions: ['1.0.1', '1.1.0-alpha', '2.0.0-beta1'],
    navMain: [
      {
        title: 'Getting Started',
        url: '#',
        items: [
          {
            title: 'Installation',
            url: '#',
          },
          {
            title: 'Project Structure',
            url: '#',
          },
        ],
      },
      {
        title: 'Building Your Application',
        url: '#',
        items: [
          {
            title: 'Routing',
            url: '#',
          },
          {
            title: 'Data Fetching',
            url: '#',
            isActive: true,
          },
          {
            title: 'Rendering',
            url: '#',
          },
          {
            title: 'Caching',
            url: '#',
          },
          {
            title: 'Styling',
            url: '#',
          },
          {
            title: 'Optimizing',
            url: '#',
          },
          {
            title: 'Configuring',
            url: '#',
          },
          {
            title: 'Testing',
            url: '#',
          },
          {
            title: 'Authentication',
            url: '#',
          },
          {
            title: 'Deploying',
            url: '#',
          },
          {
            title: 'Upgrading',
            url: '#',
          },
          {
            title: 'Examples',
            url: '#',
          },
        ],
      },
      {
        title: 'API Reference',
        url: '#',
        items: [
          {
            title: 'Components',
            url: '#',
          },
          {
            title: 'File Conventions',
            url: '#',
          },
          {
            title: 'Functions',
            url: '#',
          },
          {
            title: 'next.config.js Options',
            url: '#',
          },
          {
            title: 'CLI',
            url: '#',
          },
          {
            title: 'Edge Runtime',
            url: '#',
          },
        ],
      },
      {
        title: 'Architecture',
        url: '#',
        items: [
          {
            title: 'Accessibility',
            url: '#',
          },
          {
            title: 'Fast Refresh',
            url: '#',
          },
          {
            title: 'Svelte Compiler',
            url: '#',
          },
          {
            title: 'Supported Browsers',
            url: '#',
          },
          {
            title: 'Rollup',
            url: '#',
          },
        ],
      },
    ],
  }
</script>

<!--

  <div
    class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
  >

    <div class="space-y-6 lg:col-span-2 lg:col-start-1">
    </div>

    <section aria-labelledby="timeline-title" class="lg:col-span-1 lg:col-start-3">
    </section>
  </div>
-->

<!--<Sidebar.Rail />-->

<!-- -->

<main class="mx-auto max-w-2xl pb-24 pt-4 sm:px-6 sm:pt-8 lg:max-w-7xl lg:px-8">
  <!--    <main class="flex flex-1 flex-col gap-4 p-4">-->
  <!-- TODO: Skeleton loader -->
  <!--
      <div class="grid auto-rows-min gap-4 md:grid-cols-3">
        <div class="bg-muted/50 aspect-video rounded-xl"></div>
        <div class="bg-muted/50 aspect-video rounded-xl"></div>
        <div class="bg-muted/50 aspect-video rounded-xl"></div>
      </div>
      <div class="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
      -->

  <!--
  <div
    class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-5"
  >
    <div class="space-y-6 lg:col-span-2 lg:col-start-1">Sidebar</div>
    <section class="lg:col-span-3 lg:col-start-2">
      <div class="space-y-4">
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
      </div>
    </section>
  </div>
  -->

  <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
    <aside>
      <h2 class="sr-only">Filters</h2>

      <!-- Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. -->
      <button type="button" class="inline-flex items-center lg:hidden">
        <span class="text-sm font-medium text-gray-700">Filters</span>
        <svg
          class="ml-1 h-5 w-5 shrink-0 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
          />
        </svg>
      </button>

      <div class="hidden lg:block">
        <form class="space-y-10 divide-y divide-gray-200">
          <div>
            <fieldset>
              <div class="w-full max-w-lg lg:max-w-xs">
                <label for="search" class="sr-only">Search</label>
                <div class="relative text-stone-400 focus-within:text-stone-500">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="search"
                    class="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-stone-900 ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm/6"
                    placeholder="Name or phone number"
                    type="search"
                    name="search"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div class="pt-10">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">Color</legend>
              <div class="space-y-3 pt-6">
                <div class="flex items-center">
                  <input
                    id="color-0"
                    name="color[]"
                    value="white"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-0" class="ml-3 text-sm text-gray-600">White</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="color-1"
                    name="color[]"
                    value="beige"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-1" class="ml-3 text-sm text-gray-600">Beige</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="color-2"
                    name="color[]"
                    value="blue"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-2" class="ml-3 text-sm text-gray-600">Blue</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="color-3"
                    name="color[]"
                    value="brown"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-3" class="ml-3 text-sm text-gray-600">Brown</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="color-4"
                    name="color[]"
                    value="green"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-4" class="ml-3 text-sm text-gray-600">Green</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="color-5"
                    name="color[]"
                    value="purple"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="color-5" class="ml-3 text-sm text-gray-600">Purple</label>
                </div>
              </div>
            </fieldset>
          </div>
          <div class="pt-10">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">Category</legend>
              <div class="space-y-3 pt-6">
                <div class="flex items-center">
                  <input
                    id="category-0"
                    name="category[]"
                    value="new-arrivals"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="category-0" class="ml-3 text-sm text-gray-600">All New Arrivals</label
                  >
                </div>
                <div class="flex items-center">
                  <input
                    id="category-1"
                    name="category[]"
                    value="tees"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="category-1" class="ml-3 text-sm text-gray-600">Tees</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="category-2"
                    name="category[]"
                    value="crewnecks"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="category-2" class="ml-3 text-sm text-gray-600">Crewnecks</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="category-3"
                    name="category[]"
                    value="sweatshirts"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="category-3" class="ml-3 text-sm text-gray-600">Sweatshirts</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="category-4"
                    name="category[]"
                    value="pants-shorts"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="category-4" class="ml-3 text-sm text-gray-600"
                    >Pants &amp; Shorts</label
                  >
                </div>
              </div>
            </fieldset>
          </div>
          <div class="pt-10">
            <fieldset>
              <legend class="block text-sm font-medium text-gray-900">Sizes</legend>
              <div class="space-y-3 pt-6">
                <div class="flex items-center">
                  <input
                    id="sizes-0"
                    name="sizes[]"
                    value="xs"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-0" class="ml-3 text-sm text-gray-600">XS</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="sizes-1"
                    name="sizes[]"
                    value="s"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-1" class="ml-3 text-sm text-gray-600">S</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="sizes-2"
                    name="sizes[]"
                    value="m"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-2" class="ml-3 text-sm text-gray-600">M</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="sizes-3"
                    name="sizes[]"
                    value="l"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-3" class="ml-3 text-sm text-gray-600">L</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="sizes-4"
                    name="sizes[]"
                    value="xl"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-4" class="ml-3 text-sm text-gray-600">XL</label>
                </div>
                <div class="flex items-center">
                  <input
                    id="sizes-5"
                    name="sizes[]"
                    value="2xl"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label for="sizes-5" class="ml-3 text-sm text-gray-600">2XL</label>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </aside>

    <!-- Product grid -->
    <div class="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
      <!-- Your content -->

      <div class="space-y-4">
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
        <ProfileListCard />
      </div>
    </div>
  </div>

  <!-- mt-6 -->
</main>

<!--
<main class="pb-16 pt-8">
  <div class="mx-auto max-w-7xl sm:px-6 lg:px-0">
    <ul
      role="list"
      class="mt-5 divide-y divide-stone-200 border-t border-stone-200 sm:mt-0 sm:border-t-0"
    >
      <li class="">
        <a href="/profiles/123456" class="group block">
          <div class="flex items-center px-4 py-5 sm:px-0 sm:py-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="truncate text-sm font-medium text-purple-600">Emily Selman</p>
                  <p class="mt-2 flex items-center text-sm text-stone-500">
                    <svg
                      class="mr-1.5 h-5 w-5 shrink-0 text-stone-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                      />
                      <path
                        d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                      />
                    </svg>
                    <span class="truncate">emily.selman@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-stone-900">
                      Applied on
                      <time datetime="2020-07-01T15:34:56">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-stone-500">
                      <svg
                        class="mr-1.5 h-5 w-5 shrink-0 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-stone-400 group-hover:text-stone-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="/profiles/123456" class="group block">
          <div class="flex items-center px-4 py-5 sm:px-0 sm:py-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="truncate text-sm font-medium text-purple-600">Emily Selman</p>
                  <p class="mt-2 flex items-center text-sm text-stone-500">
                    <svg
                      class="mr-1.5 h-5 w-5 shrink-0 text-stone-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                      />
                      <path
                        d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                      />
                    </svg>
                    <span class="truncate">emily.selman@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-stone-900">
                      Applied on
                      <time datetime="2020-07-01T15:34:56">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-stone-500">
                      <svg
                        class="mr-1.5 h-5 w-5 shrink-0 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-stone-400 group-hover:text-stone-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </li>

      <li>
        <a href="/profiles/123456" class="group block">
          <div class="flex items-center px-4 py-5 sm:px-0 sm:py-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="shrink-0">
                <img
                  class="h-12 w-12 rounded-full group-hover:opacity-75"
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                <div>
                  <p class="truncate text-sm font-medium text-purple-600">Emily Selman</p>
                  <p class="mt-2 flex items-center text-sm text-stone-500">
                    <svg
                      class="mr-1.5 h-5 w-5 shrink-0 text-stone-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                      />
                      <path
                        d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                      />
                    </svg>
                    <span class="truncate">emily.selman@example.com</span>
                  </p>
                </div>
                <div class="hidden md:block">
                  <div>
                    <p class="text-sm text-stone-900">
                      Applied on
                      <time datetime="2020-07-01T15:34:56">January 7, 2020</time>
                    </p>
                    <p class="mt-2 flex items-center text-sm text-stone-500">
                      <svg
                        class="mr-1.5 h-5 w-5 shrink-0 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Completed phone screening
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <svg
                class="h-5 w-5 text-stone-400 group-hover:text-stone-700"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </a>
      </li>
    </ul>

    <nav
      class="flex items-center justify-between border-t border-stone-200 px-4 sm:px-0"
      aria-label="Pagination"
    >
      <div class="-mt-px flex w-0 flex-1">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
        >
          <svg
            class="mr-3 h-5 w-5 text-stone-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a.75.75 0 0 1-.75.75H4.66l2.1 1.95a.75.75 0 1 1-1.02 1.1l-3.5-3.25a.75.75 0 0 1 0-1.1l3.5-3.25a.75.75 0 1 1 1.02 1.1l-2.1 1.95h12.59A.75.75 0 0 1 18 10Z"
              clip-rule="evenodd"
            />
          </svg>
          Previous
        </a>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
          >1</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-purple-500 px-4 pt-4 text-sm font-medium text-purple-600"
          aria-current="page">2</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
          >3</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
          >4</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
          >5</a
        >
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
          >6</a
        >
      </div>
      <div class="-mt-px flex w-0 flex-1 justify-end">
        <a
          href="#"
          class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-stone-500 hover:border-stone-200 hover:text-stone-700"
        >
          Next
          <svg
            class="ml-3 h-5 w-5 text-stone-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  </div>
</main>
-->
