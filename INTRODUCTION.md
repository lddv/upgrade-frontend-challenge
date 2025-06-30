# Upgrade Challenge - Project Decisions

## Libraries used

- [react-router-dom](https://reactrouter.com/home)
- [Vitest](https://vitest.dev/guide/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Decision log

- **Test engine:** I replaced Jest with Vitest because it is more compatible with Vite.
- **Unit tests:** I used React Testing Library to test the rendering of components and behaviours inside them.
- **Endpoint interactions:** Requests were done using the the native fetch API. There was only one GET request and one form submission endpoint. Given the endpoints were small, I opted to use a leaner approach. In case this project scales up, I would go with a more robust approach that I have already worked with, such as [Redux Toolkit Query](https://redux-toolkit.js.org/rtk-query/overview).
- **Styling** with CSS Modules.

## Foler Structure

These are the top level folders under `src`:

- `utils` are helper functions. The only useful function I had was the email validation logic.
- `pages` holds the page components invoked inside `Route`s at the `App.jsx` file.
    - Here, each page has a folder for the page component, a `data` folder for any abstraction over API interaction, and a `components` folder for more sub-divisions of components inside that page.
    - Tests are kept close to the component.


## Architectural decisions

- **State management:** I decided to place a top level state to hold the form data in one place. This is a leaner approach but may incur into more prop drilling. I could make this into a Context Provider but I kept it like this for simplicity.
- **Validation** was done inside each page, so that the domain of each page is separated. The `App.jsx` file holds all the navigation concern and makes functions available inside each page.

## Things I wish I had done if I could invest more time

- Include [Storybook](https://storybook.js.org/) and show case the screens and components in isolation.
- Include [husky](https://typicode.github.io/husky/) for pre-commit rules.
- Include [ESLint](https://eslint.org/) for checking code.
- Include [Prettier](https://prettier.io/) for formatting code.
- Use local storage to store the user data, so that I can load whatever the user has already chosen and avoid frustration of not seeing what was previously selected on the screen.
- Abstract the page layout, so each page would simply import the shell of a page and worry only about its inner looks.
