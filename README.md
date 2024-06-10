# Impressum

npm impressum

## What this Nuxt Layer does

- Modules: Nuxt/UI and Nuxt/Content
- Layouts
- UI Elements as Components
- auto insert HTML head metadata
- Basic app layout with top menus and slide-in side drawers 

Basically this repo serves as a "theme" provider for another i
Nuxt repo that
provides the actual site "content":

- Pages
- Content
- Public

## How to Use it

In the consumer repo, add this to the Nuxt.config.ts:

~~~

extends: ['impressum'],

~~~

and add this to the package.json:

~~~

"dependencies": {
  "impressum": "latest"
}
~~~

## What this layer provides:

- A set of UI elements (components) that are similar to Nuxt/UI-Pro

- A set of MDC elements (components)

- The wikilink Markdown syntax

- hooks to generate sitemap and feeds




