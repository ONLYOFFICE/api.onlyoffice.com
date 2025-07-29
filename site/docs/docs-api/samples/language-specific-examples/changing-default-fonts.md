---
sidebar_position: -1
---

# Changing the default font

To change the default font for all new documents created within the ONLYOFFICE Docs [test examples](language-specific-examples.md), modify the existing document templates:

1. Navigate to the folder containing the document templates. The path to this folder depends on the programming language of the test example:

   - **.Net (C# MVC)** - *assets/document-templates/new*
   - **.Net (C#)** - *assets/document-templates/new*
   - **Go** - *static/assets/document-templates/new*
   - **Java** - *src/main/resources/assets/document-templates/new*
   - **Java Spring** - *src/main/resources/assets/document-templates/new*
   - **Node.js** - *public/assets/document-templates/new*
   - **PHP** - *assets/document-templates/new*
   - **PHP (Laravel)** - *public/assets/document-templates/new*
   - **Python** - *assets/document-templates/new*
   - **Ruby** - *assets/document-templates/new*

2. Open the template for the required editor type (*new.docx*, *new.xlsx*, *new.pptx*, or *new.pdf*) in ONLYOFFICE Desktop Editors and adjust the font name and/or size.

3. Save the file.

After that, all new documents will be created with the specified font.

## Known issues

When editing or opening documents in ONLYOFFICE Docs, the platform uses a predefined list of fonts available on the server. Here’s how font substitution works:

- **Pre-installed fonts**: ONLYOFFICE Docs comes with a default set of open-source fonts.
- **Font substitution**: If a document contains proprietary fonts (e.g., created in Word), ONLYOFFICE Docs uses internal heuristics to find and apply the closest matching font.
- **Templates compatibility**: This mechanism ensures that templates created in external software remain visually consistent when opened in ONLYOFFICE Docs, even without exact font matches.

### How to update the list of available fonts

To use your own or additional fonts:

1. Install fonts to your server where ONLYOFFICE Docs is running.
2. Regenerate the font cache to make them available inside the editors.

Follow this guide: [Install additional fonts in ONLYOFFICE Docs](https://helpcenter.onlyoffice.com/docs/installation/docs-community-install-fonts-linux.aspx)