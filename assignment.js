//https://github.com/Siddiqui-2583/js-problem-solving

const kilometerToMeter = (km) => {
  return km * 1000;
};

const budgetCalculator = (watch, mobile, laptop) => {
  return watch * 50 + mobile * 100 + laptop * 500;
};

const hotelCost = (days) => {
  if (days <= 10) {
    return days * 100;
  } else if (days <= 20) {
    let discountDays = days - 10;
    return 1000 + discountDays * 80; //10 * 100=1000(for initial 10 days)
  } else {
    let extraDiscountDays = days - 20;
    return 1800 + extraDiscountDays * 50; //10 * 100 + 10 * 80=1800
  }
};

const megaFriend = (array) => {
  let bigNameIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[bigNameIndex].length < array[i].length) {
      bigNameIndex = i;
    }
  }
  return array[bigNameIndex];
};

// console.log("kilometerToMeter: ", kilometerToMeter(25));
// console.log("budgetCalculator: ", budgetCalculator(10, 5, 3));
// console.log("hotelCost: ", hotelCost(27));
// console.log("megaFriend: ", megaFriend(['Sakib','Farhan','Avro','Sab']));
