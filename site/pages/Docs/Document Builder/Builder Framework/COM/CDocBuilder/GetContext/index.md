#### HRESULT GetContext(\[out, retval] I\_DOCBUILDER\_CONTEXT\*\* result);

Returns the current JS [context](/docbuilder/integrationapi/com/cdocbuildercontext).

Please note, that for the *.docbuilder* file the *CDocBuilder.GetContext* method is not used.

## Parameters:

| Name     | Type                       | Description              |
| -------- | -------------------------- | ------------------------ |
| *result* | I\_DOCBUILDER\_CONTEXT\*\* | The returned JS context. |

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
IONLYOFFICEDocBuilderContext* oContext = NULL;
oBuilder->GetContext(&oContext);
oBuilder->Dispose();
```