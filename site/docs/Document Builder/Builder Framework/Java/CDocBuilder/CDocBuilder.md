# CDocBuilder

Base class used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated.

## Syntax

```java
class CDocBuilder
```

## Instance Methods

| **Name**                                                    | **Description**                                                                                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| [closeFile](closeFile.md)                                   | Closes the file to stop working with it.                                                                                            |
| [createFile](createFile.md)                                 | Creates a new file.                                                                                                                 |
| [dispose](dispose.md)                                       | Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed.                                    |
| [executeCommand](executeCommand.md)                         | Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF). |
| [getContext](getContext.md)                                 | Returns the current JS context.                                                                                                     |
| [getVersion](getVersion.md)                                 | Returns the ONLYOFFICE Document Builder engine version.                                                                             |
| [initialize](initialize.md)                                 | Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it.                            |
| [isSaveWithDoctrendererMode](isSaveWithDoctrendererMode.md) | Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.          |
| [openFile](openFile.md)                                     | Opens the document file which will be edited and saved afterwards.                                                                  |
| [run](run.md)                                               | Runs the ONLYOFFICE Document Builder executable.                                                                                    |
| [runText](runText.md)                                       | Runs all the commands for the document creation using a single command.                                                             |
| [saveFile](saveFile.md)                                     | Saves the file after all the changes are made.                                                                                      |
| [setProperty](setProperty.md)                               | Sets an argument which can be transferred to the program outside the [CDocBuilder.executeCommand](executeCommand.md) method.        |
| [setTmpFolder](setTmpFolder.md)                             | Sets the path to the folder where the program will temporarily save files needed for the program correct work.                      |
| [writeData](writeData.md)                                   | Writes data to the log file.                                                                                                        |
