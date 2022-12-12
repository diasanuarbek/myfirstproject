let money, time, thingsToBuy, cost; 

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

for (let i = 0; i < 2; i++) {

  thingsToBuy = prompt("Что нужно купить?");
  cost = promt("Сколько это стоит?");

  appData.expenses[thingsToBuy] = cost;
}



console.log(appData);
alert(money / 30);

