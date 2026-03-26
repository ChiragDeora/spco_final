# Sanity CMS Setup Guide

This guide walks you through connecting Sanity CMS to SPCO Hardware Hub.

## 1. Create a Sanity Account & Project

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Sign up or log in
3. Click **Create project**
4. Name it (e.g. "SPCO Hardware Hub") and choose the free plan
5. Copy your **Project ID** (e.g. `abc123xyz`)

## 2. Configure Environment Variables

### Main App (React)

Create `.env` in the project root:

```
VITE_SANITY_PROJECT_ID=your-project-id
VITE_SANITY_DATASET=production
```

### Sanity Studio

Create `sanity-studio/.env`:

```
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=production
```

Use the **same Project ID** in both files.

## 3. Run Sanity Studio

```bash
cd sanity-studio
npm install
npm run dev
```

Studio opens at **http://localhost:3333**

Log in with your Sanity account when prompted.

## 4. Add Products

1. In Sanity Studio, go to **Products**
2. Click **Create new**
3. Fill in:
   - **Product Name**
   - **Slug** (click Generate to create from name)
   - **Category** (select from dropdown)
   - **Subcategory** (optional)
   - **Product Image** (upload)
   - **Specifications** (add key-value pairs, e.g. "Inner Diameter" / "10 mm")
   - **Description**

4. Click **Publish**

## 5. Run the Website

```bash
npm run dev
```

The site will show products from Sanity when configured. Without Sanity config, it uses mock data.

## Quick Commands

| Command | Description |
|---------|-------------|
| `npm run studio` | Run Sanity Studio |
| `npm run studio:build` | Build Sanity Studio |
| `cd sanity-studio && npm run deploy` | Deploy Studio to sanity.io |

## Deploying Sanity Studio

To let the company manage content online:

```bash
cd sanity-studio
npm run deploy
```

This deploys Studio to `your-project.sanity.studio`. Share that URL with the team.
