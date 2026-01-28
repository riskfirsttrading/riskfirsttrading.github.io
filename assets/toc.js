document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector("#content");
  const tocList = document.querySelector("#toc ul");
  if (!content || !tocList) return;

  const headings = content.querySelectorAll("h2, h3");

  headings.forEach((heading, index) => {
    const id =
      heading.id ||
      heading.textContent
        .toLowerCase()
        .replace(/[^\u0E00-\u0E7Fa-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");

    heading.id = id;

    const li = document.createElement("li");
    if (heading.tagName === "H3") {
      li.style.marginLeft = "12px";
    }

    const a = document.createElement("a");
    a.href = `#${id}`;
    a.textContent = heading.textContent;

    li.appendChild(a);
    tocList.appendChild(li);
  });
});
