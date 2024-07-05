#### HRESULT CloseFile();

Closes the file to stop working with it. You can use a single **ONLYOFFICE Document Builder** instance to work with all your files, but you need to close the previous file before you can start working with the next one in this case.

## Example

#### COM

```
CoInitialize(NULL);
IONLYOFFICEDocBuilder* oBuilder = NULL;
oBuilder->Initialize();
oBuilder->CloseFile();
oBuilder->Dispose();
```

#### .docbuilder

```
builder.CloseFile();
```