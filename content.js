let elements = [];
let called = false;
elements.forEach.call(document.querySelectorAll("*"), (el) => {
  if (el.offsetWidth > document.documentElement.offsetWidth) {
    called = true;
    console.log(`Overflow caused by: ${el}`);
  }
});
if (!called) {
  console.log("No element overflow found");
}
