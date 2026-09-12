# Shopwovenart

A custom-coded e-commerce site for Shopwovenart — hand-crocheted throw
pillows and blankets. Built with Next.js (App Router) and Tailwind CSS,
with Paystack for checkout.

## What's included

- **Homepage** — hero, featured products, "how it's made" process, journal preview
- **Shop** (`/shop`) — full catalog with category filters
- **Product pages** (`/product/[slug]`) — size selection, add to bag / buy now
- **Cart** (`/cart`) — persisted in the browser (localStorage)
- **Checkout** (`/checkout`) — delivery details form + Paystack inline payment
- **Journal / blog** (`/blog`, `/blog/[slug]`) — three starter posts
- **Contact** (`/contact`) — working form, currently logs to the server console

## Getting started

```bash
npm install
cp .env.local.example .env.local
# then edit .env.local with your real Paystack keys
npm run dev
```

Visit http://localhost:3000.

## Setting up Paystack

1. Create a Paystack account at https://dashboard.paystack.com if you don't
   have one, and get your API keys from **Settings → API Keys & Webhooks**.
2. Put your **public key** in `.env.local` as `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`.
3. Put your **secret key** in `.env.local` as `PAYSTACK_SECRET_KEY` — this
   one is only used server-side, in `app/api/paystack/verify/route.js`, and
   must never be exposed to the browser.
4. Start with your **test** keys (`pk_test_...` / `sk_test_...`) and switch
   to live keys only once you've placed a few test orders successfully.
5. For production, it's worth also setting up a Paystack **webhook**
   pointing at your own API route, as a backup confirmation in case a
   customer closes their browser right after paying — the current setup
   verifies the payment when the browser calls back, which covers the
   normal case but a webhook is the more robust pattern long-term.

## Adding real products

Edit `lib/products.js`. Each product needs a unique `slug`, a category,
one or more `sizes` (each with its own price in Naira), and at least one
image path under `public/images/`. The two sample photos you provided are
already in `public/images/` and used for the granny-square and pillow-stack
products — swap in real photography for each item as you shoot it.

## Adding blog posts

Edit `lib/blogPosts.js` — each post is a plain object with a `body` array
of paragraphs. No CMS is wired up yet; if you'd like non-technical editing
later, this is the piece to swap for something like Sanity or a simple
Markdown-file setup.

## Wiring up the contact form and newsletter

Both `app/api/contact/route.js` and `components/Newsletter.js` are working
stubs — the contact form currently logs to the server console instead of
sending an email, and the newsletter signup just shows a success message.
Wire the contact route up to an email service (Resend, Postmark, or SMTP)
and the newsletter form to your mailing list provider (Mailchimp, Klaviyo,
Beehiiv) before launch.

## Deploying

The easiest path is [Vercel](https://vercel.com), which Next.js is built
by the same team as:

1. Push this project to a GitHub repository.
2. Import it at vercel.com — it will detect Next.js automatically.
3. Add your two Paystack environment variables (and any email/newsletter
   keys) in the Vercel project's **Settings → Environment Variables**.
4. Deploy. Add your custom domain under **Settings → Domains** once you're
   ready to point shopwovenart.com (or your chosen domain) at it.

## Notes on what's mocked vs. real

- **Cart**: real, browser-persisted state — no backend needed.
- **Payment**: real Paystack integration (inline popup + server-side
  verification). You need your own Paystack account and keys.
- **Orders**: not yet saved anywhere permanent. The `TODO` in
  `app/api/paystack/verify/route.js` is where you'd write a confirmed
  order to a database (e.g. Supabase, or even a Google Sheet via API) and
  trigger a confirmation email.
- **Blog and product content**: static, in `lib/`. No CMS — fine at this
  size, worth upgrading once you're publishing frequently or want a
  non-technical person to add products.
