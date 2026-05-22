# ToHtmlOptions

Options for converting document content to an HTML string.

## Type

Object

## Properties

| Name | Type | Description |
| ---- | ---- | ----------- |
| Base64img | boolean | Defines if the images will be created in the base64 format. |
| DemoteHeadings | boolean | Defines if all heading levels will be demoted to conform with the following standard: single H1 as title, H2 as top-level heading in the text body. |
| HtmlHeadings | boolean | Defines if the HTML headings and IDs will be generated when the Markdown renderer of your target platform does not handle Markdown-style IDs. |
| RenderHTMLTags | boolean | Defines if HTML tags will be preserved. By default, the opening angle brackets will be replaced with the special characters. |
