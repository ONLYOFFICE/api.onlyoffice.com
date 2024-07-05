Expand all

Collapse all

* I am new to ONLYOFFICE Docs API. Where should I start?

  If you do not know where to start with ONLYOFFICE Docs API, we suggest that you first read the [Basic concepts](/editors/basic) and [How it works](/editors/howitworks) sections to have better understanding of how ONLYOFFICE Docs API is built. Once you are familiar with the main concepts, you can visit the [Try now](/editors/try) section to see the live examples of the main ONLYOFFICE Docs features in action.

  If you are interested in a specific programming language example, see the [Language-specific examples](/editors/demopreview) which are available in several programming languages and explain how to install ONLYOFFICE Docs, where to get the example source files and how to install them and connect ONLYOFFICE Docs.

  The users who use some document management systems (Nextcloud, ownCloud, SharePoint etc.) and simply want to know how to connect ONLYOFFICE Docs to these systems should visit the [Ready-to-use connectors](/editors/plugins) section where all the main plugins working with ONLYOFFICE Docs are explained.

  The detailed description of every API method is available in the larger **Documentation** module. All the methods are described in the appropriate sections, the list of them is available in the [Advanced parameters](/editors/advanced).

- How to find out the current version number of ONLYOFFICE Docs?

  The current ONLYOFFICE Docs version number can be found at the **About** page of the Document, Presentation or Spreadsheet Editor, right below the logo and the editor name.

  You can use the API to send a POST request to the ****document command service****. Use the *c* parameter for that with the [version](/editors/command/version) value, which is sent as a JSON object in the request body:

  ```
  {
      "c": "version"
  }
  ```

  The request result of version is returned in JSON form, like this:

  ```
  {
      "error": 0,
      "version": "4.3.1.4"
  }
  ```

  More detailed information about the interaction with the **document command service** and the use of various commands to do that is available [at this page](/editors/command).

* I want to change some ONLYOFFICE Docs parameters from the default.json configuration file. How can I do that so that my changes were not lost after update?

  All the main settings for ONLYOFFICE Docs are stored in the *default.json* configuration file which is available in the */etc/onlyoffice/documentserver/* folder (for Linux) or *%ProgramFiles%\ONLYOFFICE\DocumentServer\config\\* (for Windows). There is also the platform-specific *production.json* file in the same folder, in which the settings relevant for Linux or Windows are stored.

  ONLYOFFICE Docs uses the [Node.js config module](https://www.npmjs.com/package/config) to organize and structure configuration files, so the hierarchy of these files looks like this:

  ```
  default.json
  production.json
  local.json
  ```

  Where all the main settings are stored in the *default.json* file, with some of them added or overriden by ones from *production.json* file and any user/developer settings overriden by the ones from *local.json* configuration file.

  If you change the parameters in either *default.json* or *production.json* file, all the changes will be lost after ONLYOFFICE Docs update or Docker container restart (in case you have ONLYOFFICE Docs installed using Docker).

  So we strongly recommend that you **do not** alter the parameters in either *default.json* or *production.json* files and use *local.json* configuration file instead. This file must be created in the same folder with the *default.json* file and the **whole object structure** for the necessary parameter **must be retained**.

  The examples of *local.json* use can be found in the following sections:

  * [Save delay](/editors/save#savedelay)
  * [Force saving](/editors/save#forcesave)
  * [Request with token in body](/editors/signature/body)
  * [Enabling WOPI](/editors/wopi/#enable)
  * [IP filter](/editors/wopi/#ip-filter)