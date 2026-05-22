---
sidebar_position: -5
---

# Document API

Although a document consists of various elements, most of them are nested in each other and three main elements can be outlined: *paragraph*, *table* and *block content control*. All the other elements are a part of these three larger ones.

The text itself can be added directly to a paragraph, block content control, inline text content control, range or table cell, which is a part of a table structure. But, for the sake of convenience (as it is always easier to work with smaller blocks than with larger ones) the text is usually divided into small text portions called *runs*. Each paragraph can consist either of only one text run or have dozens of them inside, depending on the paragraph complexity.

The text runs, in their turn, have text itself and other elements which can be a part of text: *images*, *shapes*, *charts*.

Besides the text runs, paragraphs can also contain *inline text content controls* and *hyperlinks*.

A table has a little bit more complex structure, as it comprises *table rows*, which in their turn include *table cells* within their structure. *Table cells* can have the whole *paragraph*, *table* or *block content control* structure inside them.

A block content control can also contain the *paragraph*, *table* or another *block content control* inside it.

## Creating a new document

The simplest example document with a single paragraph containing centered "Center" text can be built with the help of **ONLYOFFICE Document Builder** using the following code:

```ts
// create a document file in the .docx format with ONLYOFFICE Document Builder
builder.CreateFile("docx");

// create a new 'oDocument' variable and get the created document contents
const oDocument = Api.GetDocument();

// create a new paragraph
const oParagraph = Api.CreateParagraph();

// set the paragraph justification to center the text
oParagraph.SetJc("center");

// add a text containing a single 'Center' word to the paragraph
oParagraph.AddText("Center");

// push the created paragraph contents with the 'Center' word to the document
oDocument.Push(oParagraph);

// save the resulting document as a file in the .docx format with the 'example.docx' name
builder.SaveFile("docx", "example.docx");

// close the document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile();
```

Actually in the above example the created document will have two paragraphs, as the first paragraph is created by default for an empty document, i.e. a new empty document always contains at least one paragraph.

:::tip
You can address the first paragraph to change it using the *oDocument.GetElement(0)* method, so that `const oParagraph = Api.CreateParagraph()` is replaced with `const oParagraph = oDocument.GetElement(0)` and `oDocument.Push(oParagraph)` is not needed.
:::

## Opening an existing document

If you want to edit an already existing document, you can open it using **ONLYOFFICE Document Builder**, get its elements and change them however you need. The only difference from a document editor in this case will be that you will not need this document editor. The document is opened the following way:

```ts
// use a path or URL to an existing 'mydocument.docx' document file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/mydocument.docx");

// create a new 'oDocument' variable and get the opened document contents
const oDocument = Api.GetDocument();

// get the contents of the document first paragraph
const oParagraph = oDocument.GetElement(0);

// set the paragraph justification to center the text
oParagraph.SetJc("center");

// add a text containing a single 'Center' word to the paragraph
oParagraph.AddText("Center");

// save the resulting document as a file in the .docx format with a new 'example.docx' name
builder.SaveFile("docx", "example.docx");

// close the document file and finish work with ONLYOFFICE Document Builder
builder.CloseFile();
```

As you can see you just need to use the *builder.OpenFile();* method of the [CDocBuilder](../../../document-builder/builder-framework/CDocBuilder/CDocBuilder.md) class with the path to the necessary document as an argument to open it. In the above example we open **mydocument.docx** document, get its first paragraph and change the text in it to the centered "Center" text. The same way any other document element can be changed.

Use the appropriate API documentation sections to find out which methods allow you to change certain document element formatting properties.
