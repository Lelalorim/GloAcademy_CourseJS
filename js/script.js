'use strict';

const btnStart = document.getElementById('start');
const btnCancel = document.getElementById('cancel');
const addIncome = document.getElementsByTagName('button')[0];
const addExpenses = document.getElementsByTagName('button')[1];
const deposit = document.querySelector('#deposit-check');
const allTextInputs = document.querySelectorAll('input[type=text]');
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

const remAdditiionalInputs = function () {
  expensesItems = document.querySelectorAll('.expenses-items');
  incomeItems = document.querySelectorAll('.income-items');
  for (let i = expensesItems.length - 1; i > 0; --i) {
    expensesItems[i].remove();
  }
  for (let i = incomeItems.length - 1; i > 0; --i) {
    incomeItems[i].remove();
  }
  addIncome.style.display = 'block';
  addExpenses.style.display = 'block';
};

const changeReadOnly = function (val) {

  allTextInputs.forEach(element => {
    if (!element.className.startsWith('result')) {
      element.readOnly = val;
    }
  });
};

const AppData = function () {

  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function () {

  this.budget = +salaryAmount.value;
  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getBudget();
  this.getAddIncome();
  this.showResult();
  changeReadOnly(true);
  btnStart.style.display = 'none';
  btnCancel.style.display = 'block';
  addExpenses.disabled = 'true';
  addIncome.disabled = 'true';

};
AppData.prototype.reset = function () {

  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
  allTextInputs.forEach(item => item.value = '');
  periodRangeValue.textContent = 1;
  periodRange.value = 1;
  btnStart.style.display = 'block';
  btnCancel.style.display = 'none';
  btnStart.disabled = 'true';
  addExpenses.removeAttribute('disabled');
  addIncome.removeAttribute('disabled');
  changeReadOnly(false);
  remAdditiionalInputs();

};
AppData.prototype.showResult = function () {
  resultBudgetMonth.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonth.value = this.expensesMonth;
  addExpensesValue.value = this.addExpenses.join(', ');
  addIncomeValue.value = this.addIncome.join(', ');
  targetMonth.value = this.getTargetMonth();
  incomePeriod.value = this.calcPeriod();
  periodRange.addEventListener('input', this.showResult.bind(this), {
    once: true
  });

};
AppData.prototype.addExpensesBlock = function () {
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  clearInputValue(cloneExpensesItem);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpenses);
  expensesItems = document.querySelectorAll('.expenses-items');
  if (expensesItems.length === 3) {
    addExpenses.style.display = 'none';
  }

  setValidateInput();
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  clearInputValue(cloneIncomeItem);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addIncome);
  incomeItems = document.querySelectorAll('.income-items');
  if (incomeItems.length === 3) {
    addIncome.style.display = 'none';
  }

  setValidateInput();
};
AppData.prototype.getExpenses = function () {

  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      this.expenses[itemExpenses] = cashExpenses;
    }
  }, this);
};
AppData.prototype.getIncome = function () {
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
};
AppData.prototype.getAddExpenses = function () {

  let addExpenses = addExpensesItems.value.split(',');
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      this.addExpenses.push(item);
    }
  }, this);

};
AppData.prototype.getAddIncome = function () {

  addIncomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (item.value !== '') {
      this.addIncome.push(itemValue);
    }
  }, this);

};
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += +this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
  return Math.ceil(target.value / this.budgetMonth);
};
AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return ('У вас высокий уровень дохода.');

  } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
    return ('У вас средний уровень дохода.');

  } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
    return ('К сожалению у вас уровень дохода ниже среднего.');

  } else {
    return ('Что то пошло не так.');
  }
};
// AppData.prototype.getInfoDeposit = function () {
//   if (this.deposit) {
//     do {
//       this.percentDeposit = +prompt('Укажите процентyю ставку по депозиту', 3);
//     }
//     while (!isNumber(this.percentDeposit) || this.percentDeposit === 0);
//     do {
//       this.moneyDeposit = +prompt('Укажите сумму вклада', 10000);
//     }
//     while (!isNumber(this.moneyDeposit) || this.moneyDeposit === 0);
//   }
// };
AppData.prototype.calcPeriod = function () {
  return this.budgetMonth * periodRange.value;
};
AppData.prototype.eventListeners = function () {

  btnStart.addEventListener('click', this.start.bind(this));
  btnCancel.addEventListener('click', this.reset);
  addExpenses.addEventListener('click', this.addExpensesBlock.bind(this));
  addIncome.addEventListener('click', this.addIncomeBlock.bind(this));
  periodRange.addEventListener('input', function () {
    periodRangeValue.textContent = periodRange.value;
  });
  salaryAmount.addEventListener('input', function () {

    if (salaryAmount.value !== '') {
      btnStart.disabled = false;
    } else {
      btnStart.disabled = 'true';
    }

  });
  console.log(this);
};



const appData2 = new AppData();

btnStart.disabled = 'true';
setValidateInput();
appData2.eventListeners();