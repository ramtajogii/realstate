export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  body: string[]
}

// Sample content — placeholder copy for the blog layout, not published editorial.
export const blogPosts: BlogPost[] = [
  {
    slug: 'buying-your-first-home-in-varanasi',
    title: 'Buying Your First Home in Varanasi: A Practical Checklist',
    excerpt:
      'From shortlisting a locality to the day you collect your keys, here is the sequence most first-time buyers in Varanasi follow — and the steps that are easiest to skip by mistake.',
    category: 'Buyer Guide',
    date: '2026-07-18',
    readTime: '6 min read',
    author: 'DALAN Builders',
    image: '/samriddhi/samridhi.png',
    body: [
      'Buying a first home is rarely a single decision. It is a sequence of smaller ones — where to live, what to borrow, which builder to trust — and the order you take them in changes how much room you leave yourself to negotiate.',
      'Start with the locality rather than the listing. A flat that looks excellent on paper can still mean a forty-minute commute on Ring Road at 9am. Spend a weekday morning and a Sunday evening in the area before you shortlist anything: traffic, water supply, distance to schools and hospitals, and how the approach road behaves after heavy rain.',
      'Get your loan eligibility confirmed in writing before you fall in love with a property. Knowing your sanctioned amount turns a vague budget into a firm ceiling, and it lets you negotiate as a buyer who can actually close.',
      'Ask for the approvals folder early — layout sanction, commencement certificate, and the title chain. A builder who is comfortable handing these over on the first visit is telling you something useful about the rest of the process.',
      'Finally, budget beyond the sticker price. Registration, stamp duty, parking, and the interior work you will inevitably want typically add a meaningful percentage on top of the quoted figure. Planning for it up front is far less stressful than discovering it at registration.',
    ],
  },
  {
    slug: 'why-ring-road-varanasi-is-growing',
    title: 'Why the Ring Road Corridor Is Reshaping Varanasi Real Estate',
    excerpt:
      'Improved connectivity has quietly moved the centre of gravity for new residential development. Here is what is driving demand along the Ring Road corridor.',
    category: 'Market Insight',
    date: '2026-07-04',
    readTime: '5 min read',
    author: 'DALAN Builders',
    image: '/avenue/avenue.png',
    body: [
      'For years, buyers looking for space in Varanasi had to accept a trade-off: either stay close to the city and pay a premium for a smaller home, or move far enough out that the daily commute became the defining feature of the week.',
      'The Ring Road corridor has softened that trade-off. Journey times to the airport, Sarnath, and the older parts of the city have compressed enough that plots and duplexes which once felt peripheral now sit within a comfortable drive of everything a family needs.',
      'What follows connectivity is infrastructure. Schools, clinics, and daily retail tend to arrive within a few years of a road opening up, and that arrival is usually when land values re-rate rather than when the road itself is finished.',
      'For buyers, the practical implication is timing. The window where a corridor has the road but not yet the full complement of amenities is generally the window where pricing is most reasonable.',
      'That said, corridors do not develop evenly. Two plots a kilometre apart can have quite different prospects depending on which side of an arterial junction they sit on. Local specifics still matter more than the headline story.',
    ],
  },
  {
    slug: 'plot-versus-ready-duplex',
    title: 'Plot or Ready Duplex: Which Actually Suits You?',
    excerpt:
      'Both routes get you a home. They differ in timeline, financing, and how much of your own attention the project will need over the next two years.',
    category: 'Buyer Guide',
    date: '2026-06-21',
    readTime: '7 min read',
    author: 'DALAN Builders',
    image: '/shaubhagyam/shubhagyam.png',
    body: [
      'A plot gives you control. You decide the layout, the materials, and the pace of construction, and you can phase the spend across several years instead of committing to it all at once.',
      'That control has a cost, and the cost is mostly your time. Supervising construction is a genuine part-time job — approvals, contractors, material deliveries, and the inevitable mid-project decisions all land on you.',
      'A ready duplex inverts the equation. The timeline is short and predictable, home loan financing is generally more straightforward, and you can see precisely what you are buying before you commit. What you give up is the ability to change the fundamentals.',
      'Financing is often the deciding factor in practice. Construction-linked lending for a self-built home works differently from a standard home loan on a completed unit, and the difference in how funds are released can matter more than the headline interest rate.',
      'A reasonable rule of thumb: if you have a clear design vision and the bandwidth to supervise, a plot rewards you. If you need to move within a year, a completed home is usually the better decision even at a slightly higher cost per square foot.',
    ],
  },
  {
    slug: 'reading-a-floor-plan',
    title: 'How to Read a Floor Plan Before You Visit the Site',
    excerpt:
      'A floor plan tells you more than room count. Learning to read circulation, light, and wall thickness saves wasted site visits.',
    category: 'Design',
    date: '2026-06-09',
    readTime: '4 min read',
    author: 'DALAN Builders',
    image: '/samriddhi/samridhiplan.png',
    body: [
      'Most buyers read a floor plan as a list of rooms and their dimensions. That is the least informative thing a plan contains.',
      'Start with circulation — the path you would walk from the entrance to the kitchen, and from a bedroom to the bathroom at night. Plans where those paths cut through living space tend to feel cramped regardless of the total area.',
      'Then look at where windows sit relative to the compass. A bedroom with west-facing glazing and no shading will run noticeably warmer through summer afternoons than the same room facing north.',
      'Wall thickness is worth a glance too. Thicker lines usually indicate structural walls, which tells you which partitions could be reconfigured later and which are load-bearing and effectively permanent.',
      'Finally, check the furniture drawn into the plan against real dimensions. Renderings sometimes show a bed or dining table at a slightly generous scale, and measuring one against the stated room size is a quick reality check.',
    ],
  },
  {
    slug: 'documents-to-verify-before-you-pay',
    title: 'Six Documents to Verify Before You Pay Any Advance',
    excerpt:
      'Most property disputes trace back to a document nobody checked. These are the ones worth insisting on before money changes hands.',
    category: 'Legal',
    date: '2026-05-27',
    readTime: '6 min read',
    author: 'DALAN Builders',
    image: '/Shivdhara/shivdhara.png',
    body: [
      'Verification is unglamorous and it is the single highest-return hour you will spend on a property purchase.',
      'The title deed establishes that the seller owns what they are selling. Trace the chain back far enough to be confident there is no gap, and have a lawyer read it rather than relying on a summary.',
      'An encumbrance certificate shows whether the property carries an existing loan or legal charge. It is inexpensive to obtain and it surfaces problems that are otherwise invisible until registration.',
      'The approved layout and building plan confirm that what has been built matches what was sanctioned. Deviations are common and not always serious, but you want to know about them before you own them.',
      'For completed construction, the occupancy or completion certificate matters for utility connections and for resale later. Property tax receipts and, where applicable, a no-objection certificate from the relevant authority round out the set.',
      'None of this replaces professional advice. Treat this as the list you bring to your lawyer, not a substitute for one.',
    ],
  },
  {
    slug: 'what-to-inspect-at-handover',
    title: 'What to Inspect on Handover Day',
    excerpt:
      'The walkthrough before you accept keys is your last easy opportunity to get things corrected. A methodical hour pays for itself.',
    category: 'Ownership',
    date: '2026-05-12',
    readTime: '5 min read',
    author: 'DALAN Builders',
    image: '/apartments/dalanparadise_interior.png',
    body: [
      'Handover tends to be an emotional day, which is exactly why it helps to arrive with a written list instead of trusting your judgement in the moment.',
      'Test every electrical point rather than sampling a few. Carry a phone charger and a small appliance and work through the switchboards room by room, including the ones behind furniture positions you plan to use.',
      'Run the taps and check drainage at the same time. Fill a basin and watch how quickly it clears; slow drainage found on day one is a builder problem, and the same issue found six months later becomes yours.',
      'Open and close every window and door through its full travel. Alignment issues are cheap to correct while the contractor is still on site and irritating to live with afterwards.',
      'Photograph anything you want addressed, list it in writing, and get the list acknowledged before you sign the acceptance. A shared record removes ambiguity from the follow-up conversation.',
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
