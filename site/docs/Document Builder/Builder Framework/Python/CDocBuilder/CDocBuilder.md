```yml signature
- {type: keyword, text: class}
- {type: text, text: " "}
- {type: entity, text: CDocBuilder}
```

## Description

Base class used by ONLYOFFICE Document Builder for the document file (text document, spreadsheet, presentation, form document, PDF) to be generated.

## Instance Methods

<references>

- [CloseFile](CloseFile.md)
  - : Closes the file to stop working with it.
- [CreateFile](CreateFile.md)
  - : Creates a new file.
- [Dispose](Dispose.md)
  - : Unloads the ONLYOFFICE Document Builder from the application memory when it is no longer needed.
- [ExecuteCommand](ExecuteCommand.md)
  - : Executes the command which will be used to create the document file (text document, spreadsheet, presentation, form document, PDF)
- [GetContext](GetContext.md)
  - : Returns the current JS context.
- [GetVersion](GetVersion.md)
  - : Returns the ONLYOFFICE Document Builder engine version.
- [Initialize](Initialize.md)
  - : Initializes the ONLYOFFICE Document Builder as a library for the application to be able to work with it.
- [IsSaveWithDoctrendererMode](IsSaveWithDoctrendererMode.md)
  - : Specifies if the doctrenderer mode is used when building a document or getting content from the editor when saving a file.
- [OpenFile](OpenFile.md)
  - : Opens the document file which will be edited and saved afterwards.
- [Run](Run.md)
  - : Runs the ONLYOFFICE Document Builder executable.
- [RunText](RunText.md)
  - : Runs all the commands for the document creation using a single command.
- [SaveFile](SaveFile.md)
  - : Saves the file after all the changes are made.
- [SetProperty](SetProperty.md)
  - : Sets an argument which can be transferred to the program outside the [CDocBuilder.ExecuteCommand](ExecuteCommand.md) method.
- [SetTmpFolder](SetTmpFolder.md)
  - : Sets the path to the folder where the program will temporarily save files needed for the program correct work.
- [WriteData](WriteData.md)
  - : Writes data to the log file.

</references>
