#!/bin/bash

# Script to fix getSidebarTranslationFileContent function in translations.js
# This script replaces the function with the current implementation

TARGET_FILE="node_modules/@docusaurus/plugin-content-docs/lib/translations.js"

# Check if the target file exists
if [ ! -f "$TARGET_FILE" ]; then
    echo "Error: Target file not found: $TARGET_FILE"
    exit 1
fi

echo "Backing up original file..."
cp "$TARGET_FILE" "$TARGET_FILE.backup"

# Create a temporary file with the new function
cat > /tmp/new_function.txt << 'EOF'
function getSidebarTranslationFileContent(sidebar, sidebarName) {
    const categoryEntries = [];
    const linksEntries = [];
    const docLinksEntries = [];

    let path = '';
    function sidebarRecursive(item) {
        if (item.type === 'category') {
            const categoryKey = item.key ?? (path + item.label);
            categoryEntries.push([
                `sidebar.${sidebarName}.category.${categoryKey}`,
                {
                    message: item.label,
                    description: `The label for category ${item.label} in sidebar ${sidebarName}`,
                },
            ]);
            if (item.link?.type === 'generated-index') {
                if (item.link.title) {
                    categoryEntries.push([
                        `sidebar.${sidebarName}.category.${categoryKey}.link.generated-index.title`,
                        {
                            message: item.link.title,
                            description: `The generated-index page title for category ${item.label} in sidebar ${sidebarName}`,
                        },
                    ]);
                }
                if (item.link.description) {
                    categoryEntries.push([
                        `sidebar.${sidebarName}.category.${categoryKey}.link.generated-index.description`,
                        {
                            message: item.link.description,
                            description: `The generated-index page description for category ${item.label} in sidebar ${sidebarName}`,
                        },
                    ]);
                }
            }
            const prevPath = path;
            path = item.label + '.';
            item.items.forEach(sidebarRecursive);
            path = prevPath;
        } else if (item.type === 'link') {
            const linkKey = item.key ?? (path + item.label);
            linksEntries.push([
                `sidebar.${sidebarName}.link.${linkKey}`,
                {
                    message: item.label,
                    description: `The label for link ${item.label} in sidebar ${sidebarName}, linking to ${item.href}`,
                },
            ]);
        } else if ((item.type === 'doc' || item.type === 'ref') && item.translatable) {
            const docKey = item.key ?? (path + item.label);
            docLinksEntries.push([
                `sidebar.${sidebarName}.doc.${docKey}`,
                {
                    message: item.label,
                    description: `The label for the doc item ${item.label} in sidebar ${sidebarName}, linking to the doc ${item.id}`,
                },
            ]);
        }
    }

    sidebar.forEach(sidebarRecursive);

    const allEntries = [...categoryEntries, ...linksEntries, ...docLinksEntries];
    ensureNoSidebarDuplicateEntries(allEntries);
    return Object.fromEntries(allEntries);
}
EOF

# Use awk to replace the function
awk '
BEGIN { 
    in_function = 0
    function_replaced = 0
}

/^function getSidebarTranslationFileContent\(sidebar, sidebarName\)/ {
    if (!function_replaced) {
        # Read and print the new function from the temp file
        while ((getline line < "/tmp/new_function.txt") > 0) {
            print line
        }
        close("/tmp/new_function.txt")
        in_function = 1
        function_replaced = 1
        next
    }
}

in_function == 1 {
    # Skip lines until we find the closing brace of the function
    if ($0 ~ /^}$/) {
        in_function = 0
    }
    next
}

{ print }
' "$TARGET_FILE" > "$TARGET_FILE.tmp"

# Replace the original file with the modified one
mv "$TARGET_FILE.tmp" "$TARGET_FILE"

# Clean up
rm /tmp/new_function.txt

echo "Function replacement complete!"
echo "Original file backed up to: $TARGET_FILE.backup"
echo "To restore the original file, run: mv $TARGET_FILE.backup $TARGET_FILE"
