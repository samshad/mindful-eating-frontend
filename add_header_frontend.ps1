$header = @"
// -----------------------------------------------------------------------------
// Project: Mindful Eating (React Native Frontend)
// Author: Md Samshad Rahman
// Year: 2025
// License: GNU Affero General Public License v3.0 (See LICENSE file for details)
// Description: This file is part of the Mindful Eating project.
// -----------------------------------------------------------------------------
"@

$modifiedFiles = @()

# File types to target
$extensions = @("*.js", "*.jsx", "*.ts", "*.tsx")

# Loop through all targeted files recursively
foreach ($ext in $extensions) {
    Get-ChildItem -Path . -Recurse -Include $ext -File | Where-Object {
        $_.FullName -notmatch "node_modules" -and $_.FullName -notmatch "\\build\\" -and $_.FullName -notmatch "\\.expo\\"
    } | ForEach-Object {
        $content = Get-Content $_.FullName
        if ($content -notmatch "Md Samshad Rahman") {
            Write-Host "✅ Modified: $($_.FullName)"
            $newContent = $header + "`n" + ($content -join "`n")
            Set-Content -Path $_.FullName -Value $newContent
            $modifiedFiles += $_.FullName
        } else {
            Write-Host "⏩ Skipped (already has header): $($_.FullName)"
        }
    }
}

# Summary
if ($modifiedFiles.Count -gt 0) {
    Write-Host "`n📄 Modified frontend files:"
    $modifiedFiles | ForEach-Object { Write-Host " - $_" }
} else {
    Write-Host "`n✅ No React Native files needed modification. All had header already."
}
