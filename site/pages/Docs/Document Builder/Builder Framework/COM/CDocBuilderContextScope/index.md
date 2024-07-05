#### new CDocBuilderContextScope

The stack-allocated class used by **ONLYOFFICE Document Builder** which sets the execution context for all operations executed within a local scope. All opened scopes will be closed automatically when the builder [CloseFile](/docbuilder/integrationapi/com/cdocbuilder/closefile) method is called.

## Methods

| Name                                                                  | Description               |
| --------------------------------------------------------------------- | ------------------------- |
| [Close](/docbuilder/integrationapi/com/cdocbuildercontextscope/close) | Closes the current scope. |