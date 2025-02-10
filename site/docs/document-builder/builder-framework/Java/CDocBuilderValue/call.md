# call

Calls the specified Document Builder method. See the [Text document API](../../../../office-api/usage-api/text-document-api/text-document-api.md), [Spreadsheet API](../../../../office-api/usage-api/spreadsheet-api/spreadsheet-api.md), [Presentation API](../../../../office-api/usage-api/presentation-api/presentation-api.md) or [Form API](../../../../office-api/usage-api/Form%20API/Form%20API.md) sections for more information which methods are available for various document types.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.call` method is not used explicitly. The method itself is used instead. See the example below.

## Syntax

```java
CDocBuilderValue call(String name, Object p1, Object p2, Object p3, Object p4, Object p5, Object p6);
```

## Parameters

| Parameter | Type   | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| name      | String | The name of the Document Builder method.                           |
| p1-p6     | Object | The parameters that the Document Builder method takes as argumens. |

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue document = api.call("GetDocument");
CDocBuilder.dispose();
```

### .docbuilder

```ts
const oDocument = Api.GetDocument()
```
