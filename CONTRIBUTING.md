# Contributing

Thanks for your interest in this project. This is a personal portfolio, but
issues and pull requests that improve accessibility, performance, or
correctness are welcome.

## Getting started

1. Fork and clone the repository.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Development workflow

1. Create a branch from `master`:

   ```bash
   git checkout -b feat/short-description
   ```

2. Make your changes, keeping them focused on a single concern.
3. Make sure the project still passes all checks:

   ```bash
   npm run lint
   npm run typecheck
   npm run build
   ```

4. Commit using [Conventional Commits](https://www.conventionalcommits.org/):

   ```
   feat(hero): add parallax depth on scroll
   fix(navbar): correct active link on mobile
   docs(readme): clarify setup steps
   ```

5. Push your branch and open a pull request describing the change and why it is
   needed.

## Code style

- Keep TypeScript strict-friendly: avoid `any` unless justified with a comment.
- Prefer functional React components and hooks.
- Keep Tailwind class lists readable; extend the design tokens in
  `tailwind.config.ts` instead of hardcoding new colors.
- Match the existing file and folder naming conventions.

## Reporting issues

Please use the provided issue templates. Include steps to reproduce, the
expected result, and the actual result. For security concerns, follow
[SECURITY.md](./SECURITY.md) instead of opening a public issue.
