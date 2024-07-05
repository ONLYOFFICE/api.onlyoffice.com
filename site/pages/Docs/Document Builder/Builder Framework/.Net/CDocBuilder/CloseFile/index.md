#### void CloseFile();

Closes the file to stop working with it. You can use a single **ONLYOFFICE Document Builder** instance to work with all your files, but you need to close the previous file before you can start working with the next one in this case.

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.CloseFile();
CDocBuilder.Destroy();
```

#### .docbuilder

```
builder.CloseFile();
```