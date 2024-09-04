# Spin Wheel App

This project is a web-based Spin Wheel application built with Google Apps Script and HTML/JavaScript. It allows users to log in, spin a wheel with custom options, and view recent spin results. The app features real-time updates from the Google Sheet and preserves manual shuffles.

## Features

- User authentication
- Customizable spin wheel options with real-time updates
- Probability-based spin results
- Manual shuffling of wheel options with preservation during updates
- Recent spin history display
- Responsive design
- Slow spin functionality

## Setup

1. Create a new Google Apps Script project.
2. Copy the contents of `Code.gs` into the script editor.
3. Create a new HTML file named `Index.html` and copy the provided HTML content into it.
4. Set up the following Google Sheets in your project:
   - `Users`: For storing user credentials
   - `Options`: For storing spin wheel options and probabilities
   - `SpinHistory`: For recording spin results

### Sheets Structure

1. Users Sheet:
   - Column A: Username
   - Column B: Password

2. Options Sheet:
   - Column A: Option name
   - Column B: Probability (as a decimal, e.g., 0.2 for 20%)

3. SpinHistory Sheet:
   - Column A: Username
   - Column B: Date/Time
   - Column C: Spin Result

## Usage

1. Deploy the script as a web app:
   - Click on "Deploy" > "New deployment"
   - Choose "Web app" as the type
   - Set "Execute as" to your account
   - Set "Who has access" to "Anyone" or "Anyone with Google Account" based on your needs
   - Click "Deploy" and copy the provided URL

2. Open the web app URL in a browser.

3. Log in using credentials from the Users sheet.

4. Click the "Spin" button to spin the wheel.

5. Use the "Reorder Options" button to manually shuffle the wheel options.

6. Toggle "Slow Spin" for a continuous slow rotation of the wheel.

7. View your result and recent spin history.

## Real-time Updates

The app now features real-time updates from the Google Sheet:

- Changes to options or probabilities in the Sheet are reflected in the wheel within seconds.
- If the wheel has been manually shuffled, the app attempts to preserve the shuffle order while incorporating updates.
- New options are added to the end of the wheel if it has been manually shuffled.

## Customization

- Modify the `Options` sheet to change the available spin options and their probabilities. Changes will be reflected in real-time.
- Adjust the UI by editing the HTML and CSS in `Index.html`.
- Customize the spin animation duration by modifying the `SPIN_DURATION` constant in the JavaScript code.
- Adjust the update interval by changing the `setInterval` duration in the `startBackgroundUpdate` function.

## Troubleshooting

- If you encounter any issues with spinning or data not updating, check the browser console for error messages.
- Ensure that the Google Sheets are properly set up and accessible to the script.
- Verify that the script has the necessary permissions to access and modify the spreadsheet.
- If real-time updates aren't working, check your internet connection and ensure the Google Sheet is not overloaded with requests.

## Security Considerations

- This app uses basic username/password authentication. For production use, consider implementing more secure authentication methods.
- Ensure that sensitive data in the spreadsheets is properly protected and only accessible to authorized users.
- Be aware that frequent updates might increase API usage. Monitor your usage to stay within Google's quotas.

## Contributing

Feel free to fork this project and submit pull requests for any enhancements or bug fixes.

## License

This project is open-source and available under the MIT License.
