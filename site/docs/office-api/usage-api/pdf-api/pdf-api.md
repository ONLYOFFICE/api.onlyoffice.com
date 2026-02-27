---
sidebar_position: -1
---

# PDF API

A PDF document is organized as a sequence of *pages*. Each page can contain several types of content: paragraphs, tables, drawings (images, shapes, charts), annotations, and interactive form fields.

The core content elements are:

- *Paragraph* (`ApiParagraph`) — a block of text. Paragraphs consist of one or more *runs* (`ApiRun`), each of which carries the text itself and its character formatting (font, size, bold, italic, color, etc.).
- *Table* (`ApiTable`) — a grid structure whose cells (`ApiTableCell`) contain document content (paragraphs).
- *Drawing* (`ApiDrawing`) — an image, shape, or chart placed at a specific position on the page.

Pages and their content are accessed through the *document* (`ApiDocument`) and *page* (`ApiPage`) objects.

### Annotations

Annotations let you mark up PDF content without modifying it. The PDF API supports the following annotation types:

| Category | Types |
|---|---|
| Note/text | `ApiTextAnnotation`, `ApiFreeTextAnnotation` |
| Markup | `ApiHighlightAnnotation`, `ApiUnderlineAnnotation`, `ApiStrikeoutAnnotation`, `ApiCaretAnnotation` |
| Shapes | `ApiSquareAnnotation`, `ApiCircleAnnotation`, `ApiLineAnnotation`, `ApiPolyLineAnnotation`, `ApiPolygonAnnotation` |
| Other | `ApiInkAnnotation`, `ApiStampAnnotation`, `ApiRedactAnnotation` |

All annotation types share a common base (`ApiBaseAnnotation`) that provides border, fill, opacity, author, date, and reply properties.

### Form fields and widgets

PDF forms include *fields* and *widgets*. A field defines the data model (name, value, validation rules), while a widget determines the visual representation of a field.

| Field type | Widget |
|---|---|
| `ApiTextField` | `ApiTextWidget` |
| `ApiCheckboxField` | `ApiCheckboxWidget` |
| `ApiRadiobuttonField` | — |
| `ApiComboboxField` | — |
| `ApiListboxField` | — |
| `ApiImageField` | — |
| `ApiDateField` | — |
| `ApiButtonField` | `ApiButtonWidget` |

## Creating a new PDF document

The simplest example PDF document with a single page containing centered "Center" text can be built with the help of **ONLYOFFICE Document Builder** using the following code:

```ts
// create a PDF file with ONLYOFFICE Document Builder
builder.CreateFile("pdf")

// create a new 'oDocument' variable and get the created PDF document
const oDocument = Api.GetDocument()

// create a new paragraph for the PDF content
const oParagraph = Api.CreateParagraph()

// set the paragraph justification to center the text
oParagraph.SetJc("center")

// add a text containing a single 'Center' word to the paragraph
oParagraph.AddText("Center")

// push the paragraph to the document
oDocument.Push(oParagraph)

// save the resulting PDF document as a file in the .pdf format with the 'example.pdf' name and close it
builder.SaveFile("pdf", "example.pdf")
builder.CloseFile()
```

The document initializes with a default page configuration. You can customize page size, orientation, and margins using the appropriate page configuration methods.

## Opening an existing PDF document

To edit an existing PDF document, open it with `builder.OpenFile`, then get its pages and modify their content:

```ts
// use a path to an existing 'mydocument.pdf' file to open it with ONLYOFFICE Document Builder
builder.OpenFile("https://example.com/mydocument.pdf")

// create a new 'oDocument' variable and get the opened PDF document contents
const oDocument = Api.GetDocument()

// get the first page
const oPage = oDocument.GetElement(0)

// create and configure a new paragraph
const oParagraph = Api.CreateParagraph()
oParagraph.SetJc("center")
oParagraph.AddText("Center")

// add the paragraph to the page
oPage.Push(oParagraph)

// save the resulting PDF document as a file in the .pdf format with a new 'example.pdf' name and close it
builder.SaveFile("pdf", "example.pdf")
builder.CloseFile()
```

Use the appropriate API documentation sections to find out which methods allow you to change certain PDF document element formatting properties and work with PDF-specific features.
