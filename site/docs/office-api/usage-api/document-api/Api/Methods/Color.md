# Color

Creates an ApiColor from a universal input. The method recognizes several call signatures and either delegates to a narrower factory or constructs an ApiColor directly.
- **Numeric components**: "Api.Color(r, g, b)" or "Api.Color(r, g, b, a)" creates an RGB or RGBA color from byte components (0-255).
- **Packed integer**: "Api.Color(0xRRGGBB)" creates an RGB color from a 24-bit integer.
- **Full HEX string**: "Api.Color('#RRGGBB')" or "Api.Color('RRGGBB')" creates a HEX color; the leading "#" is optional.
- **Short HEX string**: "Api.Color('#RGB')" expands each digit by duplication, so "#F0A" becomes "#FF00AA".
- **Theme color name**: "Api.Color('accent1')" creates a theme color; any value of SchemeColorId is accepted.
- **Preset color name**: "Api.Color('aliceBlue')" resolves any value of PresetColor to its RGB equivalent.
- **Auto color**: "Api.Color('auto')" creates an auto color.
For a single string argument, the resolution priority is: "auto", a string starting with "#", a theme name, a preset name, a bare 6-digit HEX. Theme and preset palettes do not overlap. A 3-digit shorthand is accepted only with the leading "#".
Unsupported inputs (objects, arrays, an existing ApiColor, unknown strings, no arguments) return a black color (#000000).

## Syntax

```javascript
expression.Color(r, g, b, a);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| r | Required | number \| string \| [byte](../../Enumeration/byte.md) \| [SchemeColorId](../../Enumeration/SchemeColorId.md) \| [PresetColor](../../Enumeration/PresetColor.md) |  | The universal color input. With three or four arguments, the red component (0-255). |
| g | Optional | [byte](../../Enumeration/byte.md) |  | The green component (0-255). Used only with the (r, g, b) and (r, g, b, a) forms. |
| b | Optional | [byte](../../Enumeration/byte.md) |  | The blue component (0-255). Used only with the (r, g, b) and (r, g, b, a) forms. |
| a | Optional | [byte](../../Enumeration/byte.md) |  | The alpha component (0-255). Used only with the (r, g, b, a) form. |

## Returns

[ApiColor](../../ApiColor/ApiColor.md)

## Example

Apply Api.Color with every supported input format to style separate paragraphs in a document.

```javascript editor-docx
// How do I create colors from byte components, packed integers, HEX strings, theme names, color names, and the auto value in a document?

// Color separate paragraphs with each color produced by Api.Color in a document.

const doc = Api.GetDocument();
const colors = [
    Api.Color(220, 50, 50),
    Api.Color(50, 200, 50, 180),
    Api.Color(0x0066CC),
    Api.Color('#FF6600'),
    Api.Color('#F0A'),
    Api.Color('accent1'),
    Api.Color('red'),
    Api.Color('auto'),
];
const labels = [
    'RGB components',
    'RGBA components',
    'Packed integer',
    'Full HEX',
    'Short HEX',
    'Theme color',
    'Named color',
    'Auto color',
];
const firstParagraph = doc.GetElement(0);
firstParagraph.AddText(labels[0]);
firstParagraph.SetColor(colors[0]);
for (let i = 1; i < colors.length; i++) {
    const paragraph = Api.CreateParagraph();
    paragraph.AddText(labels[i]);
    paragraph.SetColor(colors[i]);
    doc.Push(paragraph);
}
```
