# AutoSmurf
Here a script which try to level and rush your characters, starting from nothing.
It should works with any class, assuming you've got at least one sorc in the team to teleport (teleportsorc) and one barb to bo (boer).
It's made to be use *with* AutoBuild

1. Copy all download-files into its correct directories ( maybe you need to copy your original files). 
e.g. you need to copy the /common/config.js to /common/ directory and cover the config.js.

2. Copy your leader bot char-config file and rename the XXXX1(leader) into your char name in /config/ directory.
 e.g. if your leader bot char is a sor and char name is ABC, you must copy /config/Sorceress.XXXX1(leader).js into 
 Sorceress.ABC.js, and other chars are same as the sor char. If your bot team includes more than one sor, 
 you must copy /config/Sorceress.XXXX1(follow).js into your char name same as your leader sor.
 
3. About on 580th line in char-config file, you must build your bot according to your building-template.
e.g. if your bot char is a blizzard sor, you can set Config.AutoBuild.Template = "Blizzard", 
because the Blizzard sor building file is in the config/builds directory.
And Other building files are prepeared which are Meteror-sor, ChainLightening-sor, BlessHammer-pal and Bo-barbarian.
Of course, if you don't like the building-file you can make building-file yourself.

4. The pickit file may be not suitable for you so that you can change it according to your mind. 
But I holp you keep the sell.nip and white1.nip which can help your bot to earn more money and build some runewords

5. The char config file sets that your bot uses the Merc and the Merc will be changed when bot reached act2 in normal and nightmare difficulty.
If you want to not use Mercs, you should set Config.UseMerc = false which locates on the 230th line in the char-config file. 

6. When your bot team completed Rite of Passage in Nightmare and Hell, the AutoSmurf was transfered into MF mode. But killing baal
was restricted by charLvls which are baalLvlnm and mfLvlHell.

7. When your bot team Lvl reaches baalLvlnm, the AutoSmurf will enter into Hell difficulty and you should use XXXX2 char-config
file so that you must write your char name in XXXX2 same as XXXX1. In XXXX2, Config.AutoEquip = false is default. That means your bot
 will be equiped manually by yourself since this time. 

8. You may reset the volues of line 16-30 in AutoSmurf.js. These volues restrict your bot level to begin its Quest. e.g. "tombsLvl = 30" (line 30) means
that your bot level must be more than 28 and your bot can begin to kill durial. Because the bot beginner only equips low quality items, 
if you want to reduce times of chickening, suggestion is not changing the default volues. The fact is that the default volues will keep your bot safety
but level-up speed is slow.

9. You do not need to give any golds to your bot when first running the AutoSmurf.

 Happy Smurfing!*