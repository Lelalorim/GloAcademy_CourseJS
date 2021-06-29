'use strict';

const btnStart = document.getElementById('start'),
  btnCancel = document.getElementById('cancel'),
  addIncome = document.getElementsByTagName('button')[0],
  addExpenses = document.getElementsByTagName('button')[1],
  deposit = document.querySelector('#deposit-check'),
  allTextInputs = document.querySelectorAll('input[type=text]'),
  addIncomeItem = document.querySelectorAll('.additional_income > input'),
  budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
  expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
  addIncomeValue = document.getElementsByClassName('additional_income-value')[0],
  incomePeriod = document.getElementsByClassName('income_period-value')[0],
  targetMonth = document.getElementsByClassName('target_month-value')[0],
  resultBudgetMonth = document.querySelector('.budget_month-value'),
  salaryAmount = document.querySelector('.salary-amount'),
  expensesTitle = document.querySelector('.expenses-items > .expenses-title'),
  addExpensesItems = document.querySelector('.additional_expenses-item'),
  target = document.querySelector('.target-amount'),
  periodRange = document.querySelector('.period-select'),
  periodRangeValue = document.querySelector('.period-amount'),
  addExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItems = document.querySelectorAll('.income-items');

const clearInputValue = function (arr) {
  arr.querySelectorAll('input').forEach(item => item.value = '');
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

class AppData {

  constructor() {
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
  }

  start() {

    this.budget = +salaryAmount.value;
    this.getExpensesIncome();
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

  }

  reset() {

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
    console.log(this);

  }

  setValidateInput() {
    const strInput = function (element) {
      element = document.querySelectorAll('input[placeholder="Наименование"]');
      element.forEach(item => {
        item.addEventListener('input', () => {
          item.value = item.value.replace(/[^\s,а-я]/gi, '');
        });
      });
    };

    const numInput = function (element) {
      element = document.querySelectorAll('input[placeholder="Сумма"]');
      element.forEach(item => {
        item.addEventListener('input', () => {
          item.value = item.value.replace(/[\D]/g, '');
        });
      });
    };

    strInput();
    numInput();
  }

  showResult() {
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

  }

  addExpensesBlock() {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    clearInputValue(cloneExpensesItem);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpenses);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      addExpenses.style.display = 'none';
    }

    this.setValidateInput();
  }

  addIncomeBlock() {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    clearInputValue(cloneIncomeItem);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, addIncome);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      addIncome.style.display = 'none';
    }

    this.setValidateInput();
  }

  getExpensesIncome() {

    const count = item => {
      const startStr = item.className.split('-')[0];
      const itemTitle = item.querySelector(`.${startStr}-title`).value;
      const itemAmount = item.querySelector(`.${startStr}-amount`).value;
      if (itemTitle !== '' && itemAmount !== '') {
        this[startStr][itemTitle] = itemAmount;
      }

    };

    incomeItems.forEach(count);
    expensesItems.forEach(count);

    for (const key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }

  getAddExpenses() {
    const _this = this;
    let addExpenses = addExpensesItems.value.split(',');
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== '') {
        _this.addExpenses.push(item);
      }
    });

  }

  getAddIncome() {
    const _this = this;
    addIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (item.value !== '') {
        _this.addIncome.push(itemValue);
      }
    });

  }

  getExpensesMonth() {
    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }
  }

  getBudget() {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
  }

  getTargetMonth() {
    return Math.ceil(target.value / this.budgetMonth);
  }

  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return ('У вас высокий уровень дохода.');

    } else if (this.budgetDay >= 600 && this.budgetDay < 1200) {
      return ('У вас средний уровень дохода.');

    } else if (this.budgetDay < 600 && this.budgetDay >= 0) {
      return ('К сожалению у вас уровень дохода ниже среднего.');

    } else {
      return ('Что то пошло не так.');
    }
  }

  calcPeriod() {
    return this.budgetMonth * periodRange.value;
  }

  eventListeners() {

    btnStart.addEventListener('click', this.start.bind(this));
    btnCancel.addEventListener('click', this.reset.bind(this));
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

    this.setValidateInput();
  }
}

const appData2 = new AppData();

btnStart.disabled = 'true';
appData2.eventListeners();