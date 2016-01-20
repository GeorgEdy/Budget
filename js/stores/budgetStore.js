var budgetStore = (function () {

    var data = [{
        budget: 600,
        extraBudgetLastId: 3,
        extraBudget: [
            {
                id: 1,
                name: "Part-time job",
                sum: "500"
            },
            {
                id: 2,
                name: "Bursa",
                sum: "100"
            }
        ]
    }];

    return {
        getAllBudget: function () {
            return data;
        },
        getExtraBudget: function (id) {
            var obj = "";
            $.each(data[0].extraBudget, function (index) {
                if(index == id){
                    obj = data[0].extraBudget[id];
                }
            });
            return obj;
        },
        addBudget: function (item) {
            data[0].budget = item;
            return data;
        },
        addExtraBudget: function (item) {
            item.id = data[0].extraBudgetLastId++;
            data[0].extraBudget.push(item);
            return data;
        },
        updateBudget: function (updateData) {
            data[0].budget = updateData;
            return data;
        },
        updateExtraBudget: function (id, updateData) {
            $.each(data[0].extraBudget, function (index) {
               if(this.id == id){
                   data[0].extraBudget[index] = updateData;
               }
            });
            return data;
        },
        deleteBudget: function () {
            data[0].budget = 0;
            return data;
        },
        deleteExtraBudget: function (id) {
            $.each(data[0].extraBudget, function (index) {
                if(index == id){
                    data[0].extraBudget.splice(index, 1);
                }
            });
            return data;
        }
    };
})();
























