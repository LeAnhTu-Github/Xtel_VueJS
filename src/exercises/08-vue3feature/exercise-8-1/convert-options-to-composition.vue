<!-- <script>

import { ref, computed, watch, onMounted } from 'vue';

export default {
  setup() {
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);

    watch(count, (newVal, oldVal) => {
      console.log(`Count changed from ${oldVal} to ${newVal}`);
    });

    onMounted(() => {
      console.log('Component mounted');
    });

    const increment = () => { count.value++; };

    return { count, doubleCount, increment };
  }
};

</script> -->
<script setup>
import { ref, computed } from 'vue';

const count = ref(0);
const doubleCount = computed(() => count.value * 2);

const increment = () => { count.value++; };

</script>