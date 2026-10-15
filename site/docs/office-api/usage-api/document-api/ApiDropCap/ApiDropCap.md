# ApiDropCap

Class representing a drop cap. A drop cap is a large initial letter that is split off from a paragraph into a separate framed paragraph.

## Methods

The following table lists the available methods.

| Method | Returns | Description |
| ------ | ------- | ----------- |
| [Clear](./Methods/Clear.md) | boolean | Removes the drop cap, merging the drop cap letter back into the paragraph text. |
| [GetClassType](./Methods/GetClassType.md) | "dropCap" | Returns the type of the ApiDropCap class. |
| [GetDistanceFromText](./Methods/GetDistanceFromText.md) | [twips](../Enumeration/twips.md) | Returns the distance between the drop cap and the paragraph text measured in twentieths of a point (1/1440 of an inch). |
| [GetLinesToDrop](./Methods/GetLinesToDrop.md) | number | Returns the number of lines that the drop cap occupies. |
| [GetParent](./Methods/GetParent.md) | [ApiParagraph](../ApiParagraph/ApiParagraph.md) | Returns the paragraph this drop cap was requested from: either the framed drop cap paragraph itself, or the paragraph that continues its text. |
| [GetPosition](./Methods/GetPosition.md) | "none" \| "drop" \| "margin" | Returns the drop cap type. |
| [SetDistanceFromText](./Methods/SetDistanceFromText.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | Sets the distance between the drop cap and the paragraph text measured in twentieths of a point (1/1440 of an inch). |
| [SetFontFamily](./Methods/SetFontFamily.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | Sets the font family of the drop cap letter. |
| [SetLinesToDrop](./Methods/SetLinesToDrop.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) | Sets the number of lines that the drop cap occupies. The drop cap letter is resized accordingly. |
| [SetPosition](./Methods/SetPosition.md) | [ApiDropCap](../ApiDropCap/ApiDropCap.md) \| null \| undefined | Sets the drop cap type. |
