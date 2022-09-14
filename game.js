const WORDS = [
  "ALBUM",
  "HINGE",
  "MONEY",
  "SCRAP",
  "GAMER",
  "GLASS",
  "SCOUR",
  "BEING",
  "DELVE",
  "YIELD",
  "METAL",
  "TIPSY",
  "SLUNG",
  "FARCE",
  "GECKO",
  "SHINE",
  "CANNY",
  "MIDST",
  "BADGE",
  "HOMER",
  "TRAIN",
  "STORY",
  "HAIRY",
  "FORGO",
  "LARVA",
  "TRASH",
  "ZESTY",
  "SHOWN",
  "HEIST",
  "ASKEW",
  "INERT",
  "OLIVE",
  "PLANT",
  "OXIDE",
  "CARGO",
  "FOYER",
  "FLAIR",
  "AMPLE",
  "CHEEK",
  "SHAME",
  "MINCE",
  "CHUNK",
  "ROYAL",
  "SQUAD",
  "BLACK",
  "STAIR",
  "SCARE",
  "FORAY",
  "COMMA",
  "NATAL",
  "SHAWL",
  "FEWER",
  "TROPE",
  "SNOUT",
  "LOWLY",
  "STOVE",
  "SHALL",
  "FOUND",
  "NYMPH",
  "EPOXY",
  "DEPOT",
  "CHEST",
  "PURGE",
  "SLOSH",
  "THEIR",
  "RENEW",
  "ALLOW",
  "SAUTE",
  "MOVIE",
  "CATER",
  "TEASE",
  "SMELT",
  "FOCUS",
  "TODAY",
  "WATCH",
  "LAPSE",
  "MONTH",
  "SWEET",
  "HOARD",
  "CLOTH",
  "BRINE",
  "AHEAD",
  "MOURN",
  "NASTY",
  "RUPEE",
  "CHOKE",
  "CHANT",
  "SPILL",
  "VIVID",
  "BLOKE",
  "TROVE",
  "THORN",
  "OTHER",
  "TACIT",
  "SWILL",
  "DODGE",
  "SHAKE",
  "CAULK",
  "AROMA",
  "CYNIC",
  "ROBIN",
  "ULTRA",
  "ULCER",
  "PAUSE",
  "HUMOR",
  "FRAME",
  "ELDER",
  "SKILL",
  "ALOFT",
  "PLEAT",
  "SHARD",
  "MOIST",
  "THOSE",
  "LIGHT",
  "WRUNG",
  "COULD",
  "PERKY",
  "MOUNT",
  "WHACK",
  "SUGAR",
  "KNOLL",
  "CRIMP",
  "WINCE",
  "PRICK",
  "ROBOT",
  "POINT",
  "PROXY",
  "SHIRE",
  "SOLAR",
  "PANIC",
  "TANGY",
  "ABBEY",
  "FAVOR",
  "DRINK",
  "QUERY",
  "GORGE",
  "CRANK",
  "SLUMP",
  "BANAL",
  "TIGER",
  "SIEGE",
  "TRUSS",
  "BOOST",
  "REBUS",
  "UNIFY",
  "TROLL",
  "TAPIR",
  "ASIDE",
  "FERRY",
  "ACUTE",
  "PICKY",
  "WEARY",
  "GRIPE",
  "CRAZE",
  "PLUCK",
  "BRAKE",
  "BATON",
  "CHAMP",
  "PEACH",
  "USING",
  "TRACE",
  "VITAL",
  "SONIC",
  "MASSE",
  "CONIC",
  "VIRAL",
  "RHINO",
  "BREAK",
  "TRIAD",
  "EPOCH",
  "USHER",
  "EXULT",
  "GRIME",
  "CHEAT",
  "SOLVE",
  "BRING",
  "PROVE",
  "STORE",
  "TILDE",
  "CLOCK",
  "WROTE",
  "RETCH",
  "PERCH",
  "ROUGE",
  "RADIO",
  "SURER",
  "FINER",
  "VODKA",
  "HERON",
  "CHILL",
  "GAUDY",
  "PITHY",
  "SMART",
  "BADLY",
  "ROGUE",
  "GROUP",
  "FIXER",
  "GROIN",
  "DUCHY",
  "COAST",
  "BLURT",
  "PULPY",
  "ALTAR",
  "GREAT",
  "BRIAR",
  "CLICK",
  "GOUGE",
  "WORLD",
  "ERODE",
  "BOOZY",
  "DOZEN",
  "FLING",
  "GROWL",
  "ABYSS",
  "STEED",
  "ENEMA",
  "JAUNT",
  "COMET",
  "TWEED",
  "PILOT",
  "DUTCH",
  "BELCH",
  "OUGHT",
  "DOWRY",
  "THUMB",
  "HYPER",
  "HATCH",
  "ALONE",
  "MOTOR",
  "ABACK",
  "GUILD",
  "KEBAB",
  "SPEND",
  "FJORD",
  "ESSAY",
  "SPRAY",
  "SPICY",
  "AGATE",
  "SALAD",
  "BASIC",
  "MOULT",
  "CORNY",
  "FORGE",
  "CIVIC",
  "ISLET",
  "LABOR",
  "GAMMA",
  "LYING",
  "AUDIT",
  "ROUND",
  "LOOPY",
  "LUSTY",
  "GOLEM",
  "GONER",
  "GREET",
  "START",
  "LAPEL",
  "BIOME",
  "PARRY",
  "SHRUB",
  "FRONT",
  "WOOER",
  "TOTEM",
  "FLICK",
  "DELTA",
  "BLEED",
  "ARGUE",
  "SWIRL",
  "ERROR",
  "AGREE",
  "OFFAL",
  "FLUME",
  "CRASS",
  "PANEL",
  "STOUT",
  "BRIBE",
  "DRAIN",
  "YEARN",
  "PRINT",
  "SEEDY",
  "IVORY",
  "BELLY",
  "STAND",
  "FIRST",
  "FORTH",
  "BOOBY",
  "FLESH",
  "UNMET",
  "LINEN",
  "MAXIM",
  "POUND",
  "MIMIC",
  "SPIKE",
  "CLUCK",
  "CRATE",
  "DIGIT",
  "REPAY",
  "SOWER",
  "CRAZY",
  "ADOBE",
  "OUTDO",
  "TRAWL",
  "WHELP",
  "UNFED",
  "PAPER",
  "STAFF",
  "CROAK",
  "HELIX",
  "FLOSS",
  "PRIDE",
  "BATTY",
  "REACT",
  "MARRY",
  "ABASE",
  "COLON",
  "STOOL",
  "CRUST",
  "FRESH",
  "DEATH",
  "MAJOR",
  "FEIGN",
  "ABATE",
  "BENCH",
  "QUIET",
  "GRADE",
  "STINK",
  "KARMA",
  "MODEL",
  "DWARF",
  "HEATH",
  "SERVE",
  "NAVAL",
  "EVADE",
  "FOCAL",
  "BLUSH",
  "AWAKE",
  "HUMPH",
  "SISSY",
  "REBUT",
  "CIGAR",
];

const URL = "https://api.frontendexpert.io/api/fe/wordle-words";

let SOLUTION = WORDS[Math.floor(Math.random() * WORDS.length)];
const tiles = document.querySelector(".container").querySelectorAll("div");
const keyboardKeys = document.querySelectorAll(".keys");
let modal = document.getElementById("modal");
let overlay = document.getElementById("overlay");
let closeModal = document.getElementById("close-modal");
let header = document
  .querySelector("#modal")
  .querySelector(".modal-header")
  .getElementsByTagName("h2")[0];
let text = document.querySelector("#modal").getElementsByTagName("p")[0];
// let timer = document.getElementById("modal").getElementsByTagName("span")[0];

console.log(`Solution: ${SOLUTION}`);
let guess = [];
let currentGuess = "";
let x = 0,
  guessCount = 0;
let guessIndex = {
  0: [0, 1, 2, 3, 4],
  1: [5, 6, 7, 8, 9],
  2: [10, 11, 12, 13, 14],
  3: [15, 16, 17, 18, 19],
  4: [20, 21, 22, 23, 24],
  5: [25, 26, 27, 28, 29],
};
// let seconds = (minutes = 0),
//   myTimer;
// startTimer();

// function startTimer() {
//   myTimer = setInterval(() => {
//     seconds++;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     if (seconds == 60) {
//       seconds = "0" + (seconds % 60);
//       minutes++;
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//     }
//   }, 1000);
// }

function checkTiles(inputArr) {
  while (inputArr.length > 0 && guessCount <= 6) {
    currentGuess += inputArr.shift();
  }

  let i, start;
  let end = guessIndex[`${guessCount}`][currentGuess.length - 1];
  for (
    i = 0, start = guessIndex[`${guessCount}`][0];
    i < currentGuess.length, start <= end;
    i++, start++
  ) {
    const char = currentGuess[i];
    let tileClass = "tile";
    let keyClass = "keys-";

    if (char == SOLUTION[i]) {
      tileClass += " correct";
      keyClass += "correct";
    } else if (SOLUTION.includes(char)) {
      tileClass += " close";
      keyClass += "close";
    } else {
      tileClass += " wrong";
      keyClass += "wrong";
    }
    let letter = tiles[start].innerText;
    keyboardKeys.forEach((key) => {
      if (key.dataset.indexNumber == letter) {
        key.setAttribute("class", keyClass);
      }
    });
    tiles[start].setAttribute("class", tileClass);
  }

  if (currentGuess == SOLUTION) {
    playAgain();
    return;
  }
  guessCount++;
  currentGuess = "";
  if (guessCount == 6) gameOver();
}

const handleTyping = (event) => {
  if (event.keyCode >= 65 && event.keyCode <= 90 && x >= 0 && x <= 29) {
    if (guess.length >= 5) return;
    guess.push(event.key.toUpperCase());
    tiles[x].innerText = event.key.toUpperCase();
    x++;
  }
  if (event.key === "Enter" && guess.length == 5) {
    checkTiles(guess);
  }

  if (event.key === "Backspace") {
    if (guess.length != 0 && guess.length <= 5) {
      x--;
      if (x < 0) x = 0;
      guess.pop();
      tiles[x].innerText = "";
    }
  }
};

function gameOver() {
  // clearInterval(myTimer);
  //timer.innerText = `${minutes} : ${seconds} mins`;
  modal.style.display = "block";
  overlay.style.opacity = "2";
  header.innerText = `Game Over... Answer was ${SOLUTION} :(`;
  text.innerText = "Click on 'X' to play again.";
  resetBoard();
}

function playAgain() {
  // clearInterval(myTimer);
  // timer.innerText = `${minutes} : ${seconds} mins`;
  modal.style.display = "block";
  overlay.style.opacity = "2";
  header.innerText = `Congratulation! ${SOLUTION} was correct :)`;
  text.innerText = "Click on &times; to play again.";
  resetBoard();
}

function resetBoard() {
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.opacity = "";
    guessCount = 0;
    x = 0;
    currentGuess = "";
    guess = [];
    seconds = minutes = "0" + 0;
    tiles.forEach((tile) => {
      tile.innerText = "";
      tile.classList = "tile";
    });
    keyboardKeys.forEach((key) => {
      key.classList = "keys";
    });
    // startTimer();
  });
  SOLUTION = WORDS[Math.floor(Math.random() * WORDS.length)];
  console.log(`New Solution : ${SOLUTION}`);
}

window.addEventListener("keydown", handleTyping);
