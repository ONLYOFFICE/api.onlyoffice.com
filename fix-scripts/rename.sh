#!/bin/bash

# Find all index.md files recursively and process them
find . -type f -name 'index.md' | while read -r file; do
  # Get the directory containing the file
  dir=$(dirname "$file")
  # Get the base name of the directory
  base=$(basename "$dir")
  
  # Check the number of files in the directory
  if [[ $(find "$dir" -type f | wc -l) -eq 1 ]]; then
    # If the directory contains only one file, rename and move it
    parent_dir=$(dirname "$dir")
    if [[ "$parent_dir" != "$dir" ]]; then
      mv "$file" "$parent_dir/$base.md"
      rmdir "$dir"  # Remove the now-empty directory
    else
      echo "Skipping $file: No valid parent directory to move to."
    fi
  else
    # If the directory contains more than one file, rename in place
    mv "$file" "$dir/$base.md"
  fi
done
