<template lang="pug">
h1 Site Map

//-section.border.container.mx-4
.itemsection
  .items.f1
    //////////////////////////////////////////
    .item
      i entry page
      br
      i linktree
    .item
      router-link(to="/user")
        | /user User 03
      br
      router-link(to="/tools")
        | /tools tools 05
      br
      router-link(to="/services")
        | /services Services 04
    .item
      b (me profile)
      br
      i me(fitness, score mvp)
      br
      i me(cabeceo hunt, game)
      br
      i practicafit c-2-5k


    //////////////////////////////////////////
    .item
      i Strandas
      br
      i nearby cabeceos connections
      br
    .item
      b.red
        | ( A/Club.com
        a(href="https://abrazosclub.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/ac")
        | /ac Club 30
      br
      i local chapters
      br
      i membership reward
      br
      i entrada ticketing booking
    .item
      i metaverse games nfts
      br
      i board card games
      br
      i ar filters ai tools
      br


  .items.f2
    //////////////////////////////////////////
    .item
      b.red
        | ( T/Dance.net
        a(href="https://tangodance.net" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/td")
        | /td Dance 24
      br
      i learn practica challenge
      br
      i Zumba certs grades test
      br
      i
        .db [pedagogy]
        | &nbsp;
        .db [lexicon]
        | &nbsp;
        .db [mundial]
      br
      i DB of Exhibition Video
    .item
      i clinic / belts
      br
      i golf 3d swing analyzer
      br
      i MVP league games
    .item
      i TV Film Channel Vod
      br
      i viral AV sketch fun
      br
      i DO40, DancePorn
      br
      i feeds streams


    //////////////////////////////////////////
    .item
      b.red
        | ( local info TSG
        a(href="https://info.tangosingapore.com/blog" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/local")
        | /locals locals 15
        br
      i league troops practica
      br
      i weekly forecasts
      br
      i pop-ups
    .item
      i sports challenges
      br
      i mundial ladder PV redbull
      br
      i circus enduance jacknjill
      br
      i recital routines
    .item
      i TV Channel Red Bull
      br
      i VOD MOD Loop
      br
      i Ad placement gazetta
      br
      i deals offers push
      br
      i cam eyes world



  .items.f3
    //////////////////////////////////////////
    .item
      b.red
        | ( T/News.com
        a(href="https://tangonews.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/tn")
        | /tn News 10
      br
      router-link(to="/xe")
        | /xe editors 41
      br
      i
        .db [rssfeeds]
        | &nbsp;
        .db [streams]
        | &nbsp;
        .db [zines]
    .item
      b (a/radio)
      br
      router-link(to="/ar")
        | /ar Radio 21
      br
      i Podcast Talk Buzz
      br
      i Reddit / share posts
      br
      i tango topic discuss
    .item
      i pretties legs faces
      br
      i cosplay models skins
      br
      i stencil tattoo dressup
      br
      i sexy crew party babes

      //////////////////////////////////////////
    .item
      b.red
        | ( T/Licious.com
        a(href="https://tangolicious.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/tl")
        | /tl Shopping 34
      br
      i products / services
      br
      i
        .db [brands]
        | shopee
      br
      i art souvenir museo tech
      br
      i supplies cosmetics
      br
      i consumables
    .item
      b (a/style) moda
      br
      router-link(to="/ax")
        | /ax Style 23
      br
      i design merch trader
      br
      i marketplace
    .item
      i double use designs
      br
      i shoes jackets
      br
      i auracast airpod



  .items.f1
    //////////////////////////////////////////
    .item
      b.red
        | ( T/Finder.com
        a(href="https://tangofinder.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/tf")
        | /tf Finder 14
      br
      i events / places
      br
      i
        .db [weeks]
        | &nbsp;
        .db [cities]
        | &nbsp;
        .db [meetups]
      br
      b.red
        | ( T/China.com
        a(href="https://tangochina.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      b.red
        | ( T/S'pore.com
        a(href="https://tangosingapore.com" target="_blank")
          i &rarr;
        | &nbsp;)
    .item
      b (a/spaces) studio salon
      br
      router-link(to="/as")
        | /as Spaces 35
      br
      i rental bookings
      br
      i salon studio
      br
      i open-air popup
      br
      i cam livestreams
    .item
      router-link(to="/portfolio")
        | /portfolio Portfolio 42
      br
      i hotel
      br
      i transfer
      br
      i retail


    //////////////////////////////////////////
    .item
      i directory pros
      br
      i teachers djs
      br
      i troupes bands
      br
      i novelty taxis
    .item
      b (a/tours)
      br
      router-link(to="/at")
        | /at Tour 25
      br
      i dj film culture food
    .item
      i DJs chart yp
      br
      i silent disco auracast tools
      br
      i pop-ups host alfrescos



  .items.f2
    //////////////////////////////////////////
    .item
      b.red
        | ( T/Intimo.com
        a(href="https://tangointimo.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/ti")
        | /ti Arts 20
      br
      i showcases
      br
      i photo-arts models
      br
      i creative / projects
      br
      i
        .db [films]
        | &nbsp;
        .db [stages]
        |   shorts
    .item
      b (a/music)
      br
      router-link(to="/tm")
        | /tm Music 32
      br
      i
        .db [scores]
        | &nbsp;
        .db [lyrics]
        | &nbsp;
        .db [musicdb]
        |  repos
      br
      i vsi bando 3d bando
      br
      i tdjf cia
    .item
      i non-argentine music
      br
      i special club souvenirs
      br
      i disneyland merchs

    //////////////////////////////////////////
    .item
      b (a/cafes) Club Bar Grill
      br
      i argentine meat food menu
      br
      i energy drink wine mint
      br
      i matsuri jr cafe design elements
    .item
      b (a/digital) imagineers
      br
      router-link(to="/ad")
        | /ad Studio 33
      br
      i film series music stories
      br
      i claymation reels theatrics
      br
      i indiana-jones benny hill
    .item
      i spanish course
      br
      i bando course
      br
      i robot orquesta
      br
      i mascot cat


  .items.f3
    //////////////////////////////////////////
    .item
      b.red
        | ( T/Pedia.net
        a(href="https://tangopedia.net" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/tp")
        | /tp Reference 12
      br
      i lexicons references
      br
      i wikipedia heritage
      br
      i
        .db [century]
        | &nbsp;
        .db [milestones]
      br
      i
        .db [biographies]
        | &nbsp;
        .db [quotes]
    .item
      i archives open data
      br
      i ebooks eweb mirrors
      br
      b.red
        | ( Tejas
        a(href="https://tejastango.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      b.red
        | ( Tchaos
        a(href="https://tangoandchaos.org" target="_blank")
          i &rarr;
        | &nbsp;)
    .item
      i publisher printer
      br
      i editorial cliche
      br
      i stationary images art
      br
      i comics posters T-shirts

    //////////////////////////////////////////
    .item
      i apps for DJ musicians
      br
      i apps for learner listener
      br
      i apps for traveller
      br
      i apps for choreo 3d
    .item
      b (a/lab) software
      br
      router-link(to="/al")
        | /al Lab 31
      br
      i metaverse games
      br
      i appstores pwa
      br
      i technology
    .item
      i vxi bando sound
      br
      i 3d print bando
      br
      i watch plugin



  .items.f1
    //////////////////////////////////////////
    .item
      b.red
        | ( T/East.com
        a(href="https://tangoeast.com" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/te")
        | /te Company 44
      br
      router-link(to="/xm")
        | /xm managers 45
      br
      i funding / jobs
    .item
      i projects grants
      br
      i opportunities jobs
    .item
      i free arts resources
      br
      i stencil clip art fonts
      br
      i sounds tones
      br
      i daily cartoons

    //////////////////////////////////////////
    .item
      b.red
        | ( Tangueros.org
        a(href="https://tangueros.org" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/to")
        | /to Project 22
      br
      router-link(to="/xp")
        | /xp partners
      br
      i learning / mission
    .item
      i books library
      br
      i rfc proposals
      br
      i tedtalks conference
      br
      i econ bio socio math
      br
      i
        .db [books]
    .item
      i awards honours
      br
      i annual observance
      br
      i rituals

    //////////////////////////////////////////
    .item
      router-link(to="/awesome")
        | /awesome awesome 13
      br
      i data
    .item
    .item

  .items.f2
    //////////////////////////////////////////
    .item
      b.red
        | ( Tangueros.net
        a(href="https://tangueros.net" target="_blank")
          i &rarr;
        | &nbsp;)
      br
      router-link(to="/tx")
        | /tx Cloud 40
      br
      i engines
      br
      i status validate
      br
      i
        .db [apps]
        | &nbsp;
        .db [domains]
    .item
      router-link(to="/")
        | / Landing 00
      br
      i campaigns
      br
      router-link(to="/site")
        | /site Sites 02
      br
      i site map structure
      br
      router-link(to="/about")
        | /about About 01
      br
      i legal faq
    .item
      router-link(to="/search")
        | /search Portal ??
      br
      i tags search
      br
      router-link(to="/guide")
        | /guide articles 11
      br
      i uptime status api

</template>

<style lang="scss">
.itemsection {
  @apply mx-3
  text-xs md:text-sm
  ;
}
.items {
  @apply flex flex-wrap text-slate-500;
}
.items a {
  @apply bg-blue-200 underline;
}
.item {
  @apply
  flex-none w-1/3
  p-2 rounded-md border
  justify-center overflow-hidden
  ;
}

.f1 {
  @apply bg-lime-100;
}
.f2 {
  @apply bg-amber-100;
}
.f3 {
  @apply bg-cyan-50;
}
.red {
  @apply text-red-500;
}
.db {
  @apply bg-purple-300
   inline;
}
</style>
