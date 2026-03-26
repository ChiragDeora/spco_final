# SPCO Sanity Studio

Content management for SPCO Hardware Hub products.

## Setup

1. Create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage)
2. Copy the project ID
3. Create `.env` in this folder:
   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```
4. Add the same project ID to the main app's `.env`:
   ```
   VITE_SANITY_PROJECT_ID=your-project-id
   VITE_SANITY_DATASET=production
   ```

## Run

```bash
npm run dev
```

Studio runs at http://localhost:3333

## Deploy

```bash
npm run deploy
```

Deploys to sanity.io (free hosting).
