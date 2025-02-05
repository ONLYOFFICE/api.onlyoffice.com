# Call

Calls the specified Document Builder method. See the [Text document API](../../../../Office%20API/Usage%20API/Text%20Document%20API/Text%20Document%20API.md), [Spreadsheet API](../../../../Office%20API/Usage%20API/Spreadsheet%20API/Spreadsheet%20API.md), [Presentation API](../../../../Office%20API/Usage%20API/Presentation%20API/Presentation%20API.md) or [Form API](../../../../Office%20API/Usage%20API/Form%20API/Form%20API.md) sections for more information which methods are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.Call` method is not used explicitly. The method itself is used instead. See the example below.

## Syntax

```py
def Call(self, str name, CDocBuilderValue *args);
```

## Parameters

| Parameter | Type                                                        | Description                                                         |
| --------- | ----------------------------------------------------------- | ------------------------------------------------------------------- |
| name      | str                                                         | The name of the Document Builder method.                            |
| *args     | [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md) | The parameters that the Document Builder method takes as arguments. |

## Example

### Python

``` py
builder = docbuilder.CDocBuilder()
context = builder.GetContext()
globalObj = context.GetGlobal()
api = globalObj["Api"]
document = api.Call("GetDocument")
```

### .docbuilder

```ts
const oDocument = Api.GetDocument()
```
