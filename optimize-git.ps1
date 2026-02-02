# Quick Git Optimization Script
# This removes large image files from Git tracking while keeping them locally

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Git Performance Optimization Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "Error: Not a Git repository!" -ForegroundColor Red
    exit 1
}

Write-Host "Current repository status:" -ForegroundColor Yellow
Write-Host ""

# Show current repo size
$repoSize = (Get-ChildItem -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Total repository size: $([math]::Round($repoSize, 2)) MB" -ForegroundColor White

# Show Gallery folder size
$gallerySize = (Get-ChildItem -Path "assets/Gallery" -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1MB
Write-Host "Gallery folder size: $([math]::Round($gallerySize, 2)) MB" -ForegroundColor White
Write-Host ""

# Ask for confirmation
Write-Host "This script will:" -ForegroundColor Yellow
Write-Host "  1. Remove Gallery images from Git tracking" -ForegroundColor White
Write-Host "  2. Keep images on your local machine" -ForegroundColor White
Write-Host "  3. Add .gitignore to prevent future tracking" -ForegroundColor White
Write-Host "  4. Commit and prepare for push" -ForegroundColor White
Write-Host ""

$confirmation = Read-Host "Do you want to continue? (yes/no)"

if ($confirmation -ne "yes") {
    Write-Host "Operation cancelled." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
Write-Host "Step 1: Removing images from Git tracking..." -ForegroundColor Green

try {
    git rm --cached -r assets/Gallery/ 2>&1 | Out-Null
    Write-Host "✓ Images removed from Git tracking" -ForegroundColor Green
} catch {
    Write-Host "✗ Error removing images" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 2: Adding .gitignore..." -ForegroundColor Green

try {
    git add .gitignore
    Write-Host "✓ .gitignore added" -ForegroundColor Green
} catch {
    Write-Host "✗ Error adding .gitignore" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Step 3: Committing changes..." -ForegroundColor Green

try {
    git commit -m "Optimize Git: Remove large images from tracking (335MB)"
    Write-Host "✓ Changes committed" -ForegroundColor Green
} catch {
    Write-Host "✗ Error committing" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Optimization Complete! 🚀" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Run: git push origin main" -ForegroundColor White
Write-Host "  2. Your Git operations will now be much faster!" -ForegroundColor White
Write-Host ""
Write-Host "Note: Images are still on your computer in assets/Gallery/" -ForegroundColor Cyan
Write-Host ""
