var categoriesStore = (function () {
        var lastId = 3;
        var data = [
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
            getAllCategories: function () {
                return data;
            },
            getCategory: function (id) {
                var obj = "";
                $.each(data, function (index) {
                    if(index == id){
                        obj = data[id];
                    }
                });
                return obj;
            },
            addCategory: function (item) {
                item.id = lastId++;
                data.push(item);
                return data;
            },
            updateCategory: function (id, editedData) {
                if(editedData.id == id) {
                    data[id] = editedData;
                    return data;
                };
            },
            deleteCategory: function (id) {
                data.splice(id, 1);
            }
        };
    }
)();