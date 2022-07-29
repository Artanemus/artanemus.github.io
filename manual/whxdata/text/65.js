rh._.exports({"0":[["scm_BoilerPlate"]],"1":[["\n    ","\n      ","\n      ","\n        ","\n          ","\n        ","\n        ","\n          ","\n            ","\n              ","\n              ","\n              ","\n                  SwimClubMeet","\n              ","\n            ","\n          ","\n        ","\n      ","\n    ","\n    ","\n    ","\n    ","\n    "],["\n\n    "],["\n    "],["\n    \n    Multiple language search\n    \n    ","RoboHelp search supports multiple languages at the project, topic, and paragraph level. For example, suppose users search for a German word in an English topic with an embedded German paragraph. If RoboHelp finds the German word, it displays the English topic with the German word highlighted.","\n    \n    "],["\n    \n    ","WebHelp and FlashHelp output in RoboHelp supports keyword search, which means a user query is broken into individual words and then each word is looked up in the project content. Breaking a search query into individual words is not easy for Chinese/Japanese/Korean languages because those languages do not clearly mark word boundaries.","\n    \n    ","The search functionality with WebHelp, FlashHelp, AIRHelp, and browser-based AIRHelp output recognizes CJK content in search queries, so that the results you get are more useful.note:    RoboHelp looks up every contiguous sequence of CJK characters as a whole and shows only those topics that match the entire search query in the same sequence.","\n    \n    ","To search for multiple CJK words, separate the words in the following ways:","\n    \n    ","•Use logical operators AND or OR","\n    \n    ","RoboHelp looks up each CJK word and then shows results depending on the operator used.","\n    \n    ","•Use space","\n    \n    ","RoboHelp does a phrase search if you use space to separate words.","\n    \n    ","note:    Support for CJK search does not impact indexing of content in RoboHelp Server.","\n    \n    "],["\n    \n    ","(WebHelp/Pro, FlashHelp/Pro) If you enable this feature, a search for \"log\" returns topics containing the words \"catalog\" and \"logarithm.\" Substring search takes longer than whole-string search.","\n    \n    ","note:    In merged projects, substring search works when enabled in both the master project and child projects.","\n    \n    "],["\n    \n    ","To search for a phrase, users need to enter it in quotation marks in the search box. If the search term is \"color swatch,\" RoboHelp returns all topics with the phrase \"color swatch\".","\n    \n    "],["\n    \n    ","(WebHelp, WebHelp Pro, and AIR Help) By default, RoboHelp performs OR search when a user types multiple words without enclosing them in quotation marks. This means that Robo­Help finds all topics that have any of the words specified in the Search box. If you select the Allow AND Search In Output option in SSL settings, RoboHelp performs AND search when a user types multiple words without enclosing them in quotation marks. RoboHelp finds only the topics that have all the words specified in the Search box. AND search can be used in combination with phrase search.","\n    \n    ","In SSL settings, you can also specify whether or not AND search should be enabled by default. In addition, when AND search is supported in the output, end users have the option to enable or disable it.","\n    \n    ","note:    In merged projects, child projects inherit the setting of the parent project. In projects with DUCC (content categories), the setting applies to all content categories.","\n    \n    "],["\n    \n    ","(WebHelp) Users can narrow down the scope of search by combining search terms using the Boolean operators AND, OR, and NOT.","\n    \n    "],["\n    \n    ","RoboHelp ranks search results based on their relevance. For example, if a word appears in the title of a topic, its rank is higher than the word in the topic keyword list. A topic with the word appearing in heading 1 ranks higher than the word appearing in heading 2 and is displayed first in the search results.","\n\n  \n\n","\n    ","\n      ","\n    ","\n  \n\n"]],"2":[["How to use RoboHelp Search."]],"3":[["robohelp, help, search"]],"4":[["robohelp, help, search"]],"5":[["RoboHelp search basics"]],"6":[["RoboHelp supports these features for search in the output:"],["Chinese/Japanese/Korean (CJK) search"],["Substring search"],["Phrase search"],["AND search"],["Boolean operators in search"],["Ranking of search results"]],"id":"65"})