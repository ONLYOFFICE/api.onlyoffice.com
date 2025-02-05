# createObject

Creates an empty object, an analogue of `{}` in JS.

> Please note, that for the `.docbuilder` file the `CDocBuilderContext.createObject` method is not used.

## Syntax

```java
CDocBuilderValue createObject();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
CDocBuilderContext context = builder.getContext();
CDocBuilderValue objectValue = context.createObject();
CDocBuilder.dispose();
```
