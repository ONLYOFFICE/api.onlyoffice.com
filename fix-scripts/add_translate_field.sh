#!/bin/bash

# Script to add translate field to LocaleConfigSchema in configValidation.js

FILE="node_modules/@docusaurus/core/lib/server/configValidation.js"

# Check if file exists
if [ ! -f "$FILE" ]; then
    echo "Error: File $FILE not found!"
    exit 1
fi

# Check if translate field already exists
if grep -q "translate: utils_validation_1.Joi.boolean()" "$FILE"; then
    echo "Translate field already exists in LocaleConfigSchema"
    echo "No changes needed"
    exit 0
fi

# Create backup
cp "$FILE" "$FILE.backup"
echo "Created backup: $FILE.backup"

# Add the translate field after baseUrl line in LocaleConfigSchema
# Using sed to insert the line before the closing brace of LocaleConfigSchema
sed -i.tmp '/const LocaleConfigSchema = utils_validation_1\.Joi\.object({/,/^});/{
    s/\(    baseUrl: BaseUrlSchema,\)/\1\
    translate: utils_validation_1.Joi.boolean(),/
}' "$FILE"

# Remove the temporary file created by sed
rm -f "$FILE.tmp"

# Verify the change was made
if grep -q "translate: utils_validation_1.Joi.boolean()" "$FILE"; then
    echo "Successfully added translate field to LocaleConfigSchema"
    echo "File modified: $FILE"
else
    echo "Warning: Could not verify if the change was applied"
    echo "Please check the file manually"
fi

echo ""
echo "To restore the original file, run: cp $FILE.backup $FILE"
