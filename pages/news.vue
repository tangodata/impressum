<template lang="pug">
SiteHeader

// =========={ MAIN }==========
main#content

  // advertisement
  .bg-gray-50.py-4.hidden
    .mx-auto.px-3(class="xl:container sm:px-4 xl:px-2")
      .mx-auto.table.text-center.text-sm
        a.uppercase(href="#") Advertisement
        a(href="#")
          img(zsrc="src/img/ads/ads_728.jpg" alt="advertisement area")

  //==============
  // hero big grid
  .bg-white.py-6
    .mx-auto.px-3(class="xl:container sm:px-4 xl:px-2")
      // big grid 1
      .flex.flex-row.flex-wrap
        // Start left cover
        .flex-shrink.max-w-full.w-full.pb-1(class="lg:w-1/2 lg:pb-0 lg:pr-1")
          .relative.hover-img.max-h-98.overflow-hidden
            a(href="#")
              img.max-w-full.w-full.mx-auto.h-auto(zsrc="src/img/dummy/img1.jpg" alt="Image description")
            .absolute.px-5.pt-8.pb-5.bottom-0.w-full.bg-gradient-cover
              a(href="#")
                h2.text-3xl.font-bold.capitalize.text-white.mb-3 Amazon Shoppers Are Ditching Designer Belts for This Best-Selling
              p.text-gray-100.hidden(class="sm:inline-block")
                | This is a wider card with supporting text below as a natural lead-in to additional content. This very helpfull for generate default content..
              .pt-2
                .text-gray-100
                  .inline-block.h-3.border-l-2.border-red-600.mr-2
                  | Europe
        // Start box news
        .flex-shrink.max-w-full.w-full(class="lg:w-1/2")
          .box-one.flex.flex-row.flex-wrap
            article.flex-shrink.max-w-full.w-full(class="sm:w-1/2")
              .relative.hover-img.max-h-48.overflow-hidden
                a(href="#")
                  img.max-w-full.w-full.mx-auto.h-auto(zsrc="src/img/dummy/img2.jpg" alt="Image description")
                .absolute.px-4.pt-7.pb-4.bottom-0.w-full.bg-gradient-cover
                  a(href="#")
                    h2.text-lg.font-bold.capitalize.leading-tight.text-white.mb-1 News magazines are becoming obsolete, replaced by gadgets
                  .pt-1
                    .text-gray-100
                      .inline-block.h-3.border-l-2.border-red-600.mr-2
                      | Techno
            article.flex-shrink.max-w-full.w-full(class="sm:w-1/2")
              .relative.hover-img.max-h-48.overflow-hidden
                a(href="#")
                  img.max-w-full.w-full.mx-auto.h-auto(zsrc="src/img/dummy/img3.jpg" alt="Image description")
                .absolute.px-4.pt-7.pb-4.bottom-0.w-full.bg-gradient-cover
                  a(href="#")
                    h2.text-lg.font-bold.capitalize.leading-tight.text-white.mb-1 Minimalist designs are starting to be popular with the next generation
                  .pt-1
                    .text-gray-100
                      .inline-block.h-3.border-l-2.border-red-600.mr-2
                      | Architecture
            article.flex-shrink.max-w-full.w-full(class="sm:w-1/2")
              .relative.hover-img.max-h-48.overflow-hidden
                a(href="#")
                  img.max-w-full.w-full.mx-auto.h-auto(zsrc="src/img/dummy/img4.jpg" alt="Image description")
                .absolute.px-4.pt-7.pb-4.bottom-0.w-full.bg-gradient-cover
                  a(href="#")
                    h2.text-lg.font-bold.capitalize.leading-tight.text-white.mb-1 Tips for decorating the interior of the living room
                  .pt-1
                    .text-gray-100
                      .inline-block.h-3.border-l-2.border-red-600.mr-2
                      | Interior
            article.flex-shrink.max-w-full.w-full(class="sm:w-1/2")
              .relative.hover-img.max-h-48.overflow-hidden
                a(href="#")
                  img.max-w-full.w-full.mx-auto.h-auto(zsrc="src/img/dummy/img5.jpg" alt="Image description")
                .absolute.px-4.pt-7.pb-4.bottom-0.w-full.bg-gradient-cover
                  a(href="#")
                    h2.text-lg.font-bold.capitalize.leading-tight.text-white.mb-1 Online taxi users are increasing drastically ahead of the new year
                  .pt-1
                    .text-gray-100
                      .inline-block.h-3.border-l-2.border-red-600.mr-2
                      | Lifestyle


  //==============
  // block news
  .bg-white
    .mx-auto.px-3(class="xl:container sm:px-4 xl:px-2")
      .flex.flex-row.flex-wrap
        // Left
        .flex-shrink.max-w-full.w-full.overflow-hidden(class="lg:w-2/3")
          .w-full.py-3
            h2.text-gray-800.text-2xl.font-bold
              span.inline-block.h-5.border-l-3.border-red-600.mr-2
              | Europe
          .flex.flex-row.flex-wrap.-mx-3
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img6.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img7.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img8.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img9.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img10.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
            .flex-shrink.max-w-full.w-full.px-3.pb-3.pt-3.border-b-2.border-dotted.border-gray-100(class="sm:w-1/3 sm:pt-0 sm:border-b-0")
              .flex.flex-row.hover-img(class="sm:block")
                a(href="")
                  img.max-w-full.w-full.mx-auto(zsrc="src/img/dummy/img11.jpg" alt="alt title")
                .py-0.pl-3(class="sm:py-3 sm:pl-0")
                  h3.text-lg.font-bold.leading-tight.mb-2
                    a(href="#") 5 Tips to Save Money Booking Your Next Hotel Room
                  p.hidden.text-gray-600.leading-tight.mb-1(class="md:block")
                    | This is a wider card with supporting text below as a natural lead-in to additional content.
                  a.text-gray-500(href="#")
                    span.inline-block.h-3.border-l-2.border-red-600.mr-2
                    | Europe
        // right
        .flex-shrink.max-w-full.w-full.order-first(class="lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 lg:order-last")
          .w-full.bg-gray-50.h-full
            .text-sm.py-6.sticky
              .w-full.text-center
                a.uppercase(href="#") Advertisement
                a(href="#")
                  img.mx-auto(zsrc="src/img/ads/250.jpg" alt="advertisement area")

// end main

SiteFooter
</template>

<script setup>
//const { topmenu } = useAppConfig()
/*

*/

</script>
