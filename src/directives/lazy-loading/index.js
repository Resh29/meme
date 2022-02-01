export const LazyLoading = {
  name: 'lazy',
  beforeMount(el, binding) {
    const options = binding.arg || {
      root: null,
      rootMargin: '0px',
      threshold: 0.7,
    };

    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage(el, binding);
          observer.unobserve(el);
        }
      });
    };

    const loadImage = (el, binding) => {
      el.style = 'opacity: 1;';
      el.src = binding.value;
    };
    const createObserver = (target) => {
      if (window.IntersectionObserver) {
        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);
      }
    };

    createObserver(el);
  },
};
