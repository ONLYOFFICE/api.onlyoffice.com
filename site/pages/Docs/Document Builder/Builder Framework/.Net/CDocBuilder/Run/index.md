#### bool Run(sPath);

Runs the **ONLYOFFICE Document Builder** executable. If you do not want to write a .Net application, you can simply use the **docbuilder.exe** executable file and run it with the **.docbuilder** file as an argument, where all the code for the document file creation will be written. For .Net, create the *CDocBuilder* object and call the *Run* method with the path to the executable file from the *sPath* parameter.

## Parameters:

| Name    | Type    | Description                                                 |
| ------- | ------- | ----------------------------------------------------------- |
| *sPath* | String^ | The path to the **ONLYOFFICE Document Builder** executable. |

## Example

#### .Net

```
string workDirectory = "C:/Program Files/ONLYOFFICE/DocumentBuilder";
CDocBuilder.Initialize(workDirectory);
CDocBuilder oBuilder = new CDocBuilder();
oBuilder.Run("path-to-script.docbuilder");
CDocBuilder.Destroy();
```

#### .docbuilder

```
docbuilder.exe mydocument.docbuilder
```