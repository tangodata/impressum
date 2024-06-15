## Nuxt/UI
(tailwind css, headless UI)

(layout)
  UCard - header, footer, slot
  UContainer - slot
  UDivider
  USkeleton - use to create Placemakers

(navigation)
  UBreadcrumb
  UCommandPalette
  (UCommandPaletteGroup)
  UHorizontalNavigation
  UVerticalNavigation
  UPagination
  UTabs

(overlay dialogs)
  UContextMenu
  UModal
  UNotification
  UPopover
  USlideover
  UTooltop

(form)
  UCheckbox
  UForm
  UFormGroup
  UInput
  UInputMenu
  (URadio)
  URadioGroup
  URange
  USelect
  USelectMenu
  UTextarea
  UToggle

(elements)
  UAccordion
  UAlert
  UAvatar
  (UAvatarGroup)
  UBadge
  UButton
  (UButtonGroup)
  UCarousel
  UChip
  UDropdown
  UIcon
  UKbd
  ULink
  UMeter
  UProgress

(data)
  UTable

(special??)
  UDatePicker
  == Needs v-calendar and date-fns

## Nuxt/UI-Pro

UAside
UAsideLinks
UAuthForm

UBlogList
UBlogPost

UColorModeAvatar
UColorModeButton
UColorModeImage
UColorModeSelect
UColorModeToggle

UContentSearch
UContentSearchButton
UContentSurround
UContentToc

UDashboardCard
UDashboardLayout
UDashboardModal
UDashboardNavbar
UDashboardNavbarToggle
UDashboardPage
UDashboardPanel
UDashboardPanelContent
UDashboardPanelHandle
UDashboardSearch
UDashboardSearchButton
UDashboardSection
UDashboardSidebar
UDashboardSidebarLinks
UDashboardSlideover
UDashboardToolbar

UFooter - top, (bottom)left, center, right
UFooterColumns
UFooterLinks

UHeader - logo, left, center, right, bottom, top
UHeaderLinks
UHeaderPopoverLinks

ULandingCard
ULandingCTA
ULandingFAQ
ULandingGrid
ULandingHero
ULandingLogos
ULandingSection
ULandingTestimonial

UMain - slot

UNavigationAccordion
UNavigationLinks
UNavigationTree

UPage - left, right, slot
UPageBody
UPageCard
UPageColumns
UPageError
UPageGrid
UPageHeader
UPageHero
UPageLinks

UPricingCard
UPricingGrid
UPricingToggle

## Prose MDC

::Callout

::Card
::CardGroup

::CodeBlock
::CodeGroup

::Collapsible

::Field
::FieldGroup

::Shortcut

::Tabs

## MDC Components
defined in components/content/? or "global"

::ProseA  = [link] (xxxx)

::ProseBlockquote = > block

::ProsePre = code block ```js

:ProseCode (Inline) = `jjj`

::ProseH1
::ProseH2
::ProseH3
::ProseH4
::ProseH5
::ProseH6

::ProseHr
:ProseImg = ! [xx] (sxxx)

::ProseUl
::ProseOl
::ProseLi

::ProseP
:ProseStrong
:ProseEm

::ProseTable
::ProseTbody
::ProseTd
::ProseTh
::ProseThead
::ProseTr

::ProseScript (caution)
:br ?

## Markdown (Remark)

:xx: = emoji

## Markdown (Extend)

mdc: {
   remarkPlugins: {
      'remark-breaks': {},
   },


## Content (config)
export default defineNuxtConfig({
  content: {
    api: {baseURL: '/api/_content'}
    contentHead: true
      // auto useContentHead
    documentDriven: false
    markdown: {
      anchorLinks: {depth: 4, exclude: [1]}
      // h2, h3, h4 has anchor links
      mdc: true
      remarkPlugins: {
        'remark-gfm': false,
        'remark-emoji': {emoticon: true }
        'remark-oembed': {}
      }
      rehypePlugins: []
      toc: {depth:2, searchDepth:2}
      tags: {
        p: 'customP'
      }
    }
    sources: {
      a: {
        prefix
        driver: fs
        base:
      }
      github: {
        prefix: /blog
        driver: github
        repo: "owner/repo"
        branch: "main"
        dir: "content"
      }
    }
  }
})
## Pnpm warning
pnpm without shamefully-hoist option
vite warnings are show about failing to optimize deps

pnpm add -D debug parse5 rehype-raw remark-emoji remark-gfm remark-mdc remark-rehype unified unist-util-visit

const include = [
   'remark-gfm', // from runtime/parser/index.ts
   'remark-emoji', // from runtime/parser/index.ts
   'remark-mdc', // from runtime/parser/index.ts
   'remark-rehype', // from runtime/parser/index.ts
   'rehype-raw', // from runtime/parser/index.ts
   'parse5', // transitive deps of rehype
   'unist-util-visit', // from runtime/highlighter/rehype.ts
   'unified', // deps by all the plugins
   'debug', // deps by many libraries but it's not an ESM
 ]

