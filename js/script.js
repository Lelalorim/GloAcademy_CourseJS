'use strict';

const btnCalc = document.getElementById('start');
const addIncome = document.getElementsByTagName('button')[0];
const addExpenses = document.getElementsByTagName('button')[1];
const deposit = document.querySelector('#deposit-check');
const addIncomeItem = document.querySelectorAll('.additional_income > input');
const budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
const expensesMonth = document.getElementsByClassName('expenses_month-value')[0];
const addIncomeValue = document.getElementsByClassName('additional_income-value')[0];
const incomePeriod = document.getElementsByClassName('income_period-value')[0];
const targetMonth = document.getElementsByClassName('target_month-value')[0];
const resultBudgetMonth = document.querySelector('.budget_month-value');
const salaryAmount = document.querySelector('.salary-amount');
const expensesTitle = document.querySelector('.expenses-items > .expenses-title');
const addExpensesItems = document.querySelector('.additional_expenses-item');
const target = document.querySelector('.target-amount');
const periodRange = document.querySelector('.period-select');
const periodRangeValue = document.querySelector('.period-amount');
let expensesItems = document.querySelectorAll('.expenses-items'),
  addExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
  incomeItems = document.querySelectorAll('.income-items');

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

const isString = function (perem) {
  return isNumber(perem) || perem === null || perem.trim().length === 0;
};

const clearInputValue = function (arr) {
  arr.querySelectorAll('input').forEach(item => item.value = '');
};

const setValidateInput = function () {
  let strInput = function (element) {
    element = document.querySelectorAll('input[placeholder="Наименование"]');
    element.forEach(item => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[^\s,а-я]/gi, '');
      });
    });
  };

  let numInput = function (element) {
    element = document.querySelectorAll('input[placeholder="Сумма"]');
    element.forEach(item => {
      item.addEventListener('input', () => {
        item.value = item.value.replace(/[\D]/g, '');
      });
    });
  };
  strInput();
  numInput();
};

let money;

const appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {

    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    //appData.getInfoDeposit();
    appData.getAddExpenses();
    appData.getBudget();
    appData.getAddIncome();

    appData.showResult();

  },
  showResult: function () {
    resultBudgetMonth.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonth.value = appData.expensesMonth;
    addExpensesValue.value = appData.addExpenses.join(', ');
    addIncomeValue.value = appData.addIncome.join(', ');
    targetMonth.value = appData.getTargetMonth();
    incomePeriod.value = appData.calcPeriod();
    periodRange.addEventListener('input', appData.showResult);
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    clearInputValue(cloneExpensesItem);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      addExpenses.style.display = 'none';
    }
    setValidateInput();
  },
  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    clearInputValue(cloneIncomeItem);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      addIncome.style.display = 'none';
    }
    setValidateInput();
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        this.expenses[itemExpenses] = cashExpenses;
      }
    }, this);
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = cashIncome;
      }
    }, this);

    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  },
  getAddExpenses: function () {
    let addExpenses = addExpensesItems.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    addIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (item.value !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  },
  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(target.value / this.budgetMonth);
  },
  getStatusIncome: function () {
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода.');

    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return ('У вас средний уровень дохода.');

    } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего.');

    } else {
      return ('Что то пошло не так.');
    }
  },
  getInfoDeposit: function () {
    if (this.deposit) {
      do {
        this.percentDeposit = +prompt('Укажите процентyю ставку по депозиту', 3);
      }
      while (!isNumber(this.percentDeposit) || this.percentDeposit === 0);
      do {
        this.moneyDeposit = +prompt('Укажите сумму вклада', 10000);
      }
      while (!isNumber(this.moneyDeposit) || this.moneyDeposit === 0);
    }
  },
  calcPeriod: function () {
    return this.budgetMonth * periodRange.value;
  }
};

btnCalc.disabled = 'true';
setValidateInput();

salaryAmount.addEventListener('input', function () {

  if (salaryAmount.value !== '') {
    btnCalc.disabled = false;
  } else {
    btnCalc.disabled = 'true';
  }

});

btnCalc.addEventListener('click', appData.start.bind(appData));

addExpenses.addEventListener('click', appData.addExpensesBlock);
addIncome.addEventListener('click', appData.addIncomeBlock);
periodRange.addEventListener('input', function () {
  periodRangeValue.textContent = periodRange.value;
});

// if (appData.getTargetMonth() < 0) {
//   console.log('Цель не будет достигнута');
// } else {
//   console.log(`Вы достигните цели через ${appData.getTargetMonth()} месяцев(-а).`);
// }

//console.log(appData.getStatusIncome());

// console.log('Наша программа включает в себя данные:');
// for (let key in appData) {
//   console.log(`${key} - ${appData[key]}`);
// }