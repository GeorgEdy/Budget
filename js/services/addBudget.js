var addBudget = function (e) {
    e.preventDefault();
    var budgetAmount = $('#add-budget').val();
    console.log(budgetAmount)

    var total = budgetStore.getAllBudget()[0].budget;
    total = parseInt(total) + parseInt(budgetAmount);
    budgetStore.updateBudget(total);
}