# DefaultTemplateSettingsDto
The blank document the portal creates for each extension it covers.

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **items** | [**List**](default-template-item-dto.md) | One entry per extension the portal's built-in template set covers, whether or not a custom blank has been chosen for it, so the list is never empty and its length follows the template set rather than the number of custom blanks. Entries come in the order an interface shows them: text document, spreadsheet, presentation and PDF first, everything else by extension. | [required] [example: `[{fileExtension=.docx, fileTitle=Company letter.docx, selectedFile=123}]`] [nullable] |
