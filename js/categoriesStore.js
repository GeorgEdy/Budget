var categories = (function () {
        var lastId = 3;
        var categoryData = [
            {
                id: 0,
                name: 'Food',
                limit: '200$'
            },
            {
                id: 1,
                name: 'Clothing',
                limit: '100$'
            },
            {
                id: 2,
                name: 'Health',
                limit: '300$'
            }
        ];

        return {
            getCategories: function () {
                return categoryData;
            },
            addCategory: function (item) {
                item.id = lastId++;
                categoryData.push(item);
                return categoryData;
            },
            editCategory: function (id, editedData) {
                if(editedData.id == id) {
                    categoryData[id] = editedData;
                    return categoryData;
                };
            },
            deleteCategory: function (id) {
                categoryData.splice(id, 1);
            }
        };
    }
)();