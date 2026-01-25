# Fix Render Build Issue

## Problem
The build is failing because `esbuild` and other build tools aren't being found.

## Solution

### Option 1: Update Build Command in Render Dashboard (Recommended)

1. Go to your Render service dashboard
2. Go to **Settings** → **Build & Deploy**
3. Update the **Build Command** to:
   ```
   npm install --include=dev && npm run build
   ```
4. Click **Save Changes**
5. Manually trigger a new deploy

### Option 2: Use render.yaml (If configured)

If you're using `render.yaml`, it should automatically use:
```
npm install --include=dev && npm run build
```

Make sure `render.yaml` is in your repository root and Render is configured to use it.

### Option 3: Alternative Build Command

If the above doesn't work, try:
```
npm install && npm run build
```

This should install devDependencies by default, but explicitly including `--include=dev` ensures they're installed.

## Why This Happens

- `esbuild`, `vite`, and `tsx` are in `devDependencies`
- They're needed for the build process
- Some deployment platforms skip devDependencies by default
- Explicitly including them ensures they're available during build

## After Fixing

1. Push any changes to GitHub
2. Render will auto-deploy, or manually trigger a deploy
3. Check the build logs to confirm it succeeds

