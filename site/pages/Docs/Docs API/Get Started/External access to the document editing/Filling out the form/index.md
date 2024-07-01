Fills in the empty cells in the form.

The user can choose a username from the list and all the fields in the form editor will be filled with the user contact information. At the same time, this data is displayed in the inputs of the custom interface.

When the user edits the input data in the custom interface, it is automatically updated in the form editor as well.

When the document is ready, the form data can be submitted by clicking the **Complete & Submit** button.

Isabella Robinson (75061)\


1. When the user opens a form document, the [GetAllContentControls](/plugin/executemethod/text/getallcontentcontrols) method is executed to collect all the content controls from the document. After that, the [GetFormValue](/plugin/executemethod/form/getformvalue) method is executed to get the content controls values and display them in the custom interface:

   ```
   var contentControls = [];

   var onDocumentReady = function () {
       window.connector = docEditor.createConnector();

       connector.executeMethod("GetAllContentControls", null, function (data) {
           setTimeout(function () {
               for (let i = 0; i < data.length; i++) {

                   ...

                   connector.executeMethod("GetFormValue", [data[i]["InternalId"]], function (value) {
                       data[i].Value = value ? value : "";
                       if (data.length - 1 == i) {
                           contentControls = data;

                           ...
                       }
                   });
               }
           }, 0);
       });
   };
   ```

2. When the user chooses a username from the list, the [GetFormsByTag](/plugin/executemethod/form/getformsbytag) method is executed to collect all the forms by their tags and sets the corresponding values to them with the [SetFormValue](/plugin/executemethod/form/setformvalue) method:

   ```
   $("#persons").change(function (e) {
       const postalCode = $(this).val();

       $.getJSON("/app_data/editor/wildcarddata/persons.json", function (persons) {
           for (const person of persons) {
               if (person["PostalCode"] == postalCode) {
                   for (key in person) {
                       var value = person[key];

                       ...

                       setFormValue(key, value);
                   }
               }
           }
       })

       var setFormValue = function (tag, value) {
           connector.executeMethod(
               "GetFormsByTag",
               [tag],
               function (forms) {
                   connector.executeMethod(
                       "SetFormValue",
                       [forms[0]["InternalId"], value],
                       null
                   );
               }
           );
       }
   });
   ```

3. When the user edits a form value, the [onChangeContentControl](/plugin/events/onchangecontentcontrol) event is fired and after that, the [GetFormValue](/plugin/executemethod/form/getformvalue) method is executed to get an updated form value and display it in the custom interface:

   ```
   var onDocumentReady = function () {

       ...

       connector.attachEvent("onChangeContentControl", onChangeContentControl);

       ...

   };

   function onChangeContentControl(e) {
       connector.executeMethod("GetFormValue", [e["InternalId"]], function (value) {

           ...

           $("#" + e["InternalId"]).val(value || "");

           ...
       });
   }
   ```

Please note that the connector is available only for **ONLYOFFICE Developer Edition**.

This class is an additional feature which is available at extra cost. If you have any questions, please contact our sales team at <sales@onlyoffice.com>.
