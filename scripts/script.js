let money, time; 

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

let appData =  {
  "budget": money,
  "timeData": time,
  "expenses": {},
  "optionalExpenses": {},
  "income": [],
  "savings": false
};

let thingsToBuy = prompt("Статья расходов в этом месяце:");
let cost = prompt("Во сколько все это обойдется?");

appData.expenses.thingsToBuy = cost;

alert(money / 30);

