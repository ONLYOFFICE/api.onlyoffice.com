import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Import Trello Card Attachments to DocSpace
This integration allows you to automatically import all file attachments from a specific Trello card into an ONLYOFFICE DocSpace room. It's useful for syncing project files, archiving task assets, or aggregating external documentation into a centralized workspace.

## How it works
- Locate the Trello card - Find a card by name on a specified board.
- Get attachments - Retrieve a list of file attachments from the card.
- Download each file - Retrieve binary content using a signed Trello URL.
- Upload to DocSpace - Push files to the selected DocSpace room via API.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    import requests, io

    # DocSpace configuration
    ONLYOFFICE_API_HOST = "your-docspace.onlyoffice.com"
    ONLYOFFICE_API_KEY = "your_onlyoffice_api_key"
    ONLYOFFICE_ROOM_ID = "your_room_id"

    # Trello configuration
    TRELLO_API_KEY = "your_trello_api_key"
    TRELLO_TOKEN = "your_trello_token"
    TRELLO_BOARD_ID = "your_board_id"
    TRELLO_CARD_NAME = "TargetCardName"

    # Headers for ONLYOFFICE authentication
    ONLYOFFICE_HEADERS = {
        "Accept": "application/json",
        "Authorization": f"Bearer {ONLYOFFICE_API_KEY}",
        "Content-Type": "application/json"
    }

    # Step 1: Get Trello card ID by name
    def get_trello_card_id(board_id, card_name):
        url = f"https://api.trello.com/1/boards/{board_id}/cards"
        params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            for card in response.json():
                if card["name"].lower() == card_name.lower():
                    return card["id"]
        return None

    # Step 2: Get attachments from the card
    def get_trello_attachments(card_id):
        url = f"https://api.trello.com/1/cards/{card_id}/attachments"
        params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else []

    # Step 3: Download file from Trello
    def download_trello_attachment(file_url):
        signed_url = f"{file_url}?key={TRELLO_API_KEY}&token={TRELLO_TOKEN}"
        response = requests.get(signed_url, headers={"Accept": "application/json"})
        return response.content if response.status_code == 200 else None

    # Step 4: Upload to DocSpace
    def upload_to_docspace(file_content, filename, room_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/{room_id}/upload"
        files = {"file": (filename, io.BytesIO(file_content))}
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, files=files)
        print(f"DocSpace upload status for '{filename}': {response.status_code}")

    # Step 5: Execute transfer
    def transfer_trello_to_docspace(board_id, card_name, room_id):
        card_id = get_trello_card_id(board_id, card_name)
        if not card_id:
            print("Trello card not found.")
            return

        attachments = get_trello_attachments(card_id)
        print(f"Found {len(attachments)} attachment(s).")

        for attachment in attachments:
            filename = attachment["name"]
            file_url = f"https://api.trello.com/1/cards/{card_id}/attachments/{attachment['id']}/download"
            file_content = download_trello_attachment(file_url)
            if file_content:
                upload_to_docspace(file_content, filename, room_id)
            else:
                print(f"Failed to download '{filename}'.")

    if __name__ == '__main__':
        transfer_trello_to_docspace(TRELLO_BOARD_ID, TRELLO_CARD_NAME, ONLYOFFICE_ROOM_ID)
    ```

  </TabItem>
</Tabs>

## Before you start
1. Replace `yourportal.onlyoffice.com` and `YOUR_API_KEY` with your actual DocSpace portal host and API key. Ensure you have the necessary permissions to perform user operations.
2. Before you can make requests to the API, you need to create a DocSpace API key. Check out the [API keys article](/docspace/api-backend/get-started/authentication/api-keys/) to learn how to obtain and use API keys.
3. Create a [Trello Developer App](https://developer.atlassian.com/cloud/trello/power-ups/rest-api-client/) to obtain an API key and token. Grant read access to cards and attachments by authorizing with `read` scope.

## Step 1: Get the Trello card ID
Find the Trello card by name using the Cards API. Matching is done case-insensitively.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 1: Get Trello card ID by name
    def get_trello_card_id(board_id, card_name):
        url = f"https://api.trello.com/1/boards/{board_id}/cards"
        params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
        response = requests.get(url, params=params)
        if response.status_code == 200:
            for card in response.json():
                if card["name"].lower() == card_name.lower():
                    return card["id"]
        return None
    ```

  </TabItem>
</Tabs>

## Step 2: Fetch attachments from the Trello card
Retrieve metadata about the file attachments (name, ID, download URL) for further processing.

<Tabs>
  <TabItem value="py" label="Python">

    ``` py
    # Step 2: Get attachments from the card
    def get_trello_attachments(card_id):
        url = f"https://api.trello.com/1/cards/{card_id}/attachments"
        params = {"key": TRELLO_API_KEY, "token": TRELLO_TOKEN}
        response = requests.get(url, params=params)
        return response.json() if response.status_code == 200 else []
    ```

  </TabItem>
</Tabs>

## Step 3: Download each file from Trello
Use Trello's signed download URL to retrieve the raw file content.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 3: Download file from Trello
    def download_trello_attachment(file_url):
        signed_url = f"{file_url}?key={TRELLO_API_KEY}&token={TRELLO_TOKEN}"
        response = requests.get(signed_url, headers={"Accept": "application/json"})
        return response.content if response.status_code == 200 else None
    ```

  </TabItem>
</Tabs>

## Step 4: Upload the file to DocSpace
Upload the downloaded file into a specific DocSpace room using [`POST /api/2.0/files/{room_id}/upload`](/docspace/api-backend/usage-api/upload-file)

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 4: Upload to DocSpace
    def upload_to_docspace(file_content, filename, room_id):
        url = f"https://{ONLYOFFICE_API_HOST}/api/2.0/files/{room_id}/upload"
        files = {"file": (filename, io.BytesIO(file_content))}
        response = requests.post(url, headers=ONLYOFFICE_HEADERS, files=files)
        print(f"DocSpace upload status for '{filename}': {response.status_code}")
    ```

  </TabItem>
</Tabs>

## Step 5: Run the import process
Trigger the entire process: match Trello card, extract attachments, download them, and send to DocSpace.

<Tabs>
  <TabItem value="py" label="Python">

    ```py
    # Step 5: Execute transfer
    def transfer_trello_to_docspace(board_id, card_name, room_id):
        card_id = get_trello_card_id(board_id, card_name)
        if not card_id:
            print("Trello card not found.")
            return

        attachments = get_trello_attachments(card_id)
        print(f"Found {len(attachments)} attachment(s).")

        for attachment in attachments:
            filename = attachment["name"]
            file_url = f"https://api.trello.com/1/cards/{card_id}/attachments/{attachment['id']}/download"
            file_content = download_trello_attachment(file_url)
            if file_content:
                upload_to_docspace(file_content, filename, room_id)
            else:
                print(f"Failed to download '{filename}'.")

    if __name__ == '__main__':
        transfer_trello_to_docspace(TRELLO_BOARD_ID, TRELLO_CARD_NAME, ONLYOFFICE_ROOM_ID)
    ```

  </TabItem>
</Tabs>