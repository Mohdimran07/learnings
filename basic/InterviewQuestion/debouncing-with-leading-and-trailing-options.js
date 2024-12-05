const onChange = (e) => {
  console.log(e.target.value);
};
const debounce = (fn, delay, option = { leading: true, trailing: true }) => {
  let timeout;
  let isLeadingInvoked = false;

  return function (...args) {
    // console.log(...args)
    const context = this;
    // console.log(this)

    //base condition
    if (timeout) {
      clearTimeout(timeout);
    }

    // handle leading
    if (option.leading && !timeout) {
      fn.apply(context, args);
      isLeadingInvoked = true;
      console.log("first")
    } else {
      isLeadingInvoked = false;
      console.log("last")
    }

    // handle trailing
    timeout = setTimeout(() => {
      if (option.trailing && !isLeadingInvoked) {
        console.log("????????????????????")
        fn.apply(context, args);
      }

      timeout = null;
    }, delay);
  };
};

const debouncedSearch = debounce(onChange, 1000);

window.addEventListener("DOMContentLoaded", (event) => {
  const input = document.getElementById("search");
  if (input) {
    input.addEventListener("keyup", debouncedSearch);
  }
});
