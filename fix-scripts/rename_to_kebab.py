import os
import re
import argparse

def to_kebab_case(name):
    """Convert a name to kebab-case."""
    name = re.sub(r'[^a-zA-Z0-9]', '-', name)  # Replace non-alphanumeric chars with '-'
    name = re.sub(r'-+', '-', name)  # Remove multiple consecutive '-'
    return name.lower().strip('-')

def rename_items_in_folder(folder):
    """Recursively rename all files and folders in the given folder to kebab-case."""
    for root, dirs, files in os.walk(folder, topdown=False):
        # Rename files
        for filename in files:
            if filename == '_category_.json':
                continue
            old_path = os.path.join(root, filename)
            new_filename = to_kebab_case(os.path.splitext(filename)[0]) + os.path.splitext(filename)[1].lower()
            new_path = os.path.join(root, new_filename)
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f'Renamed file: {filename} -> {new_filename}')
        
        # Rename directories
        for dirname in dirs:
            old_path = os.path.join(root, dirname)
            new_dirname = to_kebab_case(dirname)
            new_path = os.path.join(root, new_dirname)
            if old_path != new_path:
                os.rename(old_path, new_path)
                print(f'Renamed folder: {dirname} -> {new_dirname}')

def main():
    parser = argparse.ArgumentParser(description='Recursively rename files and folders in a directory to kebab-case.')
    parser.add_argument('folder', type=str, help='Path to the folder')
    args = parser.parse_args()
    
    if not os.path.isdir(args.folder):
        print(f'Error: {args.folder} is not a valid directory')
        return
    
    rename_items_in_folder(args.folder)
    print('Renaming completed.')

if __name__ == '__main__':
    main()
