# Deploy to Netlify

Static site + serverless contact form (email only, no database). Free tier.

## 1. Connect repo

- [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
- Connect your Git provider and select this repo

## 2. Build (from `netlify.toml`)

- **Build command:** `npm run build:client`
- **Publish directory:** `dist/public`
- **Functions directory:** `netlify/functions`

## 3. Environment variables

In **Site settings → Environment variables**, add:

| Name            | Value                    | Notes                          |
|-----------------|--------------------------|--------------------------------|
| `EMAIL_USER`    | `akjeyamtraders6@gmail.com` | Gmail address (or your own)   |
| `EMAIL_PASSWORD`| *(Gmail App Password)*   | [Create one](https://myaccount.google.com/apppasswords) for Gmail |

## 4. Deploy

Push to your connected branch; Netlify will build and deploy. The contact form posts to `/.netlify/functions/send-inquiry`, which sends two emails (company + customer) and does **not** store anything.
