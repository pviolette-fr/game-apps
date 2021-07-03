<template>
  <div class="font-mono">{{ fakeProp }}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "../store";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      fakeProp: computed(() => store.state.fakeProp),
    };
  },
});
</script>

<style scoped></style>
