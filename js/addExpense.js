/**
 * Created by eduar on 19/01/16.
 */
var addExpense = function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var amount = $('#amount').val();
    var select = $('select').val();
    var totalBudget = budgetStore.getAllBudget().budget;
    console.log(totalBudget);
    spendingStore.addExpense({name: name, category: select, sum: amount});
    totalBudget = parseInt(totalBudget) - amount;
    budgetStore.updateBudget(totalBudget);
};


