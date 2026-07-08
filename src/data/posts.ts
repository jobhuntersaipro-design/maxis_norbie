import type { Post } from '@/types/post'

/**
 * Home Fibre guides — SEO content. Hand-maintained.
 * Targets high-intent home-internet search queries and funnels to WhatsApp.
 */
export const posts: Post[] = [
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
          'Choose Home Fibre for the most stable, high-speed connection for a busy household',
          'Choose Home 5G WiFi if fibre isn’t available yet, or you need internet fast with no installation',
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
