rh._.exports({"0":[["Lane Grid"]],"1":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","/>\n  \n\n  \n    "],["\n\n    ","\n      ","\n        ","\n          This section details the lane grid. It discusses the different\n          functions of the ellipse button. How to manually assign a nominee to a\n          lane. How to nominate and assign an active member to a lane. How to\n          enter race times, disqualifications and scratch a swimmer..\n        ","\n      ","\n    ","\n    ","\n      ","\n        ","\n      ","\n    ","\n    ","\n      ","\n        ","\n          Summary of the columns displayed ...\n        ","\n        ","\n          ","\n          ","\n        ","\n        ","\n          ","\n            ","1. Lane","\n            ","A read-only field. The pool lane number.","\n          ","\n          ","\n            ","2. Entrant's Name","\n            ","\n              Here you have access to the ellipse button which allows you to\n              enter a nominee manually into a lane. Prefixed to the name is the\n              swimmers age and gender.\n            ","\n          ","\n          ","\n            ","3. race time","\n            ","\n              The swimmers time for the event, given by the Chief Timekeeper.\n            ","\n          ","\n          ","\n            ","4. TimeToBeat","\n            ","\n              A read-only field. A predicted race time for the entrant\n              calculated on demand by SCM.\n            ","\n          ","\n          ","\n            ","5.PersonalBest","\n            ","\n              A read-only field. The entrant's Personal Best for this event.\n            ","\n          ","\n          ","\n            ","6. Labels","\n            ","\n              S - Indicates if the entrant was scratched. (No show.) \n              ","D - Indicates if the entrant was disqualified.","\n              \n            ","\n          ","\n          ","\n            ","7. Buttons","\n            ","Lane Grid Buttons.","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    "],["\n    ","Selection in the lane grid is cell based.","\n    ","\n      ","TAB ","and\n      ","SHIFT+TAB"," are the most efficient way of\n      moving around the grid. ","TAB ","and\n      ","SHIFT+TAB"," key will only move to the cells\n      that are editable. Those cells are ","RaceTime",",\n      ","scratched"," and\n      ","disqualified",". Pressing\n      ","TAB "," at the end of a line will move you down\n      to the next lane. Pressing ","SHIFT+TAB "," at the\n      beginning of a line will move you up a lane.\n    ","\n    ","\n      Arrow keys will navigate across all cells. Use\n      ","UP",", ","DOWN",",\n      ","LEFT"," and ","RIGHT ",".\n      Left and right arrow keys don't navigate off the current lane.\n    ","\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        Info: These arrow keys are a little querky! You'll notice the left arrow\n        can gets stuck inside time editboxes. They also effect how checkboxes\n        are drawn. A developer's nightmare. Future releases will improve arrow\n        key performance. 👍\n      ","\n    ","\n\n    ","\n    "],["\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n              ","\n              Hover over the grid then\n              ","RMouse"," click to access the context\n              sensitive pop-up menu.\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    "],["\n\n    ","\n      ","\n        👉 To move the entrant, first select the lane, then use the short cut\n        keys ","CTRL+UP"," and\n        ","CTRL+DOWN",".\n      ","\n      ","\n        👉 Or ","RMouse"," click and use the pop-up menu,\n        then select ","Move Up"," or\n        ","Move Down"," from the menu.\n      ","\n      ","\n        👉 Or click either of the\n        ","Move Lane"," buttons to change the stack\n        order.\n      ","\n      ","\n        👉 Or click the ","Swap Lane"," button. This\n        function can also be found in the pop-up menu. More about the function\n        below.\n      ","\n    ","\n\n    ","\n      Moving entrants may be disabled, it depends on the status of the heat or\n      session.\n    ","\n    ","\n      It's possible to move an entrant into the previous or next heat just by\n      using the short-cut keys or buttons.\n    ","\n    ","Note: You can hover over any of the buttons for a helpful hint.","\n\n    ","\n    "],["\n    ","\n      It's in this cell that you enter a swimmer's time for racing the event.\n    ","\n    ","\n      Selecting the cell will automatically place it in edit mode with all its\n      contents selected. Just start typing. If you want to use the edit cursor,\n      then press ","ENTER ","or\n      ","F2 ","or\n      ","LMOUSE"," click the cell a second time and the\n      cursor will appear.\n    ","\n    ","\n      The ","RaceTime"," cell is special in that it uses a\n      template or editmask. When the cursor is enabled and you are using the\n      arrow keys to navigate you'll notice that the decimal period and colon\n      characters are skipped over. Only numerical keys are accepted. Only\n      minutes, seconds and milliseconds can be entered. Hours are not\n      considered.\n    ","\n    ","\n      Hold down ","SHIFT"," while using the arrow keys,\n      will select a portion of the time for editing.\n    ","\n    ","DOUBLE LMOUSE"," click to select all.","\n    ","\n      To zero the time (00:00.000), select all and then press\n      ","BACKSPACE"," .\n    ","\n    ","\n      Press ","ESC"," to clear what's been entered and\n      restore the previous known value. This doesn't exit you from edit mode.\n    ","\n    ","\n      To exit edit mode, press\n      ","ENTER, TAB, SHIFT-TAB, ARROW UP, ARROW DOWN",".\n      Or ","LMOUSE"," click outside the cell.\n    ","\n\n    ","\n      Entering an invalid time, for example 01:62.20, will be ignored. You can't\n      have 62 seconds! The race time will revert when you exit edit-mode -\n      ignoring your erroneous entry. Note: you aren't prompted with an error\n      message. Double check your race times.\n    ","\n    ","\n      The ","SCM_Timekeeper"," application can set a\n      swimmer's race time remotely.\n    ","\n    ","\n      Most human timekeepers aren't the best at recording 1000ths. The reason\n      SwimClubMeet accepts this precision is to prepare itself for electronic\n      touch-pads. A future addition.\n    ","\n\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        Info: The quickest method to enter a stack of entrant's race-times is to\n        start at the top. Check that the cell's contents is all selected...\n      ","\n      ","\n        Enter the value, including leading zeros. Remember, only numerical (eg.\n        If you want to enter 31 seconds and 41/100ths, do this, type 003141).\n      ","\n      ","Then arrow down. Rinse and repeat.","\n    ","\n\n    ","\n    "],["\n    ","\n      A read-only cell. The lane number is auto-assigned and sorted by SCM. The\n      number of lanes that appears in the grid is determined by settings found\n      in the menu bar.\n    ","\n    ","\n      ","Tools ➡ Options ➡ Club ➡ Number of lanes.","\n    ","\n\n    ","\n    "],["\n    ","\n      A read-only cell, calculated by SCM. It's the most likely time it'll for\n      the entrant to swim the event. Calculations are based on the members\n      historical data using the algorithm selected in options.\n    ","\n    ","\n      Auto-Build Heats uses TimeToBeat to build a list of swimmers, ordered\n      fastest to lowest. Swimmers without a TTB will be placed in the slowest\n      heat. If you would like to know more about how TTB works, then follow this\n      ","link",".\n    ","\n\n    ","\n    "],["\n    ","\n      This is a read only calculated field. The Personal Best is an entrants\n      best race time achieved for the event - up to but excluding the current\n      session.\n    ","\n\n    ","\n    "],["\n    ","\n      If checked this indicates the entrant has been disqualified by the race\n      marshall. The Marshal's application can set this remotely.\n    ","\n    ","\n      Press the ","SPACE"," key or mouse\n      ","LMOUSE"," click to toggle.\n    ","\n\n    ","\n    "],["\n    ","\n      If checked this indicates the entrant was scratched from the event. (A\n      no-show.) The Marshal's application can set this remotely.\n    ","\n    ","\n      Press the ","SPACE"," key or mouse\n      ","LMOUSE"," click to toggle.\n    ","\n\n    ","\n    "],["\n    ","To open the ","Swap Lane"," dialogue.","\n    ","\n      ","\n        👉 ","RMouse"," click and then select from the\n        pop-up menu ","Swap Lanes ...",".\n      ","\n      ","👉 Or click the ","Swap Lane"," button.","\n    ","\n    ","\n      It's not necessary to select the lane prior to opening the dialogue, but\n      it can be helpful as it will auto-fill the dialogue for you.\n    ","\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            ","\n              Swimmers can be swapped in the current heat or across any heat\n              that exists in the current selected event. You are permitted to\n              swap empty lanes.\n            ","\n            ","Use the arrow icons to alter to the heat and lane number.","\n            ","\n              👉 Click the ","Swap Lane"," button to\n              complete.\n            ","\n            ","\n              👉 Or click ","Cancel"," button to close\n              without changes.\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    "],["\n    ","\n      Empty lane will clear the swimmer from the lane and return the member to\n      the nomination stack, awaiting lane assignment.\n    ","\n    ","\n      The member is no longer an entrant, but remains a nominee for the event.\n    ","\n    ","You can perform the action by first selecting the lane and then ...","\n    ","\n      ","👉 Use the short cut key ","CTRL+X",".","\n      ","\n        👉 Or ","RMouse"," click and use the pop-up menu,\n        then select ","Empty Lane"," from the menu.\n      ","\n      ","👉 Or click the ","Empty Lane"," button.","\n    ","\n\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            ","A confirmation dialogue box will appear.","\n            ","\n              Press ","Yes"," to complete the process.\n              It's safe to empty an empty lane.\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    "],["\n    ","\n      ","Scrub Lane"," is more thorough. It'll clears\n      the member from the lane and removes the nomination reference for the\n      current selected event. If the member wishes to compete in the event, the\n      member will have to re-nominate.\n    ","\n    ","You can perform the action by first selecting the lane and then ...","\n    ","\n      ","👉 Use the short cut key ","CTRL+Del",".","\n      ","\n        👉 Or ","RMouse"," click and use the pop-up menu,\n        then select ","Strike Entrant"," from the menu.\n      ","\n      ","👉 Or click the ","Strike Entrant"," button.","\n    ","\n\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            ","A confirmation dialogue box will appear.","\n            ","\n              Press ","Yes"," to complete the process.\n            ","\n          ","\n        ","\n      ","\n    ","\n  \n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"2":[["Lane Grid"]],"3":[["lane, grid"]],"4":[["lane, grid, navigator, popup, menu, racetime, lane, number, timetobeat, ttb, personal, best, pb, disqualify, scratch, swap, empty, clear, scrub"]],"5":[["Navigating the lane grid"],["Lane grid ... pop-up menu."],["Moving Entrants in Lanes"],["Grid Column - RaceTime."],["Grid Column - Lane Number."],["\n      ","Grid Column - TimeToBeat (TTB).\n    "],["\n      ","Grid Column - PersonalBest (PB).\n    "],["\n      ","Grid Colum - Disqualified (D)\n    "],["\n      ","Grid Colum - Scratched (S)\n    "],["Swap Lanes"],["Empty Lane - Clear the Entrant."],["\n      Scrub Lane - Strike the Entrant and remove nomination.\n    "]],"id":"31"})