<script lang="ts">
  // import * as Sidebar from '$ui/sidebar'
  // import AppSidebar from '$components/app-sidebar.svelte'

  let { children } = $props()
</script>

<!--
<Sidebar.Provider>
  <AppSidebar />
  <main>
    <Sidebar.Trigger />
-->
{@render children?.()}
<!--
  </main>
</Sidebar.Provider>
-->
