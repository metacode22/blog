# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The blog features posts, book reviews, logs (daily notes), and a guestbook, with all content written in MDX format.

## Package Manager

**IMPORTANT**: This project uses **pnpm** exclusively. The `preinstall` script enforces this. Never use npm or yarn.

## Common Commands

### Development

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Database

```bash
pnpm postinstall  # Generate Prisma client (runs automatically after install)
```

## Architecture

### App Router Structure

- Uses Next.js 14 App Router with a `(base)` route group for main layout
- Main routes: `/posts`, `/books`, `/logs`, `/guestbook`
- Dynamic routes: `/posts/[slug]`, `/books/[slug]`, `/logs/[slug]`
- API routes: `/api/views` (POST/GET for view tracking), `/api/guestbooks` (guestbook entries)

### Content Management

- All content lives in `src/contents/` as MDX files, organized by type:
  - `src/contents/posts/` - Blog posts
  - `src/contents/books/` - Book reviews
  - `src/contents/logs/` - Daily logs/notes
- Content metadata is defined using frontmatter (gray-matter)
- Content utilities in `src/utils/contents/` handle reading and filtering content
- Core content reading logic in `src/utils/file.ts`:
  - `getContents()` - Reads MDX files from a directory
  - Filters by `published: true` in frontmatter
  - Auto-calculates reading time
  - Returns slug, meta, content, and reading time

### MDX Processing

- Uses `next-mdx-remote` v4.4.1 for MDX serialization (specific version due to TypeScript compatibility)
- MDX configuration in `src/utils/mdx.ts` with rehype plugins:
  - `rehype-slug` - Auto-generate heading IDs
  - `rehype-autolink-headings` - Add anchor links to headings
  - `rehype-pretty-code` - Syntax highlighting (dark-plus theme)

### Database (Prisma + PostgreSQL)

- Models:
  - `Post` - Tracks view counts for posts by slug
  - `View` - Individual view records with IP deduplication
  - `Guestbook` - Guest messages
- Environment variables: `DATABASE_URL`, `DIRECT_URL`
- After schema changes, run `prisma generate` (or `pnpm install` which triggers postinstall)

### Type System

- TypeScript with strict mode enabled
- Path alias: `@/*` maps to project root
- Content types in `src/types/contents/`:
  - Separate type definitions for posts, books, logs
  - Shared types in `src/types/contents/shared/`

### Styling

- Tailwind CSS with `@tailwindcss/typography` for MDX content
- Global styles in `src/styles/globals.css`
- Uses `clsx` and `tailwind-merge` for className utilities

### Components

- Presentation components in `src/components/`
- Feature-specific components in app routes (e.g., `app/(base)/guestbook/_components/`)
- Notable utilities: `src/components/mdx.tsx` for rendering MDX content

### View Tracking

- IP-based view tracking to prevent duplicate counting
- Localhost views are excluded via `src/utils/localhost.ts`
- IP addresses are hashed using `src/utils/hash.ts` before storage
- POST to `/api/views?slug=<slug>` increments view count

## Important Notes

- The blog content is in Korean
- Remote images are allowed from `raw.githubusercontent.com` (Next.js Image optimization)
- Sitemap is auto-generated post-build via `next-sitemap`
- Uses `next-mdx-remote` which requires transpiling in `next.config.js`
