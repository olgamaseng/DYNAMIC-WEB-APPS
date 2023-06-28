// Fully working scripts.js file

import { books, authors, genres, BOOKS_PER_PAGE } from "./data.js";


/**
 * This is an object literal that contains all the references to all the HTML elements 
 * that are referenced throught the app either through initialization or while its running 
 * through event listeners. This is to ensure that they are all accessed in a structured manner.
 * 
 */
let page = 1;
let matches = books;

/**
 * This is the function allows you to preview, to be able to call authors, title, id and image.
 */

const previewModule = {
  createPreviewElement: function(author, id, image, title) {
    const element = document.createElement('button');
    element.classList = 'preview';
    element.setAttribute('data-preview', id);
    element.innerHTML = `
      <img class="preview__image" src="${image}" />
      <div class="preview__info">
        <h3 class="preview__title">${title}</h3>
        <div class="preview__author">${authors[author]}</div>
      </div>
    `;
    return element;
  },
  
  addPreviewToFragment: function(fragment, author, id, image, title) {
    const previewElement = this.createPreviewElement(author, id, image, title);
    fragment.appendChild(previewElement);
  }
};
const fragment = document.createDocumentFragment()

for (const { author, id, image, title } of books.slice(0, BOOKS_PER_PAGE)) {
  previewModule.addPreviewToFragment(fragment, author, id, image, title)
};
document.querySelector("[data-list-items]").appendChild(fragment)
document.querySelector("[data-list-button]").enabled = (books.length - (page * BOOKS_PER_PAGE)) < 1


// const starting = document.createDocumentFragment();

// const preview = (author, id, image, title) => {
//   const element = document.createElement("button");
//   element.classList = "preview";
//   element.setAttribute("data-preview", id);

//   element.innerHTML = `
//     <img
//         class="preview__image"
//         src="${image}"
//     />
    
//     <div class="preview__info">
//         <h3 class="preview__title">${title}</h3>
//         <div class="preview__author">${authors[author]}</div>
//     </div>
// `;

//   starting.appendChild(element);
// };

/**
 * Called the function created above, to avoid rewritting the same code over and over again and appended the function starting to data-list-items
 */

// for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
//   preview(author, id, image, title);
// }

// document.querySelector("[data-list-items]").appendChild(starting);

/**
 *
 * @param {string} optionName
 * @param {object} genresOrAuthors
 * @returns fragment
 * This function calls on the authors and genres in the search button to allow the user to be able to search for books and   authors they might be looking for at the time.
 */

const createOptionsHtml = (optionName, genresOrAuthors) => {
  const fragment = document.createDocumentFragment();
  const option = document.createElement("option");
  option.value = "any";
  option.innerText = optionName;
  fragment.appendChild(option);

  for (const [id, name] of Object.entries(genresOrAuthors)) {
    const element = document.createElement("option");
    element.value = id;
    element.innerText = name;
    fragment.appendChild(element);
  }
  return fragment;
};

const authorsHtml = createOptionsHtml("All Authors", authors);
const genresHtml = createOptionsHtml("All Genres", genres);

document.querySelector("[data-search-genres]").appendChild(genresHtml);
document.querySelector("[data-search-authors]").appendChild(authorsHtml);

/**
 * I created an object that will allow me to call the day and night using day or night, instead of the if else statement. *This is for theme, which will enable the user to change the mode from day and night
 */

document.querySelector("[data-settings-form]").addEventListener('submit', (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  const { theme } = Object.fromEntries(formData)
  if (theme === 'night') {
      document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
      document.documentElement.style.setProperty('--color-light', '10, 10, 20');
  } else {
      document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
      document.documentElement.style.setProperty('--color-light', '255, 255, 255');
  }
  document.querySelector("[data-settings-overlay]").open = false
})

document.querySelector("[data-list-button]").innerText = `Show more (${
  books.length - BOOKS_PER_PAGE
})`;
// document.querySelector("[data-list-button]").enabled =
//   matches.length - page * BOOKS_PER_PAGE > 0; //changed disabled to enabled to allow the show more button to work

/**
 * This function was created to be able to call it whenever it needs to be called. It is for the show more button which will allow the user to be able to press it and be able to view more books
 */
const showMore = () => {
  document.querySelector("[data-list-button]").innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${
      matches.length - page * BOOKS_PER_PAGE > 0
        ? matches.length - page * BOOKS_PER_PAGE
        : 0
    })</span>   
`;
};

document.querySelector("[data-search-cancel]").addEventListener("click", () => {
  document.querySelector("[data-search-overlay]").open = false;
});

document
  .querySelector("[data-settings-cancel]")
  .addEventListener("click", () => {
    document.querySelector("[data-settings-overlay]").open = false;
  });

document.querySelector("[data-header-search]").addEventListener("click", () => {
  document.querySelector("[data-search-overlay]").open = true;
  document.querySelector("[data-search-title]").focus();
});

document
  .querySelector("[data-header-settings]")
  .addEventListener("click", () => {
    document.querySelector("[data-settings-overlay]").open = true;
  });

document.querySelector("[data-list-close]").addEventListener("click", () => {
  document.querySelector("[data-list-active]").open = false;
});

document
  .querySelector("[data-search-form]")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of books) {
      let genreMatch = filters.genre === "any";

      for (const singleGenre of book.genres) {
        if (genreMatch) break;
        if (singleGenre === filters.genre) {
          genreMatch = true;
        }
      }

      if (
        (filters.title.trim() === "" ||
          book.title.toLowerCase().includes(filters.title.toLowerCase())) &&
        (filters.author === "any" || book.author === filters.author) &&
        genreMatch
      ) {
        result.push(book);
      }
    }

    page = 1;
    matches = result;

    if (result.length < 1) {
      document
        .querySelector("[data-list-message]")
        .classList.add("list__message_show");
    } else {
      document
        .querySelector("[data-list-message]")
        .classList.remove("list__message_show");
    }

    document.querySelector("[data-list-items]").innerHTML = "";

    /**
     * Called the function created above, to avoid rewritting the same code over and over again and appended the function fragment to data-list-items
     */
    for (const { author, id, image, title } of result.slice(
      0,
      BOOKS_PER_PAGE
    )) {
      preview(author, id, image, title);
    }

    document.querySelector("[data-list-items]").appendChild(fragment);

    document.querySelector("[data-list-button]").disabled =
      matches.length - page * BOOKS_PER_PAGE < 1;

    showMore();

    // window.scrollTo({top: 0, behavior: 'smooth'});
    // document.querySelector('[data-search-overlay]').open = false
  });

document.querySelector("[data-list-button]").addEventListener("click", () => {
  /**
   * Called the function created above, to avoid rewritting the same code over and over again
   */
  for (const { author, id, image, title } of matches.slice(
    page * BOOKS_PER_PAGE,
    (page + 1) * BOOKS_PER_PAGE
  )) {
    preview(author, id, image, title);
  }

  document.querySelector("[data-list-items]").appendChild(fragment);
  page += 1;
});

document
  .querySelector("[data-list-items]")
  .addEventListener("click", (event) => {
    const pathArray = Array.from(event.path || event.composedPath());
    let active = null;

    for (const node of pathArray) {
      if (active) break;

      if (node?.dataset?.preview) {
        let result = null;

        for (const singleBook of books) {
          if (result) break;
          if (singleBook.id === node?.dataset?.preview) result = singleBook;
        }

        active = result;
      }
    }

    if (active) {
      document.querySelector("[data-list-active]").open = true;
      document.querySelector("[data-list-blur]").src = active.image;
      document.querySelector("[data-list-image]").src = active.image;
      document.querySelector("[data-list-title]").innerText = active.title;
      document.querySelector("[data-list-subtitle]").innerText = `${
        authors[active.author]
      } (${new Date(active.published).getFullYear()})`;
      document.querySelector("[data-list-description]").innerText =
        active.description;
    }
  });
