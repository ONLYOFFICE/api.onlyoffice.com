---
sidebar_position: -2
---

# PHP example

## Introduction

To integrate **ONLYOFFICE Document Builder** into your own website on **PHP** you need to download and install **ONLYOFFICE Document Builder** on your local server and use the [PHP Example](./overview.md) for their integration. We guide will show you how to run the PHP example on [Windows OS](#running-the-example-on-windows-os).

## Running the example on Windows OS

### Step 1. Download and install ONLYOFFICE Document Builder

First, download **ONLYOFFICE Document Builder** and install it to your computer:

[Get ONLYOFFICE Document Builder](https://www.onlyoffice.com/download-builder.aspx?from=api)

### Step 2. Download the PHP example code for the builder integration

Download the [PHP Example](./overview.md) from our site and unpack it somewhere to your computer.

You need to connnect the builder to your web site. For that specify the path to the builder installation in the *config.php* file:

``` php
<?php
$GLOBALS['builder_path'] = "C:\\ONLYOFFICE\\DocumentBuilder\\docbuilder.exe";
?>
```

### Step 3. Install the prerequisites

You can use any web server capable of runnig PHP code to run the sample. We will demonstrate how to run the PHP sample using **Internet Information Services (IIS)** web server. To set up and configure PHP on IIS **PHP Manager for IIS** will be used.

- **IIS: version 7** or later (refer to [Microsoft official website](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/hh994592(v=ws.11)) to learn how to install **IIS**);
- **PHP** (download it from the [php.net](https://php.net/downloads.php) site);
- **PHP Manager for IIS** (download it from the [Microsoft open source site](https://www.iis.net/downloads/community/2018/05/php-manager-150-for-iis-10)).

### Step 4. IIS configuration

1. **PHP Manager for IIS** configuration:

   After **PHP Manager for IIS** installation is complete launch the **IIS Manager:**

   Start -> ControlPanel -> System and Security -> Administrative Tools -> Internet Information Services (IIS) Manager

   and find the **PHP Manager** feature in the **Features View** in **IIS**.

   ![PHP manager](/assets/images/php/manager.png)

   You need to register the installed PHP version in **IIS** using **PHP Manager**.

   Double-click **PHP Manager** to open it, click the **Register new PHP version** task and specify the full path to the main PHP executable file location. For example: C:\Program Files\PHP\php-cgi.exe.

   ![Register PHP version](/assets/images/php/php-version-1.jpg)

   After clicking **OK** the new **PHP version** will be registered with IIS and will become active.

   ![New PHP version](/assets/images/php/php-version-2.jpg)

2. Configure IIS to handle PHP requests:

   For IIS to host PHP applications, you must add handler mapping that tells IIS to pass all PHP-specific requests to the PHP application framework by using the FastCGI protocol.

   Double-click the **Handler Mappings** feature:

   ![Handler mappings](/assets/images/php/handlerclick.png)

   In the **Action** panel, click **Add Module Mapping**. In the **Add Module Mapping** dialog box, specify the configuration settings as follows:

   - Request path: **\*.php**,

   - Module: **FastCgiModule**,

   - Executable: **"C:\\\[Path to your PHP installation]\php-cgi.exe"**,

   - Name: **PHP via FastCGI**,

     click **OK**.

   ![Add handler](/assets/images/php/handler-add.png)

After IIS manager configuration is complete everything is ready for running the **PHP** example.

### Step 5. Running your web site with the editors

1. Add your web site in the IIS Manager:

   On the **Connections** panel right-click the **Sites** node in the tree, then click **Add Website**.

   ![Add website](/assets/images/csharp/add.png)

2. In the **Add Website** dialog box specify the name of the folder with the PHP project in the **Site name** box.

   Specify the path to the folder with your project in the **Physical Path** box.

   Specify the unique value used only for this website in the **Port** box.

   ![Site name](/assets/images/docbuilder/php-add.png)

3. Browse your web site with the IIS manager:

   Right-click the site -> **Manage Website** -> **Browse**

   ![Browse](/assets/images/php/browse.png)
