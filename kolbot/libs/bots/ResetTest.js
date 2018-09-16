var AutoPlayer = {
	Bosses: {
		// Act 1
		1: ["BloodMoor", "Den", "BloodRaven", "Cain", "Trist", "Countess", "SmithToAndy", "Andariel"],
		// Act 2
		2: ["Radament","Cube","Amulet","Staff","TheSummoner","Duriel"],
		// Act 3
		3: ["Eye", "Heart", "Brain", "Travincal", "Mephisto"],
		// Act 4
		4: ["Izual", "Hephasto the Armorer", "Grand Vizier of Chaos", "Infector of Souls", "Lord De Seis", "Diablo"],
		// Act 5
		5: ["Dac Farren", "Shenk the Overseer", "Eldritch the Rectifier", "Eyeback the Unleashed", "Sharptooth Slayer", "Thresh Socket", "Frozenstein", "Bonesaw Breaker", "Snapchip Shatter", "Pindleskin", "Nihlathak", "Korlic", "Madawc", "Talic", "Colenzo the Annihilator", "Achmel the Cursed", "Bartuc the Bloody", "Ventar the Unholy", "Lister the Tormentor", "Baal"],
	},

	InTown: function () {
		switch (me.act) {
			case 1:
				// introduce to warriv
				if (!me.getQuest(0, 0)) {
					Town.move("warriv");
					var warriv = getUnit(1, "warriv");
					if (warriv) {
						warriv.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// killed blood raven - get free merc woohoo
				if (me.getQuest(2, 1)) {
					Town.move("kashya");
					var kashya = getUnit(1, "kashya");
					if (kashya) {
						kashya.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// we killed andy lets move
				if (me.getQuest(6, 1) || me.getQuest(7, 0)) {
					if (me.diff === 0 && (me.getStat(12) > 16)) {
					Town.move("warriv");
					var warriv = getUnit(1, "Warriv");
					if(warriv) {
						warriv.openMenu();
						Misc.useMenu(0x0D36);
					}
					}
				}
				
				// cain is now safe
				if (me.getQuest(4, 1)) {
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
					Town.move("akara");
					var akara = getUnit(1, "akara");
					if (akara) {
						akara.openMenu();
						me.cancel();
						me.cancel();
					}					
				}
				
				// got mallus
				if (me.getItem(89)) {
					Town.move("charsi");
					var charsi = getUnit(1, "charsi");
					if (charsi) {
						charsi.openMenu();
						me.cancel();
						me.cancel();
					}
				}
					
				break;
				
			case 2:
				// jerhyn first talk
				if (!me.getQuest(8, 0)) {
					Town.move("jerhyn");
					var jerhyn = getUnit(1, "jerhyn");
					if (jerhyn) {
						jerhyn.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// killed radament
				if (me.getQuest(9, 1)) {
					Town.move("atma");
					var atma = getUnit(1, "atma");
					if (atma) {
						atma.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// got cube
				if (!me.getQuest(10, 6) && me.getItem(549)) {
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// got amu
				if (!me.getQuest(10, 4) && me.getItem("vip") && me.getItem(549)) {
					Town.move("drognan");
					var drognan = getUnit(1, "drognan");
					if (drognan) {
						drognan.openMenu();
						me.cancel();
						me.cancel();
					}
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
				}				
				// got staff
				if (!me.getQuest(10, 5) && me.getItem("msf") && me.getItem(549)) {
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				if (me.getItem("msf") && me.getItem("vip") && me.getItem("box")) {
							print("cubing staff");

				var amulet = me.getItem("vip");
				var staff = me.getItem("msf");

				if (!staff || !amulet) {
				return false;
				}
				Town.move("stash");
				if (!Town.openStash()) {
				Town.openStash();
				}
				Storage.Cube.MoveTo(amulet);
				Storage.Cube.MoveTo(staff);
				Cubing.openCube();
				transmute();
				delay(2000 + me.ping);
				Cubing.emptyCube();
				me.cancel();
					/*
					while (!getUIFlag(0x1A)) {
						sendPacket(1, 0x27, 4, me.findItem(-1, -1, me.findItems(-1, -1, 3) == false ? 1 : 3).gid, 4, me.getItem("box").gid);
						delay(me.ping);
					}
					if (me.getItem("msf").location != 6)
						Storage.Cube.MoveTo(me.getItem("msf"));
					if (me.getItem("vip").location != 6)
						Storage.Cube.MoveTo(me.getItem("vip"));
					var items = me.findItems(-1, -1, 6);
					while (items.length != 1)
					{
						sendPacket(1, 0x4f, 2, 0x18, 4, 0);
						delay(100);
						items = me.findItems(-1, -1, 6);
					}
					delay(2000);
					*/
				}
				
				// got staff
				if (!me.getQuest(10, 10) && me.getItem(91) && me.getItem(549)) {
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// killed summoner
				if (me.getQuest(13, 1)) {
					Town.move("cain");
					var cain = getUnit(1, NPC.Cain);
					if (cain) {
						cain.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// jerhyn final talk
				if (me.getQuest(14, 3)) {
					Town.move("palace");
					var jerhyn = getUnit(1, "jerhyn");
					if (jerhyn) {
						jerhyn.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// meshif final talk
				if (me.getQuest(14, 4)) {
					Town.move("meshif");
					var meshif = getUnit(1, "meshif");
					if (meshif) {
						meshif.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// meshif travel to a3
				if (me.getQuest(14, 0)) {
					Town.move("meshif");
					var meshif = getUnit(1, "meshif");
					if (meshif) {
						meshif.openMenu();
						Misc.useMenu(0x0D38);
					}
				}				
			
				break;
			
			case 3:
				// Spoke to Hratli 
				if (!me.getQuest(16, 0)) {
					//Town.move("hratli");
					var hratli = getUnit(1, "hratli");
					if (hratli) {
						hratli.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				// Free Lam Essen quest
				if (!me.getQuest(17, 0)) {
					Town.move("alkor");
					var alkor = getUnit(1, "alkor");
					if (alkor) {
						//sendPacket(1, 0x31, 4, alkor.gid, 4, 564);
						delay(me.ping*2);
						alkor.openMenu();
						me.cancel();
						me.cancel();
					}
				}
				
				
				break;
			
			case 4:
			
			break;
			
			case 5:
			
			break;
		}
	},
	
	BloodMoor: function () {
	if (me.diff === 0 && (me.getStat(12) < 4)) {
		if(!getWaypoint(1)){
		Pather.moveToExit(2, true, true);
		Attack.clearLevel();
		Pather.moveToExit(3, true, true);
		Pather.journeyTo(3);
		if(!getWaypoint(1))
			Pather.getWP(3);
			Attack.clearLevel();
		}
		Pather.journeyTo(3);
		Attack.clearLevel();
	}
		return true;
	},
	
	// Act 1
	Den: function () { //kills corepsifre if under lvl 8
		if (me.diff === 0 && (me.getStat(12) < 8)) {
			print("killing corpsefire for xp");
			Pather.journeyTo(8);
			Pather.moveToPreset(me.area, 1, 774, 0, 0, true, true);
			try { 
			Attack.clear(15, 0, getLocaleString(3319)); 	// Corpsefire
			} catch (e) {
			return false;
		}
		}
		if (!me.getQuest(1, 0)) {
			print("den not complete");
		if (me.diff === 0) {
			print("killing to wp for xp");
				Pather.moveToExit(2, true, true);
				Attack.clearLevel();
				Pather.moveToExit(3, true, true);
				//Attack.clearLevel();
				if(!getWaypoint(1))
					Pather.getWP(3);
				Pather.moveToExit(2, true, true);
		}
			Pather.journeyTo(8);
		for (i = 0; i < 3; i += 1) {
			print("clearing - try number " + i);
			Attack.clearLevel();
			delay(me.ping * 2 + 250);
		if (me.getQuest(1, 1)) { // Den is cleared. Return to Akara for a Reward.
		try { 
			var tpscroll = me.findItem(529);
			if (tpscroll && !me.inTown) {
				tpscroll.interact();
				Pather.usePortal (null, null);
			}
		}
			catch (e) {
			return false;
			}
			if (!me.inTown){
				Town.goToTown();
				Town.doChores();
			}
		}
		break;
		}
		}		
		return true;
	},
	
	
	"BloodRaven": function () {
	if (me.diff === 1 || me.diff === 2) //skips this in nightmare/hell
		return false;
	if (!me.getQuest(2, 0) || (me.getStat(12) < 10)) {
		print("killing bloodraven");
		Pather.journeyTo(17);
		Pather.moveToPreset(me.area, 1, 805,  0, 0, true, true);
		try { 
		Attack.clear(15, 0, getLocaleString(3111));
		} catch (e) {
			return false;
		}
		print("killing bonebreak for xp");
		Pather.journeyTo(18);
		Pather.moveToPreset(17, 5, 6, 5, 0);
		//Attack.clear(20);
		Attack.clearLevel();
		}
		if (!me.inTown){
		Town.goToTown();
		Town.doChores();
		}
		return true;
	},
	
	"Cain" : function () {
	if (!me.getQuest(4, 0)){ //if cain isn't done
	var tree, scroll, akara, stones, gibbet;
	if (!me.getQuest(4, 0) || (!me.getQuest(4, 4) && !me.getItem(525))) {
		// print("We need Scroll of Inifuss");
		Pather.journeyTo(4);
		if(!getWaypoint(1))
			Pather.getWP(4);
		Attack.clearLevel();
		Pather.journeyTo(5);
		Pather.getWP(5);
		if (!Pather.moveToPreset(me.area, 2, 30, 5, 5)) {
			throw new Error("Failed to move to Tree of Inifuss");
		}
		try { 
		Attack.clear(15, 0, getLocaleString(2873));
		} catch (e) {
			return false;
		}
			tree = getUnit(2, 30);
			Misc.openChest(tree);
			delay(300);
			scroll = getUnit(4, 524);
			Pickit.pickItem(scroll);
			Town.goToTown();
		print("We need Key to the Cairn Stones");
		Town.move("akara");
		akara = getUnit(1, "akara");
		akara.openMenu();
		me.cancel();
		if (me.getItem(525)) {
		me.getItem(525).interact();
		delay(2000);
		me.cancel();
		}
	}
	Pather.useWaypoint(4);
	Precast.doPrecast(true);
	if (!Pather.moveToPreset(me.area, 1, 737, 0, 0, false, true)) {
		throw new Error("Failed to move to Rakanishu");
	}
	if (!me.getQuest(4, 4)) {
		stones = [getUnit(2, 17), getUnit(2, 18), getUnit(2, 19), getUnit(2, 20), getUnit(2, 21)];
	}
	Attack.clear(15, 0, getLocaleString(2872)); // Rakanishu
	while (!me.getQuest(4, 4)) {
		stones.forEach(function (stone) {
			if (!stone.mode) {
				Attack.securePosition(stone.x, stone.y, 10, me.ping * 2);
				Misc.click(0, 0, stone);
			}
		});
	}
	while (!Pather.usePortal(38)) {
		Attack.securePosition(me.x, me.y, 10, 1000);
	}
	Pather.moveTo(me.x, me.y + 6);
	gibbet = getUnit(2, 26);
	if (!gibbet.mode) {
		if (!Pather.moveToPreset(me.area, 2, 26, 0, 0, true, true)) {
			throw new Error("Failed to move to Cain's Gibbet");
		}
		Misc.openChest(gibbet);
	}
	Attack.clearLevel(0);
	if (!me.inTown){
		Town.goToTown();
		Town.doChores();
	}
	}
	return true;
	},
	
	
	"Trist": function () {
		if (me.diff === 0 && (me.getStat(12) < 15)){
		Pather.useWaypoint(4);
		Precast.doPrecast(true);
		if (!Pather.moveToPreset(me.area, 1, 737, 0, 0, false, true)) {
		throw new Error("Failed to move to Rakanishu");
		}
		Attack.clear(15, 0, getLocaleString(2872)); // Rakanishu - Trist
		while (!Pather.usePortal(38)) {
			Attack.securePosition(me.x, me.y, 10, 1000);
		}
		Attack.clearLevel(0);
		Town.goToTown();
		Town.doChores();
		Pather.journeyTo(5); // kills darkwood tree guys for XP
		Pather.moveToPreset(me.area, 2, 30, 5, 5, true, true);
		try { 
		Attack.clear(15, 0, getLocaleString(2873));
		} catch (e) {
			return false;
		}
		Town.doChores();
		Pather.journeyTo(9); 		//kills the cave for XP - kinda risky/chickens 
		Pather.moveToPreset(me.area, 1, 736, 0, 0, true, true);
		Attack.clearLevel(25);
		//Attack.clear(15, 0, getLocaleString(2871));
		Pather.journeyTo(13);
		Attack.clearLevel(25);
		Town.goToTown();
		Town.doChores();
		}
	},
	
	"Countess": function () {
		if (me.diff === 1 || me.diff === 2) //skips this in nightmare/hell
			return false;
		if (me.diff === 0 && (me.getStat(12) < 15)){
		Pather.journeyTo(25);
		var poi = getPresetUnit(me.area, 2, 580);
		if (!poi) {
			throw new Error("Failed to move to Countess (preset not found)");
		}
		switch (poi.roomx * 5 + poi.x) {
			case 12565:
				Pather.moveTo(12578, 11043);
				break;
			case 12526:
				Pather.moveTo(12548, 11083);
				break;
		}
		Attack.clear(20, 0, getLocaleString(2875));
		}
		return true;
	},
	
	"SmithToAndy": function () {
	if (me.diff === 0){
		Pather.journeyTo(33);
		Pather.moveTo(20047, 4898);
		Attack.clear(15, 0, getLocaleString(2878));
		Pather.journeyTo(28);
		Pather.moveToPreset(28, 2, 108, 5, 5, true, true);
		if (!Attack.clear(15, 0, getLocaleString(2889)))
			print("fail: " + me.area);
		if (!me.getQuest(3, 1) && !me.getItem(89)) {
			var rack = getUnit(2, "Malus");
			if (!rack) Pather.moveToPreset(28, 2, 108, 5, 5, true, true);
			rack = getUnit(2, "Malus");
			Misc.openChest(rack);
			delay(200);
			while (!Pickit.pickItem(getUnit(4, 89))) delay(100);			
		}
		return Town.goToTown();
	}
	},
	
	Andariel: function () { //less than lvl 16 or needs quest will kill andy.
		if ((me.getQuest(6, 13)	|| me.getQuest(6, 12) || me.getQuest(6, 0)) || me.getStat(12) < 16){
		Pather.journeyTo(37);
		Pather.moveTo(22549, 9520);
		var i, akara, potions;
		print("Buying Antidote Potions");
		Town.goToTown();
		Town.doChores();
		Town.move("akara");
		akara = getUnit(1, "akara");
		if (akara) {
			akara.startTrade();
			potions = akara.getItem(514);
			for (i = 0 ; i < 3 ; i += 1) {
				potions.buy();
			}
			me.cancel();
		}
		Town.move("portalspot");
		potions = me.findItems(514, -1, 3);
		if (potions.length) {
			for (i = 0 ; i < potions.length ; i += 1) {
				potions[i].interact();
				delay(me.ping * 2 + 500);
			}
		}
		Pather.usePortal(37, null);
		//Pather.moveTo(22549, 9520);
		Attack.clear(15, 0, getLocaleString(3021));
		Town.goToTown();
		Town.move("warriv");
			var warriv = getUnit(1, "warriv");
			if (warriv) {
				warriv.openMenu();
				me.cancel();
				me.cancel();
				warriv.openMenu();
				Misc.useMenu(0x0D36);
			}
		Town.move("jerhyn");
			var jerhyn = getUnit(1, "jerhyn");
			if (jerhyn){
				jerhyn.openMenu();
				me.cancel();
				me.cancel();
			}
		quit();
		}
		return true;
	},
	
	// Act 2
	
	"Radament": function () {
		if (me.getQuest(9, 0))
			if (me.diff === 0 && (me.getStat(12) > 25))
				return false;
		Pather.journeyTo(49);
		Pather.moveToPreset(me.area, 2, 355, 0, 0, true, true);
		try { 
			Attack.clear(15, 0, getLocaleString(2879));
		} catch (e) {
			return false;
		}
		delay(5000);
		
		var book = getUnit(4, 552);
		
		if (book) {	
			book = getUnit(4, 552);
			Pickit.pickItem(book);
		}
		return Town.goToTown();
	},
		
	"Cube": function () { //GETS CUBE
		if (me.diff === 0 && (me.getStat(12) < 25)) {
		print("Under 20 - Creeping for XP");
		Pather.journeyTo(59);
		Attack.clearLevel(0);
		Pather.journeyTo(60);
		Pather.moveToPreset(me.area, 2, 354, 0, 0, true, true);
		try { 
			Attack.clear(15, 0, getLocaleString(2880));
		} catch (e) {
			return false;
		}
		if (!me.getItem(549)) {
			Pather.moveToPreset(me.area, 2, 354);
			Misc.openChest(getUnit(2, 354));
			
			while (!getUnit(4, 549))
				delay(100);
			cube = getUnit(4, 549);
			Pickit.pickItem(cube);
		}		
		}
		return true;
	},
	
	"Amulet": function () {
	if (me.diff === 0 && (me.getStat(12) < 25)) {
		print("Under 20 - Beetleburst for XP");
		Pather.journeyTo(43);
		Pather.moveToPreset(me.area, 1, 747, 0, 0, true, true);
		try { 
			Attack.clear(15, 0, getLocaleString(2882));
		} catch (e) {
			return false;
		}		
		}
		if (me.getQuest(10, 4))
			if (me.getItem(549))
				return false;
		print("Getting Amulet");
		Pather.journeyTo(61);
		Pather.moveTo(15044, 14045);		
		Attack.clear(15, 0, getLocaleString(2881));
		
		if (!me.getItem("vip")) {
			Pather.moveToPreset(me.area, 2, 149);
			Misc.openChest(getUnit(2, 149));
			
			while (!getUnit(4, 521))
				delay(100);
			
			amu = getUnit(4, 521);
			
			Pickit.pickItem(amu);
		}
		return true;
	},
	
	"Staff": function () {
		if (me.getQuest(10, 5))
			if (me.getItem(549))
				return false;
		print("Getting Staff");
		//Pather.teleport = true;
		while(!Pather.journeyTo(64)) delay(100);
		Pather.moveToPreset(me.area, 2, 356, 0, 0, true, true);		
		Attack.clear(15, 0, getLocaleString(2884));
		//Pather.teleport = false;
		if (!me.getItem("msf")) {
			Pather.moveToPreset(me.area, 2, 356);
			Misc.openChest(getUnit(2, 356));
			
			while (!getUnit(4, 92))
				delay(100);
			
			staff = getUnit(4, 92);
			
			Pickit.pickItem(staff);
		}
		return true;
	},
	
	"TheSummoner": function () {
		if (me.getQuest(13, 0))
			if (me.getItem(549))
				return false;
		print("The Summoner");
		//Pather.teleport = true;
		if (!Pather.moveToExit(50, true, false)) { // Only try up to three times to enter the Palace. Guard might be blocking the entrance.
				throw new Error("AutoSmurf.travel: Failed to enter the Palace in Act 2.");
		}
		Pather.journeyTo(74);
		Pather.getWP(74);
		var journal = getPresetUnit(74, 2, 357);
			if (!journal) {
				throw new Error("AutoSmurf.summoner: No preset unit in Arcane Sanctuary.");
			}
			while (getDistance(me.x, me.y, journal.roomx * 5 + journal.x - 3, journal.roomy * 5 + journal.y - 3) > 10) {
				try {
					Pather.moveToPreset(74, 2, 357, -3, -3, true, true);
				} catch (e) {
					print("Caught Error.");
					print(e);
				}
			}
		try {
			Attack.kill(250);
		} catch (e) {
			Attack.clear(20);
		}
		Pickit.pickItems();
		Pather.moveToPreset(74, 2, 357, -3, -3, Config.ClearType);
		journal = getUnit(2, 357);
		for (i = 0; i < 5; i += 1) {
			if (journal) {
				sendPacket(1, 0x13, 4, journal.type, 4, journal.gid);
				delay(1000);
				me.cancel();
			}
			if (Pather.getPortal(46)) {
				delay(4000);
				Pather.getWP(46);
				break;
			}
		}
		if (i === 5) {
			throw new Error("summoner failed");
		}
		/*
		Pather.moveToPreset(me.area, 2, 357, 0, 0, true, true);
		Attack.clear(15, 0, getLocaleString(2887));	
		//Pather.teleport = false;
		if (!me.getQuest(12, 0)) {
			Pather.moveToPreset(me.area, 2, 357, 0, 0, true, true);
			for (var i = 0; i < 5; i += 1) {
				var unit = getUnit(2, 357);

				Misc.click(0, 0, unit);
				delay(1000);
				me.cancel();

				if (Pather.usePortal(46)) {
					delay(2000);
					Pather.getWP(46);
					break;
				}
			}
		}*/
		return true;
	},
	
	"Duriel": function () {	
		if ((me.getStat(12) < 25)) {
			print("Starting Tombs");
				Pather.journeyTo(46);
			for (var i = 66; i <= 72; i += 1) {
				if ((me.getStat(12) > 24))
					break;
			if (i !== getRoom().correcttomb) {
				while (me.area === 46) {
					print("Tombing");
					Pather.moveToExit(i, false, Config.ClearType); // Move to tomb, don't go in.
					Pather.moveToExit(i, true, Config.ClearType); // Go in the tomb.
				}
				Attack.clearLevel(0);
				chest = getPresetUnit(me.area, 2, 397);
				for (var j = 0 ; j < 5 ; j += 1) {
					chest = getPresetUnit(me.area, 2, 397);
					if (chest) {
						break;
					}
					delay(me.ping * 2 + 250);
				}
				if (chest) {
					while (getDistance(me.x, me.y, chest.roomx * 5 + chest.x, chest.roomy * 5 + chest.y) > 10) {
						try {
							Pather.moveToPreset(me.area, 2, 397, 0, 0, Config.ClearType, false);
						} catch (e) {
							print("Caught Error.");

							print(e);
						}
						delay(me.ping * 2 + 250);
					}

					chest = getUnit(2, "chest");
					Misc.openChest(chest);
					Pickit.pickItems();
				//	Attack.clear(40);
				}
				Town.goToTown();
				Pather.useWaypoint(46);
				}
			}
		}
		Pather.journeyTo(46);
		Pather.journeyTo(getRoom().correcttomb);
		Pather.moveToPreset(me.area, 2, 152, 0, 0, true, true);
		Attack.clear(20);

	if (!me.getQuest(10, 0)) {
		print("place staff");

		var staff, item, orifice,
			tick = getTickCount(),
			preArea = me.area;

		Town.goToTown();
		Town.move("stash");
		print("StafftoInventory");
		var qitem,
		items = [],
		item = me.getItem(-1, 0);
		if (!Town.openStash()) {
			Town.openStash();
		}
		if (item) {
			do {
				if ( item.classid === 91 || item.classid === 174 || item.classid === 553 || item.classid === 554)	 {
					items.push(copyUnit(item));
				}
			} while (item.getNext());
		}
		for (qitem = 0; qitem < items.length; qitem += 1) {
			if ( Storage.Inventory.CanFit(items[qitem])) {
				Storage.Inventory.MoveTo(items[qitem]);
			}
		}
		delay(1000);
		me.cancel();
		Town.move("portalspot");
		if (!Pather.usePortal(preArea, me.name)) {
			throw new Error("placeStaff: Failed to take TP");
		}
		delay(2000);
		orifice = getUnit(2, 152);
		if (!orifice) {
			return false;
		}
		Misc.openChest(orifice);
		staff = me.getItem(91);
		if (!staff) {
			if (getTickCount() - tick < 500) {
				delay(500);
			}
			return false;
		}

		staff.toCursor();
		submitItem();
		delay(2000 + me.ping);

			/*
			if (me.getItem(91).location != 3) {
				while (!getUIFlag(0x1A)) {
					//sendPacket(1, 0x27, 4, me.findItem(-1, -1, me.findItems(-1, -1, 3) == false ? 1 : 3).gid, 4, me.getItem("box").gid);
					delay(me.ping);
				}
				if (!Storage.Inventory.MoveTo(me.getItem(91)))
					return false;
			}
			orifice = getUnit(2, 152);
			if (!orifice) {
				return false;
			}
			Misc.openChest(orifice);
			staff = me.getItem(91);
			if (!staff) {
				return false;
			}
			staff.toCursor();
			submitItem();
			while(!getUnit(2, 100))
				delay(100);
			*/
		}
		
				for (i = 0 ; i < 30 ; i += 1) {
					delay(1000);
					var hole =  getUnit(2, 100);
					delay(1000);
					Attack.clear(20);
					if (hole) {
						Precast.doPrecast(true);

						Pather.useUnit(2, 100, 73);

						break;
					}
				}
		
		try { 
			if (Attack.clear(15, 0, getLocaleString(3054)))
				while (!me.getQuest(14, 5)) // killed duriel first time stay in next game (quest drop?)
					delay(100);
		} catch (e) {
			return false;
		}
		
		// talked with tyrael
		if (!me.getQuest(14, 3)) {
			Pather.teleport = false;
			Pather.moveTo(22579, 15706);
			Pather.moveTo(22577, 15649, 10);
			Pather.moveTo(22577, 15609, 10);
			
			var tyrael = getUnit(1, "tyrael");

			if (!tyrael) {
				return false;
			}
			
			while (!me.getQuest(14, 3)) {
				if (getDistance(me, tyrael) > 3) {
					Pather.moveToUnit(tyrael);
				}
				
				tyrael.openMenu();
				me.cancel();
				me.cancel();
			}
		}
		
		return Town.goToTown();
	},
	
	"Eye": function () {
		print("Getting Eye");
		if (me.getItem(553) || me.getItem(174) || me.getQuest(18, 0))
			return false
		Pather.teleport = true;
		Pather.journeyTo(76);
		Pather.teleport = false;
		Pather.journeyTo(85);
		//Pather.moveToPreset(me.area, 2, 407);
		var presetUnit = getPresetUnit(85, 2, 407);
		if (!presetUnit) {
				return false;
		}
		Pather.moveTo(presetUnit.roomx * 5 + presetUnit.x, presetUnit.roomy * 5 + presetUnit.y, 15, false);
		//this.getQuestItem(553, 407);
		Town.goToTown();
		if (me.getItem(553)) {
			Town.move("stash");
			delay(me.ping);
			Town.openStash();
			Storage.Stash.MoveTo(me.getItem(553));
		}
		Pather.teleport = false;
		return true;
	},
	
	"Brain": function () {
		print("Brain");
		if (me.getItem(555) || me.getItem(174) || me.getQuest(18, 0))
			return false;

		Pather.teleport = true;
		Pather.journeyTo(78);
		Pather.journeyTo(88);
		Pather.teleport = false;
		Pather.journeyTo(89);
		Pather.journeyTo(91);
			//Pather.moveToPreset(me.area, 2, 406);
			var presetUnit = getPresetUnit(91, 2, 406);
		if (!presetUnit) {
				return false;
			}
			Pather.moveTo(presetUnit.roomx * 5 + presetUnit.x, presetUnit.roomy * 5 + presetUnit.y, 15, false);
		Town.goToTown();
		if (me.getItem(555)) {
			Town.move("stash");
			delay(me.ping);
			Town.openStash();
			Storage.Stash.MoveTo(me.getItem(555));
		}
		return true;
	},
	
	"Heart": function () {
		print("getting heart");
		if (me.getItem(554) || me.getItem(174) || me.getQuest(18, 0))
			return false;
		Pather.teleport = true;
		Pather.journeyTo(80);
		Pather.journeyTo(92);
		Pather.journeyTo(93);
		Pather.teleport = false;
	
		//Pather.moveToPreset(me.area, 2, 405);
		var presetUnit = getPresetUnit(93, 2, 405);
			if (!presetUnit) {
				return false;
			}
		Pather.moveTo(presetUnit.roomx * 5 + presetUnit.x, presetUnit.roomy * 5 + presetUnit.y, 15, false);
		Town.goToTown();
		if (me.getItem(554)) {
			Town.move("stash");
			delay(me.ping);
			Town.openStash();
			Storage.Stash.MoveTo(me.getItem(554));
		}
		return true;
	},
	
	"Book": function () { 
		print("Lam Essen's Tome");
		var i, alkor, target;
			if (!Pather.moveToExit(94, true) || !Pather.moveToPreset(me.area, 2, 193)) {
				throw new Error("Lam Essen quest failed");
			}
			if (Pather.teleport === true) {
				this.clearToExit(80, 94, false);
				if(!Pather.moveToPreset(me.area, 2, 193, 0, 0, 0)){
					Pather.moveToPreset(me.area, 2, 193);
				}
				
			}
			target = getUnit(2, 193);
			Misc.openChest(target);
			delay(300);
			target = getUnit(4, 548);
			Pickit.pickItem(target);
			Town.goToTown();
		Town.move("alkor");
		target = getUnit(1, "alkor");
		while(target && target.openMenu()) {
			me.cancel();
			if (me.getQuest(17, 0)) { // Have completed Lam Esen's Tome.
				break;
			}
		}
		return true;
	},
	
	"Travincal": function () {
	var i, orgX, orgY, coords;

	this.buildList = function (checkColl) {
		var monsterList = [],
			monster = getUnit(1);
		if (monster) {
			do {
				if ([345, 346, 347].indexOf(monster.classid) > -1 && Attack.checkMonster(monster) && (!checkColl || !checkCollision(me, monster, 0x1))) {
					monsterList.push(copyUnit(monster));
				}
			} while (monster.getNext());
		}
		return monsterList;
	};
	Pather.journeyTo(83);
	//Pather.useWaypoint(83);
	Precast.doPrecast(true);
	orgX = me.x;
	orgY = me.y;

	if (me.getSkill(143, 0) && !me.getSkill(54, 0) && !me.getStat(97, 54)) {
		coords = [60, -53, 64, -72, 78, -72, 74, -88];

		for (i = 0; i < coords.length; i += 2) {
			if (i % 4 === 0) {
				Pather.moveTo(orgX + coords[i], orgY + coords[i + 1]);
			} else {
				Skill.cast(143, 0, orgX + coords[i], orgY + coords[i + 1]);
				Attack.clearList(this.buildList(1));
			}
		}

		Attack.clearList(this.buildList(0));
	} else {
		Pather.moveTo(orgX + 101, orgY - 56);
		// Stack Merc
		if (me.classid === 4 && !me.getSkill(54, 1) && me.gametype === 1) {
			Pather.moveToExit([100, 83], true);
		}

		if (Config.MFLeader) {
			Pather.makePortal();
			say("council " + me.area);
		}
		Attack.clearList(this.buildList(0));
	}
	Pickit.pickItems();
	Town.goToTown();
	if (!me.getQuest(18, 0)) { // I am the Teleporting Sorc and I have not completed Khalim's Will yet. Will smash the orb while the others keep the area clear.
		//this.getQuestItem(173); // Pick up Khalim's Flail.
			Pather.useWaypoint(83);
			Precast.doPrecast(true);
			orgX = me.x;
			orgY = me.y;
			Pather.moveTo(orgX + 129, orgY - 92, 5, false);	// (<3 kolton)
			Town.goToTown();22
			
		var eye = me.getItem(553),
			heart = me.getItem(554),
			brain = me.getItem(555),
			flail = me.getItem(173);
		print("cubing flail");
		if (me.getItem(174)) { // Already have the finished Flail.
			return true;
		}
		if (!eye || !heart || !brain || !flail) {
			print("cubeFlail failed: missing ingredient(s)");
			return false;
		}
		Town.move("stash");
		if (!Town.openStash()) {
			Town.openStash();
		}
		Storage.Cube.MoveTo(eye);
		Storage.Cube.MoveTo(heart);
		Storage.Cube.MoveTo(brain);
		Storage.Cube.MoveTo(flail);
		Cubing.openCube();
		transmute();
		delay(200 + me.ping);
		Cubing.emptyCube();
		me.cancel();

		var finishedFlail = me.getItem(174);
		if (finishedFlail) {
			if (!Item.equip(finishedFlail, 4)) {
				Pickit.pickItems();
				throw new Error("AutoSmurf.equipFlail: Failed to equip Khalim's Will.");
			}
		} else {
			throw new Error("AutoSmurf.equipFlail: Lost Khalim's Will before trying to equip it.");
		}
		if (me.itemoncursor) { // Seems like Item.equip() doesn't want to keep whatever the sorc has for a weapon, so lets put it into inventory without checking it against Pickit.
			var cursorItem = getUnit(100);
			if (cursorItem) {
				if (Storage.Inventory.CanFit(cursorItem)) {
					print("Keeping weapon by force.")
					Storage.Inventory.MoveTo(cursorItem);
				} else {
					me.cancel();
					print("No room to keep weapon by force.");
					cursorItem.drop();
				}
			}
		}
		delay(me.ping * 2 + 100);
		Pickit.pickItems(); // Will hopefully pick up the character's weapon if it was dropped.
		Town.move("cain");
		cain = getUnit(1, "deckard cain");
		if (!cain || !cain.openMenu()) {
				return false;
		}
		me.cancel();
		Town.move("portalspot");
		if (!Pather.usePortal(null, me.name)) {
				throw new Error("AutoSmurf.travincal: Failed to go back from town");
		}
		var tryorb, orb = getUnit(2, 404);
		print("Smashing the Compelling Orb.");
		if (!orb) {
			throw new Error("AutoSmurf.placeFlail: Couldn't find Compelling Orb.")
		}
		Pather.moveToUnit(orb, 0, 0, Config.ClearType, false);
		for (tryorb = 0; tryorb < 5; tryorb += 1) {
			if (orb) {
				Skill.cast(0, 0, orb);
				delay(500);
			}
		}
		}
		Item.autoEquip(); // For teleportingSorc to re-equip her weapon.
		Pather.journeyTo(101);
	},
	
	"Mephisto": function () {
	this.killMephisto = function () {
		var i, angle, angles,
			pos = {},
			attackCount = 0,
			meph = getUnit(1, 242);

		if (!meph) {
			throw new Error("Mephisto not found!");
		}

		while (attackCount < 300 && Attack.checkMonster(meph)) {
			//if (getUnit(3, 276)) {
			if (meph.mode === 5) {
			//if (attackCount % 2 === 0) {
				angle = Math.round(Math.atan2(me.y - meph.y, me.x - meph.x) * 180 / Math.PI);
				angles = me.y > meph.y ? [-30, -60, -90] : [30, 60, 90];

				for (i = 0; i < angles.length; i += 1) {
					//pos.dist = Math.round(getDistance(me, meph));
					pos.dist = 18;
					pos.x = Math.round((Math.cos((angle + angles[i]) * Math.PI / 180)) * pos.dist + meph.x);
					pos.y = Math.round((Math.sin((angle + angles[i]) * Math.PI / 180)) * pos.dist + meph.y);

					if (Attack.validSpot(pos.x, pos.y)) {
						Pather.moveTo(pos.x, pos.y);
						break;
					}
				}
			}
			if (ClassAttack.doAttack(meph) < 2) {
				break;
			}
			attackCount += 1;
		}
		return (meph.mode === 0 || meph.mode === 12);
	};

	this.moat = function () {
		var count, distance, mephisto;
		count = 0;
		delay(350);
		Pather.moveTo(17563, 8072);
		mephisto = getUnit(1, 242);
		if (!mephisto) {
			throw new Error("Mephisto not found.");
		}
		delay(350);
		Pather.moveTo(17575, 8086);
		delay(350);
		Pather.moveTo(17584, 8091);
		delay(1200);
		Pather.moveTo(17600, 8095);
		delay(550);
		Pather.moveTo(17610, 8094);
		delay(2500);
		Attack.clear(10);
		Pather.moveTo(17610, 8094);
		distance = getDistance(me, mephisto);
		while (distance > 27) {
			count += 1;
			Pather.moveTo(17600, 8095);
			delay(150);
			Pather.moveTo(17584, 8091);
			delay(150);
			Pather.moveTo(17575, 8086);
			delay(150);
			Pather.moveTo(17563, 8072);
			delay(350);
			Pather.moveTo(17575, 8086);
			delay(350);
			Pather.moveTo(17584, 8091);
			delay(1200);
			Pather.moveTo(17600, 8095);
			delay(550);
			Pather.moveTo(17610, 8094);
			delay(2500);
			Attack.clear(10);
			Pather.moveTo(17610, 8094);
			distance = getDistance(me, mephisto);
			if (count >= 5) {
				throw new Error("Failed to lure Mephisto.");
			}
		}
		return true;
	};

	this.killCouncil = function () {
		var i, mob,
			coords = [17600, 8125, 17600, 8015, 17643, 8068];
		for (i = 0; i < coords.length; i += 2) {
			Pather.moveTo(coords[i], coords[i + 1]);
			Attack.clearList(Attack.getMob([345, 346, 347], 0, 40));
		}
		return true;
	};
	Town.doChores();
	Pather.useWaypoint(101);
	Precast.doPrecast(true);
	if (!Pather.moveToExit(102, true)) {
		throw new Error("Failed to move to Durance Level 3");
	}
	if (Config.Mephisto.KillCouncil) {
		this.killCouncil();
	}
	Pather.moveTo(17566, 8069);
	if (me.classid === 1) {
		if (1==1) {
			this.moat();
			Attack.kill(242); // Mephisto
		} else {
			//this.killMephisto();
			Attack.kill(242); // Mephisto
		}
	} else {
		Attack.kill(242); // Mephisto
	}
	Pickit.pickItems();
	if (Config.OpenChests) {
		Pather.moveTo(17572, 8011);
		Attack.openChests(5);
		Pather.moveTo(17572, 8125);
		Attack.openChests(5);
		Pather.moveTo(17515, 8061);
		Attack.openChests(5);
	}
	
	if (Config.Mephisto.TakeRedPortal) {
		Pather.moveTo(17590, 8068);
		delay(1500);
		Pather.moveTo(17601, 8070);
		Pather.usePortal(null);
	}
	},
};

Pather.moveTo = function (x, y, retry, clearPath, pop) {
	if (me.dead) { // Abort if dead
		return false;
	}

	var i, path, adjustedNode, cleared,
		node = {x: x, y: y},
		fail = 0;

	for (i = 0; i < Pather.cancelFlags.length; i += 1) {
		if (getUIFlag(Pather.cancelFlags[i])) {
			me.cancel();
		}
	}

	if (getDistance(me, x, y) < 2) {
		return true;
	}

	if (x === undefined || y === undefined) {
		throw new Error("moveTo: Function must be called with at least 2 arguments.");
	}

	if (typeof x !== "number" || typeof y !== "number") {
		throw new Error("moveTo: Coords must be numbers");
	}

	if (retry === undefined) {
		retry = 3;
	}

	clearPath = true;

	if (pop === undefined) {
		pop = false;
	}

	Pather.useTeleport = Pather.teleport && !me.getState(139) && !me.getState(140) && !me.inTown &&
						((me.classid === 1 && me.getSkill(54, 1)) || me.getStat(97, 54));

	// Teleport without calling getPath if the spot is close enough
	if (Pather.useTeleport && getDistance(me, x, y) <= Pather.teleDistance) {
		//Misc.townCheck();

		return Pather.teleportTo(x, y);
	}

	// Walk without calling getPath if the spot is close enough
	if (!Pather.useTeleport && (getDistance(me, x, y) <= 5 || (getDistance(me, x, y) <= 25 && !CollMap.checkColl(me, {x: x, y: y}, 0x1)))) {
		return Pather.walkTo(x, y);
	}

	path = getPath(me.area, x, y, me.x, me.y, 0, 5);

	if (!path) {
		throw new Error("moveTo: Failed to generate path.");
	}

	path.reverse();

	if (pop) {
		path.pop();
	}

	PathDebug.drawPath(path);

	if (Pather.useTeleport && Config.TeleSwitch) {
		Misc.teleSwitch();
	}

	while (path.length > 0) {
		if (me.dead) { // Abort if dead
			return false;
		}

		for (i = 0; i < Pather.cancelFlags.length; i += 1) {
			if (getUIFlag(Pather.cancelFlags[i])) {
				me.cancel();
			}
		}

		node = path.shift();

		/* Right now getPath's first node is our own position so it's not necessary to take it into account
			This will be removed if getPath changes
		*/
		if (getDistance(me, node) > 2) {
			// Make life in Maggot Lair easier
			if ([62, 63, 64].indexOf(me.area) > -1) {
				adjustedNode = Pather.getNearestWalkable(node.x, node.y, 15, 3, 0x1 | 0x4 | 0x800 | 0x1000);

				if (adjustedNode) {
					node.x = adjustedNode[0];
					node.y = adjustedNode[1];
				}
			}

			if (Pather.useTeleport ? Pather.teleportTo(node.x, node.y) : Pather.walkTo(node.x, node.y, fail > 0 ? 1 : 4)) {
				if (!me.inTown) {
					if (Pather.recursion) {
						Pather.recursion = false;

						NodeAction.go({clearPath: clearPath});

						if (getDistance(me, node.x, node.y) > 5) {
							Pather.moveTo(node.x, node.y);
						}

						Pather.recursion = true;
					}

					Misc.townCheck();
				}
			} else {
				if (fail > 0 && !Pather.useTeleport && !me.inTown) {
					// Don't go berserk on longer paths
					if (!cleared) {
						Attack.clear(5);

						cleared = true;
					}

					if (fail > 1 && me.getSkill(143, 1)) {
						Skill.cast(143, 0, node.x, node.y);
					}
				}

				// Reduce node distance in new path
				path = getPath(me.area, x, y, me.x, me.y, Pather.useTeleport ? 1 : 0, Pather.useTeleport ? rand(25, 35) : rand(10, 15));
				fail += 1;

				if (!path) {
					throw new Error("moveTo: Failed to generate path.");
				}

				path.reverse();

				PathDebug.drawPath(path);

				if (pop) {
					path.pop();
				}

				print("move retry " + fail);

				if (fail > 0 && fail >= retry) {
					break;
				}
			}
		}

		delay(5);
	}

	if (Pather.useTeleport && Config.TeleSwitch) {
		Precast.weaponSwitch(Misc.oldSwitch);
	}

	PathDebug.removeHooks();

	return getDistance(me, node.x, node.y) < 5;
};

function ResetTest() {	
	while (true) {
		if (me.diff === 0 && (me.getStat(12) < 15)) {
		Town.goToTown(1);
		}
		if (me.diff === 0 && (me.getStat(12) > 15) && (me.getStat(12) < 25)) {
		Town.goToTown(2);
		}
		for (var i = 0; i < AutoPlayer.Bosses[me.act].length; i++) {
			Town.doChores();
			if (me.inTown) {
				AutoPlayer.InTown();
				Town.doChores();				
			}
			Pather.teleport = !!me.getSkill(54, 0);
			Pather.teleport = me.getStat(12) >= 24;
			Config.ClearType = me.getStat(12) <= 24;;
			AutoPlayer[AutoPlayer.Bosses[me.act][i]]();
			
		}
		
		delay(50);	
	}
}
