// 1. Craigslist Strange Encounter
//
//
// "It is late in the evening and you have had... wait... how many drinks did you have?"
// --> 0 drinks = you should probably have a drink
//  ; 1-2 drinks = lets look through the furniture section
//  ; 3-4 drinks = lets look through the boats section
//  ; 4-6 drinks = accidently in charleston, wv in missed connections
//  ; 7 or more  = you sleeping, but when you awake you find out that you drunk ebayed.
//3 paths, 3 random peeps (brabra, steven, Prince Akeem)



//Random Crazy Person Generator
function toCraigslist() {
  debugger
  var crazyPerson = ['Barbara', 'Steven', 'Prince Akeem', 'Aunt Sue'];
  //[tipsy] Random furniture Generator (chase lounge, tikibar, Shaq's circular superman bed )
  var furniture = ['The Chase lounge', 'The Tikibar', "Shaq's circular superman bed"];
  //[drunk] Random Boat Generator scenario (Yacht, Dingy, Jet Ski(Kenny Powers))
  var boat = ['The Yacht', 'The Dinghy', "Kenny Powers' Jet Ski"];
  //[blackout] Random Missed Connection scenario (Dancing in the Club, Grocery Store, Family Reunion)
  var scenario = ['The Stripclub', 'Bingo', 'The Family Reunion'];

  var playAgain = function() {
    var r = confirm("Wanna play again?");
    if (r === true) {
      toCraigslist();
    } else {
      console.log("yay!");
    }
  }


  var randPerson = ''; // reset everytime
  var randFurn = ''; // reset everytime
  var randBoat = ''; // reset everytime
  var randScene = ''; // reset everytime
  var drinks = 0; //
  // var score = 0; // use closure for score.

var random = function(arr) {
    var randNum = '';
    return arr[randNum = Math.floor(Math.random() * arr.length)];
  }

// Main Story
  var drinks = prompt("It is late in the evening and you have had... wait... how many drinks did you have?");
// Peer Pressure Repeater
  if (drinks === '0') {
    alert("Dude, you have a choice, either take a drink or spend two hours driving to Bed Bath and Beyond only to find out that it is closed.");
    response = prompt("Shall we have a drink?? (yes/no)");
    if (response.toLowerCase() === 'no') {
      // return 0 points automatically.
        alert("booooooooooooooooo!");
        playAgain();
    } else { toCraigslist(); } //----^^back to the top^^
  } else {
    // Choose pathway tipsy, drunk, shitfaced slammered
      switch (drinks) {
        case "1" || "2":
            randPerson = random(crazyPerson);
            randFurn = random(furniture);
            alert("So you've had a drink or two, feeling a bit tipsy. You decide to sit down at your computer and check your email or some shit.");
            var checkFurn = prompt("It looks like " + randPerson + " replied about your request, and  " + randFurn + " is still available. Wanna check it out? (yes/no)");
            if (checkFurn.toLowerCase() === 'no') {
              //decide to have another drink +1 point
              alert("Seems too good to be true, must be a scam. Time to have another drink");
              toCraigslist();
            } else {
              if (randPerson === crazyPerson[2]) {
                alert(randPerson + " wants to sell you " + randFurn + ", but he is on vacation in Ethiopia.");
                var r = confirm("Shall we send a check for $500? (yes/no)");
                if (r === true) {
                  alert("...Five weeks later.")
                  alert("I'll be damned, " + randFurn + " actually showed up. " + randPerson + " even sent movers to bring it in the house for you.")
                  playAgain();
                } else {
                  alert("It was probably a scam. Totes dodged a bullet.");
                  alert("The following weekend you lose $500 playing video poker.");
                  playAgain();
                }
              } else if (randPerson === crazyPerson[1]) {
                alert(randPerson + " wants to meet you at the sketchy gas station to sell you " + randFurn + ".");
                var r = confirm("Shall we hit up the sketchy gas station? (yes/no)");
                if (r === true) {
                  alert(randPerson + " stabs you...")
                  playAgain();
                } else {
                  alert("I'm not trying to die tonight.");
                  alert("Has another drink and passes out.");
                  playAgain();
                }
              } else {
                alert(randPerson + " wants to meet you at the official Craigslist meetup, aka the Police Department.");
                var r = confirm("Shall we hit up the Police Station? (yes/no)");
                if (r === true) {
                  alert(randPerson + " decides to ask $100 over the original price!!");
                  alert(randPerson + " threatens to turn you in to the cops for drunk driving if you don't buy at the new price.");
                  alert("You have no choice, you're wasted. Besides, you really want " + randFurn + ".");
                  playAgain();
                } else {
                  alert("You have no choice, you're wasted. Besides, you really want " + randFurn + ".");
                  playAgain();
                }
              }
            }
          break;
          case "3" || "4":
            randPerson = random(crazyPerson);
            randBoat = random(boat);
            alert("So you've had several at this point, definitely drunk. You decide to sit down at your computer and check your email or some shit.");
            var checkBoat = prompt("It looks like " + randPerson + " replied about your request, and  " + randBoat + " is still available. Wanna check it out? (yes/no)");
            if (checkBoat.toLowerCase() === 'no') {
              //decide to have another drink +1 point
              alert("Seems too good to be true, must be a scam. Time to have another drink");
              toCraigslist();
            } else {
              if (randPerson === crazyPerson[2]) {
                alert(randPerson + " wants to sell you " + randBoat + ", but he is on vacation in Ethiopia.");
                var r = confirm("Shall we send a check for $1000? (yes/no)");
                if (r === true) {
                  alert("...Five weeks later.");
                  alert("Bummer dude. Life just isn't fair for idiots who fall for Craigslist scams.");
                  playAgain();
                } else {
                  alert("It was probably a scam. Totes dodged a bullet.");
                  alert("The following weekend you win $1000 playing video poker.");
                  playAgain();
                }
              } else if (randPerson === crazyPerson[1]) {
                alert(randPerson + " wants to meet you at the sketchy gas station to sell you " + randBoat + ".");
                var r = confirm("Shall we hit up the sketchy gas station? (yes/no)");
                if (r === true) {
                  alert("The transaction actually goes pretty smooth. " + randPerson + " even decides to fill up your gas tank.");
                  playAgain();
                } else {
                  alert("I'm not trying to die tonight.");
                  alert("Has another drink and passes out...");
                  alert("Wakes up covered in chunder.");
                  playAgain();
                }
              } else {
                alert(randPerson + " wants to meet you at the official Craigslist meetup, aka the Police Department.");
                var r = confirm("Shall we hit up the Police Station? (yes/no)");
                if (r === true) {
                  alert(randPerson + " decides to ask $200 over the original price!!");
                  alert(randPerson + " threatens to turn you in to the cops for drunk driving if you don't buy at the new price.");
                  alert("You have no choice, you're wasted. Besides, you really want " + randBoat + ".");
                  playAgain();
                } else {
                  alert("You have no choice, you're wasted. Besides, you really want " + randBoat + ".");
                  playAgain();
                }
              }
            }
        break;
        case "5" || "6" || "7" :
          randPerson = random(crazyPerson);
          randScene = random(scenario);
          alert("So you've had a drink or two, or ten... You're shiface slammered. You decide to sit down at your computer and check your email or some shit.");
          prompt("It looks like " + randPerson + " replied about your missed connection at " + randScene + ". Wanna check it out? (yes/no)");
          alert("Really... You're pretty wasted and this seems too good to be true. You check it out anyways.");
          if (randPerson === crazyPerson[2]) {
            alert(randPerson + " wants to marry you after the experience at " + randScene + ", but he is now in Ethiopia.");
            var r = confirm("Shall we send a check for $1800 for the plane ticket back over? (yes/no)");
            if (r === true) {
              alert("...Five weeks later.");
              alert("No show. But, " + randPerson + " did send you a naked photo, sooo you kinda won.");
              playAgain();
            } else {
              alert("It was probably a scam. Totes dodged a bullet.");
              alert("The following weekend you get shot in a drive by.");
              playAgain();
            }
          } else if (randPerson === crazyPerson[1]) {
            alert(randPerson + " wants to meet you at the sketchy gas station to buy you a coffee and relive the time at " + randScene + ".");
            var r = confirm("Shall we hit up the sketchy gas station? (yes/no)");
            if (r === true) {
              alert("The date actually goes pretty smooth. " + randPerson + " even offers to fill up your gas tank...");
              playAgain();
            } else {
              alert("I'm not trying to die tonight.");
              alert("Has another drink and passes out...");
              alert("Never wakes up.")
              playAgain();
            }
          } else {
            alert(randPerson + " wants to meet you at your place.");
            var r = confirm("Shall we invite them over (yes/no)");
            if (r === true) {
              alert("You have the best night you your life...")
              alert("Playing Magic the Gathering with " + randPerson +".")
              playAgain();
            } else {
            alert("You have no choice, you're shitface slammered. Besides, you had a really good time at " + randScene + ".");
            alert("You have the best night you your life...")
            alert("Playing Magic the Gathering with " + randPerson +".")
            playAgain();
          }
          }
        break;
        default:
        alert("too many drinks.");
        playAgain();
      }
    }
}
