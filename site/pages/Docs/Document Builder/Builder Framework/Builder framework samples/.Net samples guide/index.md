## Before you start

For the samples to work correctly, make sure that two conditions are met:

1. [ONLYOFFICE Document Builder](https://www.onlyoffice.com/download-builder.aspx?utm_source=api) is installed into default directory **"C:/Program Files/ONLYOFFICE/DocumentBuilder"** on your computer.

2. **The directory** in which you are going to store the downloaded samples **has general editing access** to save files created by the Document Builder.

## Download a sample

Download one of the Builder .Net samples archive and unzip it into a folder with general editing access.

* [Filling spreadsheet](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/FillingSpreadsheet.zip)
* [Commenting spreadsheet errors](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/CommentingErrors.zip)
* [Creating presentation](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/CreatingPresentation.zip)
* [Creating chart presentation](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/CreatingChartPresentation.zip)
* [Creating basic form](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/CreatingBasicForm.zip)
* [Creating advanced form](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/CreatingAdvancedForm.zip)
* [Filling form](https://api.teamlab.info:443/app_data/docbuilder/csharp-samples/FillingForm.zip)

## Sample structure

![C# Builder sample structure](/content/img/docbuilder/csharp/sample_structure.png)

Each sample includes a **code folder**, an **sln file**, and a **template file** if the sample uses a template.\
The code folder consists of two files: a **project file** and a **program file**.

![C# Builder project file](/content/img/docbuilder/csharp/project_file.png)

Please note that the **path to the DocBuilder .dll file in the project file is set to default**. Here you can change the path if DocBuilder is located in a different directory on your computer.

## Program structure

![C# Builder program file](/content/img/docbuilder/csharp/program_file.png)

* Include doctrenderer library [.Net wrapper](/docbuilder/integrationapi/net) classes.

* Specify the paths to the Document Builder **work directory**, the **result path** (where the generated file will be saved), and the optional **file path** (if a template file will be used).

* Add **.dll** files to the environment.

* Call the **builder function** (this function is created by user and calls the DocBuilder method to work with documents).

![C# Builder builder function](/content/img/docbuilder/csharp/builder_function.png)

* [Initialize](/docbuilder/integrationapi/net/cdocbuilder/initialize) the [DocBuilder](/docbuilder/integrationapi/net/cdocbuilder) from the working directory. After that Builder opens or creates a file so that [Context](/docbuilder/integrationapi/net/cdocbuildercontext), [Scope](/docbuilder/integrationapi/net/cdocbuildercontext/createscope) and [Global](/docbuilder/integrationapi/net/cdocbuildercontext/getglobal) classes can be accessed.

* Edit file using DocBuilder API methods. Use [Call](/docbuilder/integrationapi/net/cdocbuildervalue/call) method with the name and params of the API method you call as an arguments.

* [Save](/docbuilder/integrationapi/net/cdocbuilder/savefile) and [close](/docbuilder/integrationapi/net/cdocbuilder/closefile) file after editing, then call the [Destroy](/docbuilder/integrationapi/net/cdocbuilder/destroy) method to destroy DocBuilder.

## Run the sample

Open .sln file inside the sample folder to build the project.\
Run the program when the project is built.

![Visual Studio build and run sample](/content/img/docbuilder/csharp/build_and_run.png)

## Check the result

After program execution the result file will be saved to the **result path**. It's sample folder root by default.

![C# Builder sample structure result file](/content/img/docbuilder/csharp/sample_structure_after.png) ![C# Builder sample folder result file](/content/img/docbuilder/csharp/folder_root_after.png)

Open **result file** and check the result.

![C# Builder result file](/content/img/docbuilder/csharp/result_file.png)