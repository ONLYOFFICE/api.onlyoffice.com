# Two Factor Authentication
This example demonstrates a two-step verification process using a phone number and 4-digit code before granting access to DocSpace via the SDK. Once verified, users are redirected to a file management interface embedded in an iframe.

## Before you start
Please make sure you are using a server environment to run the HTML file because the JavaScript SDK must be launched on the server.
You need to [add the URL](../../../get-started/basic-concepts.md#step-1-specifying-the-docspace-url) of your server"s root directory to the **Developer Tools** section of DocSpace.

## Full Example

```html
<!-- Step 1: HTML Setup -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Two-Factor Authentication</title>
    <!-- Replace with your actual portal URL -->
    <script src="{PORTAL_SRC}/static/scripts/sdk/1.0.1/api.js"></script>
    <style>
      /* CSS omitted for brevity */
    </style>
  </head>

  <body>
    <!-- Step 2: Phone input screen -->
    <div id="screen1" class="container screen active">
      <h2>Enter Phone Number</h2>
      <input type="tel" id="inputPhone" placeholder="Phone Number">
      <button id="btnPhone">Continue</button>
    </div>

    <!-- Step 3: Code verification screen -->
    <div id="screen2" class="container screen">
      <h2>Enter Verification Code</h2>
      <input type="text" id="inputCode" placeholder="4-digit Code" maxlength="4">
      <button id="btnCode">Verify</button>
    </div>

    <!-- Step 4: DocSpace access screen -->
    <div id="screen3" class="screen">
      <iframe id="ds-frame"></iframe>
    </div>

    <!-- Step 5: JavaScript SDK Logic -->
    <script>
      const elScreen1 = document.getElementById("screen1");
      const elScreen2 = document.getElementById("screen2");
      const elScreen3 = document.getElementById("screen3");

      const elPhone = document.getElementById("inputPhone");
      const elBtnPhone = document.getElementById("btnPhone");
      const elCode = document.getElementById("inputCode");
      const elBtnCode = document.getElementById("btnCode");

      let generatedCode = "";

      // Step 5.1: Generate verification code after phone input
      elBtnPhone.addEventListener("click", function () {
        if (elPhone.value.trim() === "") {
          alert("Please enter a phone number");
          return;
        }

        generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
        alert("Your verification code is: " + generatedCode);

        elScreen1.classList.remove("active");
        elScreen2.classList.add("active");
      });

      // Step 5.2: Match user input code to verification
      elBtnCode.addEventListener("click", function () {
        if (elCode.value.trim() === "") {
          alert("Please enter the verification code");
          return;
        }

        if (elCode.value === generatedCode) {
          elScreen2.classList.remove("active");
          elScreen3.classList.add("active");

          // Step 5.3: Unlock DocSpace SDK
          const spaceInstance = DocSpace.SDK.initManager({
            frameId: "ds-frame",
            width: "100%",
            height: "700px"
          });
        } else {
          alert("Authorization error: Invalid verification code");
        }
      });
    </script>
  </body>
</html>
```

---

## Script Execution Steps

### 1. Phone number entry and validation

``` ts
phoneButton.addEventListener("click", function () {
  if (phoneInput.value.trim() === "") {
    alert("Please enter a phone number");
    return;
  }

  verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  alert("Your verification code is: " + verificationCode);

  phoneScreen.classList.remove("active");
  codeScreen.classList.add("active");
});
```

- Checks that a phone number was entered
- Generates a 4-digit verification code
- Simulates SMS by showing it in an alert
- Switches to the code entry screen

### 2. Code verification and access control

``` ts
codeButton.addEventListener("click", function () {
  if (codeInput.value.trim() === "") {
    alert("Please enter the verification code");
    return;
  }

  if (codeInput.value === verificationCode) {
    codeScreen.classList.remove("active");
    docspaceScreen.classList.add("active");

    const docSpace = DocSpace.SDK.initManager({
      frameId: "ds-frame",
      width: "100%",
      height: "700px"
    });
  } else {
    alert("Authorization error: Invalid verification code");
  }
});
```

- Validates the entered code against the one generated earlier
- If valid: hides the code screen and displays DocSpace
- If invalid: shows an error alert

### 3. Initializing the DocSpace file manager

``` ts
const docSpace = DocSpace.SDK.initManager({
  frameId: "ds-frame",
  width: "100%",
  height: "700px"
});
```

- Displays DocSpace in an iframe
- File manager becomes accessible only after verification is successful
