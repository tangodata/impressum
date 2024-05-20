<template lang="pug">
fbouter
  template(#secondary)

    h4(class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs"
      ) On this page

    nav#TableOfContents
      ul
        li
          a(href="#install-tailwind-css-with-vuejs"
            class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
            ) Install Tailwind CSS with Vue.js
        li
          a(href="#flowbite-components"
            class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500"
            ) Flowbite components

  template(#primary)

    fbinner
      template(#intro)

        aside(class="mb-5", aria-label="Integration requires Vue.js")
          span(class="inline-flex justify-between items-center py-1 px-1 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white")
            span(class="text-xs bg-green-500 rounded-full text-white px-3 py-1.5 mr-3")
              svg(aria-hidden="true", focusable="false", data-prefix="fab", data-icon="vuejs", class="w-4 h-4", role="img", xmlns="http://www.w3.org/2000/svg", viewBox="0 0 448 512")
                path(fill="currentColor", d="M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z")
            span(class="text-sm font-medium") Requires Vue.js
        h1#content(class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          ) Welcome to Tangueros API services
        p(class="mb-4 text-lg text-gray-500 dark:text-gray-400"
          ) Here are more stuffs for you

      template(#body)

        p Vue.js is a popular front-end library used by websites such as Behance, Nintendo, Gitlab, Font Awesome, and more that you can use to build modern web applications.
        p By installing Tailwind CSS and Flowbite you can build your project even faster using the utility-first approach from Tailwind and the interactive components from Flowbite.
        h2(class="relative group")
          | Install Tailwind CSS with Vue.js
          span#install-tailwind-css-with-vuejs(class="absolute -top-[140px]")
          |
          a(class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100", href="#install-tailwind-css-with-vuejs", aria-label="Link to this section: Install Tailwind CSS with Vue.js") #
        p Follow the next steps to install Tailwind CSS and Flowbite with Vue 3 and Vite.
        ol
          li Create a new Vite project running the following commands in your terminal:
        div(class="highlight")
          pre(class="chroma language-bash", tabindex="0")
            code(class=" language-bash", data-lang="bash").
              npm init vite my-project
              cd my-project
        ol(start="2")
          li Install Tailwind CSS:
        div(class="highlight")
          pre(class="chroma language-bash", tabindex="0")
            code(class=" language-bash", data-lang="bash").
              npm install -D tailwindcss postcss autoprefixer
              npx tailwindcss init -p
        ol(start="3")
          li
            | Configure the template paths inside the
            code tailwind.config.js
            |  file:
        div(class="highlight")
          pre(class="chroma language-javascript", tabindex="0")
            code(class=" language-javascript", data-lang="javascript")
              | module
        ol(start="4")
          li
            | Create a new
            code ./src/index.css
            |  file and add the Tailwind directives:
        div(class="highlight")
          pre(class="chroma language-css", tabindex="0")
            code(class=" language-css", data-lang="css")
              span(class="token atrule")
                span(class="token rule") @tailwind
                |  base
                span(class="token punctuation") ;
              span(class="token atrule")
                span(class="token rule") @tailwind
                |  components
                span(class="token punctuation") ;
              span(class="token atrule")
                span(class="token rule") @tailwind
                |  utilities
                span(class="token punctuation") ;
        ol(start="5")
          li
            | Import the newly created CSS file inside your
            code ./src/main.js
            |  file:
        div(class="highlight")
          pre(class="chroma language-javascript", tabindex="0")
            code(class=" language-javascript", data-lang="javascript")
              span(class="token keyword") import
        ol(start="6")
          li Install Flowbite by running the following command in your terminal:
        div(class="highlight")
          pre(class="chroma language-bash", tabindex="0")
            code(class=" language-bash", data-lang="bash").
              npm install flowbite
        ol(start="7")
          li
            | Require Flowbite as a plugin inside your
            code tailwind.config.js
            |  file:
        div(class="highlight")
          pre(class="chroma language-javascript", tabindex="0")
            code(class=" language-javascript", data-lang="javascript")
              | module
        ol(start="8")
          li
            | Import the Flowbite JavaScript file inside your main
            code ./src/main.js
            |  file:
        div(class="highlight")
          pre(class="chroma language-bash", tabindex="0")
            code(class=" language-bash", data-lang="bash").
              import 'flowbite';
        ol(start="9")
          li
            | Additionally to your own
            code content
            |  data you should add
            code flowbite
            |  to apply the classes from the interactive elements in the
            code tailwind.config.js
            |  file:
        div(class="highlight")
          pre(class="chroma language-javascript", tabindex="0")
            code(class=" language-javascript", data-lang="javascript")
              | module
        p
          | Now you can start the local server by running
          code npm run dev
          |  in your terminal.
        h2(class="relative group")
          | Flowbite components
          span#flowbite-components(class="absolute -top-[140px]")
          |
          a(class="ml-2 text-blue-700 opacity-0 transition-opacity dark:text-blue-500 group-hover:opacity-100", href="#flowbite-components", aria-label="Link to this section: Flowbite components") #
        p You can start using all of the components from Flowbite in your Vue.js project as long as you’ve properly followed the instructions above and installed both Tailwind CSS and Flowbite.
        p The interactive elements such as the dropdowns, modals, and tooltips will work based on the settings that you apply using the data attributes, except when using a routing system.
        p
          | We are currently working on a
          a(href="https://github.com/themesberg/flowbite-vue") standalone Vue.js component library
          |  to provide full support for this technology and compatibility with frameworks such as NuxtJS.
        p
          | Here’s an example of a modal component that you can use by adding inside your
          code App.vue
          |  template file:
        div(class="highlight")
          pre(class="chroma language-html", tabindex="0")
            code(class=" language-html", data-lang="html"
              ) sOME CODE


      template(#pgnav)
        aside(class="flex mt-6 mb-8 font-medium leading-6", aria-label="Previous and next page navigation")
          a(class="flex mr-8 text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", href="/docs/getting-started/react/")
            span(aria-hidden="true", class="mr-2") ←
            | React
          a(class="flex ml-auto text-right text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", href="/docs/getting-started/laravel/")
            | Laravel
            span(aria-hidden="true", class="ml-2") →



</template>


<script setup>
import fbinner from '@/components/chrome/fbinner.vue'
import fbouter from '@/components/chrome/fbouter.vue'

/*
  template(#pgnav)
    aside(class="flex mt-6 mb-8 font-medium leading-6", aria-label="Previous and next page navigation")
      a(class="flex mr-8 text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", href="/docs/getting-started/react/")
        span(aria-hidden="true", class="mr-2") ←
        | React
      a(class="flex ml-auto text-right text-gray-500 transition-colors duration-200 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white", href="/docs/getting-started/laravel/")
        | Laravel
        span(aria-hidden="true", class="ml-2") →

  template(#toc)
    h4(class="pl-2.5 mb-2 text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white lg:text-xs") On this page
    nav#TableOfContents
      ul
        li
          a(href="#install-tailwind-css-with-vuejs", xclass) Install Tailwind CSS with Vue.js
        li
          a(href="#flowbite-components", class="!border-blue-700 !after:opacity-100 !text-blue-700 dark:!border-blue-500 dark:!text-blue-500") Flowbite components

*/
</script>
