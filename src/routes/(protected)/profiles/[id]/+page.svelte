<script lang="ts">
  import * as Breadcrumb from '$ui/breadcrumb'
</script>

<!-- Page heading -->
<!--
<header class="bg-stone-100 py-8">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:flex xl:items-center xl:justify-between">
    <div class="min-w-0 flex-1">
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/profiles">Ohio</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/profiles">Canton</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Michael Hatter</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    -->

<main class="py-8">
  <!--
  <Breadcrumb.Root class="mb-4 px-4 sm:px-6 md:flex md:space-x-5 lg:max-w-7xl lg:px-8">
    <Breadcrumb.List>
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/profiles">United States</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/profiles">Ohio</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Link href="/profiles">Canton</Breadcrumb.Link>
      </Breadcrumb.Item>
      <Breadcrumb.Separator />
      <Breadcrumb.Item>
        <Breadcrumb.Page>Michael Hatter</Breadcrumb.Page>
      </Breadcrumb.Item>
    </Breadcrumb.List>
  </Breadcrumb.Root>
  -->

  <!-- Page header -->
  <div
    class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8"
  >
    <div class="flex items-center space-x-5">
      <div class="shrink-0">
        <div class="relative">
          <img
            class="h-16 w-16 rounded-full"
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
          />
          <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></span>
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold text-stone-900">Ricardo Cooper</h1>
        <p class="text-sm font-medium text-stone-500">
          Applied for <a href="#" class="text-stone-900">Front End Developer</a> on
          <time datetime="2020-08-25">August 25, 2020</time>
        </p>
      </div>
    </div>
    <div
      class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3"
    >
      <span class="hidden sm:block">
        <button
          type="button"
          class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-100"
        >
          <svg
            class="-ml-0.5 h-5 w-5 text-stone-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"
            />
          </svg>
          Edit
        </button>
      </span>

      <span class="ml-3 hidden sm:block">
        <button
          type="button"
          class="inline-flex items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-stone-900 shadow-sm ring-1 ring-inset ring-stone-300 hover:bg-stone-100"
        >
          <svg
            class="-ml-0.5 h-5 w-5 text-stone-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              d="M12.232 4.232a2.5 2.5 0 0 1 3.536 3.536l-1.225 1.224a.75.75 0 0 0 1.061 1.06l1.224-1.224a4 4 0 0 0-5.656-5.656l-3 3a4 4 0 0 0 .225 5.865.75.75 0 0 0 .977-1.138 2.5 2.5 0 0 1-.142-3.667l3-3Z"
            />
            <path
              d="M11.603 7.963a.75.75 0 0 0-.977 1.138 2.5 2.5 0 0 1 .142 3.667l-3 3a2.5 2.5 0 0 1-3.536-3.536l1.225-1.224a.75.75 0 0 0-1.061-1.06l-1.224 1.224a4 4 0 1 0 5.656 5.656l3-3a4 4 0 0 0-.225-5.865Z"
            />
          </svg>
          View
        </button>
      </span>

      <div class="sm:ml-3">
        <label id="listbox-label" class="sr-only">Change published status</label>
        <div class="relative">
          <div class="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
            <div class="inline-flex divide-x divide-purple-600 rounded-md shadow-sm">
              <div
                class="inline-flex items-center gap-x-1.5 rounded-l-md bg-purple-500 px-3 py-2 text-white shadow-sm"
              >
                <svg
                  class="-ml-0.5 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-sm font-semibold">Published</p>
              </div>
              <button
                type="button"
                class="inline-flex items-center rounded-l-none rounded-r-md bg-purple-500 p-2 hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-50"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span class="sr-only">Change published status</span>
                <svg
                  class="h-5 w-5 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3"
  >
    <div class="space-y-6 lg:col-span-2 lg:col-start-1">
      <!-- Description list-->
      <section aria-labelledby="applicant-information-title">
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h2 id="applicant-information-title" class="text-lg/6 font-medium text-stone-900">
              Applicant Information
            </h2>
            <p class="mt-1 max-w-2xl text-sm text-stone-500">Personal details and application.</p>
          </div>
          <div class="border-t border-stone-200 px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-stone-500">Application for</dt>
                <dd class="mt-1 text-sm text-stone-900">Backend Developer</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-stone-500">Email address</dt>
                <dd class="mt-1 text-sm text-stone-900">ricardocooper@example.com</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-stone-500">Salary expectation</dt>
                <dd class="mt-1 text-sm text-stone-900">$120,000</dd>
              </div>
              <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-stone-500">Phone</dt>
                <dd class="mt-1 text-sm text-stone-900">+1 555-555-5555</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-stone-500">About</dt>
                <dd class="mt-1 text-sm text-stone-900">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum
                  culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla
                  mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad
                  adipisicing reprehenderit deserunt qui eu.
                </dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-stone-500">Attachments</dt>
                <dd class="mt-1 text-sm text-stone-900">
                  <ul
                    role="list"
                    class="divide-y divide-stone-200 rounded-md border border-stone-200"
                  >
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <svg
                          class="h-5 w-5 shrink-0 text-stone-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate">resume_front_end_developer.pdf</span>
                      </div>
                      <div class="ml-4 shrink-0">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                          >Download</a
                        >
                      </div>
                    </li>
                    <li class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <svg
                          class="h-5 w-5 shrink-0 text-stone-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.621 4.379a3 3 0 0 0-4.242 0l-7 7a3 3 0 0 0 4.241 4.243h.001l.497-.5a.75.75 0 0 1 1.064 1.057l-.498.501-.002.002a4.5 4.5 0 0 1-6.364-6.364l7-7a4.5 4.5 0 0 1 6.368 6.36l-3.455 3.553A2.625 2.625 0 1 1 9.52 9.52l3.45-3.451a.75.75 0 1 1 1.061 1.06l-3.45 3.451a1.125 1.125 0 0 0 1.587 1.595l3.454-3.553a3 3 0 0 0 0-4.242Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <span class="ml-2 w-0 flex-1 truncate"
                          >coverletter_front_end_developer.pdf</span
                        >
                      </div>
                      <div class="ml-4 shrink-0">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500"
                          >Download</a
                        >
                      </div>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <a
              href="#"
              class="block bg-stone-50 px-4 py-4 text-center text-sm font-medium text-stone-500 hover:text-stone-700 sm:rounded-b-lg"
              >Read full application</a
            >
          </div>
        </div>
      </section>

      <!-- Comments-->
      <section aria-labelledby="notes-title">
        <div class="bg-white shadow sm:overflow-hidden sm:rounded-lg">
          <div class="divide-y divide-stone-200">
            <div class="px-4 py-5 sm:px-6">
              <h2 id="notes-title" class="text-lg font-medium text-stone-900">Notes</h2>
            </div>
            <div class="px-4 py-6 sm:px-6">
              <ul role="list" class="space-y-8">
                <li>
                  <div class="flex space-x-3">
                    <div class="shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-stone-900">Leslie Alexander</a>
                      </div>
                      <div class="mt-1 text-sm text-stone-700">
                        <p>
                          Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore
                          dolorem maiores. Similique voluptatibus tempore non ut.
                        </p>
                      </div>
                      <div class="mt-2 space-x-2 text-sm">
                        <span class="font-medium text-stone-500">4d ago</span>
                        <span class="font-medium text-stone-500">&middot;</span>
                        <button type="button" class="font-medium text-stone-900">Reply</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex space-x-3">
                    <div class="shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-stone-900">Michael Foster</a>
                      </div>
                      <div class="mt-1 text-sm text-stone-700">
                        <p>
                          Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui
                          dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia
                          accusamus veniam id explicabo et aut.
                        </p>
                      </div>
                      <div class="mt-2 space-x-2 text-sm">
                        <span class="font-medium text-stone-500">4d ago</span>
                        <span class="font-medium text-stone-500">&middot;</span>
                        <button type="button" class="font-medium text-stone-900">Reply</button>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="flex space-x-3">
                    <div class="shrink-0">
                      <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div>
                      <div class="text-sm">
                        <a href="#" class="font-medium text-stone-900">Dries Vincent</a>
                      </div>
                      <div class="mt-1 text-sm text-stone-700">
                        <p>
                          Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et
                          voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur
                          autem. Perferendis rerum et.
                        </p>
                      </div>
                      <div class="mt-2 space-x-2 text-sm">
                        <span class="font-medium text-stone-500">4d ago</span>
                        <span class="font-medium text-stone-500">&middot;</span>
                        <button type="button" class="font-medium text-stone-900">Reply</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-stone-50 px-4 py-6 sm:px-6">
            <div class="flex space-x-3">
              <div class="shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div class="min-w-0 flex-1">
                <form action="#">
                  <div>
                    <label for="comment" class="sr-only">About</label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows="3"
                      class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-stone-300 placeholder:text-stone-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6"
                      placeholder="Add a note"
                    ></textarea>
                  </div>
                  <div class="mt-3 flex items-center justify-between">
                    <a
                      href="#"
                      class="group inline-flex items-start space-x-2 text-sm text-stone-500 hover:text-stone-900"
                    >
                      <svg
                        class="h-5 w-5 shrink-0 text-stone-400 group-hover:text-stone-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM8.94 6.94a.75.75 0 1 1-1.061-1.061 3 3 0 1 1 2.871 5.026v.345a.75.75 0 0 1-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 1 0 8.94 6.94ZM10 15a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span>Some HTML is okay.</span>
                    </a>
                    <button
                      type="submit"
                      class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                      >Comment</button
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <section aria-labelledby="timeline-title" class="lg:col-span-1 lg:col-start-3">
      <div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
        <h2 id="timeline-title" class="text-lg font-medium text-stone-900">Timeline</h2>

        <!-- Activity Feed -->
        <div class="mt-6 flow-root">
          <ul role="list" class="-mb-8">
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-stone-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-stone-400 ring-8 ring-white"
                    >
                      <svg
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-stone-500">
                        Applied to <a href="#" class="font-medium text-stone-900"
                          >Front End Developer</a
                        >
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-stone-500">
                      <time datetime="2020-09-20">Sep 20</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-stone-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 ring-8 ring-white"
                    >
                      <svg
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          d="M1 8.25a1.25 1.25 0 1 1 2.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-7.5ZM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0 1 14 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 0 1-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 0 1-1.341-.317l-2.734-1.366A3 3 0 0 0 6.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 0 1 2.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-stone-500">
                        Advanced to phone screening by <a
                          href="#"
                          class="font-medium text-stone-900">Bethany Blake</a
                        >
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-stone-500">
                      <time datetime="2020-09-22">Sep 22</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-stone-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 ring-8 ring-white"
                    >
                      <svg
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-stone-500">
                        Completed phone screening with <a
                          href="#"
                          class="font-medium text-stone-900">Martha Gardner</a
                        >
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-stone-500">
                      <time datetime="2020-09-28">Sep 28</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <span
                  class="absolute left-4 top-4 -ml-px h-full w-0.5 bg-stone-200"
                  aria-hidden="true"
                ></span>
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 ring-8 ring-white"
                    >
                      <svg
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          d="M1 8.25a1.25 1.25 0 1 1 2.5 0v7.5a1.25 1.25 0 1 1-2.5 0v-7.5ZM11 3V1.7c0-.268.14-.526.395-.607A2 2 0 0 1 14 3c0 .995-.182 1.948-.514 2.826-.204.54.166 1.174.744 1.174h2.52c1.243 0 2.261 1.01 2.146 2.247a23.864 23.864 0 0 1-1.341 5.974C17.153 16.323 16.072 17 14.9 17h-3.192a3 3 0 0 1-1.341-.317l-2.734-1.366A3 3 0 0 0 6.292 15H5V8h.963c.685 0 1.258-.483 1.612-1.068a4.011 4.011 0 0 1 2.166-1.73c.432-.143.853-.386 1.011-.814.16-.432.248-.9.248-1.388Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-stone-500">
                        Advanced to interview by <a href="#" class="font-medium text-stone-900"
                          >Bethany Blake</a
                        >
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-stone-500">
                      <time datetime="2020-09-30">Sep 30</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="relative pb-8">
                <div class="relative flex space-x-3">
                  <div>
                    <span
                      class="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 ring-8 ring-white"
                    >
                      <svg
                        class="h-5 w-5 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                    <div>
                      <p class="text-sm text-stone-500">
                        Completed interview with <a href="#" class="font-medium text-stone-900"
                          >Katherine Snyder</a
                        >
                      </p>
                    </div>
                    <div class="whitespace-nowrap text-right text-sm text-stone-500">
                      <time datetime="2020-10-04">Oct 4</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6 flex flex-col justify-stretch">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >Advance to offer</button
          >
        </div>
      </div>
    </section>
  </div>
</main>
