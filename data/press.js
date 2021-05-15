const press = [
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/articles/2021-05-13/carbon-offsets-have-a-new-ratings-agency-with-startup-sylvera',
    title: 'Startup that rates carbon offsets finds almost half fall short',
    authors: ['Will Mathis', 'Ivan Levingston'],
    date: '05-12-2021',
    format: 'print',
  },
  {
    source: 'KCRW',
    href:
      'https://www.kcrw.com/news/shows/press-play-with-madeleine-brand/gop-coronavirus-climate-change-science-race-music/carbon-offsets-california',
    title:
      'California’s carbon offset program might be pumping millions of tons CO₂ into the air, new study says',
    authors: ['Madeleine Brand'],
    date: '05-12-2021',
    format: 'audio',
  },
  {
    source: 'WBUR',
    href: 'https://www.wbur.org/hereandnow/2021/05/12/may-12-2021-hn-two',
    title: 'Offsetting emissions using forests',
    authors: ["Peter O'Dowd", 'Tonya Mosley'],
    date: '05-12-2021',
    format: 'audio',
  },
  {
    source: 'US News & World Report',
    href:
      'https://www.usnews.com/news/best-states/articles/2021-05-10/washington-passed-its-cap-and-trade-climate-legislation-now-what',
    title: 'Washington passed its cap-and-trade climate legislation. Now what?',
    authors: ['Levi Pulkkinen'],
    date: '05-10-2021',
    format: 'print',
  },
  {
    source: 'Pricing Nature',
    href:
      'https://pricingnature.substack.com/p/episode-6-carbon-pricing-hits-a-brick-9fb',
    title: 'Carbon pricing hits a brick wall on the left',
    authors: ['Casey R. Pickett', 'Naomi Shimberg', 'Jacob Miller'],
    date: '05-10-2021',
    format: 'audio',
  },
  {
    source: ['MIT Tech Review', 'ProPublica'],
    href:
      'https://www.propublica.org/article/a-nonprofit-promised-to-preserve-wildlife-then-it-made-millions-claiming-it-could-cut-down-trees',
    title:
      'A nonprofit promised to preserve wildlife. Then it made millions claiming it could cut down trees.',
    authors: ['Lisa Song', 'James Temple'],
    date: '05-10-2021',
    format: 'print',
  },
  {
    source: 'Planet Money',
    href: 'https://www.npr.org/2021/05/07/994774148/emission-impossible',
    title: 'Emission Impossible',
    authors: ['Julia Simon', 'Amanda Aronczyk'],
    date: '05-07-2021',
    format: 'audio',
  },
  {
    source: 'The New Republic',
    href:
      'https://newrepublic.com/article/162313/bp-carbon-offsets-washington-finite-carbon-carlyle',
    title: 'BP’s suspicious support for a carbon market in washington state',
    authors: ['Kate Aronoff'],
    date: '05-06-2021',
    format: 'print',
  },
  {
    source: 'Reuters',
    href:
      'https://www.reuters.com/business/environment/california-program-overestimates-climate-benefits-forest-offsets-study-2021-04-30/',
    title:
      'California program overestimates climate benefits of forest offsets',
    authors: ['Peter Henderson'],
    date: '04-30-2021',
    format: 'print',
  },
  {
    source: 'Earther',
    href:
      'https://earther.gizmodo.com/california-s-carbon-offset-program-is-a-complete-disast-1846791736',
    title: 'California’s carbon offset program is a complete disaster',
    authors: ['Molly Taft'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: 'Verge',
    href:
      'https://www.theverge.com/2021/4/29/22410367/forest-offsets-trees-carbon-dioxide-accounting',
    title: 'The math isn’t adding up on forests and CO₂ reductions',
    authors: ['Justine Calma'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: ['MIT Tech Review', 'ProPublica'],
    href:
      'https://www.propublica.org/article/the-climate-solution-actually-adding-millions-of-tons-of-co2-into-the-atmosphere',
    title:
      'The climate solution actually adding millions of tons of CO₂ into the atmosphere',
    authors: ['Lisa Song', 'James Temple'],
    date: '04-29-2021',
    format: 'print',
  },
  {
    source: 'National Geographic',
    href:
      'https://www.nationalgeographic.com/environment/article/biden-wants-to-cut-us-climate-pollution-in-half-heres-how',
    title: 'Biden wants to cut U.S. climate pollution in half—here’s how',
    authors: ['Madeleine Stone'],
    date: '04-22-2021',
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/articles/2021-04-13/how-to-think-about-negative-emissions-in-the-climate-fight',
    title: 'How to think about negative emissions in the climate fight',
    authors: ['Akshat Rathi'],
    date: '04-13-2021',
    format: 'print',
  },
  {
    source: 'GreenBiz',
    href:
      'https://www.greenbiz.com/article/digging-complex-confusing-and-contentious-world-soil-carbon-offsets',
    date: '02-26-2021',
    title:
      'Digging into the complex, confusing and contentious world of soil carbon offsets',
    authors: ['Jim Giles'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723981/',
    date: '02-02-2021',
    title: 'Burned by carbon pricing, Dems chart new course on climate',
    authors: ['Benjamin Storrow', 'Adam Aton'],
    format: 'print',
  },
  {
    source: 'Financial Times',
    href: 'https://www.ft.com/content/de5e8631-bdf2-4c2e-8b7f-83c0c80cdea8',
    date: '01-27-2021',
    title: 'Carney task force confronts concerns over carbon credits market',
    authors: ['Camilla Hodgson'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063723085/',
    date: '01-21-2021',
    title: 'Does carbon pricing work? Researchers are skeptical',
    authors: ['Chelsea Harvey'],
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/audio/2020-12-21/cullenward-the-jury-is-still-out-on-carbon-credits',
    date: '12-21-2020',
    title: 'The jury is still out on carbon credits',
    authors: ['Caroline Hepker', 'Roger Hearing'],
    format: 'audio',
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/news/features/2020-12-17/the-real-trees-delivering-fake-climate-progress-for-corporate-america',
    date: '12-17-2020',
    title: 'The real trees delivering fake corporate climate progress',
    authors: ['Ben Elgin', 'Zachary Mider'],
    format: 'print',
  },
  {
    source: 'New York Times',
    href:
      'https://www.nytimes.com/2020/12/12/opinion/sunday/biden-climate-change-al-gore.html',
    date: '12-12-2020',
    title: 'Where I find hope',
    authors: ['Al Gore'],
    format: 'print',
  },
  {
    source: 'Bloomberg',
    href:
      'https://www.bloomberg.com/features/2020-nature-conservancy-carbon-offsets-trees/',
    date: '12-09-2020',
    title: 'These trees are not what they seem',
    authors: ['Ben Elgin'],
    format: 'print',
  },
  {
    source: 'GreenBiz',
    href:
      'https://www.greenbiz.com/article/quest-carbon-offsets-almost-anything-goes',
    date: '11-30-2020',
    title: 'In the quest for carbon offsets, (almost) anything goes',
    authors: ['Jesse Klein'],
    format: 'print',
  },
  {
    source: 'Ars Technica',
    href:
      'https://arstechnica.com/science/2020/11/want-to-offset-your-carbon-footprint-heres-what-you-need-to-know/',
    date: '11-25-2020',
    title: 'Want to offset your carbon footprint? Here’s what you need to know',
    authors: ['Scott K. Johnson'],
    format: 'print',
  },
  {
    source: 'Time',
    href:
      'https://time.com/collection/best-inventions-2020/5911362/climate-trace/',
    date: '11-19-2020',
    title: 'The best inventions of 2020: The climate cop',
    authors: [],
    format: 'print',
  },
  {
    source: 'Grist',
    href:
      'https://grist.org/climate/this-oregon-forest-was-supposed-to-store-carbon-for-100-years-now-its-on-fire/',
    date: '09-18-2020',
    title:
      'This Oregon forest was supposed to store carbon for 100 years. Now it’s on fire.',
    authors: ['Emily Pontecorvo', 'Shannon Osaka'],
    format: 'print',
  },
  {
    source: 'Rolling Stone',
    href:
      'https://www.rollingstone.com/politics/politics-features/tree-planting-wont-stop-climate-crisis-1020500/',
    date: '06-25-2020',
    title: 'Why planting trees won’t save us',
    authors: ['Jeff Goodell'],
    format: 'print',
  },
  {
    source: 'E&E News',
    href: 'https://www.eenews.net/climatewire/stories/1063394847/',
    date: '06-16-2020',
    title: 'Bleak cap-and-trade results raise doubts about program',
    authors: ['Anne C. Mulkern'],
    format: 'print',
  },
  {
    source: 'MIT Tech Review',
    href:
      'https://www.technologyreview.com/2020/06/03/1002484/why-we-cant-count-on-carbon-sucking-farms-to-slow-climate-change/',
    date: '06-03-2020',
    title: 'Why we can’t count on carbon-sucking farms to slow climate change',
    authors: ['James Temple'],
    format: 'print',
  },
]

export { press }