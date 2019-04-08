// the global variable
const globalTitle = "Winter Is Coming";

// Add your code below this line
const urlSlug = (title) => {
  let url = title.toLowerCase().split(" ").filter(item => item !== '').join("-")
  console.log(url)
  return url
}
// Add your code above this line

const winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
