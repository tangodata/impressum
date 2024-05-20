<script setup>
//const props = defineProps(['menu'])
const { headmenu: menu } = useAppConfig()
</script>

<template lang="pug">
// ========== { HEADER }==========
header.fixed.top-0.left-0.right-0.z-50
  nav.bg-black
    .mx-auto.px-3(class="xl:container sm:px-4 xl:px-2")
      .flex.justify-between
        .mx-w-10.text-2xl.font-bold.capitalize.text-white.flex.items-center Tangueros
        .flex.flex-row

          // nav menu
          ul.navbar.hidden.text-gray-400.text-sm.items-center.font-bold(
            class="lg:flex lg:flex-row")

            template(v-for="item in menu")
              li.relative.border-l.border-gray-800(
                class="hover:bg-gray-900"
                ifactiveclass='active'
                ifsubmenu="dropdown"
                )
              a.block.py-3.px-6.border-b-2.border-transparent(
                :href="item.link") {{item.name}}

              template(v-if="item.submenu")
                ul.dropdown-menu.font-normal.absolute.left-0.right-auto.top-full.z-50.border-b-0.text-left.bg-white.text-gray-700.border.border-gray-100(
                  style="min-width: 12rem;")

                  template(v-for="subitem in item.submenu")
                    li.subdropdown.relative(class="hover:bg-gray-50")
                      a.block.py-2.px-6.border-b.border-gray-100(
                        :href="subitem.link") {{subitem.name}}

                    template(v-if="subitem.submenu")
                      // dropdown submenu
                      ul.dropdown-menu.absolute.left-full.right-auto.transform.top-full.z-50.border-b-0.text-left.-mt-10.ml-0.mr-0.bg-white.border.border-gray-100(
                        style="min-width: 12rem;")

                        template(v-for="deepitem in subitem.submenu")
                          li.relative(class="hover:bg-gray-50")
                            a.block.py-2.px-6.border-b.border-gray-100(
                              :href="deepitem.link") {{deepitem.name}}


          // search form & mobile nav
          .flex.flex-row.items-center.text-gray-300
            .search-dropdown.relative.border-r.border-gray-800(class="lg:border-l hover:bg-gray-900")
              button.block.py-3.px-6.border-b-2.border-transparent
                svg.open.bi.bi-search(xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16")
                  path(d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z")
                svg.close.bi.bi-x-lg(xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16")
                  path(fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z")
                  path(fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z")
              .dropdown-menu.absolute.left-auto.right-0.top-full.z-50.text-left.bg-white.text-gray-700.border.border-gray-100.mt-1.p-3(style="min-width: 15rem;")
                .flex.flex-wrap.items-stretch.w-full.relative
                  input.flex-shrink.flex-grow.flex-shrink.max-w-full.leading-5.w-px.flex-1.relative.py-2.px-5.text-gray-800.bg-white.border.border-gray-300.overflow-x-auto(type="text" class="focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" name="text" placeholder="Search..." aria-label="search")
                  .flex.-mr-px
                    button.flex.items-center.py-2.px-5.-ml-1.leading-5.text-gray-100.bg-black(class="hover:text-white hover:bg-gray-900 hover:ring-0 focus:outline-none focus:ring-0" type="submit")
                      svg.bi.bi-search(xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16")
                        path(d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z")
            .relative.block(class="hover:bg-gray-800 lg:hidden")
              button.menu-mobile.block.py-3.px-6.border-b-2.border-transparent(type="button")
                span.sr-only Mobile menu
                svg.inline-block.h-6.w-6.mr-2(xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor" aria-hidden="true")
                  path(stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16")
                |  Menu
// end header



//- Mobile menu
  .side-area.fixed.w-full.h-full.inset-0.z-50
  // bg open
  .back-menu.fixed.bg-gray-900.bg-opacity-70.w-full.h-full.inset-x-0.top-0
    .cursor-pointer.text-white.absolute.right-64.p-2
      svg.bi.bi-x(width="2rem" height="2rem" viewbox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg")
        path(fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd")
        path(fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd")

  // Mobile navbar
  nav#mobile-nav.side-menu.flex.flex-col.right-0.w-64.fixed.top-0.bg-white.h-full.overflow-auto.z-40(class="dark:bg-gray-800")
    .mb-auto
      // navigation
      nav.relative.flex.flex-wrap
        .text-center.py-4.w-full.font-bold.border-b.border-gray-100 TAILNEWS
        ul#side-menu.w-full.float-none.flex.flex-col

          // dropdown with submenu
          li.dropdown.relative

            a.block.py-2.px-5.border-b.border-gray-100(
              class="hover:bg-gray-50" href="javascript:;")  News

            // dropdown menu
            ul.dropdown-menu.block.rounded.rounded-t-none.top-full.z-50.ml-4.text-left.bg-white.mb-4(class="py-0.5 dark:bg-gray-800" style="min-width: 12rem")
              // submenu
              li.subdropdown.relative
                a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="javascript:;")  Dropdown item
                // dropdown submenu
                ul.dropdown-menu.block.rounded.rounded-t-none.top-full.z-50.ml-4.text-left.bg-white(class="py-0.5 dark:bg-gray-800" style="min-width: 12rem")
                  li
                    a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown sub item
                  li
                    a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown sub item
                  li
                    a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown sub item
                  li
                    a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown sub item
              // end submenu
              li.relative
                a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown item
              li.relative
                a.block.w-full.py-2.px-5.border-b.border-gray-100(class="hover:bg-gray-50" href="#") Dropdown item

    // copyright
    .py-4.px-6.text-sm.mt-6.text-center
      p
        | Copyright
        a(href="#") Tailnews
        |  - All right reserved
// End Mobile menu
</template>


