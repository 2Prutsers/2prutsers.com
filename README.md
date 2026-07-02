# 2Prutsers.com

Static [Next.js](https://nextjs.org) site for `2prutsers.com`, configured for
GitHub Pages with a custom apex domain.

## Local development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Static export

```bash
pnpm build
```

The production static site is generated in `out/`.

## GitHub Pages setup

1. Push this repository to GitHub with `main` as the default branch.
2. In GitHub, open **Settings -> Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Confirm the custom domain is `2prutsers.com`.
5. Enable **Enforce HTTPS** after GitHub finishes issuing the certificate.

The `public/CNAME` file is included in the static export so GitHub Pages keeps
the custom domain during deployments.

## DNS records

At your DNS provider, point the apex domain `2prutsers.com` to GitHub Pages:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

For `www.2prutsers.com`, add:

```text
CNAME www   <your-github-username>.github.io
```

Then add `www.2prutsers.com` as an alternate domain or redirect it at your DNS
provider, depending on the behavior you want.

--
2 prutsers
