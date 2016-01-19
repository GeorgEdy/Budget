var spendingStore = (function () {

    var data = [{
        expensesLastId: 2,
        recuringExpensesLastId: 2,
        expenses: [
            {
                id: 0,
                name: "Legume & Fructe",
                category: "Foods",
                sum: "50"
            },
            {
                id: 1,
                name: "Pantofi",
                category: "Imbracaminte",
                sum: "100"
            }
        ],
        recuringExpenses: [
            {
                id: 0,
                name: "Intretinere",
                sum: "500"
            },
            {
                id: 1,
                name: "Taxa Scolarizare",
                sum: "100"
            }
        ]
    }];

    return {
        getAllExpenses: function () {
            return data;
        },
        addExpense: function (item) {
            item.id = data[0].expensesLastId++;
            data[0].expenses.push(item);
            return data;
        },
        addRecuringExpense: function (item) {
            item.id = data[0].recuringExpensesLastId++;
            data[0].recuringExpenses.push(item);
            return data;
        },
        updateExpense: function (id, updateData) {
            $.each(data[0].expenses, function (index) {
                if (this.id == id) {
                    data[0].expenses[index] = updateData;
                }
            });
            return data;
        },
        updateRecuringExpense: function (id, updateData) {
            $.each(data[0].recuringExpenses, function (index) {
                if (this.id == id) {
                    data[0].recuringExpenses[index] = updateData;
                }
            });
            return data;
        },
        deleteExpense: function (id) {
            $.each(data[0].expenses, function (index) {
                if (index == id) {
                    data[0].expenses.splice(index, 1);
                }
            });
            return data;
        },
        deleteRecuringExpense: function (id) {
            $.each(data[0].recuringExpenses, function (index) {
                if (index == id) {
                    data[0].recuringExpenses.splice(index, 1);
                }
            });
            return data;
        }
    };
}) ();