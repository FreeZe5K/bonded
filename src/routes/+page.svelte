<script lang="ts">
  import LandingHero from '$components/landing-page/landing-hero.svelte'
  import LandingBenefits from '$components/landing-page/landing-benefits.svelte'
  import LandingTrust from '$components/landing-page/landing-trust.svelte'
  import LandingData from '$components/landing-page/landing-data.svelte'
  import LandingUse from '$components/landing-page/landing-use.svelte'
  import LandingTestimonials from '$components/landing-page/landing-testimonials.svelte'
  import LandingFaq from '$components/landing-page/landing-faq.svelte'
</script>

<LandingHero />

<div class="py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-5">
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-stone-600">Cities worldwide</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          1.2k
        </dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-stone-600">Verified statuses</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          500k+
        </dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-stone-600">Partner alerts sent</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          46.1k
        </dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-stone-600">New users daily</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          2.5k
        </dd>
      </div>
      <div class="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt class="text-base/7 text-stone-600">False reports flagged</dt>
        <dd class="order-first text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
          > 1,000
        </dd>
      </div>
    </dl>
  </div>
</div>

<LandingBenefits />
<LandingTrust />
<LandingData />
<LandingUse />
<LandingTestimonials />
<LandingFaq />
