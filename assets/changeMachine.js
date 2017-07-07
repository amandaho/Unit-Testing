function changeMachine(amount) {
  // let amount = 50;
  let emptyarray = [];
  let arrayofbills = [20, 10, 5, 1];

  for (var i = 0; i < arrayofbills.length; i++) {
    let amt = Math.floor(amount/arrayofbills[i]);
    emptyarray.push(amt);
    amount = amount - (amt * arrayofbills[i]);

  }
  console.log(emptyarray);

  return emptyarray;
}

module.exports = changeMachine;
