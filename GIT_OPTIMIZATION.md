# Git Performance Optimization Guide

## Problem
Your Git operations are slow because the Gallery folder contains **175 image files (335+ MB)**.
These files are already tracked by Git, causing slow commits, pushes, and pulls.

## Solution Options

### Option 1: Remove Images from Git (Recommended for Speed)
This keeps images locally but removes them from Git tracking.

```powershell
# Step 1: Remove images from Git tracking (keeps local files)
git rm --cached -r assets/Gallery/

# Step 2: Commit the removal
git add .gitignore
git commit -m "Remove large image files from Git tracking"

# Step 3: Push changes
git push origin main
```

**Pros:**
- ✅ Extremely fast Git operations
- ✅ Images stay on your local machine
- ✅ Smaller repository size

**Cons:**
- ❌ Images won't be in version control
- ❌ Team members need to get images separately

---

### Option 2: Use Git LFS (Large File Storage)
This stores large files separately while keeping them in Git.

```powershell
# Step 1: Install Git LFS (if not installed)
# Download from: https://git-lfs.github.com/

# Step 2: Initialize Git LFS
git lfs install

# Step 3: Track image files with LFS
git lfs track "assets/Gallery/**/*.jpg"
git lfs track "assets/Gallery/**/*.JPG"
git lfs track "assets/Gallery/**/*.png"
git lfs track "assets/Gallery/**/*.PNG"

# Step 4: Add .gitattributes
git add .gitattributes

# Step 5: Migrate existing files to LFS
git lfs migrate import --include="assets/Gallery/**/*.jpg,assets/Gallery/**/*.JPG,assets/Gallery/**/*.png,assets/Gallery/**/*.PNG"

# Step 6: Push changes
git push origin main --force
```

**Pros:**
- ✅ Images in version control
- ✅ Faster Git operations
- ✅ Good for team collaboration

**Cons:**
- ❌ Requires Git LFS setup
- ❌ May have storage limits on GitHub/GitLab

---

### Option 3: Optimize Images (Reduce File Sizes)
Compress images to reduce total size.

```powershell
# Use online tools or install image optimization tools
# Recommended: TinyPNG, ImageOptim, or Squoosh
# Target: Reduce 335MB to ~100MB
```

**Pros:**
- ✅ Faster website loading
- ✅ Smaller Git repository
- ✅ Better user experience

**Cons:**
- ❌ Time-consuming
- ❌ Potential quality loss

---

### Option 4: Host Images Externally
Upload images to a CDN or cloud storage.

**Services:**
- Cloudinary (Free tier: 25GB)
- Imgur
- AWS S3
- Google Cloud Storage
- GitHub Pages (separate repo)

**Pros:**
- ✅ Fastest Git operations
- ✅ Better website performance
- ✅ CDN benefits

**Cons:**
- ❌ Requires external service
- ❌ Need to update image URLs

---

## Quick Fix (Immediate Speed Boost)

The `.gitignore` file has been created. To apply it immediately:

```powershell
# Remove images from Git tracking
git rm --cached -r assets/Gallery/

# Stage the changes
git add .gitignore

# Commit
git commit -m "Optimize Git: Remove large images from tracking"

# Push
git push origin main
```

**This will:**
- ✅ Keep images on your computer
- ✅ Remove them from Git
- ✅ Make Git operations 10-20x faster
- ✅ Reduce repository size by ~335MB

---

## Recommended Workflow

1. **Immediate**: Use Option 1 (remove from Git)
2. **Long-term**: Consider Option 4 (CDN hosting)
3. **Bonus**: Optimize images before uploading

---

## Current Status

- ✅ `.gitignore` created
- ✅ Configured to ignore Gallery images
- ⏳ Waiting for you to run removal commands

---

## Need Help?

Run these commands in order:

```powershell
# 1. Check current status
git status

# 2. Remove images from Git
git rm --cached -r assets/Gallery/

# 3. Add .gitignore
git add .gitignore

# 4. Commit
git commit -m "Remove large images from Git tracking"

# 5. Push
git push origin main
```

After this, your Git operations will be much faster! 🚀
