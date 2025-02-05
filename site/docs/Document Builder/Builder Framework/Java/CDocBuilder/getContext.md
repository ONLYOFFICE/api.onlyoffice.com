# getContext

Returns the current JS [context](../CDocBuilderContext/CDocBuilderContext.md).

> Please note, that for the `.docbuilder` file the `CDocBuilder.getContext` method is not used.

## Syntax

```java
CDocBuilderContext getContext(boolean enterContext = 0);
```

## Parameters

| Parameter    | Type    | Default | Description                                    |
| ------------ | ------- | ------- | ---------------------------------------------- |
| enterContext | boolean | 0       | Specifies whether the context will be entered. |

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilder.dispose();
```
