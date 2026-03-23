# ParagraphContent

可以添加到段落结构的元素类型。

## 类型

枚举

## 值

- [ApiUnsupported](../ApiUnsupported/ApiUnsupported.md)
- [ApiRun](../ApiRun/ApiRun.md)
- [ApiInlineLvlSdt](../ApiInlineLvlSdt/ApiInlineLvlSdt.md)
- [ApiHyperlink](../ApiHyperlink/ApiHyperlink.md)
- [ApiFormBase](../ApiFormBase/ApiFormBase.md)


## 示例

This example adds an element called 'text run' to the paragraph.

```javascript editor-docx
// How to add an element to paragraph.

// Insert an element to paragraph.

paragraph.AddElement(run, 0);
```
