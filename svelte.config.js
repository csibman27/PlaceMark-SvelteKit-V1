//import adapter from '@sveltejs/adapter-auto';
//import adapter from "@sveltejs/adapter-netlify";
//import { vitePreprocess } from "@sveltejs/kit/vite";

//** @type {import('@sveltejs/kit').Config} */
/*
const config = {
   Consult https://kit.svelte.dev/docs/integrations#preprocessors
   for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter()
  }
};

export default config;
*/

/** @type {import('@sveltejs/kit').Config} */

import node from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: node(),

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ['PATCH', 'DELETE']
    }
  }
};

export default config;