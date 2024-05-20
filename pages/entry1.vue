<template lang="pug">

p READ =from Academy
ol
  li (read = tpedia)
  li biography
  li journal
  li lyrics
p READ CHANNEL = tnews
ol
  li mailing list
  li articles
  li discussions on tango-l mixed topics
hr
p DANCE $EVENTS FINDER
ol
  li (finder = tango geography Germany USA World )
  li teachers
  li festivals travel
hr
p MUSIC =Golden Age Heritage
ol
  li (tmusic = golden age archive)
  li musicians bandoneon
  li listen
  li sheet music discograpy buy CD
hr
p WATCH $CREATORS ARTS
ol
  li (tintimo = creators)
  li art movies videos
  li shows TV
hr
p FASHION $ECOMMERCE
ol
  li (tlicious = style shopping)
  li general clothes shoes jewelry
hr
p BODY $TRAINING
ol
  li (tdance = training)
  li movement
  li feet
hr
p ARGENTINA $SPACES TO SPEND
ol
  li food beverage
  li learn spanish
  li lodging
  li miscellaneous
hr
p FUTURE????
hr
p ACADEMY
ol
  li other general dance servers
  li dance partners?
  li search engine
hr
p MEMBERS
p METAVERSE
ol
  li city map travel info telephone
  li search engines translate currencies
  li jokes


.frame
  //--Dancing, Travelling, Festivals
  .box.featured.lime
    h2 $ Fitness Training
    b: router-link(to="/td") TangoDance
    router-link(to="/at") Abrazos Tours
    router-link(to="/lexicon") Lexicon
    hr
    p [pedagogy] [lexicon] [mundial]
  .box.featured.lime
    h2 $ Events Finder
    b: router-link(to="/tf") TangoFinder
    router-link(to="/tf/r/sg/sin") LocalSG
    router-link(to="/tf/r/hk/hkg") LocalHK
    router-link(to="/city") Cities
    hr
    p [weeks] [cities] [meetups]
  .box.featured
    h2 Golden Age Heritage
    router-link(to="/tm") Music
    hr
    p [films] [stages]
    p [scores] [lyrics] [musicdb]

  //--Staging, Stories, Music, New Ideas
  .box.featured
    h2 Readings
    hr
    p articles to read
  .box.featured.pink
    h2 $ Creators Arts New
    b: router-link(to="/ti") TangoIntimo
    router-link(to="/ad") Abrazos Digital
    hr
    p New Marketing for New Audience
  .box.featured.pink
    h2 Channel News
    b: router-link(to="/tn") TangoNews
    router-link(to="/ar") Abrazos Radio
    hr
    p [rssfeeds] [streams] [zines]

  //--Club, Places, Retails, Facilities, Interaction
  .box.featured.lime
    h2 $ ECommerce Shopping
    b: router-link(to="/tl") TangoLicious
    router-link(to="/am") Abrazos Moda
    hr
    p [brands]
  .box.featured.lime
    h2 $ Spaces
    router-link(to="/ax") Abrazos Spaces
    hr
    p Hotel, Cafes, Studios
  .box.featured
    h2 Futures
    b: router-link(to="/tx") TangoNet
    b: router-link(to="/te") TangoEast
    router-link(to="/al") Abrazos Lab
    hr
    p [apps] [domains]
    p Awesome links

  //--The Golden Age, Academy, Archives, Knowledgebase
  .box.featured
    h2 Academy Organisation
    b: router-link(to="/tp") Tangopedia
    b: router-link(to="/to") Tangueros
    hr
    p [century] [milestones] [biographies] quotes]
    p [books] Articles / Wikipages
  .box.featured.pink
    h2 $ Club Membership
    b: router-link(to="/ac")  AbrazosClub
  .box.featured.pink
    h2 Metaverse
    hr
    p games, online, virtual

</template>

<style lang="scss">
.frame {
  @apply flex flex-wrap border;
}

.box {
  @apply
  text-xs
  flex-none w-1/3 border;
}

.featured {
  @apply p-1 bg-slate-100
  ;
}
.featured a {
  @apply italic underline
  px-1
  ;
}

.lime {
  @apply bg-lime-100;
}
.pink {
  @apply bg-pink-100;
}



</style>
