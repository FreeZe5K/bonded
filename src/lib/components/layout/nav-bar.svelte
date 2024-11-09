<script lang="ts">
  import * as DropdownMenu from '$ui/dropdown-menu'
  import * as Avatar from '$ui/avatar'
  import { Button } from '$ui/button'

  import { BadgeCheck, CreditCard, LogOut, Sparkles, Settings } from 'lucide-svelte'

  let className: string | undefined | null = undefined
  export { className as class }

  let authenticated: boolean = $state<boolean>(false)
</script>

<!--
<nav class={cn('flex items-center space-x-4 lg:space-x-6', className)}>
  <a href="/" class="hover:text-primary text-sm font-medium transition-colors"> Home </a>
  <a
    href="/profiles"
    class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
  >
    Search
  </a>
  <a
    href="/review"
    class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
  >
    Peer Review
  </a>
</nav>
-->

<nav class="bg-stone-100">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <!-- border-b border-stone-200 -->
      <div class="flex items-center">
        <div class="shrink-0">
          <a href="/">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=violet&shade=500"
              alt="Bonded"
            />
          </a>
        </div>

        <!-- Links section -->
        <div class="hidden lg:ml-10 lg:block">
          <div class="flex space-x-4">
            <!-- Current: "bg-stone-200", Default: "hover:text-stone-700" -->
            <a
              href="/"
              class="rounded-md bg-stone-200 px-3 py-2 text-sm font-medium text-stone-900"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/about"
              class="rounded-md px-3 py-2 text-sm font-medium text-stone-900 hover:text-stone-700"
            >
              About
            </a>
            <a
              href="/profiles"
              class="rounded-md px-3 py-2 text-sm font-medium text-stone-900 hover:text-stone-700"
            >
              Search
            </a>
          </div>
        </div>
      </div>

      <div class="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
        <a
          href="/review"
          class="rounded-md px-3 py-2 text-sm font-medium text-stone-900 hover:text-stone-700"
        >
          Review
        </a>
        <!--
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
              placeholder="Search"
              type="search"
              name="search"
            />
          </div>
        </div>
        -->
      </div>
      <div class="flex lg:hidden">
        <!-- Mobile menu button -->
        <button
          type="button"
          class="relative inline-flex items-center justify-center rounded-md bg-stone-100 p-2 text-stone-400 hover:bg-stone-200 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-stone-50"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          <!-- Menu open: "hidden", Menu closed: "block" -->
          <svg
            class="block h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!-- Menu open: "block", Menu closed: "hidden" -->
          <svg
            class="hidden h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Actions section -->
      <div class="hidden lg:ml-4 lg:block">
        <div class="flex items-center">
          <a
            href="/notifications"
            class="relative shrink-0 rounded-full bg-stone-100 p-1 text-stone-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-stone-50"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </a>

          <!-- Profile dropdown -->
          <div class="relative ml-3 shrink-0">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="ghost" class="relative h-8 w-8 rounded-full">
                  <Avatar.Root class="h-8 w-8">
                    <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                    <Avatar.Fallback>SC</Avatar.Fallback>
                  </Avatar.Root>
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content class="w-56" align="end">
                <DropdownMenu.Label class="font-normal">
                  <div class="flex flex-col space-y-1">
                    <p class="text-sm font-medium leading-none">shadcn</p>
                    <p class="text-xs leading-none text-muted-foreground">m@example.com</p>
                  </div>
                </DropdownMenu.Label>
                <DropdownMenu.Separator />

                <!-- TODO: Upgrade option is only visible when a user is not subscribed to X-Ray -->
                <!--
                  TODO: In the future, change the language to be appropriate to re-billing.
                  For example, "Resubscribe to X-Ray" if they do not have an active subscription
                  but was a previous customer
                -->

                <!--
                  onclick={() => redirect(301, '/settings/upgrade')}
                  closeOnSelect={true}
                -->
                <DropdownMenu.Item>
                  <a href="/settings/upgrade" class="inline-flex">
                    <Sparkles class="mr-1.5 h-5 w-5 text-stone-700" />
                    Upgrade to X-Ray
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
                <DropdownMenu.Group>
                  <DropdownMenu.Item class="flex">
                    <a href="/profiles/me" class="inline-flex">
                      <BadgeCheck class="mr-1.5 h-5 w-5 text-stone-700" />
                      My Profile
                    </a>
                  </DropdownMenu.Item>

                  <!-- TODO: "Billing" is only present when a user is subscribed to X-Ray -->
                  <!-- TODO: This will open a hosted billing portal -->
                  <DropdownMenu.Item>
                    <a href="/settings/billing" class="inline-flex">
                      <CreditCard class="mr-1.5 h-5 w-5 text-stone-700" />
                      Billing
                    </a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item>
                    <a href="/settings" class="inline-flex">
                      <Settings class="mr-1.5 h-5 w-5 text-stone-700" />
                      Settings
                    </a>
                  </DropdownMenu.Item>
                </DropdownMenu.Group>
                <DropdownMenu.Separator />
                <DropdownMenu.Item>
                  <LogOut class="mr-1.5 h-5 w-5 text-stone-700" />
                  Log out
                  <!--<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>-->
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>

          <!-- TODO: When the user is NOT authenticated -->
          <!--
          <div class="flex space-x-4">
            <a
              href="/auth"
              class="rounded-md px-3 py-2 text-sm font-medium text-stone-900 hover:text-stone-700"
            >
              Log In
            </a>
            <a
              href="/auth"
              class="rounded-md bg-stone-200 px-3 py-2 text-sm font-medium text-stone-900"
            >
              Register
            </a>
          </div>
          -->
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="border-b border-stone-200 bg-stone-100 lg:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-stone-200", Default: "hover:bg-stone-200" -->
        <a
          href="/"
          class="block rounded-md bg-stone-200 px-3 py-2 font-medium text-stone-900"
          aria-current="page">Dashboard</a
        >
        <a href="/" class="block rounded-md px-3 py-2 font-medium text-stone-900 hover:bg-stone-200"
          >Jobs</a
        >
        <a href="/" class="block rounded-md px-3 py-2 font-medium text-stone-900 hover:bg-stone-200"
          >Applicants</a
        >
        <a href="/" class="block rounded-md px-3 py-2 font-medium text-stone-900 hover:bg-stone-200"
          >Company</a
        >
      </div>
      <div class="border-t border-stone-200 pb-3 pt-4">
        <div class="flex items-center px-5">
          <div class="shrink-0">
            <img
              class="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-stone-800">Whitney Francis</div>
            <div class="text-sm font-medium text-stone-500">whitney.francis@example.com</div>
          </div>
          <button
            type="button"
            class="relative ml-auto shrink-0 rounded-full bg-stone-100 p-1 text-stone-400 hover:text-stone-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-stone-50"
          >
            <span class="absolute -inset-1.5"></span>
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <a
            href="/"
            class="block rounded-md px-3 py-2 text-base font-medium text-stone-900 hover:bg-stone-200"
            >Your Profile</a
          >
          <a
            href="/"
            class="block rounded-md px-3 py-2 text-base font-medium text-stone-900 hover:bg-stone-200"
            >Settings</a
          >
          <a
            href="/"
            class="block rounded-md px-3 py-2 text-base font-medium text-stone-900 hover:bg-stone-200"
            >Sign out</a
          >
        </div>
      </div>
    </div>
  </div>
</nav>
