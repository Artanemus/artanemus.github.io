rh._.exports({"0":[["BMAC_Login"]],"1":[["\n    "],["\n    ","\n      ","\n        ","SQLEXPRESS comes with the default Windows Authentication mode when you\n        first install it locally. With the Windows authentication mode,\n        SQLEXPRESS can validate a user by their Windows username and password.\n        This means the password is not required once the user is logged into the\n        Windows system.\n      ","\n      ","\n        The alternative method, the SQLEXPRESS authentication mode enables a\n        user login (which is different from a Windows login). To use SQLEXPRESS\n        authentication mode you must give a user name and password. The\n        SwimClubMeet database has a pre-installed user and schema, scmAdmin. Some\n        additional security setup at the root level is required before scmAdmin\n        can be used.\n      ","\n      ","\n        Also pre-installed are the roles, SCM_Administrator, SCM_Marshal and\n        SCM_Guest. These roles have special permission mappings on all the\n        SwimClubMeet tables. For example the role, SCM_Guest can only read\n        SwimClubMeet tables.\n      ","\n    ","\n    ","\n    ","\n      "],["\n      ","192.168.0.1:1433","\n      ","The above example uses an IP address and port number","\n      ","localHost\\SQLEXPRESS","\n      ","\n        In this example the 'localhost' is a hostname that refers to the local\n        machine currently making the request. On many computers, localhost is an\n        alias for the IP address 127.0.0.1. When a computer pings this IP\n        address, it is communicating with itself. The SQLEXPRESS after the\n        backslash refers to the registered server name or instance of the SQL\n        database server.\n      ","\n      ","MyComuterName\\SQLEXPRESS","\n      ","\n        The above example uses a computer name and server instance name. A\n        computer name is a unique identifier that is given to each computer. A\n        computer name can be used to identify the computer on a domain or\n        network.\n      ","\n      ","\n    ","\n  \n\n"]],"2":[["SCM_BuildMeAClub - Login."]],"5":[["Examples of Server IP or Named Path.:"]],"id":"12"})