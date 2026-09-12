# Shopwovenart — static HTML version

This is a plain HTML/CSS/JS version of the site — no build step, no
Node.js required. Double-click `index.html` (or open it in a browser) to
preview the whole thing locally.

This is meant for **quick preview and simple hosting**. For a production
store you'll eventually want the Next.js version instead (ask for it if
you don't have it), because a fully static site can't securely verify
Paystack payments on its own server — see the payment note below.

## Pages

- `index.html` — homepage
- `shop.html` — product catalog, filterable by category
- `product.html?slug=...` — product detail (linked from every product card)
- `cart.html` — shopping bag
- `checkout.html` — delivery details + Paystack payment
- `checkout-success.html` — order confirmation
- `blog.html` / `blog-post.html?slug=...` — journal
- `contact.html` — contact form

## Editing content

- Products: `js/products.js`
- Blog posts: `js/blogPosts.js`
- Header/footer (shown on every page): `js/layout.js`
- Colors, fonts, spacing: `css/style.css`

## Setting up Paystack

1. Get your **public key** from https://dashboard.paystack.com (Settings → API Keys & Webhooks).
2. Open `checkout.html` and replace `PAYSTACK_PUBLIC_KEY` near the top of the `<script>` with your real key.
3. Start with a **test** key (`pk_test_...`) before switching to a live one.

**Important — read before accepting real payments:** this static version
opens the Paystack popup and treats a successful callback as a paid order.
That's fine for a demo, but a determined visitor could tamper with the
amount sent to Paystack from their own browser. A production store should
verify every payment server-side with your **secret key** (which must
never appear in any file sent to the browser) before treating an order as
paid. The Next.js version of this project includes that verification step
already, in `app/api/paystack/verify/route.js` — worth moving to before
you rely on this for real sales.

## Hosting

Any static host works: drag the whole folder into
[Netlify Drop](https://app.netlify.com/drop), or push it to GitHub Pages,
Vercel, or Cloudflare Pages. No build command needed — it's ready as-is.

## What's stubbed

- **Contact form** and **newsletter signup** just show a success message
  locally — wire them to a form service (Formspree, Getform) or your own
  endpoint so messages actually arrive somewhere.
- **Orders** aren't saved anywhere; Paystack is your record of payment
  until you add order storage.
