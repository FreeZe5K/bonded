<script lang="ts">
  import { Check } from 'lucide-svelte'
</script>

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-0">
    <div class="mx-auto max-w-3xl sm:text-center">
      <!--
      <h2 class="text-base/7 font-semibold text-indigo-600">
        What info does a Bonded search provide?
      </h2>
      -->
      <p
        class="mt-2 text-pretty text-5xl font-semibold tracking-tight text-stone-900 sm:text-balance sm:text-5xl"
      >
        <!--What info does a Bonded search provide?-->
        Enough data to make an informed decision
      </p>
    </div>
    <p
      class="mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium text-stone-600 sm:text-center sm:text-xl/8"
    >
      Choose an affordable plan that’s packed with the best features for engaging your audience,
      creating customer loyalty, and driving sales.
    </p>
    <div
      class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
    >
      <div class="rounded-3xl p-8 ring-1 ring-stone-200 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h3 id="tier-freelancer" class="text-lg/8 font-semibold text-stone-900">
            Relationship &amp; Status Verification
          </h3>
        </div>
        <!--        <p class="mt-4 text-sm/6 text-stone-600">-->
        <!--          The essentials to provide your best work for clients.-->
        <!--        </p>-->
        <!--        <p class="mt-6 flex items-baseline gap-x-1">-->
        <!-- Price, update based on frequency toggle state -->
        <!--          <span class="text-4xl font-semibold tracking-tight text-stone-900">$19</span>-->
        <!-- Payment frequency, update based on frequency toggle state -->
        <!--          <span class="text-sm/6 font-semibold text-stone-600">/month</span>-->
        <!--        </p>-->
        <!--
        <a
          href="#"
          aria-describedby="tier-freelancer"
          class="mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Buy plan</a
        >
        -->
        <ul role="list" class="mt-4 space-y-3 text-sm/6 text-stone-600 xl:mt-6">
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Current relationship status
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Mutually-confirmed partner verification status
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Number of linked partners
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Relationship start and end dates
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Number of children
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Pregnancy status, and associated partner
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Active dating profiles
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Adult content creator profiles
          </li>
        </ul>
      </div>
      <div class="rounded-3xl p-8 ring-1 ring-stone-200 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h3 id="tier-startup" class="text-lg/8 font-semibold text-stone-900">
            Behavioral Indicators &amp; History
          </h3>
          <!--
          <p
            class="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600"
          >
            Most popular
          </p>
          -->
        </div>
        <!--
        <p class="mt-4 text-sm/6 text-stone-600">
          A plan that scales with your rapidly growing business.
        </p>
        -->
        <!--        <p class="mt-6 flex items-baseline gap-x-1">-->
        <!-- Price, update based on frequency toggle state -->
        <!--          <span class="text-4xl font-semibold tracking-tight text-stone-900">$29</span>-->
        <!-- Payment frequency, update based on frequency toggle state -->
        <!--          <span class="text-sm/6 font-semibold text-stone-600">/month</span>-->
        <!--        </p>-->
        <!--
        <a
          href="#"
          aria-describedby="tier-startup"
          class="mt-6 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Buy plan</a
        >
        -->
        <ul role="list" class="mt-4 space-y-3 text-sm/6 text-stone-600 xl:mt-6">
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Ghosting likelihood
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Flaking patterns
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Reliability score
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Verified appearance accuracy
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Number of false reports submitted by user
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Pattern of messaging
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Frequency of partner switching
          </li>
        </ul>
      </div>
      <div class="rounded-3xl p-8 ring-1 ring-stone-200 xl:p-10">
        <div class="flex items-center justify-between gap-x-4">
          <h3 id="tier-enterprise" class="text-lg/8 font-semibold text-stone-900">
            Alerts &amp; Notifications
          </h3>
        </div>
        <!--
        <p class="mt-4 text-sm/6 text-stone-600">
          Dedicated support and infrastructure for your company.
        </p>
        -->
        <!--        <p class="mt-6 flex items-baseline gap-x-1">-->
        <!-- Price, update based on frequency toggle state -->
        <!--          <span class="text-4xl font-semibold tracking-tight text-stone-900">$59</span>-->
        <!-- Payment frequency, update based on frequency toggle state -->
        <!--          <span class="text-sm/6 font-semibold text-stone-600">/month</span>-->
        <!--        </p>-->
        <!--
        <a
          href="#"
          aria-describedby="tier-enterprise"
          class="mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >Buy plan</a
        >
        -->
        <ul role="list" class="mt-4 space-y-3 text-sm/6 text-stone-600 xl:mt-6">
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Infidelity reports
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Anonymous alerts sent to partners
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Watchlist alerts for x-ray users
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            History of reported infidelity or dating profiles
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            New dating activity notifications for linked partners
          </li>
          <li class="flex gap-x-3">
            <Check class="h-6 w-5 flex-none text-indigo-600" />
            Date and time of last activity on dating profiles
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
