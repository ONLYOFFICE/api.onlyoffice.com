# getVersion

Returns the ONLYOFFICE Document Builder engine version.

> Please note, that for the `.docbuilder` file the `CDocBuilder.getVersion` method is not used.

## Syntax

```java
String getVersion();
```

## Example

### Java

``` java
CDocBuilder.initialize("");
CDocBuilder builder = new CDocBuilder();
String version = builder.getVersion();
CDocBuilder.dispose();
```
