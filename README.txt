ID CARD PRINT LAYOUT
====================

A small offline web application that resizes ID card front and back images
to an exact physical size and arranges copies on printable paper.

No installation, no web server, no internet connection, no libraries.
Your images are processed only inside your browser and are never uploaded.
Works on computers, tablets and phones.


1. FILES
--------
  index.html              The application - open this file
  assets/app-....js       Program code (one file, no libraries)
  assets/style-....css    Screen and print styles
  assets/jameel-noori-nastaleeq-....woff2
                          Urdu font (7 MB; loaded only for Urdu text).
                          Jameel Noori Nastaleeq by the Jameel Nastaleeq
                          Team, free of charge for Urdu lovers.
  README.txt              This file
  sw.js, manifest.webmanifest, icons/
                          Used only by the online version (they let it
                          work without internet after the first visit and
                          be installed like an app). Not needed offline.

Keep the "assets" folder next to index.html.
(Developers: the source code, tests and build setup are in the project
repository - see README.md there.)


2. HOW TO RUN
-------------
Offline (no internet needed):
1. Copy the folder to any local drive (or a USB stick).
2. Double-click "index.html", or drag it into a browser window.

Online: open the web address where the app is published (for example on
GitHub Pages). It works exactly the same; nothing is uploaded. After the
first visit the page also opens without an internet connection, and the
browser can install it like an app ("Install" / "Add to Home screen").
The version number is shown beside the title.

Recommended browsers: Google Chrome or Microsoft Edge (latest versions).
Recent Firefox and Safari versions also work. Very old Firefox versions
ignore CSS page sizes, so use Chrome or Edge if the paper size is wrong.
On phones and tablets printing depends on the browser's print support;
for exact sizes a computer with Chrome or Edge is the safest choice.


3. SCREEN LAYOUT
----------------
- Language and theme (title bar, next to "Reset all"):
    The language button switches between Urdu (اردو) and English. The app
    starts in Urdu; your choice is remembered in this browser. In Urdu the
    whole screen reads right to left and uses the Jameel Noori Nastaleeq
    font. Numbers and sizes stay in Western digits (85.6 × 54). The print
    output is exactly the same in both languages.
    A link can choose the language: index.html?lang=en or index.html?lang=ur
    The theme button cycles System -> Light -> Dark. "System" (the default)
    follows the light/dark setting of your computer or phone. Printing is
    always on white paper colours.
- Left menu (icons only, like Azure DevOps): one icon per section -
    1 Image Upload, 2 Card Size and Copies, 3 Layout Options,
    4 Paper, Margins and Spacing,
  plus Full window preview, Print and Messages. Hover an icon to see its
  name. On phones the menu is a bar at the bottom of the screen.
  "Print" prints directly (in manual double-sided mode it takes you to
  the "1 Fronts" / "2 Backs" buttons) and is greyed out
  until printing is possible. "Messages" opens the messages list; its
  badge shows the number and colour of the messages.
  The button at the bottom of the menu switches how the settings are
  shown (your choice is remembered next time):
    One section at a time - the settings are hidden so the
        preview has more room. Click a section icon to show just that
        section beside the menu; click the same icon again, or the X on
        the section, to close it. Image Upload is open at start.
    All sections (default) - every section is shown in the settings column.
        Clicking an icon scrolls to that section (opening it if it was
        collapsed) and the icon of the section you are looking at is
        highlighted while you scroll.
- Tooltips: hover over any button, field or option (or focus it with Tab,
  or press and hold on a touch screen) to see what it does.
- The title bar has two tabs: "Layout & Print" (everything below) and
  "Photo Editor" (section 7).
- The title bar shows a live summary: paper, card size, printable area,
  grid, copies per page, requested copies, pages and distribution.
- The Print Preview (5) stays on the right. Its toolbar has Front / Back,
  page navigation, zoom, the Print button(s) and a settings icon
  (sliders) that lists the exact print dialog settings to use. In manual double-sided
  mode there are two buttons: "1 Fronts" and "2 Backs".
  Hover a disabled Print button to see why printing is not possible yet.
- The floating button at the bottom right (always on top) holds all info,
  warning and error messages. Its colour shows the most serious one:
  red = error, amber = warning, green = all good; the badge shows how many
  messages there are. Click it to open the list. Click again, click X or
  press Esc to close.


4. DEFAULTS AND RESET
---------------------
Defaults: A4 portrait, standard ID card 85.6 x 54 mm, side-by-side pairs
(one-sided), 5 copies with margins and spacing distributed evenly, all
sections shown in the settings column, preview at 100%.

- Each settings section has a reset icon (circular arrow) in its title
  bar, next to the collapse arrow. It restores only that section:
    1 Image Upload            - removes both images (and the photos in
                                the Photo Editor)
    2 Card Size and Copies    - 85.6 x 54 mm, mm unit, Stretch, 5 copies
    3 Layout Options          - one-sided side-by-side pairs, default
                                duplex options, no back-page shift
    4 Paper, Margins, Spacing - A4 portrait, 10 mm margins, 5 mm
                                spacing (mm), even distribution on,
                                centring on, no guides or outlines
- "Reset all" in the title bar restores everything: images (and the
  Photo Editor photos) are removed,
  every setting, the zoom and the menu mode return to their defaults.
- Every reset first asks "Do you want to reset?" - choose Reset to
  continue or Cancel (or press Esc) to keep your settings.
- After a reset the layout is checked again exactly as after any manual
  change (card size, paper, margins, spacing, copies, back-page shift),
  so if the reset values do not fit with the other sections' settings
  you see the usual messages and printing stays disabled until fixed.


5. QUICK START
--------------
The fastest way (the green/blue "next step" bar under the image boxes
always shows what to do next, with the button for it):
  1. Click "Choose images" and select the images of your cards in one go
     (front first, then back), or drop them anywhere on the page.
     One or two images make one card straight away. More images open a
     window where you check the cards and their copies, then click
     "Add n cards".
  2. Card scans: click "Print" in the bar.
     Phone photos (not card-shaped): click "Crop in Photo Editor". The
     card is found automatically in both photos; check the corners, click
     "Use Front" (the back opens by itself), then "Use Back". You return
     to Layout & Print with Print ready - press Enter or click it.
  More cards later: click "Add cards" (see 6. IMAGES).

Step by step, with all options:
1. Add the card images (click the boxes or drag files onto them). The back
   is optional.
2. Check the card size (default: standard ID card, 85.6 x 54 mm).
3. Choose a layout mode.
4. Choose the paper size and orientation.
5. Adjust margins and spacing if needed.
6. Enter the number of copies. The blue line under Copies says what one
   copy gives in the chosen layout (see 10. LAYOUT MODES).
7. Check the preview and the messages button (bottom corner).
8. Click Print in the preview toolbar and apply the print settings
   (listed under the settings icon next to the Print button).


6. IMAGES
---------
- Supported formats: JPG / JPEG, PNG, WebP.
- Each box shows the file name, pixel size, file size and the approximate
  print resolution (DPI) at the current card size. 300 DPI or more gives
  sharp results; below 150 DPI a warning is shown.
- The icons next to "Front" / "Back" are: Edit (opens the image in the
  Photo Editor), Replace (choose a new file) and Remove.
- The round arrows button between the two images swaps front and back,
  for example when they were added the wrong way round. The photos in the
  Photo Editor are swapped too.
- Changing any setting never removes your images.
- Images are printed at their original resolution; the browser scales them
  directly to the card size, so no quality is lost.
- The back image is optional. A card with only a front is "one-sided":
    Front and back side by side: it takes one place instead of two, so
      one-sided cards sit next to each other (twice as many per page).
      When a front + back pair does not fit at the end of a row, the next
      one-sided copy fills that place, so no paper is wasted.
    Double-sided printing: the place behind a one-sided card stays blank.
      When no card has a back, only one side is printed and there is no
      need to turn the paper over.

Where chosen or dropped images go (the same rule for 1 card or many):
- An image chosen for, or dropped on, a Front or Back box goes into that
  box.
- All other images become cards:
    1 or 2 images = one card (front, back). It is added straight away. It
      first fills an empty card, or a missing front / back.
    3 or more images (or names of two different cards) open the "Arrange
      the images into cards" window.
  Images you add never overwrite a card that already has images; use the
  box (or its Replace icon) to change one image.

Several different cards (for example card 1 x 3, card 2 x 1, card 3 x 5):
- Select or drop all the images at once. In the window, each row is one
  card. The images are paired in order: 1st = front, 2nd = back, 3rd =
  front of card 2 ...
  If the file names say the side (for example ali_front.jpg and
  ali_back.jpg, or card-F.png and card-B.png), the front and back with the
  same name are paired instead, whatever order you chose them in, and
  every other image becomes a card of its own.
  Fix the pairing with one click per card:
    Scissors (under the swap button) - split the card: its back becomes a
      separate card. Example: 4 images where only card 1 has a back start
      as (1 front + 1 back), (2 front + 3 front); one click on the
      scissors of card 2 gives three cards.
    Link - join a one-image card with the next one-image card: the next
      image becomes its back.
  Drag an image onto another image to swap them (also between cards); a
  card left without images disappears. Drag a card's number to change the
  card order. Set the copies of each card with - / + or by typing; the
  "Every card" box sets all cards at once (- / + change every card by
  one). Then click "Add n cards".
- After that, the Image Upload section shows one row per card with its
  front, back, swap, scissors / link, copies, Edit and Remove. You can drag
  images and card numbers there, drop a file from your computer onto a
  box, and use the keyboard (Arrow Up / Down on a card number).
- "Every card" (beside "Add cards") sets the copies of all cards at once.
- "Add cards" adds more cards at any time. Removing the last card only
  empties it.
- Cards are printed one after another, in the card order, with as many
  copies as each card has. A card with 0 copies is skipped. The total
  is shown under the list and in the Copies field (which is locked while
  there are several cards).
- "Fill the last page" adds the empty places of the last page to the last
  card.
- Backs always land behind their own front, in every layout mode.
- Photo Editor: "Edit" on a row opens that card. With several cards, the
  editor shows "Card n of m" with previous/next arrows; after "Use Back"
  the next card that still needs cropping opens by itself. "Use all n in
  layout" sends the photos of every card at once.


7. PHOTO EDITOR
---------------
Open it with the "Photo Editor" tab in the title bar, the crop icon at
the top of the left menu, or the "Edit" button under an image in Image
Upload (this opens that image; an image made in the editor reopens with
all its edits).

Loading photos
  - Click "Load photos" or drop the photos onto the editor. Two photos
    at once: the first becomes the front, the second the back. One photo
    goes to the selected side (click the Front or Back box to select it;
    clicking an empty box opens the file chooser).
  - The round arrows button between the Front and Back boxes swaps them;
    the x on a box removes a photo.
  - Phone photos are shown the right way up (their rotation information
    is applied). HEIC photos cannot be opened by most browsers: on the
    phone share/export them as JPG.

Card detection (automatic)
  When a photo is loaded, the editor finds the card's 4 corners by itself.
  "Detect card" (above the photo) runs it again, e.g. after rotating.
  Undo returns to the plain photo. If the image is already a card-shaped
  scan, you are told that no crop is needed.
  - It switches to 4-corner crop and places the points on the card; the
    Result box shows the flattened card. Check the points and drag any
    that are off. Undo returns to the previous crop.
  - It works on cards with rounded corners and when a finger covers a
    corner, because it follows the straight card edges. It also copes
    with uneven light (one side of the photo darker), the card's shadow,
    and a card header band that is close to the background colour: it
    tries three ways of finding the card (colour against the background,
    colour against background that changes across the photo, and the
    card's outline) and keeps the result that agrees with the photo's
    straight edges.
  - It works best with the card on a plain background of a different
    colour or brightness. If it cannot find the card clearly (similar
    colours, very busy background, or the photo already shows only the
    card) it says so and leaves the crop for you to set.
  - Detection runs inside the browser.
    It needs no extra library. OpenCV.js (4.12) was tested as an add-on
    on 22 sample photos. It found no card that the built-in detector
    missed and was no more accurate, but it added 10.9 MB and about half
    a second, so it is not included.

Crop - two modes (toolbar above the photo)
  Rectangular     Drag the corners to resize, drag inside to move.
                  Arrow keys nudge the frame (Shift = 10x).
  4-corner        For photos taken at an angle: drag the 4 points onto
                  the 4 corners of the card. A magnifier appears while
                  dragging for exact placement. The card is flattened
                  into a straight rectangle.
  Proportions: "ID card" (the card size set in Layout & Print - default),
  "Photo's own proportions" or "Free". Zoom works as in the print
  preview: - / +, type a percentage (10 to 500), or pick from the list
  ("Fit to window", 25% ... 500%; 100% = actual photo pixels). The button
  after + shows the whole photo again. The mouse wheel zooms at the
  pointer. Drag outside the frame to move around when zoomed in.

Rotate
  Rotate left / right 90 degrees, flip horizontally / vertically, and
  "Straighten" (-45 to +45 degrees) for a slightly tilted card.

Adjust
  "Auto enhance" evens out dull or dark lighting and colour casts.
  Brightness, Contrast, Saturation, Sharpness and Black & white.
  Hold "Hold: before" (the eye button) to compare with the unadjusted photo.
  On narrower windows some toolbar buttons show only their icon; hover or
  press and hold to see the name.

Result: the finished image is shown at the top of the right-hand column
and stays visible while you scroll through the tools below it.

Undo / Redo (Ctrl+Z / Ctrl+Y) for every step; "Reset" per group, and
"Reset photo" (bottom left, under the photo) undoes every edit of the
photo you are editing.

Output (applies to both photos)
  Quality: 300 DPI (good), 600 DPI (high, recommended), 1200 DPI
  (maximum) or Full resolution (the photo's own pixels). The Result box
  shows the final pixel size and how much detail the photo really has;
  if it has less than the chosen DPI you are told that the image will be
  enlarged without adding detail.
  Rounded corners: trims the card corners (default radius 3.18 mm, the
  standard ID-1 card corner); the trimmed corners print white.

Sending to the layout
  The bar under the photo has "Use Front in layout", "Use Back in layout"
  and, when both photos are loaded, "Use both in layout". The blue one is
  the recommended next click, and the line above the buttons says what to
  do next. Each creates the finished image from the full-resolution photo
  and places it in Image Upload. A tick on a button means the layout
  already has the latest version of that photo. After "Use Front" the
  back photo opens by itself; once every loaded photo has been used the
  app switches to Layout & Print with the Print button selected.
  Several cards: "Use all n in layout" (shown when photos of 2 or more
  cards are loaded) sends every photo that is not in the layout yet, of
  every card, in one click, using the crop found automatically for the
  photos you have not opened. The arrow beside it offers "Only the fronts
  of all cards" and "Only the backs of all cards". With this button
  shown, the other buttons are shortened to "Use Front", "Use Back" and
  "Use both".


8. CARD DIMENSIONS
------------------
- Unit: choose Millimeters or Inches for the card size, custom paper size
  and back-page shift. Margins and spacing have their own unit setting
  (see section 11). Switching units only changes
  how values are displayed; the stored values are kept exactly, so switching
  back and forth never changes the layout.
- Width / Height: type values directly. Up/Down arrow keys adjust them
  (hold Shift for bigger steps). A comma is accepted as decimal separator.
- Maintain aspect ratio (the chain icon between width and height): when
  it is on (blue), changing one side updates the other.
  Untick it to set width and height independently.
- How the image fills the card:
    Stretch    - image fills the card exactly (default)
    Fit whole  - whole image visible, white edges where proportions differ
    Crop       - card fully covered, edges of the image are trimmed
- "Standard ID card" resets to 85.6 x 54 mm.
- "Match height to image proportions" keeps the width and sets the height
  to the uploaded image's proportions.
- The final printed size is shown in both mm and inches.


9. PAPER SIZE AND ORIENTATION
-----------------------------
- Choose from ISO A0-A10, ISO B0-B10, Letter, Legal, Junior Legal,
  Tabloid / Ledger, Executive, Statement, or "Custom size...".
  Each size is listed in mm and inches, e.g. "A4 (210 x 297 mm) - (8.27 x 11.69 in)".
- Custom size: enter width and height (10 mm to 5000 mm) and the unit.
- Orientation: Portrait or Landscape (also applied to custom sizes).
- Copies per page, rows, columns and pages are recalculated instantly.

To add another paper size (developers): add one line to
PAPER_SIZE_GROUPS in src/core/constants.js and rebuild, e.g.:
    { id: 'ENV_C5', name: 'C5 Envelope', width: 162, height: 229 },


10. LAYOUT MODES
---------------
What one copy means (the same is shown under the Copies field, and the
number of finished cards appears when it differs from the copies):
  Side-by-side pairs, one-sided   1 copy = the front and the back, printed
                                  side by side on one side of the paper.
  Side-by-side pairs, double-sided
                                  1 copy = a pair printed again (swapped)
                                  on the other side: it cuts into 2
                                  complete double-sided cards.
                                  5 copies -> 10 finished cards.
  Separate pages                  1 copy = 1 complete double-sided card
                                  (front, with its back printed behind it).
  A card without a back           1 copy = 1 card, in every layout.

A) Side-by-side pairs
   Each copy is printed as  Front | Back  next to each other, on one side
   of the paper. A pair always stays together. The horizontal spacing is
   used everywhere: between the front and back of a pair and between pairs,
   so every cut line is evenly spaced.

   "Side-by-side printing" offers:
     One-sided    - only the front side of the paper is printed.
     Double-sided - the reverse side is printed too: behind every front
                    image its back, and behind every back image its front.
                    Each pair therefore cuts into 2 complete double-sided
                    cards (e.g. 4 pairs = 8 finished cards). It uses the
                    same duplex options as separate pages (automatic long /
                    short edge or manual, rotate 180, fine alignment).

B) Separate pages (fronts, backs on the reverse)
   All fronts are printed on one page and the backs on the matching reverse
   page, at exactly the same physical positions, so each back lands directly
   behind its front. For more copies than fit on one page, a front page and
   a back page are produced for every batch (e.g. 10 copies at 8 per page:
   fronts 8 + 2, backs 8 + 2).

   The back page in the preview is shown exactly as it will be printed, i.e.
   mirrored. Use Front / Back in the preview toolbar to switch sides. The
   small labels F1/B1, F2/B2 ... (preview only) show which back belongs to
   which front.

The app calculates the maximum columns and rows from the paper size,
orientation, margins, spacing and card size, and never reduces the number
of copies you asked for. Copies that do not fit go onto extra pages
(e.g. 10 copies at 4 per page = 4 + 4 + 2 on 3 pages). No blank pages
are produced.


11. MARGINS, SPACING AND CUTTING GUIDES
--------------------------------------
- Top / Bottom / Left / Right margin: blank border between the paper edge
  and the cards. Printable area = paper size minus the margins.
- Horizontal spacing: gap between any two cards side by side (in
  side-by-side mode this includes the gap between a front and its back).
- Vertical spacing: gap between rows.
- Units: "Unit for all margins and spacing" sets all six fields to mm or
  inches at once. Each field also has its own mm/in selector, so units can
  be mixed (the main selector then shows neither). Changing a unit only
  changes how the value is shown - the actual size stays the same.
- Margin and spacing fields are number fields: use the up/down arrows (or
  the arrow keys) to change the value by 0.01. Values can have at most
  3 decimal places; extra decimals are rounded.
- An empty or negative margin/spacing value simply counts as 0 - no error
  is shown, and the field shows 0 when you leave it.
- Copies per row = how many cards fit across the printable width
  (n cards need n x card width + (n - 1) x spacing); in side-by-side mode
  each copy uses two cards. Rows are counted the same way vertically.
- Center the cards within the margins: leftover space is split equally on
  both sides. When off, cards start exactly at the top-left margin.
- Distribute margins and spacing evenly: the app fits as many copies as
  possible, fills them from the top-left corner, then makes all horizontal
  margins and gaps equal, and all vertical margins and gaps equal. While it
  is on, the six fields are dimmed and not used.
  A "Calculated values" box shows the resulting margins and spacing (in
  each field's unit, 3 decimals, rounded down so the cards always fit).
  "Copy to margin and spacing fields" puts these values into the fields.
  As soon as you change any margin or spacing value, even distribution
  switches off and your values are used - so copy, then fine-tune.
  A last page with fewer copies is spaced for its own copies.
  If the even spacing is under 3 mm you get a warning, because most
  printers cannot print that close to the paper edge.
- Print dotted cutting guides: a dotted line in the middle of every gap
  between cards (including between a front and its back in side-by-side
  mode). Each line runs across the whole page, edge to edge, so it is
  easy to line up on a ruler or paper cutter. No lines are drawn along the
  outer edges of the cards.
- Print a thin outline on each card edge: a light line on the card edge.


12. PRINTING FRONT AND BACK
    (separate pages, or side-by-side pairs set to Double-sided)
------------------------------------------------
Automatic duplex printer:
  1. Select "Automatic duplex".
  2. Choose "Flip on long edge" or "Flip on short edge".
  3. Click Print. Pages are sent in the order Front 1, Back 1, Front 2, ...
  4. In the print dialog turn on two-sided printing and choose THE SAME
     flip option as in the app.

  Note: with portrait paper, long-edge flip turns the sheet side to side;
  with landscape paper, long-edge flip turns it top to bottom. The app
  takes this into account automatically.

Manual double-sided (reinsert the paper):
  1. Select "Manual (reinsert paper)".
  2. Choose how you will turn the sheets over when putting them back:
     side to side (like a book page) or top to bottom (like a calendar).
  3. Click "1 Fronts" in the preview toolbar.
  4. Put the printed sheets back into the tray, turned over as chosen.
  5. Click "2 Backs".
  - If your printer delivers the printed stack in reverse order, tick
    "Print back pages in reverse order".

Getting perfect alignment:
  - Always test with one sheet of plain paper first and hold it up to a
    light.
  - If the backs come out upside down, tick "Rotate back pages 180 deg".
  - If the backs are slightly shifted (many printers feed with a small
    offset), open "Fine alignment of back pages" and enter the shift
    (up to +/-20 mm). Positive values move the backs right / down.
  - Keeping left/right margins equal and "Center the cards" ticked gives the
    most tolerant alignment.
  - "Print dotted cutting guides" and "Print a thin outline" help with
    cutting and checking alignment.

Print preview zoom:
  - The preview opens at 100% (actual size: 96 screen pixels per inch).
    The box shows the current zoom: type any value from 10% to 500%
    and press Enter. Use - / + to step, or the small arrow button next
    to the box to open the presets menu ("Fit to window", 25% to 500%);
    the current preset is ticked. The menu also works with the keyboard
    (Down arrow to open, arrows to move, Enter to pick, Esc to close).
    Scroll the preview area when the page is larger than the window.
  - Full window: the button after the zoom controls (or "Full window
    preview" in the left menu) makes the preview fill the whole browser
    window, with all zoom, page and print controls still available.
    To go back to the normal view click the highlighted "back to normal
    view" icon in the preview toolbar, or press Esc.
  - On-screen size can differ slightly from paper because of monitor
    resolution and Windows/macOS display scaling. The printed size is
    always exact.


13. RECOMMENDED BROWSER PRINT SETTINGS
-------------------------------------
  Paper size ........ the SAME size as selected in the app
  Scale ............. 100% / Actual size
  Fit to page ....... OFF  (also "Shrink to fit", "Fit to printable area")
  Margins ........... None (or Default - the app sets zero page margins;
                      your margins are already built into the layout)
  Headers / footers . OFF
  Two-sided ......... OFF for side-by-side pairs;
                      ON with the matching flip edge for automatic duplex
  Printer driver .... also disable any "fit", "scale" or "borderless
                      expansion" option in the printer's own preferences

In Chrome / Edge: open "More settings" in the print dialog to find Paper
size, Margins, Scale, Headers and footers, and Two-sided options.

For custom paper sizes the printer driver must also support that size;
create the custom size in the printer's preferences if it is not listed.

Ctrl+P also works: it prints the same accurate layout (in manual mode it
prints fronts and backs together, so use the Step 1 / Step 2 buttons
instead).


14. CHECKING PRINT ACCURACY
---------------------------
After printing, measure a card with a ruler. It must match the size shown
under "Final printed card size" (85.6 x 54 mm by default). If it is smaller,
a "fit" or scale option is still active in the browser or printer settings.


15. VALIDATION MESSAGES
-----------------------
  Green  - everything fits on one page.
  Yellow - more pages are needed, or an image is missing.
  Red    - a setting is invalid or the cards cannot fit; printing is
           disabled until it is fixed.
  Blue   - extra information and tips (e.g. a different orientation or
           layout would fit more cards).

  When the cards do not fit, the guidance bar names the problem and offers
  the fix as a button: "Use Separate pages (n per page)" when a front and
  its back side by side are too wide for the paper (e.g. 4 x 6 in photo
  paper), and "Turn the paper" when the other orientation fits. One click
  applies it.


16. TECHNICAL NOTES
-------------------
- All lengths are stored in millimetres internally (1 in = 25.4 mm exactly).
- The print output is generated with absolute millimetre positions and a
  dynamic CSS rule  @page { size: <width>mm <height>mm; margin: 0; }.
- The preview uses the same geometry as the print output, scaled to fit
  the screen; scaling the preview never changes printed sizes.
- Images are loaded with local object URLs, which are released when an
  image is replaced or removed.
- The layout calculation (src/core/layout-engine.js) is separate from the
  UI and printing code and has no DOM access.
