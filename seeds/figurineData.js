const { Figurine } = require('../models');

const figurineData = [
  {
    product_name: "Assault Intercessors",
    price: 60,
    edition: 9,
    filename: "intercess.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/Assault-Intercessors-2020",
  },
  {
    //removed null from price
    product_name: "Terminator Captain",
    price: 0,
    edition: 10,
    filename: "10thtermiecapt.jpg",
    faction: "Space Marines",
    store_link: "https://www.warhammer.com/en-US/home",
  },
  {
    //removed null from price
    product_name: "Titus",
    price: 0,
    edition: 10,
    filename: "titus.jpg",
    faction: "Space Marines",
    store_link: "https://www.warhammer.com/en-US/home",
  },
  {
    product_name: "Company Heroes",
    price: 65,
    edition: 10,
    filename: "coheroes.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-company-heroes-2023",
  },
  {
    product_name: "Terminator Squad",
    price: 65,
    edition: 10,
    filename: "termies.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-terminator-squad-2023",
  },
  {
    product_name: "Terminator Assault Squad",
    price: 60,
    edition: 10,
    filename: "termieassault.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/Space-Marine-Terminator-Close-Combat%20Squad-2020?slug=shop&slug=Space-Marine-Terminator-Close-Combat+Squad-2020",
  },
  {
    product_name: "Sterngaurd Veterans",
    price: 60,
    edition: 10,
    filename: "sterngaurdvet.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-sternguard-veteran-squad-2023",
  },
  {
    product_name: "Jump Pack Intercessors",
    price: 60,
    edition: 10,
    filename: "jumpyinters.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-jump-pack-intercessors-2023",
  },
  {
    product_name: "Jump Pack Captain",
    price: 40,
    edition: 10,
    filename: "packcapt.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-captain-with-jump-pack-2023",
  },
  {
    product_name: "Terminator Chaplain",
    price: 42,
    edition: 10,
    filename: "termiechap.jpg",
    faction: "Space Marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/space-marines-chaplain-in-terminator-armour-2023?slug=shop&slug=space-marines-chaplain-in-terminator-armour-2023",
  },
  {
    product_name: "Morvenn Vahl",
    price: 60,
    edition: 9,
    filename: "morvenn.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Morvenn-Vahl-Abbess-Sanctorum-2021",
  },
  {
    product_name: "Palatine",
    price: 35,
    edition: 9,
    filename: "palatine.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adepta-Sororitas-Palatine-2021",
  },
  {
    product_name: "Aestred Thurga",
    price: 40,
    edition: 9,
    filename: "aestred.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Aestred-Thurga-Relinquant-At-Arms",
  },
  {
    product_name: "Sister Dogmata",
    price: 35,
    edition: 9,
    filename: "dogmata.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adepta-Sororitas-Sister-Dogmata-2021",
  },
  {
    product_name: "Celestian Sacrestants",
    price: 60,
    edition: 9,
    filename: "sacrestants.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adepta-Sororitas-Celestian-Sacresants-2021",
  },
  {
    product_name: "Paragon Warsuits",
    price: 75,
    edition: 9,
    filename: "pgwarsuit.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adepta-Sororitas-Paragon-Warsuit-2021",
  },
  {
    product_name: "Castigator Battle Tank",
    price: 90,
    edition: 9,
    filename: "castigator.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adepta-Sororitas-Castigator",
  },
  {
    product_name: "Kill Team Novitiates",
    price: 60,
    edition: 9,
    filename: "novitiates.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-novitiates-2022",
  },
  {
    product_name: "Blade Champion",
    price: 40,
    edition: 9,
    filename: "bladechamp.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/adeptus-custodes-blade-champion-2022",
  },
  {
    product_name: "Sydonian Skatros",
    price: 38,
    edition: 10,
    filename: "skatros.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/adeptus-mechanicus-sydonian-skatros-2023",
  },
  {
    product_name: "Skitarii Marshall",
    price: 35,
    edition: 9,
    filename: "skitmarsh.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Adeptus-Mechanicus-Skitarii-Marshall-2021",
  },
  {
    product_name: "Commisar",
    price: 35,
    edition: 9,
    filename: "commisar.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-commissar-2023",
  },
  {
    product_name: "Minka Lesk",
    price: 21,
    edition: 9,
    filename: "minka.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/minka-lesk-the-last-whiteshield-omnibus-pb-eng-2023?slug=shop&slug=minka-lesk-the-last-whiteshield-omnibus-pb-eng-2023",
  },
  {
    product_name: "Kasrkin Kill Team",
    price: 60,
    edition: 9,
    filename: "kasrkin.jpg",
    faction: "imperium armies",
    store_link: "https://www.warhammer.com/en-US/shop/kill-team-kasrkin-2023",
  },
  {
    product_name: "Cadian Command Squad",
    price: 45,
    edition: 9,
    filename: "cadiancommsq.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-cadian-command-squad-2023",
  },
  {
    product_name: "Cadian Shock Troops",
    price: 50,
    edition: 9,
    filename: "cadianshock.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-cadian-shock-troops-2023",
  },
  {
    product_name: "Armored Sentinel",
    price: 45,
    edition: 9,
    filename: "armsent.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-armoured-sentinel-2023",
  },
  {
    product_name: "Scout Sentinel",
    price: 45,
    edition: 9,
    filename: "scoutsent.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-scout-sentinel-2023",
  },
  {
    product_name: "Ursula Creed",
    price: 45,
    edition: 9,
    filename: "ursula.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-lord-castellan-ursula-creed-2023",
  },
  {
    product_name: "Heavy Weapons Squad",
    price: 50,
    edition: 9,
    filename: "heavywepsq.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-cadian-heavy-weapons-squad-2023",
  },
  {
    product_name: "Cadian Castellan",
    price: 35,
    edition: 9,
    filename: "castellan.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-cadian-castellan-2023",
  },
  {
    product_name: "Attilan Rough Riders",
    price: 60,
    edition: 9,
    filename: "attilanriders.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-attilan-rough-riders-2023",
  },
  {
    product_name: "Rogal Dorn Battle Tank",
    price: 100,
    edition: 9,
    filename: "rogdortank.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-rogal-dorn-battle-tank-2023",
  },
  {
    product_name: "Lord Solar Leontus",
    price: 60,
    edition: 9,
    filename: "leontus.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/astra-militarum-lord-solar-leontus-2023",
  },
  {
    product_name: "Vindicare Assassin",
    price: 40,
    edition: 9,
    filename: "vindicare.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/Vindicare-Assassin?slug=shop&slug=Vindicare-Assassin",
  },
  {
    product_name: "Imperial Navy Breachers",
    price: 60,
    edition: 9,
    filename: "navbreach.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-imperial-navy-breachers-2023",
  },
  {
    product_name: "Exaction Squad",
    price: 60,
    edition: 9,
    filename: "extrsq.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-exaction-squad-2023",
  },
  {
    product_name: "Inquisitorial Agents",
    price: 55,
    edition: 9,
    filename: "inqagent.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-inquisitorial-agents-2023",
  },
  {
    product_name: "Armiger Warglaives",
    price: 90,
    edition: 8,
    filename: "warglaive.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/imperial-knights-knight-armigers-armiger-warglaive-2022",
  },
  {
    product_name: "Armiger Helverins",
    price: 90,
    edition: 8,
    filename: "helverin.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/imperial-knights-knight-armigers-armiger-helverin-2022",
  },
  {
    product_name: "Knight Castellan",
    price: 185,
    edition: 8,
    filename: "knightcastellan.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/imperial-knights-knight-dominus-knight-castellan-2022",
  },
  {
    product_name: "Knight Valiant",
    price: 185,
    edition: 8,
    filename: "knightvaliant.jpg",
    faction: "imperium armies",
    store_link:
      "https://www.warhammer.com/en-US/shop/imperial-knights-knight-dominus-knight-valiant-2022",
  },
  {
    product_name: "Knight Preceptor",
    price: 170,
    edition: 8,
    filename: "knightpreceptor.jpg",
    faction: "imperium armies",
    store_link: "https://www.warhammer.com/en-US/shop/knight-preceptor-2022",
  },
  {
    product_name: "Kill Team: Legionaries",
    price: 70,
    edition: 9,
    filename: "legionaries.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-legionaries-2022",
  },
  {
    product_name: "Chaos Chosen",
    price: 60,
    edition: 9,
    filename: "chaoschosen.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/slaves-to-darkness-chaos-chosen-2023",
  },
  {
    product_name: "Warpsmith",
    price: 40,
    edition: 9,
    filename: "warpsmith.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-warpsmith-2022",
  },
  {
    product_name: "Daemon Prince",
    price: 80,
    edition: 9,
    filename: "deamonprince.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/slaves-to-darkness-daemon-prince-2023?slug=shop&slug=slaves-to-darkness-daemon-prince-2023",
  },
  {
    product_name: "Possessed",
    price: 60,
    edition: 9,
    filename: "possessed.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-possessed-2022",
  },
  {
    product_name: "Chaos Cultists",
    price: 50,
    edition: 9,
    filename: "chaoscult.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-chaos-cultists-2022",
  },
  {
    product_name: "Dark Commune",
    price: 55,
    edition: 9,
    filename: "dkcomm.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-dark-commune-2022",
  },
  {
    product_name: "Accursed Cultists",
    price: 55,
    edition: 9,
    filename: "acccult.jpg",
    faction: "chaos marines",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-accursed-cultists-2022",
  },
  {
    product_name: "Blooded Kill Team",
    price: 60,
    edition: 9,
    filename: "bloodkillteam.jpg",
    faction: "chaos",
    store_link: "https://www.warhammer.com/en-US/shop/kill-team-blooded-2022",
  },
  {
    product_name: "Lord of Virulence",
    price: 40,
    edition: 9,
    filename: "lordvirulence.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/Death-Guard-Lord-of-Virulence-2020",
  },
  {
    product_name: "Plague Marines",
    price: 60,
    edition: 9,
    filename: "plaguemar.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/Death-Guard-Plague-Marines-2020",
  },
  {
    product_name: "Lord Felthius and The Tainted Cohort",
    price: 45,
    edition: 9,
    filename: "lordfelthius.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/Lord-Felthius-And-The-Tainted-Cohort-2021",
  },
  {
    product_name: "Infernal Master",
    price: 40,
    edition: 9,
    filename: "infernalmas.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/thousand-sons-infernal-master-2022",
  },
  {
    product_name: "Azrakh the Annihilator",
    price: 38,
    edition: 9,
    filename: "azrakh.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eater-azrakh-the-annihilator-2022",
  },
  {
    product_name: "Angron Daemon Primarch",
    price: 170,
    edition: 9,
    filename: "angron.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-angron-daemon-primarch-of-khorne-2023",
  },
  {
    product_name: "Khorne Berzerkers",
    price: 65,
    edition: 9,
    filename: "kbzerk.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-khorne-berserkers-2023",
  },
  {
    product_name: "Lord Invocatus",
    price: 65,
    edition: 9,
    filename: "invocatus.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-lord-invocatus-2023",
  },
  {
    product_name: "Chaos Lord on Daemonic Mount",
    price: 60,
    edition: 9,
    filename: "chaosmount.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/slaves-to-darkness-chaos-lord-on-daemonic-mount-2023",
  },
  {
    product_name: "Eightbounds",
    price: 60,
    edition: 9,
    filename: "eightbound.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-eightbound-2023",
  },
  {
    product_name: "Exalted Eightbounds",
    price: 60,
    edition: 9,
    filename: "exeightbound.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-exalted-eightbound-2023?slug=shop&slug=world-eaters-exalted-eightbound-2023",
  },
  {
    product_name: "Jakhals",
    price: 55,
    edition: 9,
    filename: "jakhals.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/world-eaters-jakhals-2023",
  },
  {
    product_name: "Be'lakor, The Dark Master",
    price: 160,
    edition: 9,
    filename: "belakor.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/Chaos-Daemons-Belakor-The-Dark-Master-2021",
  },
  {
    product_name: "Vashtorr The Arkifane",
    price: 100,
    edition: 9,
    filename: "vashtorr.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-space-marines-vashtorr-the-arkifane-2023",
  },
  {
    product_name: "Knight Abominant",
    price: 185,
    edition: 9,
    filename: "knightabominant.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-knights-knight-abominant-2022",
  },
  {
    product_name: "War Dog Karnivores",
    price: 90,
    edition: 9,
    filename: "wardogkarn.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-knights-war-dog-karnivore-2022",
  },
  {
    product_name: "War Dog Stalkers",
    price: 90,
    edition: 9,
    filename: "wardogstalk.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-knights-war-dog-stalker-2022",
  },
  {
    product_name: "war dog brigands",
    price: 90,
    edition: 9,
    filename: "wardogbrig.jpg",
    faction: "chaos",
    store_link:
      "https://www.warhammer.com/en-US/shop/chaos-knights-war-dog-brigand-2022",
  },
  {
    product_name: "Striking Scorpions",
    price: 50,
    edition: 10,
    filename: "strikscorp.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Eldar-Striking-Scorpions",
  },
  {
    product_name: "Lelith Hesperax",
    price: 45,
    edition: 9,
    filename: "lelith.jpg",
    faction: "aeldari",
    store_link:
      "https://www.warhammer.com/en-US/shop/Drukhari-Lelith-Hesperax-2021",
  },
  {
    product_name: "Harlequin Troupe",
    price: 45,
    edition: 7,
    filename: "harletroup.jpg",
    faction: "aeldari",
    store_link:
      "https://www.warhammer.com/en-US/shop/Harlequin-Troupe-Troop-2017",
  },
  {
    product_name: "Harlequin Solitaire",
    price: 32,
    edition: 7,
    filename: "harlsol.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Solitaire",
  },
  {
    product_name: "Skyweavers",
    price: 55,
    edition: 7,
    filename: "skyweavers.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Harlequin-Skyweavers",
  },
  {
    product_name: "Starweaver",
    price: 45,
    edition: 7,
    filename: "starweavers.jpg",
    faction: "aeldari",
    store_link:
      "https://www.warhammer.com/en-US/shop/Harlequin-Starweaver?slug=shop&slug=Harlequin-Starweaver",
  },
  {
    product_name: "Voidweaver",
    price: 45,
    edition: 7,
    filename: "voidweavers.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Voidweaver",
  },
  {
    product_name: "Death Jester",
    price: 33.5,
    edition: 7,
    filename: "deathjester.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Harlequin-Death-Jester",
  },
  {
    product_name: "Harlequin Shadowseer",
    price: 33.5,
    edition: 7,
    filename: "shadowseer.jpg",
    faction: "aeldari",
    store_link: "https://www.warhammer.com/en-US/shop/Harlequin-Shadowseer",
  },
  {
    product_name: "Reductus Saboteur",
    price: 35,
    edition: 9,
    filename: "reductus.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/genestealer-cults-reductus-saboteur-2022",
  },
  {
    product_name: "Einhyr Champion",
    price: 40,
    edition: 10,
    filename: "einhyr.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/lov-einhyr-champion-2022",
  },
  {
    product_name: "Emotekh The Stormlord",
    price: 45,
    edition: 10,
    filename: "emotekh.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/necrons-imotekh-the-stormlord-2023",
  },
  {
    product_name: "Overlord with Translocation Shroud",
    price: 38,
    edition: 10,
    filename: "transoverlord.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/necrons-overlord-and-translocation-shroud-2023",
  },
  {
    product_name: "Orikan The Diviner",
    price: 45,
    edition: 10,
    filename: "orikan.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/necrons-orikan-the-diviner-2023",
  },
  {
    product_name: "Flayed Ones",
    price: 55,
    edition: 9,
    filename: "flayedone.jpg",
    faction: "necron",
    store_link: "https://www.warhammer.com/en-US/shop/Necrons-Flayed-Ones-2021",
  },
  {
    product_name: "Chronomancer",
    price: 40,
    edition: 9,
    filename: "chrono.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Necrons-Chronomancer-2021",
  },
  {
    product_name: "Szarekh, The Silent King",
    price: 170,
    edition: 9,
    filename: "szarek.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Szarekh-The-Silent-King-2020",
  },
  {
    product_name: "C'tan Shard of The Void Dragon",
    price: 125,
    edition: 9,
    filename: "voidshard.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/CTan-Shard-of-the-Void-Dragon-2020",
  },
  {
    product_name: "Monolith",
    price: 185,
    edition: 9,
    filename: "monolith.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Monolith-2020?slug=shop&slug=Monolith-2020",
  },
  {
    product_name: "Canoptek Doomstalker",
    price: 50,
    edition: 9,
    filename: "doomstalker.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Canoptek-Doomstalker-2020",
  },
  {
    product_name: "Hexmark Destoryer",
    price: 35,
    edition: 9,
    filename: "hexmark.jpg",
    faction: "necron",
    store_link: "https://www.warhammer.com/en-US/shop/Hexmark-Destroyer-2020",
  },
  {
    product_name: "Ophidian Destroyers",
    price: 60,
    edition: 9,
    filename: "ophidian.jpg",
    faction: "necron",
    store_link: "https://www.warhammer.com/en-US/shop/Ophydian-Destroyers-2020",
  },
  {
    product_name: "Psychomancer",
    price: 35,
    edition: 9,
    filename: "psychomancer.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Necrons-Psychomancer-2020",
  },
  {
    product_name: "Lokhust Heavy Destroyer",
    price: 35,
    edition: 9,
    filename: "lokhust.jpg",
    faction: "necron",
    store_link:
      "https://www.warhammer.com/en-US/shop/Lokhust-Heavy-Destroyer-2020",
  },
  {
    product_name: "Boss Snikrot",
    price: 40,
    edition: 9,
    filename: "snikrot.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/orks-boss-snikrot-2023",
  },
  {
    product_name: "Ethereal",
    price: 35,
    edition: 9,
    filename: "ethereal.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/tau-empire-ethereal-2022",
  },
  {
    product_name: "Pathfinders Kill Team",
    price: 60,
    edition: 9,
    filename: "pathfinders.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-tau-empire-pathfinders-2022",
  },
  {
    product_name: "Farstalker Kinband",
    price: 60,
    edition: 9,
    filename: "farstalker.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/kill-team-farstalker-kinband-2023",
  },
  {
    product_name: "Hormagaunts",
    price: 50,
    edition: 10,
    filename: "horma.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-hormagaunts-2023",
  },
  {
    product_name: "Genestealers",
    price: 55,
    edition: 10,
    filename: "gene.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-genestealers-2023",
  },
  {
    product_name: "Lictor",
    price: 50,
    edition: 10,
    filename: "lictor.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/tyranids-lictor-2023",
  },
  {
    product_name: "Nuerolictor",
    price: 40,
    edition: 10,
    filename: "nuelic.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-neurolictor-2023",
  },
  {
    product_name: "Deathleaper",
    price: 60,
    edition: 10,
    filename: "deathleap.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-deathleaper-2023",
  },
  {
    product_name: "Biovore",
    price: 50,
    edition: 10,
    filename: "biovore.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-biovore-2023?slug=shop&slug=tyranids-biovore-2023",
  },
  {
    product_name: "Pyrovore",
    price: 50,
    edition: 10,
    filename: "pyrovore.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/tyranids-pyrovore-2023",
  },
  {
    product_name: "Norn Emissary",
    price: 115,
    edition: 10,
    filename: "nornem.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-norn-emissary-2023",
  },
  {
    product_name: "Norn Assimilator",
    price: 115,
    edition: 10,
    filename: "nornas.jpg",
    faction: "xenos",
    store_link:
      "https://www.warhammer.com/en-US/shop/tyranids-norn-assimilator-2023",
  },
  {
    product_name: "Termagants",
    price: 45,
    edition: 10,
    filename: "termagaunts.jpg",
    faction: "xenos",
    store_link: "https://www.warhammer.com/en-US/shop/tyranids-termagants-2023",
  },
];

const seedFigurines = () => Figurine.bulkCreate(figurineData);

module.exports = seedFigurines;
