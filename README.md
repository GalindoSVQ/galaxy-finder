This project has been bootstrapped using [pnpm](https://pnpm.io/) and [Vite](https://vitejs.dev/)

### Overview

- ⚡️&nbsp; [Vite](https://vitejs.dev/)
- ⚛️&nbsp; [React v18](https://beta.reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- 🧪&nbsp; [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

### Coding Style

- VSCode settings & extensions recommendations
- [EditorConfig](https://editorconfig.org/)
- [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) configured (with [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier))

### Git Hooks

- [Husky](https://typicode.github.io/husky/#/)
  - [`commitlint`](https://commitlint.js.org/) @ `commit-msg`
  - [`lint-staged`](https://github.com/okonet/lint-staged) @ `precommit`
<br>

## Getting Started

### Avaible commands

> Project was built using [`pnpm`](https://pnpm.io/installation#using-npm).

#### Install

```sh
pnpm i
```

#### Dev

```sh
pnpm dev
```

#### Build


```sh
# normal build
pnpm build
```

#### Test

```sh
# without coverage
pnpm test

# with coverage
pnpm test:ci
```
#### Serve

```sh
pnpm serve
```
