# ParagraphContent

The types of elements that can be added to the paragraph structure.

## Type

Enumeration

## Values

- [ApiUnsupported](../ApiUnsupported/ApiUnsupported.md)
- [ApiRun](../ApiRun/ApiRun.md)
- [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)
- [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md)
- [ApiFormBase](../ApiFormBase/ApiFormBase.md)


## Example

This example adds an element called 'text run' to the paragraph.

```javascript editor-docx
// How to add an element to paragraph.

// Insert an element to paragraph.

paragraph.AddElement(run, 0);
```
