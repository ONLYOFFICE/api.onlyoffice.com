# getProperty

Returns a property of the `CDocBuilderValue` object.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.getProperty` method is not used.

## Syntax

```java
CDocBuilderValue getProperty(String name);
```

## Parameters

| Parameter | Type   | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| name      | String | The name of the `CDocBuilderValue` object property. |

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
CDocBuilderValue docPr = doc.getProperty("color");
CDocBuilder.dispose();
```

There are two more ways to get a property of the `CDocBuilderValue` object:

1. use the `get` method that takes an argument in the string format:

   ``` java
   CDocBuilderValue get(String name);
   ```

   ## Example

   ### Java

   ``` java
   CDocBuilder.initialize("");
   CDocBuilder builder = new CDocBuilder();
   CDocBuilderContext context = builder.getContext();
   CDocBuilderValue global = context.getGlobal();
   CDocBuilderValue api = global.get("Api");
   CDocBuilderValue doc = api.call("GetDocument");
   CDocBuilderValue docPr = doc.get("color");
   CDocBuilder.dispose();
   ```

2. use the `default[]` postfix expression that takes an argument in the string format:

   ``` java
   property CDocBuilderValue default[String]
   ```

   ## Example

   ### Java

   ``` java
   CDocBuilder.initialize("");
   CDocBuilder builder = new CDocBuilder();
   CDocBuilderContext context = builder.getContext();
   CDocBuilderValue global = context.getGlobal();
   CDocBuilderValue api = global.get("Api");
   CDocBuilderValue doc = api.call("GetDocument");
   CDocBuilderValue docPr = doc["color"];
   CDocBuilder.dispose();
   ```
