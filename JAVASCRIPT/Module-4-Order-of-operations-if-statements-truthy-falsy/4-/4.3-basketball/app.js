const averagePoints = (a, b, c) => (a + b + c) / 3;

// 2nd team win situation
let johnTeam = averagePoints(89, 120, 103),
  mikeTeam = averagePoints(116, 94, 123);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}\n`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}\n`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}\n`);
}

// 1st team win situation
johnTeam = averagePoints(96, 116, 109);
mikeTeam = averagePoints(95, 101, 112);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}\n`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}\n`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}\n`);
}

// draw situation
johnTeam = averagePoints(83, 131, 104);
mikeTeam = averagePoints(105, 94, 119);

if (johnTeam > mikeTeam) {
  console.log(`John's team is the winner with an average of ${johnTeam}`);
} else if (johnTeam < mikeTeam) {
  console.log(`Mike's team is the winner with an average of ${mikeTeam}`);
} else {
  console.log(`It is a draw with both an average of ${johnTeam}`);
}

// EXTRA: situation with 3 teams, mary's team

let maryTeam = averagePoints(77, 121, 93);
johnTeam = averagePoints(91, 127, 87);
mikeTeam = averagePoints(119, 86, 103);

if (johnTeam > mikeTeam) {
  if (maryTeam > johnTeam) {
    console.log(`Mary's team is the winner with an average of ${maryTeam}`);
  } else if (maryTeam !== johnTeam) {
    console.log(`John's team is the winner with an average of ${johnTeam}`);
  }
} else if (johnTeam < mikeTeam) {
  if (maryTeam > mikeTeam) {
    console.log(`Mary's team is the winner with an average of ${maryTeam}`);
  } else if (maryTeam !== mikeTeam) {
    console.log(`Mike's team is the winner with an average of ${mikeTeam}`);
  }
} else {
  console.log(`It is a draw with both an average of ${johnTeam}`);
}