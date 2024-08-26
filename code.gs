function doGet() {
    return HtmlService.createTemplateFromFile('Index')
        .evaluate()
        .setTitle('Spin Wheel App')
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function checkLogin(username, password) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Users');
    var data = sheet.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
        if (data[i][0] === username && data[i][1] === password) {
            return { success: true };
        }
    }
    return { success: false };
}

function getSpinOptions() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Options');
    var data = sheet.getDataRange().getValues();
    var options = [];
    for (var i = 1; i < data.length; i++) {
        options.push({ name: data[i][0], probability: parseFloat(data[i][1]) });
    }
    Logger.log(options);
    return options;
}

function recordSpin(username, result) {
    var historySheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SpinHistory');
    historySheet.appendRow([username, new Date(), result]);
}

function getRecentWins() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('SpinHistory');
    var lastRow = sheet.getLastRow();

    if (lastRow < 2) {
        return [];
    }

    var numRows = Math.min(5, lastRow - 1);  // Limit to last 5 records
    var range = sheet.getRange(Math.max(2, lastRow - numRows + 1), 1, numRows, 3);
    var data = range.getValues();

    // Convert the Date objects to strings
    data.forEach(function(row) {
        row[1] = Utilities.formatDate(new Date(row[1]), Session.getScriptTimeZone(), "MMM dd, yyyy HH:mm:ss");  // Format the date nicely
    });

    return data.reverse();  // Return the data in reverse order (most recent first)
}
