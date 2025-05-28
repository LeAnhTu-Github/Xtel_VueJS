// v-debounce directive
export default {
  mounted(el, binding) {
    let timeoutId;
    el.addEventListener("input", () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        binding.value(el.value);
      }, binding.arg || 300);
    });
  },
};
