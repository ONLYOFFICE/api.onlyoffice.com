---
sidebar_position: -2
---

# Form API

A form document has exactly the same structure as a [document](../document-api/document-api.md). The only difference is a new *forms* entity placed with other paragraph elements – text runs, inline text content controls and hyperlinks. There are seven form types: *text field*, *combo box*, *dropdown list*, *checkbox*, *radio button*, *picture form*, and *complex field*.

## Creating a new form document

To create a form document, the [CreateFile](../../../document-builder/builder-framework/CDocBuilder/CreateFile.md) method with the *"docx"* extension must be used.

To save the ready document as a form, you need to use the [SaveFile](../../../document-builder/builder-framework/CDocBuilder/SaveFile.md) method with the *"form"* format.

The simplest example form document with a single text form containing the "John Smith" text can be built with the help of **ONLYOFFICE Document Builder** using the following code:

```ts
// create a document file in the .docx format with ONLYOFFICE Document Builder
builder.CreateFile("docx");

// create a new 'oDocument' variable and get the document contents
const oDocument = Api.GetDocument();

// create an empty text form
const oTextForm = Api.CreateTextForm();

// get the first paragraph from the document
const oParagraph = oDocument.GetElement(0);

// add the created text form to the first paragraph
oParagraph.AddElement(oTextForm);

// add the "John Smith" text to the text form
oTextForm.SetText("John Smith");

// save the resulting document as a form file in the .pdf format with the 'example.pdf' name
builder.SaveFile("form", "example.pdf");

// close the file and finish work with ONLYOFFICE Document Builder
builder.CloseFile();
```

## Opening an existing form document

If you want to edit an already existing form document, you can open it using **ONLYOFFICE Document Builder**, get its elements and change them however you need. The document is opened the following way:

```ts
// use a path or URL to an existing 'myformdocument.pdf' form document file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/myformdocument.pdf");

// create a new 'oDocument' variable and get the opened form document contents
const oDocument = Api.GetDocument();

// create an empty text form
const oTextForm = Api.CreateTextForm();

// get the first paragraph from the opened document
const oParagraph = oDocument.GetElement(0);

// add the created text form to the first paragraph
oParagraph.AddElement(oTextForm);

// add the "John Smith" text to the text form
oTextForm.SetText("John Smith");

// save the resulting form document as a file in the .pdf format with the 'example.pdf' name
builder.SaveFile("form", "example.pdf");

// close the form document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile();
```

As you can see you just need to use the *builder.OpenFile* method of the [CDocBuilder](../../../document-builder/builder-framework/CDocBuilder/CDocBuilder.md) class with the path or URL to the necessary form document as an argument to open it. In the above example we open the **myformdocument.pdf** document, get its first paragraph and add the text form with the "John Smith" text to it. In the same way, any other form document element can be changed.

Use the appropriate API documentation sections to find out which methods allow you to change certain document element formatting properties.
