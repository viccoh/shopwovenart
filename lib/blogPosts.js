// Blog / journal content for Shopwovenart.
// Body text supports basic paragraphs — swap in real posts as they're written.

export const blogPosts = [
  {
    slug: "how-a-granny-square-is-built",
    title: "How a granny square is actually built, row by row",
    category: "The Craft",
    date: "2026-08-14",
    excerpt:
      "Every throw starts as a single square the size of a coaster. Here's what happens between that first ring and a finished blanket.",
    body: [
      "Every piece in the shop starts the same way: a magic ring, four stitches, and a join. That first round is barely the size of a coin, but it sets the tension for the whole square — pull it too tight here and the blanket won't lie flat later.",
      "From there, each round adds a new colour and a new set of corners. A lap blanket is usually thirty-six squares; a full-size throw is sixty. They're crocheted separately, blocked flat so the squares match in size, then joined edge to edge with a slip stitch seam that's meant to be invisible from the front.",
      "The last step is the border — usually three rounds worked around the whole joined piece, finished with the tassel fringe. It's the part that takes the longest and shows the least, which is a fairly accurate summary of most finishing work."
    ]
  },
  {
    slug: "choosing-a-throw-size",
    title: "Lap, sofa, or bed: choosing the right throw size",
    category: "Guides",
    date: "2026-08-02",
    excerpt:
      "The size chart on a product page doesn't tell you how a blanket will actually sit on your furniture. Here's a quicker way to decide.",
    body: [
      "A lap throw (about 100 x 130 cm) is sized for one person on one seat — it won't cover a two-seater sofa edge to edge, and that's by design. It's the size to pick if the blanket needs to fold away into a basket most of the time.",
      "A full throw (150 x 180 cm) is the one to choose for draping across the back of a sofa or the foot of a bed. It'll cover two adults sitting side by side, with enough drop on each side to look intentional rather than stretched.",
      "If you're between sizes, size up. A throw that's slightly too generous still folds and drapes well; one that's slightly too small tends to look like an accident."
    ]
  },
  {
    slug: "caring-for-handmade-crochet",
    title: "Caring for handmade crochet so it lasts",
    category: "Care",
    date: "2026-07-19",
    excerpt:
      "Hand-crocheted pieces hold up for years with the right care — and fall apart fast with the wrong kind of wash.",
    body: [
      "Machine washing is the single fastest way to shorten the life of a crocheted piece. The agitation stretches stitches unevenly, and a tumble dryer will felt natural fibres before you notice anything's wrong. Hand wash in cold water with a mild detergent instead.",
      "Dry flat, not hanging — hanging a wet blanket lets gravity pull the rows out of shape permanently. Lay it on a towel, roll to press out excess water, then reshape it flat on a dry towel out of direct sun.",
      "Store folded rather than hung for the same reason. A few minutes of care after each wash is what keeps a piece looking new after years of use, rather than after a few months."
    ]
  }
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug);
}
