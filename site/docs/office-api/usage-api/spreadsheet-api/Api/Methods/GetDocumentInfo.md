# GetDocumentInfo

Returns the document information:
- **Application** - the application the document has been created with.
- **CreatedRaw** - the date and time when the file was created.
- **Created** - the parsed date and time when the file was created.
- **LastModifiedRaw** - the date and time when the file was last modified.
- **LastModified** - the parsed date and time when the file was last modified.
- **LastModifiedBy** - the name of the user who has made the latest change to the document.
- **Authors** - the persons who has created the file.
- **Title** - this property allows you to simplify your documents classification.
- **Tags** - this property allows you to simplify your documents classification.
- **Subject** - this property allows you to simplify your documents classification.
- **Comment** - this property allows you to simplify your documents classification.

## Syntax

```javascript
expression.GetDocumentInfo();
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

object

## Example

Read the document properties and display the application name in a spreadsheet.

```javascript editor-xlsx
// How do I access general document information such as the application name in a spreadsheet?

// Retrieve metadata about the current file and write it into a cell in a spreadsheet.

let docInfo = Api.GetDocumentInfo();
let range = Api.GetActiveSheet().GetRange('A1');
range.SetValue('This document has been created with: ' + docInfo.Application);
```
