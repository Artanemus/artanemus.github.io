rh._.exports({"0":[["Login."]],"1":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    "],["\n\n    "],["\n\n    ","\n      ","\n    ","\n\n    ","\n      On start-up, SwimClubMeet (or any ofthe other support applications) will\n      display the login dialogue. This dialogue enables you to connection to\n      Microsoft's SQLSERVER.\n    ","\n\n    ","\n      It's here that you enter the server name. This can be a\n      ","named path"," (or\n      ","instance","). As shown in the image.\n    ","\n\n    ","\n      Another way the server name can be given is in the form of a IP address\n      and optionally a port number. (eg. 127.0.0.1:1433). Typically an IP\n      address is used if you are remotely accessing the database server. For\n      example, when using the ","SCM_Nominate",",\n      ","SCM_Marshal"," and\n      ","SCM_Timekeeper"," support applications. Remote\n      access will require a user name and password.\n    ","\n    ","\n      For ","OS Authentication"," to work, there are\n      prerequisite. SQL Server Express comes with the default Windows\n      Authentication mode when you first install it locally. With the Windows\n      authentication mode, SQL Server validates a user by their Windows username\n      and password. This means the password is not required once the user is\n      logged into the Windows system.\n    ","\n\n    ","A valid connection is required else the application can't run.","\n\n    "],["\n\n    ","\n      SCM SQL database has pre-assigned roles. They are SCM_Administrator,\n      SCM_Marshal and SCM_Guest. Each role has limited access to tables and\n      records.\n    ","\n\n    ","\n      SCM_Administrator can read and write to all tables in the SCM database.\n      (wit: a SCM superuser).\n    ","\n\n    ","\n      SCM_Marshal can read all but can only write to event, entrant and\n      nominate tables. SCM_Marshal can modify racetimes, entrant nominations,\n      disqualify and scratch entrants.\n    ","\n\n    ","\n      SCM_Guest can read specific tables, so as to see the night's events and\n      swimmers times and placing. They also can view the leader-board.\n    ","\n\n    ","\n      On install, a scmAdmin user and profile is created. It is a ssigned the\n      SCM_Administrator role. The account hasn't been assigned a password and\n      isn't activated. Use MSSMS to enable the account and set the password.\n    ","\n\n    ","\n    ","\n      ","\n        ","\n          ","\n          ","\n        ","\n        Note: For security reasons, don't be tempted to use the SQLSERVER\n        ","su","\n        account as quick short-cut to remote login. The SCM pre-defined user\n        schemas give you much greater security.\n      ","\n    ","\n\n    ","\n  \n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"2":[["Login."]],"4":[["login, authentication, server, ip, port, instance, SCM_Administrator, SCM_Marshal, SCM_Guest, Administrator, Guest"]],"5":[["\n      ","Login to SwimClubMeet database server - MS\n      SQLEXPRESS.\n    "],["\n      ","Pre-assigned remote user names.\n    "]],"id":"20"})