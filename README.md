# Google Sheets Python UI

This repository provides a Python-based user interface for interacting with Google Sheets. It allows users to perform various operations on Google Sheets, such as reading, writing, and updating data programmatically.

## Features

- Authenticate and connect to Google Sheets API.
- Read data from Google Sheets.
- Write and update data in Google Sheets.
- Simple and user-friendly Python interface.

## Prerequisites

- Python 3.7 or higher
- Google Cloud account
- Google Sheets API enabled
- `credentials.json` file for API authentication

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/google-sheets-python-ui.git
    cd google-sheets-python-ui
    ```

2. Install dependencies:
    ```bash
    pip install -r requirements.txt
    ```

3. Place your `credentials.json` file in the root directory.

## Usage

1. Run the script:
    ```bash
    python main.py
    ```

2. Follow the prompts to interact with Google Sheets.

## Configuration

- Update the `config.py` file to specify the spreadsheet ID and other settings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgments

- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [Google API Python Client](https://github.com/googleapis/google-api-python-client)
- Community contributors