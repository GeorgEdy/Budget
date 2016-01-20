var getExpenseFromStore = function (id) {
    var expense = spendingStore.getExpense(id);
    var budget = budgetStore.getAllBudget()[0].budget;
    budget = parseInt(budget) + parseInt(expense.sum);
    budgetStore.updateBudget(budget);
    //de adaugat la html campurile de populat
};
