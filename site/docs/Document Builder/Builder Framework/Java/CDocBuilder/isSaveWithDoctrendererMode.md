# isSaveWithDoctrendererMode

Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.

> Please note, that for the `.docbuilder` file the `CDocBuilder.isSaveWithDoctrendererMode` method is not used.

## Syntax

```java
boolean isSaveWithDoctrendererMode();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
boolean doctrendererMode = builder.isSaveWithDoctrendererMode();
CDocBuilder.dispose();
```
