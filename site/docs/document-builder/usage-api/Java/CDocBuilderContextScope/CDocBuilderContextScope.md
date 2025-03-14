# CDocBuilderContextScope

The stack-allocated class used by ONLYOFFICE Document Builder which sets the execution context for all operations executed within a local scope. All opened scopes will be closed automatically when the builder [closeFile](../CDocBuilder/closeFile.md) method is called.

## Syntax

```java
class CDocBuilderContextScope
```

## Instance Methods

| Method            | Description               |
| ----------------- | ------------------------- |
| [close](close.md) | Closes the current scope. |
