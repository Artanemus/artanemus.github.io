rh._.exports({"0":[["Connecting SCM"]],"1":[["connect"]],"2":[["connect, tcp, ip. wi-fi, router, configuration, manager, protocol, database, server"]],"3":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","\n    "],["\n    ","\n      ","\n        An outline to getting other devices and support applications connected\n        to the SwimClubMeet database.\n      ","\n    ","\n    "],["\n    ","\n      For the computer running the MS SQLEXPRESS database server, the following\n      must be done.\n    ","\n\n    ","\n    ","\n      ","👉 1. Enable TCP/IP for the database server.","\n      ","👉 2. Set a static port number for database server.","\n      ","👉 3. Enable remote logins for the database server.","\n      ","👉 4. Setup a database login.","\n      ","👉 5. Set the PC's firewall to allows communications on the port.","\n      ","👉 6. Test the connection.","\n    ","\n\n    ","\n      ","\n        Changing settings will require a restart of the database server, else\n        the changes are ignored.\n      ","\n    ","\n\n    "],["\n    ","\n      ","Prepare PC firewall to allow communications on the assigned port.","\n      ","\n        Remote logins must use IP address and port to connect to the database\n        server.\n      ","\n      ","Remote logins must use database server accounts. ie. scmAdmin.","\n    ","\n\n    "],["\n    ","\n      ","Ensure port forwarding is enabled for the assigned port.","\n      ","\n        Assign a static or lease a port forever for the router connection that\n        has the database server.\n      ","\n    ","\n\n    "],["\n\n    ","\n      ","\n        ","This guide assumes you have Windows 10 and are running SQLEXPRESS\n          2017 or 2019.\n        ","\n      ","\n      ","\n        In this example I'm using the\n        ","SQL Server Configuration Manager",". You can\n        also access these settings with the\n        ","Computer Management"," panel. You will have\n        to drill down into the tree to find the service. A database restart can\n        also be done from this panel.\n      ","\n    ","\n\n    ","\n\n    "],["\n    ","\n      Run the\n      ","SQL Server Configuration Manager","\n      application. This application is installed with Microsoft's SQLEXPRESS. To\n      locate this application use the windows start button and navigate to\n      Microsoft SQL Server folder.\n    ","\n    ","\n      If you are having problems finding it then type 'SQL Server' in the\n      windows search box (found on the task bar).\n    ","\n\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n\n            ","\n              The image shown here is TCP/IP for Protocols for SQLEXPRESS - in\n              the process of being enabled.\n            ","\n            ","\n              ","\n                ","\n                  Ensure ","Protocols for SQLEXPRESS"," is\n                  selected.\n                ","\n                ","\n                  Then select ","TCP/IP",".\n                ","\n                ","\n                  ","RMOUSE"," click and select\n                  ","Enabled"," from the popup menu.\n                ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    "],["\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n        ","\n          ","\n            ","\n            Next we have to set the port that the database uses in communicating\n            with a connection.\n            ","\n              This image shows how to access the properties of the TCP/IP\n              protocol.\n            ","\n\n            ","\n              ","\n                ","\n                  ","Protocols for SQLEXPRESS"," is\n                  selected.\n                ","\n                ","\n                  Then select ","TCP/IP",".\n                ","\n                ","\n                  ","RMOUSE"," click and select\n                  ","Properties"," from the popup menu.\n                ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            This image displays the properties dialogue. The protocol tab-sheet\n            is selected.\n            ","👉🏻 Ensure Enable is assigned Yes","\n            ","👉🏻 Ensure Listen All is assigned Yes","\n            ","\n              Please note, this port configuration is fairly lose in security.\n              Once you have everything connected and tested, you might review\n              your port assignments.\n            ","\n            ","👉🏻 Select the next tab-sheet, IP Address.","\n          ","\n        ","\n      ","\n    ","\n\n    ","\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            This image displays the IP Addresses. At the bottom of the list is\n            ","IPALL",".\n            ","\n              👉🏻 Ensure ","TCP Dynamic Ports"," is blank.\n            ","\n            ","\n              👉🏻 Assign ","1433"," into\n              ","TCP Port",". This is SQLEXPRESS default\n              port.\n            ","\n            ","\n              👉🏻 Press ","OK",", to save your changes.\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    "],["\n    ","\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            For these changes to be assigned, a restart is required.\n            ","This image shows the database server being restarted.","\n            ","\n              ","\n                ","First select SQL Server Services.","\n                ","Then select SQL Server (SQLEXPRESS).","\n                ","\n                  ","RMOUSE"," click and select\n                  ","Restart"," from the popup menu.\n                ","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    "],["\n\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            ","\n              Next step is to get the database server to accept remote logins.\n              Close up any apps and lets move on.\n            ","\n            ","Run Microsoft's SQL Server Management Studio application.","\n            ","\n              After successfully logging in, the next step is to select the\n              server name (top line).\n            ","\n            ","\n              Then ","RMOUSE"," click and select\n              ","Properties"," from the popup menu.\n            ","\n          ","\n        ","\n        ","\n          ","\n            ","\n            ","With the Server Properties dialogue open...","\n\n            ","\n            ","\n              ","\n                Select the ","Security tab",".\n              ","\n              ","\n                Then enable the radiobutton\n                ","SQL Server and Windows Authentication mode",".\n              ","\n              ","Press ","OK",".","\n            ","\n            ","\n            ","\n              Doing this will enable remote logins using the server's user\n              accounts. This change won't come into effect until you have\n              restarted the server.\n            ","\n          ","\n        ","\n      ","\n    ","\n\n    "],["\n    ","\n      Select the server name (top line). Right mouse, but this time select\n      'Restart' from the popup menu.\n    ","\n\n    ","\n    "],["\n\n    ","\n      ","\n        ","\n      ","\n      ","\n        ","\n          ","\n            ","\n            ","\n              The next task is to create a login. Then assign permissions so\n              that login can work in the SwimClubMeet database\n            ","\n            ","\n              SCM_BuildMeAClub has created some useful Roles and Schemas within\n              the SwimClubMeet database. These can be used to setup your remote\n              logins.\n            ","\n            ","\n              ","\n            ","            \n          ","\n        ","\n      ","\n    ","\n\n\n    ","Ensure the following are checked for schema SCM_Administrator","\n    ","\n      ","db_datareader","\n      ","db_datawriter","\n    ","\n\n    ","Ensure the new login is enabled.","\n    ","Close down MSSMS.","\n\n    ","\n    "],["\n    ","\n      If you are running a virus protection application, then SQLEXPRESS is\n      fire-walled. It cannot send data across the assigned port. You must\n      configure your virus protection application to port forward the assigned\n      port. In both directions, and for both protocols, TCP and UDP.\n    ","\n    ","\n      As every virus protection package is different, it's not possible to do a\n      step-by-step of the configuration procedure. For testing, you might\n      consider disabling your firewall. Then re-enable once the router, remote\n      PCs and database server are all talking.\n    ","\n\n    ","\n    "],["\n    ","Disable your firewall.","\n    ","Does the login work locally? Lets test that out.","\n    ","Close all apps. DO A REBOOT, ENSURE EVERYTHING IS INITIALIZED.","\n    ","Run SwimClubMeet and try this login...","\n    ","localhost\\SQLEXPRESS login:scmAdmin password:####","\n    ","\n      Did it work? Can you edit, delete, move stuff about? If it's worked - then\n      your scmAdmin user is up and running.\n    ","\n    ","\n      Now we'll attempt to use the Loop-Back feature to test an IP connection.\n      Disconnect from Wi-Fi. Remove ethernet cable, etc. (Restart PC?) Then try\n      this...\n    ","\n    ","IP address of db server - 127.0.0.1,1433 login:scmAdmin password:####","\n    ","\n      Note the comma after the IP address, then the static port number 1433. Did\n      it work? This isn't a solid test for IP connectivity - but it's a good\n      indicator all is well.\n    ","\n\n    "],["\n    ","Important notes: ","\n    ","\n      Wi-Fi routers will need 'Port Forwarding' enabled for the assigned port,\n      in both direction, for protocols TCP and UDP.\n    ","\n    ","\n      Your router acts as DNS and assigns IP addresses to each connection. Most\n      routers have a setting to 'lease' a fixed IP address to the same computer\n      on connection. The 'lease time' can be hours or 'forever'. Consider\n      setting the lease time for computer with the MS SQL server to 'forever'.\n      That way the login IP address will always be same.\n    ","\n    ","\n      As each router is different, sorry no help session, instead refer to your\n      router's manual..\n    ","\n  \n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"4":[["Connect TCP/IP for SCM"],["Outline - Step-by-Step"],["Detailed step-by-step guide ..."],["Router Configuration.."]],"5":[["On the computer(s) that will be connecting ..."],["Router, Wi-Fi considerations ..."],["\n      1. Enable TCP for the database server.\n    "],["\n      2. Set a static port number for the database server.\n    "],["\n      3. Enable remote logins for the database server..\n    "],["4. Setup a database login."],["\n      5. Set the firewall to allows communications on the port. (UDP, TCP)\n    "],["6. Test the connection."]],"6":[["Restart the database server."],["Restart the SQLEXPRESS server."]],"id":"75"})