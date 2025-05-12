# get

Returns an array value by its index or name.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.get` method is not used.

## Syntax

```java
CDocBuilderValue get(int | String index);
```

## Parameters

| Parameter | Type          | Description                           |
| --------- | ------------- | ------------------------------------- |
| index     | int \| String | The index or name of the array value. |

## Example

### Jave

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
CDocBuilderValue api = global.get("Api");
CDocBuilderValue doc = api.call("GetDocument");
CDocBuilderValue charts = doc.call("GetAllCharts");
CDocBuilderValue chart = charts.get(1);
CDocBuilder.dispose();
```

The `default[]` postfix expression can be also used to get an array value by its index:

``` java
property CDocBuilderValue default[int]
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
CDocBuilderValue charts = doc.call("GetAllCharts");
CDocBuilderValue chart = charts[1];
CDocBuilder.dispose();
```
