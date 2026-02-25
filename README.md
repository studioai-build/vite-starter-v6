# 🚨 CRITICAL CONFIGURATION & STYLE FILES

## MANDATORY READING BEFORE ANY MODIFICATION

> ❗ This repository contains **mission-critical configuration and styling files**.  
> These files directly affect the build system, asset loading, module federation,
> and runtime behavior in production.
>
> **Unauthorized changes WILL break the application.**

This document defines **non-negotiable rules** for modifying these files.

---

## 📌 SCOPE

This document applies to **ALL contributors**, including:

- Core maintainers
- Feature developers
- UI / Platform engineers
- External contractors
- Automation or AI-assisted changes

If you modify any file listed here, **you are responsible for following these rules**.

---

## 🧠 WHY THESE RULES EXIST

These files are foundational to:

- Tailwind CSS compilation
- Design token & theming consistency
- PostCSS execution pipeline
- Vite build system
- Module Federation (remote / host apps)
- Environment-based asset resolution
- Production deployment stability

Small or “harmless” changes can:

- Break builds only in production
- Cause remote modules to fail loading
- Introduce silent UI regressions
- Be extremely difficult to debug or roll back

---

## 🔒 CRITICAL FILE CATEGORIES

---

## 1️⃣ Global Styles / Theme / Tailwind Core Files

**Examples (non-exhaustive):**

- `globals.css`
- `theme.css`
- Any CSS file containing:
  - `@import 'tailwindcss'`
  - `@theme { ... }`
  - `@layer base { ... }`
  - Design tokens (CSS variables)
  - Core utility overrides

### 🚫 STRICT RULES

You **MUST NOT**:

- Remove any existing line
- Rename variables
- Change selectors
- Change or remove at-rules
- Reorder declarations
- Add or remove properties
- Refactor structure or formatting

### ✅ ONLY PERMITTED CHANGE

You **MAY ONLY**:

- Change **COLOR VALUES**
  - `#hex`
  - `rgb() / rgba()`
  - `hsl()`

⚠️ Variable names, property names, order, and structure **MUST remain unchanged**.

---

## 2️⃣ PostCSS Configuration

**Examples:**

- `postcss.config.js`
- `postcss.config.mjs`

```js
export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}

## 4️⃣ Package Dependencies (`package.json`)

**File:**
- `package.json`

This file defines **critical build-time dependencies** required for Tailwind CSS,
PostCSS, and the styling pipeline to function correctly.

### 🔒 REQUIRED DEV DEPENDENCIES (MANDATORY)

The following packages **MUST ALWAYS be present** in `devDependencies`
with **compatible versions**:

```json
{
  "postcss": "^8.4.35",
  "@tailwindcss/postcss": "^4.1.11",
  "tailwindcss": "^4.1.11"
}

  ⚠️ CRITICAL PACKAGE CONTRACT – DO NOT MODIFY STRUCTURE ⚠️

  This package.json defines REQUIRED runtime and build-time dependencies
  for the application, build pipeline, and Module Federation setup.

  ❌ DO NOT:
  - Remove existing dependencies or devDependencies
  - Rename package fields (name, type, private, scripts, etc.)
  - Move dependencies between sections
  - Change module type or package name
  - Downgrade or replace critical tooling
  - Reorder or restructure the file

  ✅ ALLOWED CHANGE (STRICT):
  - ONLY add new dependencies when absolutely required
  - Version upgrades ONLY if backward-compatible and approved

  REQUIRED devDependencies that MUST always exist:
  - postcss
  - @tailwindcss/postcss
  - tailwindcss

  Any unauthorized change may cause:
  - Build or install failures
  - Broken Tailwind / PostCSS pipeline
  - Module Federation incompatibility
  - Runtime crashes in host applications

  If changes beyond these rules are required, maintainer approval is mandatory.
