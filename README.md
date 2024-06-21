# ia-microfrontends

This repository hosts all pre-made microfrontends ("mfes") available for usage within the Intelligent Assets application.

### What is a microfrontend (mfe)?

[Single-spa](https://single-spa.js.org/) allows us to connect independently-running applications into our root IA app and display them as pieces of our app. They can be developed and deployed separately from our root app while still being integrated and displayed as needed. Once a mfe insertion point has been set up within IA, you can develop your mfe and enter your mfe’s URL using IA’s UI at the desired insertion point.

### Categories

Each directory in the root of this repository represents a category of mfes, and corresponds to an insertion point that has been set up within IA for rendering mfes. Each category is an independent single-spa microfrontend application that provides multiple entry points, allowing us to expose multiple mfes under the umbrella of a single application.

- attributeEditWidgets - custom widgets used to edit asset or area attribute values
- attributeViewWidgets - custom widgets used to view the value of your asset or area's attribute
- dashboards - custom dashboards used to replace an entire dashboard with your own display

### How to use one of these microfrontends

- If you'd like to use an existing mfe, you only need to provide a url within the IA app that points to the released mfe.
- Urls are in the format of: `https://cdn.jsdelivr.net/gh/ClearBlade/ia-microfrontends@RELEASE_VERSION/CATEGORY/dist/MFE_NAME.js` (e.g. `https://cdn.jsdelivr.net/gh/ClearBlade/ia-microfrontends@0.0.2/attributeViewWidgets/dist/gateStatus.js`)

### Adding a new category

1. First make sure your category corresponds to a new mfe insertion point within Intelligent Assets.
2. Create a new category directory that matches the name of the insertion point type of your mfe.
3. Within your directory, follow [these](https://single-spa.js.org/docs/create-single-spa/) steps to create a single-spa application
4. Unlink your repository from Git, so it will be managed under a single Git tracking and remote with the other mfes: `rm -rf .git`
5. Update your webpack.config.js to support multiple entry points for your application, so that we can expose multiple mfes within your category. (see changes to output and entry)
6. Update your webpack.config.js to include all externals that we are exposing from the import-map of our IA app so that they don't get compiled when in use by the mfes.
7. Remove `dist` from your gitignore, as this will be necessary for publishing production mfes.

### Adding a new mfe to a category

1. Create a new directory within the category directory (e.g. attributeViewWidgets/src/GateStatus/)
2. Add a new entry point to the webpack.config.js for your mfe, pointing to your entry file. See other entry files regarding usage of singleSpaReact to understand how to set up your entry file.
3. Local development:
   - `npm run start` from the root of your category directory (e.g. attributeViewWidgets). This will run all entry points within that category.
   - You should be able to point to your individual mfe entry point url with this format: //localhost:8081/gateStatus.js
   - Develop the UI you would like to render
4. Publishing for production:
   - `npm run build:webpack` from the root of your category directory. This will create a dist folder of built code.
   - Commit and push the changes to your dist
   - Create a new release on Github
   - Using [jsDelivr](https://www.jsdelivr.com/?docs=gh) create a link to your mfe using the tag of the latest release you just created (e.g. `https://cdn.jsdelivr.net/gh/ClearBlade/ia-microfrontends@0.0.2/attributeViewWidgets/dist/gateStatus.js`).

### Additional documentation

- For additional documentation and tips on developing your mfe, the props available see [here] (https://clearblade.atlassian.net/wiki/spaces/AS/pages/2808315938/Microfrontend+Types+and+Props)
