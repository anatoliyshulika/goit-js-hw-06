const ulCategoriesRef = document.querySelector("#categories");
const liRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${ulCategoriesRef.children.length}`);

liRef.forEach((elem) => {
  const h2Ref = elem.querySelector("h2");
  const ulRef = elem.querySelector("ul");
  console.log(" ");
  console.log(`Category: ${h2Ref.innerText}`);
  console.log(`Elements: ${ulRef.children.length}`);
});
