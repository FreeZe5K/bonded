<script lang="ts">
  import NavBar from '$components/layout/nav-bar.svelte'
  // import NavSearch from '$components/layout/nav-search.svelte'
  import AppFooter from '$components/app-footer.svelte'

  import '$src/app.css'

  let { children } = $props()
</script>

<!--
<div class="flex-col md:flex">
  <div class="border-b">
    <div class="flex h-16 items-center px-4">
      LOGO
      <NavBar class="mx-6" />
      <div class="ml-auto flex items-center space-x-4">
        <NavSearch />
      </div>
    </div>
  </div>

  {@render children()}
</div>
-->
<!--<div class="mx-auto max-w-7xl sm:px-6 lg:px-8">-->

<div class="min-h-full">
  <!-- Navbar -->
  <NavBar />

  <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
    {@render children?.()}
  </div>

  <AppFooter />
</div>
