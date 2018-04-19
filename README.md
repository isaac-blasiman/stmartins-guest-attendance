# stmartin-guest-attendance
Repository for the Saint Martin Meal Attendance App.

# Instructions

Welcome to the Saint Martin Meal Attendance App. This readme provides instructions for how to use the app to its fullest potential.

## Purpose

The purpose of the app is to provide a framework to collect signatures of guests. Guests signing in do not need to set up an account but can 
simply sign in by entering their signature. In some cases a checkmark or any other mark will do.

### Opening the Meal Attendance App

You may have a shortcut on your computer's desktop titled something like "meal attendance." If this is the case, you can click that shortcut. The
main page of the Meal Attendance App should come up on your web browser.

If you do not have such a shortcut on your desktop, open your web browser of choice (Chrome, Firefox, Internet Explorer, etc.). Type the word
"localhost" in the url box of your web browser. You may be tempted to type "localhost.com" in the url box. This is NOT the correct
web address, as only typing "localhost" will allow you to access the meal attendance app.

If your computer has had a server set up (see the section on the server setup), either of these two options should allow you to open the main page
of the Meal Attendance App.

### The Main Menu

When you first open the Meal Attendance App, you will be presented with two buttons, "Meal Attendance" and "View Signatures." The button labeled
"Meal Attendance" will lead to the portion of the app used for signing in guests, while the button labeled "View Signatures" will lead to the portion of
the app used for viewing the number of signatures that have been taken for a given date range.

### Signing Guests In

The Sign-In portion of the app (accessed by clicking the "Meal Attendance" button in the main menu) has two buttons, one labeled "adult" with
icons representing adults and another labeled "child" with icons representing children. If an adult is signing in, he or she should click the "adult"
status button. Similarly, if a child is signing in he or she should click the "child" status button.

After either the "adult" or "child" status button is clicked, the app redirects to a window where the guest can enter his or her signature. The guest
can either write his or her name on the screen (for touchscreen devices) or "draw" a signature using the mouse (for standard devices). If a mistake
is made, the guest signing can click the "X" button on the bottom left to erase his or her signature. Once the guest has finished signing, he or she
can click the green "checkmark" button on the bottom right to submit the signature. The app will automatically redirect to the sign in page (with
"adult" and "child" status buttons) after the signature is submitted.

### Viewing Signatures
The portion of the app dedicated to viewing signature data can be accessed by clicking the "View Signatures" button in the main menu. Staff can
use this page to see how many signatures have been entered into the system for a specific date range. The signature information is cross-tabbed
by meal status (breakfast or lunch) and guest status (adult or child) with totals for each attribute and a grand total of all signatures (for both adults
and children and for both times.

The "List of Signature Data" page has a form on the left side where the user can enter two dates. Data is collected from the time starting with the
starting date and ending with the end date.

To enter a starting date, click the "mm/dd/yyyy" text in the box next to "Enter a start date:" . A calendar
popup will appear. Click the date on which you want the data to start being colected. To change the month, use the small arrows on either side of
the month name (such as "January"). Or, click the month name (again, such as "January") to open a dialog that will let you change both the month
and the year. To enter an ending date, do the same with the "mm/dd/yyyy" text in the box next to "Enter an end date:" .

When you click the submit button, a cross-tab of data will appear. The columns show the number of signatures that have been entered for
breakfast and lunch, and the right-most column shows the total number of signatures for both breakfast and lunch. The rows show the number of
signatures for adult guests and child guests respectively, with the bottom row showing the sum total of both adult and child guests. The table cell
in the bottom right, then, is the grand total number of signatures signed during the time frame that was entered.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# Developer Notes

The branch send-signature-object has not been merged into master. This branch contains unfinished code that was intended to send a signature
object from the front-end to the MySQL database.

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
# Licensing and Legal

## Bootstrap

HTML pages built using an example template from Bootstrap at https://getbootstrap.com/docs/4.0/examples/starter-template/
Bootstrap is released under the MIT License. See the bootstrap-MIT-license file in the stmartins-guest-attendance directory
for the bootstrap license information. The information from that file is from https://github.com/twbs/bootstrap/blob/master/LICENSE

## signature_pad

The code in the directory "signature_pad-master" is copyrighted under the MIT License. The original creator
is Szymon Nowak (see https://github.com/szimek for his GitHub profile). See the signature_pad-MIT-License
file in the stmartins-guest-attendance\signature_pad-master directory for the signature_pad license information.
The code has been modified slightly.