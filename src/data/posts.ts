import type { Post } from '@/types/post'

/**
 * Home Fibre guides — SEO content. Hand-maintained.
 * Targets high-intent home-internet search queries and funnels to WhatsApp.
 */
export const posts: Post[] = [
  {
    slug: 'best-internet-for-home-malaysia',
    image: '/blog/best-internet-for-home-malaysia.jpg',
    title: 'Internet for Home: How to Choose the Right Plan in Malaysia (2026)',
    excerpt:
      'Looking for internet for your home? This guide covers everything — fibre vs wireless, what speed to pick, what a fair price looks like and the mistakes to avoid.',
    date: '2026-07-11',
    readMins: 7,
    category: 'Choosing a plan',
    seoTitle: 'Internet for Home in Malaysia: How to Choose the Best Plan (2026)',
    seoDescription:
      'Complete 2026 guide to home internet in Malaysia — fibre vs wireless, what speed your household needs, fair pricing from RM89/mth, and how to check coverage at your address.',
    keywords: [
      'internet for home',
      'home internet Malaysia',
      'best home internet',
      'home broadband plan',
      'home wifi plan Malaysia',
      'internet plan for house',
    ],
    blocks: [
      {
        type: 'p',
        text: 'Shopping for internet for your home shouldn’t need a telecoms degree. Yet between fibre and wireless, five different speeds and prices that change depending on your street, it’s easy to overpay — or worse, sign a 24-month contract for a plan that can’t keep up. This guide walks you through the four decisions that actually matter, in order.',
      },
      { type: 'h2', text: 'Step 1: Check what’s available at your address' },
      {
        type: 'p',
        text: 'Home internet in Malaysia is address-specific. Two houses on the same street can have different fibre infrastructure, different maximum speeds and different promo prices. So before comparing plans, confirm what your address actually supports — it takes a minute over WhatsApp and saves hours of comparison shopping for plans you can’t get.',
      },
      { type: 'h2', text: 'Step 2: Choose fibre if you can get it' },
      {
        type: 'p',
        text: 'Fixed fibre delivers a dedicated line into your home, so speeds stay stable at peak hours, during storms and no matter how many neighbours are online. Wireless home internet (4G/5G routers) is quicker to set up, but speeds swing with signal strength and network congestion. If fibre is available at your address, it’s almost always the better home internet — see our full [Home Fibre vs Home 5G WiFi comparison](/blog/home-fibre-vs-home-wifi) for the details.',
      },
      {
        type: 'tip',
        text: 'Renting, or fibre not installed in your area yet? Wireless home WiFi is a solid stop-gap — you can switch to fibre later when your address is covered.',
      },
      { type: 'h2', text: 'Step 3: Match the speed to your household' },
      {
        type: 'ul',
        items: [
          '1–2 people, browsing and HD streaming: 100Mbps is comfortable',
          '3–5 people, 4K streaming and work-from-home video calls: 300Mbps is the sweet spot',
          'Big family with gaming, CCTV and 15+ smart devices: 500Mbps gives real headroom',
          'Content creators, serious gamers and smart homes: 1Gbps–2Gbps future-proofs everything',
        ],
      },
      {
        type: 'p',
        text: 'The most common mistake is buying on price alone and ending up under-speeds. The second most common is paying for 1Gbps when the household only ever uses a fraction of it. Count the people and devices online at your busiest hour — that’s your real requirement.',
      },
      { type: 'h2', text: 'Step 4: Know what a fair price looks like' },
      {
        type: 'p',
        text: 'As a benchmark, [current Maxis Home Fibre plans](/#plans) start from RM89/mth for 100Mbps, RM99/mth for 300Mbps, and RM149/mth for 500Mbps with 3 months free — all with unlimited data, a free WiFi 6 router and free installation. If a plan you’re considering charges more for less, or adds installation and router fees on top, keep looking.',
      },
      { type: 'h2', text: 'Don’t forget the things that aren’t on the price tag' },
      {
        type: 'ul',
        items: [
          'Unlimited data — a “fast” plan with a quota isn’t a home plan',
          'Router quality — a WiFi 6 router included free beats paying extra for a basic one',
          'Contract length — know whether you’re committing to 24 or 36 months',
          'Real support — a human you can message beats a call-centre queue',
        ],
      },
      { type: 'h2', text: 'Get your home internet sorted in one chat' },
      {
        type: 'p',
        text: 'Send us your address on WhatsApp or use our [coverage checker](/coverage), and we’ll confirm Maxis Home Fibre availability, the best current price you qualify for and the right speed for your household — no obligation. Most customers go from first message to confirmed installation booking in a single conversation.',
      },
    ],
  },
  {
    slug: 'how-to-get-faster-wifi-speed-at-home',
    image: '/blog/how-to-get-faster-wifi-speed-at-home.jpg',
    title: 'Fast WiFi Speed at Home: What You Need & How to Get It',
    excerpt:
      'Want faster WiFi? Here’s what internet speed you actually need for streaming, gaming and WFH — plus the router and setup tweaks that unlock your line’s full speed.',
    date: '2026-07-09',
    readMins: 6,
    category: 'Fix your internet',
    seoTitle: 'Fast WiFi Speed at Home: What Speed You Need & How to Get It',
    seoDescription:
      'How much internet speed do you need for 4K streaming, gaming and video calls? See the numbers, plus 5 proven ways to get faster WiFi speed at home in Malaysia.',
    keywords: [
      'fast wifi speed',
      'wifi fast speed',
      'faster wifi at home',
      'what internet speed do i need',
      'internet speed for streaming',
      'high speed home wifi',
    ],
    blocks: [
      {
        type: 'p',
        text: 'Fast WiFi isn’t one number — it’s two things working together: a line fast enough for everything your household does at once, and a WiFi setup that actually delivers that speed to every device. Here’s how much speed common activities really use, and how to make sure you’re getting what you pay for.',
      },
      { type: 'h2', text: 'How much speed does each activity need?' },
      {
        type: 'ul',
        items: [
          'Web browsing and social media: 5–10Mbps per person',
          'HD video streaming: 5–8Mbps per stream',
          '4K video streaming: 25Mbps per stream',
          'Video calls (Zoom, Teams, Meet): 5–10Mbps per call',
          'Online gaming: 10–25Mbps — but low ping matters more than raw speed',
          'Large downloads and cloud backups: the more, the faster they finish',
        ],
      },
      {
        type: 'p',
        text: 'The trick is that these stack. Two 4K streams, a video call and a game running at once already needs 70–90Mbps of real, sustained throughput — and WiFi overhead means your line should have comfortable headroom above that. That’s why 300Mbps has become the sweet spot for busy Malaysian homes, and why 500Mbps is worth it for big households.',
      },
      { type: 'h2', text: '1. Upgrade your router before anything else' },
      {
        type: 'p',
        text: 'An old router is the number-one thing throttling fast lines. A modern WiFi 6 router handles more devices simultaneously, pushes stronger signal through walls and gets much closer to your plan’s full speed. Every Maxis Home Fibre plan includes one free.',
      },
      { type: 'h2', text: '2. Use 5GHz near the router, and cable what matters' },
      {
        type: 'p',
        text: 'Connect TVs, consoles and desktop PCs to the 5GHz band — or better, an Ethernet cable — and leave 2.4GHz for far-away and low-priority devices. A wired connection gives gaming and work calls the most stable speed and lowest ping possible.',
      },
      { type: 'h2', text: '3. Fix coverage before blaming speed' },
      {
        type: 'p',
        text: 'Run a speed test next to the router, then in your slowest room. If speed collapses with distance, your problem is WiFi coverage, not the line — and a mesh WiFi setup will do more for you than a faster plan. Our guide to [fixing weak WiFi in some rooms](/blog/wifi-coverage-weak-in-some-rooms) covers this step by step.',
      },
      {
        type: 'tip',
        text: 'Test with the right tool: a phone on WiFi tops out below your plan speed on higher tiers. For 500Mbps and above, test on a laptop over Ethernet or a WiFi 6 device to see the real number.',
      },
      { type: 'h2', text: '4. Trim the background bandwidth thieves' },
      {
        type: 'p',
        text: 'Cloud photo backups, game updates and 4K CCTV uploads quietly eat your bandwidth all day. Schedule big updates overnight and cap backup speeds, and your “slow” WiFi often speeds up instantly.',
      },
      { type: 'h2', text: '5. If the line itself is the limit, upgrade it' },
      {
        type: 'p',
        text: 'If your setup is right and speeds still can’t keep up at your busiest hour, the plan is the bottleneck. [Maxis Home Fibre plans](/#plans) go from 100Mbps all the way to 2Gbps — 300Mbps from RM99/mth and 500Mbps at RM149/mth with 3 months free, both with a free WiFi 6 router. WhatsApp us and we’ll match a speed to how your home actually uses the internet.',
      },
    ],
  },
  {
    slug: 'best-value-home-internet-package-malaysia',
    image: '/blog/best-value-home-internet-package-malaysia.jpg',
    title: 'The Most Value Home Internet Package in Malaysia (2026 Compared)',
    excerpt:
      'Which home internet package gives you the most for your ringgit? We compare price per Mbps, freebies and contract terms to find the best value plans in 2026.',
    date: '2026-07-07',
    readMins: 6,
    category: 'Choosing a plan',
    seoTitle: 'Best Value Home Internet Package Malaysia 2026: Full Comparison',
    seoDescription:
      'Comparing home internet packages in Malaysia? See which plans give the most value per ringgit in 2026 — price per Mbps, free routers, free months and contract terms.',
    keywords: [
      'most value home internet package',
      'best value internet plan Malaysia',
      'cheap home internet Malaysia',
      'home internet package price',
      'best internet package for home',
      'affordable fibre plan',
    ],
    blocks: [
      {
        type: 'p',
        text: 'The cheapest home internet package and the best-value one are rarely the same plan. Value is what you get for each ringgit — speed, data, hardware, free months and flexibility. Here’s a simple framework for judging any home internet package, with real numbers from current Maxis Home Fibre pricing.',
      },
      { type: 'h2', text: 'The quickest value test: price per Mbps' },
      {
        type: 'p',
        text: 'Divide the monthly price by the speed. On [current Maxis Home Fibre pricing](/#plans), 100Mbps at RM89 works out to about 89 sen per Mbps. 300Mbps at RM99 drops that to 33 sen. 500Mbps at RM149 is 30 sen, and 1Gbps at RM249 is under 25 sen. The pattern is clear: mid and higher tiers deliver several times more speed for each ringgit.',
      },
      {
        type: 'tip',
        text: 'Notice the jump from RM89 to RM99 — for RM10 more a month you triple your speed from 100Mbps to 300Mbps. That RM10 is the best-value upgrade in the entire lineup.',
      },
      { type: 'h2', text: 'Count the freebies — they’re real money' },
      {
        type: 'ul',
        items: [
          'Free WiFi 6 router: worth several hundred ringgit if bought separately',
          'Free installation: saves the standard technician fee',
          '3 months free: on a RM149 plan, that’s RM447 back in your pocket',
          'Unlimited data: no top-ups, no throttling after a quota',
        ],
      },
      {
        type: 'p',
        text: 'A package that looks RM5 cheaper but charges for the router and installation can cost you more in year one than a slightly pricier plan with everything included. Always compare the total first-year cost, not just the monthly price.',
      },
      { type: 'h2', text: 'Factor in the contract length' },
      {
        type: 'p',
        text: 'Promo prices come with contracts — typically 24 or 36 months. A lower price on a 36-month contract is genuine value if you own your home and plan to stay. If you might move, a 24-month plan with free months can be the smarter deal. Maxis currently offers 300Mbps both ways: RM99/mth on 36 months, or RM129/mth on 24 months with 3 months free. Not sure how much speed to buy? Our [guide to choosing internet for your home](/blog/best-internet-for-home-malaysia) walks through it.',
      },
      { type: 'h2', text: 'So which package is the most value in 2026?' },
      {
        type: 'ul',
        items: [
          'Tightest budget: 100Mbps at RM89/mth — full home internet with free router and installation',
          'Best value overall: 300Mbps at RM99/mth — triple the speed for RM10 more',
          'Best for big households: 500Mbps at RM149/mth with 3 months free',
          'Power users: 1Gbps at RM249/mth — the lowest cost per Mbps of the lineup',
        ],
      },
      { type: 'h2', text: 'Get the exact price for your address' },
      {
        type: 'p',
        text: 'Final pricing depends on the fibre infrastructure at your address and whether you’re switching from another provider — sometimes there’s an even better offer than the standard rate. [Check coverage at your address](/coverage) or WhatsApp us, and we’ll confirm the best-value Maxis Home Fibre package you qualify for, with the full cost breakdown before you commit.',
      },
    ],
  },
  {
    slug: 'why-is-my-internet-slow-at-home',
    image: '/blog/why-is-my-internet-slow-at-home.jpg',
    title: 'Why Is My Internet So Slow at Home? 9 Ways to Fix It',
    excerpt:
      'Buffering, lag and endless loading? Here are the most common reasons your home internet is slow — and how to fix each one, from router placement to upgrading your line.',
    date: '2026-07-01',
    readMins: 6,
    category: 'Fix your internet',
    seoTitle: 'Why Is My Internet So Slow at Home? 9 Fixes That Actually Work',
    seoDescription:
      'Slow internet at home? Learn the 9 most common causes of slow WiFi — router placement, 2.4GHz vs 5GHz, too many devices — and how to fix each one.',
    keywords: [
      'why is my internet so slow',
      'how to fix slow internet',
      'slow wifi at home',
      'internet slow',
      'fix slow wifi',
    ],
    blocks: [
      {
        type: 'p',
        text: 'Few things are as frustrating as a video call that keeps freezing or a movie that buffers on movie night. The good news: most slow-internet problems at home come down to a handful of fixable causes. Work through this list and you’ll usually find the culprit.',
      },
      { type: 'h2', text: '1. Your router is in the wrong spot' },
      {
        type: 'p',
        text: 'WiFi signal weakens as it passes through walls, floors and furniture. A router tucked inside a cabinet, on the floor, or in a corner of the house will give you weak coverage everywhere else.',
      },
      {
        type: 'ul',
        items: [
          'Place the router in a central, open location',
          'Raise it off the floor — on a shelf or table',
          'Keep it away from thick walls, metal and microwaves',
        ],
      },
      { type: 'h2', text: '2. You’re on the 2.4GHz band instead of 5GHz' },
      {
        type: 'p',
        text: 'Most modern routers broadcast two bands. 2.4GHz travels further but is slower and more congested; 5GHz is much faster over shorter distances. If your device supports it, connect to the 5GHz network when you’re near the router.',
      },
      { type: 'h2', text: '3. Too many devices are online at once' },
      {
        type: 'p',
        text: 'Every phone, TV, laptop, CCTV and smart-home gadget shares your bandwidth. When several are streaming, gaming or backing up at the same time, everything slows down.',
      },
      {
        type: 'tip',
        text: 'A big household with lots of devices is the number-one reason people outgrow their plan. If you have 15+ connected devices, a higher-speed fibre plan makes a real difference.',
      },
      { type: 'h2', text: '4. WiFi interference from neighbours' },
      {
        type: 'p',
        text: 'In apartments and terrace homes, dozens of nearby routers can crowd the same WiFi channels. Switching your router to a less-crowded channel (or letting a modern WiFi 6 router auto-select one) can clear things up.',
      },
      { type: 'h2', text: '5. An old or basic router' },
      {
        type: 'p',
        text: 'A years-old router can’t keep up with today’s devices no matter how fast your line is. A modern WiFi 6 router handles more devices at once and delivers stronger, more stable speeds.',
      },
      { type: 'h2', text: '6. WiFi dead zones in a big home' },
      {
        type: 'p',
        text: 'If some rooms are always weak, one router simply can’t cover the whole house. A mesh WiFi system uses multiple units to blanket every corner with a strong signal.',
      },
      { type: 'h2', text: '7. Background apps and updates' },
      {
        type: 'p',
        text: 'Automatic phone backups, game downloads and system updates quietly eat bandwidth. Schedule big downloads for overnight, and pause cloud backups during video calls.',
      },
      { type: 'h2', text: '8. Your plan is too slow for your usage' },
      {
        type: 'p',
        text: 'Sometimes the problem isn’t your setup — it’s the speed you’re paying for. Streaming 4K, working from home and gaming all at once needs headroom. If you’re on an old 30–100Mbps plan, upgrading to 300Mbps or more is often the simplest fix.',
      },
      { type: 'h2', text: '9. You’re on wireless instead of fibre' },
      {
        type: 'p',
        text: 'Fixed fibre delivers far more consistent speeds than shared wireless connections, especially at peak hours and in bad weather. If reliability matters, a Home Fibre line is the upgrade that fixes slow internet for good.',
      },
      { type: 'h2', text: 'Still slow after all that?' },
      {
        type: 'p',
        text: 'If you’ve tried the fixes above and your internet still can’t keep up, it may be time for faster, more reliable fibre. Maxis Home Fibre comes with a free WiFi 6 router, unlimited internet and a free Home WiFi analysis to make sure every room is covered. WhatsApp us and we’ll check what’s available at your address.',
      },
    ],
  },
  {
    slug: 'wifi-coverage-weak-in-some-rooms',
    image: '/blog/wifi-coverage-weak-in-some-rooms.jpg',
    title: 'WiFi Weak in Some Rooms? How Coverage Affects Your Speed',
    excerpt:
      'Fast internet near the router but weak upstairs or in the bedroom? Here’s how WiFi coverage works, what causes dead zones, and how mesh WiFi fixes it.',
    date: '2026-06-24',
    readMins: 5,
    category: 'WiFi coverage',
    seoTitle: 'WiFi Weak in Some Rooms? Fix WiFi Coverage & Dead Zones',
    seoDescription:
      'Why is your WiFi strong in one room and weak in another? Learn what causes WiFi dead zones and how mesh WiFi and a WiFi 6 router improve whole-home coverage.',
    keywords: [
      'wifi coverage',
      'weak wifi signal',
      'wifi dead zones',
      'wifi not reaching upstairs',
      'mesh wifi',
    ],
    blocks: [
      {
        type: 'p',
        text: 'You pay for fast internet, but the speed you actually get depends heavily on WiFi coverage — how well the signal reaches each room. A strong line means little if the signal can’t make it to your bedroom or upstairs office.',
      },
      { type: 'h2', text: 'Why WiFi is strong in some rooms and weak in others' },
      {
        type: 'p',
        text: 'WiFi is a radio signal, and it fades the further it travels — especially through obstacles. The most common coverage killers are:',
      },
      {
        type: 'ul',
        items: [
          'Thick concrete walls and multiple floors',
          'Metal, mirrors and large appliances',
          'Long, narrow layouts and homes over 1,500 sq ft',
          'A router placed at one end of the house',
        ],
      },
      { type: 'h2', text: 'The difference between speed and coverage' },
      {
        type: 'p',
        text: 'Speed is how fast data can travel on your line. Coverage is how far a usable signal reaches. You can have a 1Gbps plan and still get slow WiFi in the far bedroom if coverage is poor. Fixing coverage is often what actually solves “slow internet”.',
      },
      {
        type: 'tip',
        text: 'A quick test: run a speed test standing next to the router, then again in the weak room. A big drop points to a coverage problem, not a slow line.',
      },
      { type: 'h2', text: 'How to improve WiFi coverage' },
      {
        type: 'ul',
        items: [
          'Move the router to a central, elevated, open spot',
          'Upgrade to a modern WiFi 6 router for stronger, smarter signal',
          'Add a mesh WiFi system to blanket the whole home',
          'Reduce interference by choosing a clearer channel',
        ],
      },
      { type: 'h2', text: 'Why mesh WiFi is the real fix for big homes' },
      {
        type: 'p',
        text: 'A single router can only do so much. Mesh WiFi uses several units placed around your home that work as one seamless network — so you stay connected at full speed as you move from room to room, with no dead zones and no switching networks.',
      },
      { type: 'h2', text: 'Get whole-home coverage with Maxis Home Fibre' },
      {
        type: 'p',
        text: 'Every Maxis Home Fibre plan includes a free WiFi 6 router and a free Home WiFi analysis, and higher-speed plans can add mesh units for full coverage. WhatsApp us your home size and layout and we’ll recommend the right setup — then check coverage at your address.',
      },
    ],
  },
  {
    slug: 'home-fibre-vs-home-wifi',
    image: '/blog/home-fibre-vs-home-wifi.jpg',
    title: 'Home Fibre vs Home 5G WiFi: Which Is Right for You?',
    excerpt:
      'Fixed fibre or wireless 5G home internet? We compare speed, reliability, installation and price so you can choose the right home broadband.',
    date: '2026-06-17',
    readMins: 5,
    category: 'Choosing a plan',
    seoTitle: 'Home Fibre vs Home 5G WiFi: Which Home Internet Is Best?',
    seoDescription:
      'Fibre vs wireless 5G home internet — compare speed, stability, installation and price. See which home broadband is the better fit for your household.',
    keywords: [
      'home fibre vs home wifi',
      'fibre vs wireless broadband',
      'fibre vs 5g home internet',
      'best home internet',
      'wireless broadband',
    ],
    blocks: [
      {
        type: 'p',
        text: 'When you’re setting up home internet, the two main options are fixed Home Fibre and wireless Home 5G WiFi. Both can be great — the right choice depends on your address, your usage and how much reliability matters to you.',
      },
      { type: 'h2', text: 'How they work' },
      {
        type: 'p',
        text: 'Home Fibre runs a physical fibre-optic cable into your home for a dedicated, stable connection. Home 5G WiFi connects wirelessly over the mobile 5G network using a plug-and-play router — no cables to install.',
      },
      { type: 'h2', text: 'Speed and reliability' },
      {
        type: 'p',
        text: 'Fibre generally wins on consistency. Because the line is dedicated to your home, speeds stay stable even at peak hours and in bad weather. Wireless speeds can vary with signal strength, congestion and distance from the tower.',
      },
      {
        type: 'tip',
        text: 'If you work from home, stream 4K or game online, fibre’s stability is usually worth it. For lighter use or a temporary home, wireless can be perfect.',
      },
      { type: 'h2', text: 'Installation and setup' },
      {
        type: 'ul',
        items: [
          'Home Fibre: a technician installs the line — usually within a few working days',
          'Home 5G WiFi: plug the router in and you’re online in minutes',
        ],
      },
      { type: 'h2', text: 'When to choose each' },
      {
        type: 'ul',
        items: [
          'Home Fibre is the best choice for a stable, high-speed connection in a busy household',
          'Wireless 5G home internet can be a stop-gap if fibre isn’t available at your address yet',
        ],
      },
      { type: 'h2', text: 'Our recommendation' },
      {
        type: 'p',
        text: 'For most homes, fibre is the better long-term choice — more stable, higher speeds and unlimited data. Maxis Home Fibre starts from RM89/mth with a free WiFi 6 router, free installation and unlimited internet. WhatsApp us and we’ll check whether fibre is available at your address and recommend the right plan.',
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
