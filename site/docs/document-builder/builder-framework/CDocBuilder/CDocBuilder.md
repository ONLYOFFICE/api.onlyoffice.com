# CDocBuilder

Base class used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated.

## Syntax

```cpp
class CDocBuilder
```

## Methods

| Name                                                       | Description                                                                                                                     |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| [CloseFile](CloseFile.md)                                  | Closes the file to stop working with it.                                                                                        |
| [CreateFile](CreateFile.md)                                | Creates a new file.                                                                                                             |
| [CreateInstance](CreateInstance.md)                        | Creates an instance of the CDocBuilder class. *(COM only)*                                                                      |
| [Dispose](Dispose.md)                                      | Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed. *(not used in .Net)*          |
| [Destroy](Destroy.md)                                      | Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed. *(.Net only)*                 |
| [Execute](Execute.md)                                      | Executes the command and returns the [CDocBuilderValue](../CDocBuilderValue/CDocBuilderValue.md). *(COM only)*                  |
| [ExecuteCommand](ExecuteCommand.md)                        | Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). |
| [GetContext](GetContext.md)                                | Returns the current JS context.                                                                                                 |
| [GetVersion](GetVersion.md)                                | Returns the ONLYOFFICE Document Builder engine version. *(not used in COM)*                                                     |
| [Initialize](Initialize.md)                                | Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it.                       |
| [IsSaveWithDoctrendererMode](IsSaveWithDoctrendererMode.md) | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.    |
| [OpenFile](OpenFile.md)                                    | Opens the document file which will be edited and saved afterwards.                                                              |
| [Run](Run.md)                                              | Runs the ONLYOFFICE Document Builder executable.                                                                                |
| [RunText](RunText.md)                                      | Runs all the commands for the document creation using a single command. *(not used in C++)*                                    |
| [RunTextA](RunTextA.md)                                    | Runs all the commands for the document creation using a single command in the UTF8 format. *(C++ only)*                        |
| [RunTextW](RunTextW.md)                                    | Runs all the commands for the document creation using a single command in the Unicode format. *(C++ only)*                     |
| [SaveFile](SaveFile.md)                                    | Saves the file after all the changes are made.                                                                                  |
| [SetProperty](SetProperty.md)                              | Sets an argument which can be transferred to the program outside the CDocBuilder.ExecuteCommand method.                         |
| [SetPropertyW](SetPropertyW.md)                            | Sets an argument in the Unicode format which can be transferred to the program outside the CDocBuilder.ExecuteCommand method. *(C++ only)* |
| [SetTmpFolder](SetTmpFolder.md)                            | Sets the path to the folder where the program will temporarily save files needed for the program correct work.                  |
| [WriteData](WriteData.md)                                  | Writes data to the log file.                                                                                                    |

:::note
Java uses camelCase method names: `closeFile`, `createFile`, `executeCommand`, etc.
:::
