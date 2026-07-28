# Dalton Malmin — academic website

A lightweight academic website for GitHub Pages, with a centered homepage,
a Research page, and a CV page. It uses plain HTML, CSS, and a few lines of
JavaScript, so no build step or framework is required.

## Before publishing

1. Add a square or portrait-oriented headshot at `assets/profile.jpg`.
   The site automatically shows the `DM` monogram until that file exists.
2. Add your current CV at `files/cv.pdf`.
3. Read the homepage biography in `index.html` and edit it if desired.
4. Read the paper description and abstract in `research/index.html`.
5. If you publish a draft or slides, uncomment and update the resource-link
   example near the bottom of `research/index.html`.

Recommended portrait size: at least 800 × 800 pixels. The site crops it to a
circle automatically.

## Publish at daltonmalmin.github.io

The repository must be named exactly `daltonmalmin.github.io` and must belong
to the GitHub account `daltonmalmin`.

1. Extract the bundle and place these files at the repository root.
2. Commit the files and push them to the `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select **main** and **/(root)**, then save.

GitHub will publish the site at <https://daltonmalmin.github.io/>. A custom
domain is not required.

## File map

```text
index.html                 Home page
research/index.html        Research page
cv/index.html              CV viewer
assets/styles.css          Colors, type, and layout
assets/profile.jpg         Your photo (you add this)
files/cv.pdf               Your CV (you add this)
```
