let money = prompt("Ваш бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses : {},
  optionalExpenses : {},
  income : [],
  savings : false,
};

let stat1 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	value1 = prompt("Во сколько обойдется?", '');
let stat2 = prompt("Введите обязательную статью расходов в этом месяце", '');
let	value2 = prompt("Во сколько обойдется?", '');

appData.expenses[stat1] = value1;
appData.expenses[stat2] = value2;

let budget1Day = money / 30;

alert(budget1Day);