import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Onboard an employee into a shared "Employees" folder

This example demonstrates how to prepare a structured workspace for a new employee in ONLYOFFICE DocSpace using the API.

The workflow creates a personal folder inside a shared Employees directory, builds a standard subfolder structure, copies starter documents from templates, and generates an external access link.
Optionally, the example also shows how a DocSpace user can be created as part of the same onboarding process.

This approach helps standardize employee document storage and simplifies access management during onboarding.

## Before you start

1. Replace `https://yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal URL and API key. Ensure you have the necessary data and permissions to perform migration operations.
2. Before you can make requests to the API, you need to authenticate. Check out the [Personal access tokens](/docspace/api-backend/get-started/authentication/personal-access-tokens.md) page to learn how to obtain and use access tokens.

<details>
  <summary>Full example</summary>
<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  // Set API base URL
  const API_HOST = 'https://yourportal.onlyoffice.com';
  const API_KEY = 'YOUR_API_KEY';

  // IDs from your DocSpace
  const EMPLOYEES_FOLDER_ID = 'employees_folder_id_here'; // Shared "Employees" folder
  const TEMPLATE_NDA_FILE_ID = 'template_nda_file_id_here';
  const TEMPLATE_POLICIES_FILE_ID = 'template_policies_file_id_here';

  // Headers with API key for authentication
  const HEADERS = {
    Accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  // Step 1: Create a new user in DocSpace
  async function createEmployeeUser(employee: { email: string; firstName: string; lastName: string }) {
    
    const url = `${API_HOST}/api/2.0/people/`;

    const body = {
      email: employee.email,
      firstName: employee.firstName,
      lastName: employee.lastName,
      // Add other fields if needed:
      // title: employee.title,
      // department: employee.department,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`User creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const userId = json?.response?.id || json?.id;
    console.log(`Step 1 completed: user created (ID: ${userId}).`);
    return json;
  }

  // Step 2: Create a personal folder inside the shared Employees folder
  async function createEmployeeFolder(parentFolderId: string, folderTitle: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${parentFolderId}`;
    const body = { title: folderTitle };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Folder creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const folderId = json?.response?.id || json?.id;
    console.log(`Step 2 completed: folder created "${folderTitle}" (ID: ${folderId}).`);
    return json;
  }

  // Helper: Create a subfolder by name
  async function createSubfolder(parentFolderId: string, subfolderTitle: string) {
    return createEmployeeFolder(parentFolderId, subfolderTitle);
  }

  // Step 4: Copy a template file into a folder
  async function copyTemplateFile(fileId: string, destFolderId: string, destTitle: string, toForm = false) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/copyas`;

    const body = {
      destFolderId,
      destTitle,
      toForm,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`File copy failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log(`Step 4 completed: file copied "${destTitle}".`);
    return json;
  }

  // Step 5: Create an external link to the employee folder
  async function createEmployeeFolderExternalLink(folderId: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${folderId}/link`;

    // For a basic example, we send an empty body and use default link settings.
    const body = {};

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`External link creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Step 5 completed: external link created.');
    return json;
  }

  // Main onboarding workflow
  (async () => {
    try {
      // Example source data (you can load it from any external system as JSON)
      const employee = {
        email: 'new.employee@example.com',
        firstName: 'New',
        lastName: 'Employee',
      };

      // Step 1: Create user
      const user = await createEmployeeUser(employee);
      if (!user) return;

      // Step 2: Create employee folder
      const employeeFolderTitle = `${employee.lastName} ${employee.firstName}`;
      const employeeFolder = await createEmployeeFolder(EMPLOYEES_FOLDER_ID, employeeFolderTitle);
      if (!employeeFolder) return;

      const employeeFolderId = employeeFolder?.response?.id || employeeFolder?.id;
      if (!employeeFolderId) {
        console.log('Could not determine the new folder ID from the response.');
        return;
      }

      // Step 3: Create standard subfolder structure
      const contractsFolder = await createSubfolder(employeeFolderId, 'Contracts');
      const tasksFolder = await createSubfolder(employeeFolderId, 'Tasks');
      const hrDocsFolder = await createSubfolder(employeeFolderId, 'HR docs');

      const contractsFolderId = contractsFolder?.response?.id || contractsFolder?.id || null;
      const hrDocsFolderId = hrDocsFolder?.response?.id || hrDocsFolder?.id || null;

      // Step 4: Copy starter documents
      if (contractsFolderId) {
        await copyTemplateFile(TEMPLATE_NDA_FILE_ID, contractsFolderId, 'NDA - to sign.docx');
      }

      if (hrDocsFolderId) {
        await copyTemplateFile(TEMPLATE_POLICIES_FILE_ID, hrDocsFolderId, 'Company Policies.docx');
      }

      // Step 5: Create external link
      const linkInfo = await createEmployeeFolderExternalLink(employeeFolderId);
      if (!linkInfo) return;

      console.log('Onboarding completed. Folder external link details:');
      console.log(JSON.stringify(linkInfo, null, 2));
    } catch (err: any) {
      console.error(err?.message || err);
    }
  })();
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  import requests
  import json

  # Set API base URL
  API_HOST = "https://yourportal.onlyoffice.com"
  API_KEY = "YOUR_API_KEY"

  # IDs from your DocSpace
  EMPLOYEES_FOLDER_ID = "employees_folder_id_here"  # Shared "Employees" folder
  TEMPLATE_NDA_FILE_ID = "template_nda_file_id_here"
  TEMPLATE_POLICIES_FILE_ID = "template_policies_file_id_here"

  # Headers with API key for authentication
  HEADERS = {
    "Accept": "application/json",
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
  }

  # Step 1: Create a new user in DocSpace
  def create_employee_user(employee):
    url = f"{API_HOST}/api/2.0/people/"

    body = {
      "email": employee["email"],
      "firstName": employee["firstName"],
      "lastName": employee["lastName"],
      # Add other fields if needed, for example:
      # "title": employee.get("title"),
      # "department": employee.get("department"),
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code in (200, 201):
      data = response.json()
      user_id = data.get("response", {}).get("id") or data.get("id")
      print(f"Step 1 completed: user created (ID: {user_id}).")
      return data
    else:
      print(f"User creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 2: Create a personal folder inside the shared Employees folder
  def create_employee_folder(parent_folder_id, folder_title):
    url = f"{API_HOST}/api/2.0/files/folder/{parent_folder_id}"

    body = {
      "title": folder_title
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      folder_id = data.get("response", {}).get("id") or data.get("id")
      print(f'Step 2 completed: folder created "{folder_title}" (ID: {folder_id}).')
      return data
    else:
      print(f"Folder creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Helper: Create a subfolder by name
  def create_subfolder(parent_folder_id, subfolder_title):
    return create_employee_folder(parent_folder_id, subfolder_title)

  # Step 4: Copy a template file into a folder
  def copy_template_file(file_id, dest_folder_id, dest_title, to_form=False):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/copyas"

    body = {
      "destFolderId": dest_folder_id,
      "destTitle": dest_title,
      "toForm": to_form
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      print(f'Step 4 completed: file copied "{dest_title}".')
      return data
    else:
      print(f"File copy failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Step 5: Create an external link to the employee folder
  def create_employee_folder_external_link(folder_id):
    url = f"{API_HOST}/api/2.0/files/folder/{folder_id}/link"

    # For a basic example, we send an empty body and use default link settings.
    body = {}

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      print("Step 5 completed: external link created.")
      return data
    else:
      print(f"External link creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None

  # Main onboarding workflow
  def onboard_employee():
    # Example source data (you can load it from any external system as JSON)
    employee = {
      "email": "new.employee@example.com",
      "firstName": "New",
      "lastName": "Employee"
    }

    # Step 1: Create user
    user = create_employee_user(employee)
    if not user:
      return

    # Step 2: Create employee folder
    employee_folder_title = f"{employee['lastName']} {employee['firstName']}"
    employee_folder = create_employee_folder(EMPLOYEES_FOLDER_ID, employee_folder_title)
    if not employee_folder:
      return

    employee_folder_id = employee_folder.get("response", {}).get("id") or employee_folder.get("id")
    if not employee_folder_id:
      print("Could not determine the new folder ID from the response.")
      return

    # Step 3: Create standard subfolder structure
    contracts_folder = create_subfolder(employee_folder_id, "Contracts")
    tasks_folder = create_subfolder(employee_folder_id, "Tasks")
    hr_docs_folder = create_subfolder(employee_folder_id, "HR docs")

    contracts_folder_id = None
    hr_docs_folder_id = None

    if contracts_folder:
      contracts_folder_id = contracts_folder.get("response", {}).get("id") or contracts_folder.get("id")
    if hr_docs_folder:
      hr_docs_folder_id = hr_docs_folder.get("response", {}).get("id") or hr_docs_folder.get("id")

    # Step 4: Copy starter documents
    if contracts_folder_id:
      copy_template_file(
        TEMPLATE_NDA_FILE_ID,
        contracts_folder_id,
        "NDA - to sign.docx"
      )

    if hr_docs_folder_id:
      copy_template_file(
        TEMPLATE_POLICIES_FILE_ID,
        hr_docs_folder_id,
        "Company Policies.docx"
      )

    # Step 5: Create external link
    link_info = create_employee_folder_external_link(employee_folder_id)
    if not link_info:
      return

    print("Onboarding completed. Folder external link details:")
    print(json.dumps(link_info, indent=2))

  if __name__ == "__main__":
    onboard_employee()
  ```

  </TabItem>
</Tabs>
</details>

## Step 1: Create an employee user

A POST request is sent to [/api/2.0/people/](/docspace/api-backend/usage-api/add-member) to create a new DocSpace user.

The request body includes:
- `email`: The employee email address.
- `firstName`: The employee first name.
- `lastName`: The employee last name.

The API returns a user object. The new user ID is required if you want to connect future onboarding steps to this user.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createEmployeeUser(employee: { email: string; firstName: string; lastName: string }) {
    
    const url = `${API_HOST}/api/2.0/people/`;

    const body = {
      email: employee.email,
      firstName: employee.firstName,
      lastName: employee.lastName,
      // Add other fields if needed:
      // title: employee.title,
      // department: employee.department,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`User creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const userId = json?.response?.id || json?.id;
    console.log(`Step 1 completed: user created (ID: ${userId}).`);
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_employee_user(employee):
    url = f"{API_HOST}/api/2.0/people/"

    body = {
      "email": employee["email"],
      "firstName": employee["firstName"],
      "lastName": employee["lastName"],
      # Add other fields if needed, for example:
      # "title": employee.get("title"),
      # "department": employee.get("department"),
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code in (200, 201):
      data = response.json()
      user_id = data.get("response", {}).get("id") or data.get("id")
      print(f"Step 1 completed: user created (ID: {user_id}).")
      return data
    else:
      print(f"User creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 2: Create a personal folder in the "Employees" folder

A POST request is sent to [/api/2.0/files/folder/:parentId](/docspace/api-backend/usage-api/create-folder) to create a personal folder inside the shared "Employees" folder.

The request body includes:
- `title`: Folder title (for example, LastName FirstName).

The API returns a folder object with the new folder ID. This folder ID is required for all next steps.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createEmployeeFolder(parentFolderId: string, folderTitle: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${parentFolderId}`;
    const body = { title: folderTitle };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`Folder creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    const folderId = json?.response?.id || json?.id;
    console.log(`Step 2 completed: folder created "${folderTitle}" (ID: ${folderId}).`);
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_employee_folder(parent_folder_id, folder_title):
    url = f"{API_HOST}/api/2.0/files/folder/{parent_folder_id}"

    body = {
      "title": folder_title
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      folder_id = data.get("response", {}).get("id") or data.get("id")
      print(f'Step 2 completed: folder created "{folder_title}" (ID: {folder_id}).')
      return data
    else:
      print(f"Folder creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 3: Create standard subfolder structure

This step creates a predictable folder layout inside the employee folder (for example: `Contracts`, `Tasks`, `HR docs`). Each subfolder is created using the same request as in Step 2, changing only the title.

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createSubfolder(parentFolderId: string, subfolderTitle: string) {
    return createEmployeeFolder(parentFolderId, subfolderTitle);
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_subfolder(parent_folder_id, subfolder_title):
    return create_employee_folder(parent_folder_id, subfolder_title)
  ```

  </TabItem>
</Tabs>

## Step 4: Copy starter documents from templates

A POST request is sent to [/api/2.0/files/file/:fileId/copyas](/docspace/api-backend/usage-api/copy-file-as) to copy template files into the correct subfolders.

The request body includes:
- `destFolderId`: Destination folder ID (where the file should be placed).
- `destTitle`: The file name in the destination folder.
- `toForm`: Optional flag (default false) if you want to convert the copied file into a form.

This step typically copies:
- An NDA template into `Contracts`
- A company policies template into `HR docs`

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function copyTemplateFile(fileId: string, destFolderId: string, destTitle: string, toForm = false) {
    const url = `${API_HOST}/api/2.0/files/file/${fileId}/copyas`;

    const body = {
      destFolderId,
      destTitle,
      toForm,
    };

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`File copy failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log(`Step 4 completed: file copied "${destTitle}".`);
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def copy_template_file(file_id, dest_folder_id, dest_title, to_form=False):
    url = f"{API_HOST}/api/2.0/files/file/{file_id}/copyas"

    body = {
      "destFolderId": dest_folder_id,
      "destTitle": dest_title,
      "toForm": to_form
    }

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      print(f'Step 4 completed: file copied "{dest_title}".')
      return data
    else:
      print(f"File copy failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>

## Step 5: Create an external link to the employee folder

A POST request is sent to [/api/2.0/files/folder/:folderId/link](/docspace/api-backend/usage-api/create-folder-primary-external-link)to generate an external link to the employee folder.

For a basic scenario, the request body can be empty, so the API uses default link settings.

The response includes link information that can be shared with the employee or used in your HR workflow (for example, sending the link by email).

<Tabs>
  <TabItem value="nodejs" label="Node.js">

  ``` ts
  async function createEmployeeFolderExternalLink(folderId: string) {
    const url = `${API_HOST}/api/2.0/files/folder/${folderId}/link`;

    // For a basic example, we send an empty body and use default link settings.
    const body = {};

    const res = await fetch(url, { method: 'POST', headers: HEADERS, body: JSON.stringify(body) });
    if (!res.ok) {
      const t = await res.text();
      console.log(`External link creation failed. Status code: ${res.status}, Message: ${t}`);
      return null;
    }

    const json = await res.json();
    console.log('Step 5 completed: external link created.');
    return json;
  }
  ```

  </TabItem>
  <TabItem value="python" label="Python">

  ``` py
  def create_employee_folder_external_link(folder_id):
    url = f"{API_HOST}/api/2.0/files/folder/{folder_id}/link"

    # For a basic example, we send an empty body and use default link settings.
    body = {}

    response = requests.post(url, headers=HEADERS, data=json.dumps(body))

    if response.status_code == 200:
      data = response.json()
      print("Step 5 completed: external link created.")
      return data
    else:
      print(f"External link creation failed. Status code: {response.status_code}, Message: {response.text}")
      return None
  ```

  </TabItem>
</Tabs>
