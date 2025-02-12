# isInt

Returns true if the `CDocBuilderValue` object is an integer.

> Please note, that for the `.docbuilder` file the `CDocBuilderValue.isInt` method is not used.

## Syntax

```java
boolean isInt();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue global = context.getGlobal();
boolean boolInt = global.isInt();
CDocBuilder.dispose();
```
