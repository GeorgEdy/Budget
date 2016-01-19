/**
 * Created by eduar on 19/01/16.
 */
var addExpense = function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var amount = $('#amount').val();
    var select = $('select').val();
    var totalBudget = budgetStore.getAllBudget().budget;
    spendingStore.addExpense({name: name, category: select, sum: amount});
    totalBudget = parseInt(totalBudget) - amount;
    budgetStore.updateBudget(totalBudget);
};

var deleteExpenseOnClick = function (id) {
    var totalBudget = budgetStore.getAllBudget().budget;
    var deletedExpense = spendingStore.getExpense(id).sum;
    totalBudget = parseInt(totalBudget) + deletedExpense;
    spendingStore.deleteExpense(id);
    budgetStore.updateBudget(totalBudget);

    return false;
}


