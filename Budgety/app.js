// Budget Controller

var budgetController = (function () {


    var Expence = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percenteg = -1;
    };
    Expence.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percenteg = Math.round((this.value / totalIncome) * 100)
        } else {
            this.percenteg = -1;
        }
    };

    Expence.prototype.getPercentage = function () {
        return this.percenteg
    }



    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var calculateTotal = function (type) {
        var sum = 0
        data.allItems[type].forEach(function (current) {
            sum += current.value

        })
        data.totals[type] = sum
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percenteg: -1
    }

    return {
        addItam: function (type, des, val) {
            var newItem, ID;
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Create new item based on income or expenses type
            if (type === "inc") {
                newItem = new Income(ID, des, val)
            } else if (type = "exp") {
                newItem = new Expence(ID, des, val)
            }

            // Push it in your data structure
            data.allItems[type].push(newItem)
            // Return new element
            return newItem;
        },
        testing: function () {

            console.log(data);
        },

        deleteItem: function (type, id) {

            var ids = data.allItems[type].map(function (element) {
                return element.id
            });

            index = ids.indexOf(id)

            if (index !== -1) {
                data.allItems[type].splice(index, 1)

            }
        },


        calculatBudget: function () {

            // Caluculate total income and expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // Calculata budget:income- expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percenteg of income that we spent

            if (data.totals.inc > 0) {
                data.percenteg = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percenteg = -1;
            }
        },

        calculatePercentage: function () {

            data.allItems.exp.forEach(function (current) {
                current.calcPercentage(data.totals.inc)
            })

        },
        getPercentage: function () {
            var allPercentages;

            allPercentages = data.allItems.exp.map(function (current) {

                return current.getPercentage()
            })
            return allPercentages
        },



        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percenteg: data.percenteg
            }
        }
    };


})();


// UI Controller

var uiController = (function () {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: ".add__description",
        inputValue: '.add__value',
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expencesContainer: ".expenses__list",
        budgetValue: ".budget__value",
        budgetIncome: '.budget__income--value',
        budgetExpenses: '.budget__expenses--value',
        budgetPercentage: '.budget__expenses--percentage',
        conatiner: '.container',
        percentagesLabel: ".item__percentage",
        dateLabel:'.budget__title--month',

    }

    function formatNumber(number, type) {

        var num = Math.abs(number);
        num = num.toFixed(2);
        var numSplit = num.split('.');
        var int = numSplit[0];
        if (int.length > 3) {
            int = int.substring(0, int.length - 3) + "." + int.substring(int.length - 3, int.length)
        }

        var dec = numSplit[1];

        return (type === "exp" ? "-" : "+"
        ) + ' ' + int + "." + dec


    };
    
    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }

    }

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value[0].toUpperCase() + document.querySelector(DOMStrings.inputDescription).value.slice(1, document.querySelector(DOMStrings.inputDescription).value.length),
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';

            } else {
                element = DOMStrings.expencesContainer;
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">%21%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div> </div> </div>'
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type))
            // newHtmal = newHtml.replace('%21%',ovj.percentage )
            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml)

        },

        deleteListitem: function (id) {
            var element;
            element = document.getElementById(id)
            element.parentNode.removeChild(element)

        },

        clearFields: function () {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrings.inputDescription + ", " + DOMStrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields)

            fieldsArray.forEach(function (current, index, array) {
                current.value = "";
            })
            fieldsArray[0].focus();
        },

        displayBudget: function (obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type= 'exp'

            document.querySelector(DOMStrings.budgetValue).textContent = formatNumber(obj.budget,type)
            document.querySelector(DOMStrings.budgetIncome).textContent =formatNumber( obj.totalInc,'inc')
            document.querySelector(DOMStrings.budgetExpenses).textContent = formatNumber(obj.totalExp,"exp")
            if (obj.percenteg > 0) {
                document.querySelector(DOMStrings.budgetPercentage).textContent = obj.percenteg + "%"
            } else {
                document.querySelector(DOMStrings.budgetPercentage).textContent = "---"
            }

        },

        displayPercentage: function (percentage) {

            var fields = document.querySelectorAll(DOMStrings.percentagesLabel);



            nodeListForEach(fields, function (cerrent, index) {
                if (percentage[index] > 0) {
                    cerrent.textContent = percentage[index] + '%'
                } else {
                    cerrent.textContent = "---"
                }
            })
        },
        displayMonth:function(){

            var now, month, year,months;

            months=["January","February","March","April", "May","June", "July", "August","September","October","November", "December"];

             now= new Date();
             month=now.getMonth()
             year= now.getFullYear();
             document.querySelector(DOMStrings.dateLabel).textContent= months[month]+" "+year
        
        },
        chageType:function(){

            var fields=document.querySelectorAll(
                DOMStrings.inputType +","+ DOMStrings.inputDescription+","+DOMStrings.inputValue
            )
            nodeListForEach(fields,function(curent){
                curent.classList.toggle("red-focus");
            } )

            var button=document.querySelector(DOMStrings.inputBtn).classList.toggle('red ')
        },




        getDOMStrings: function () {
            return DOMStrings;
        }

    }

})();


// App Controller

var appController = (function (budgetCtrl, UICtrl) {

    var setUpEvantListeners = function () {
        var DOM = UICtrl.getDOMStrings()

        document.querySelector(DOM.inputBtn).addEventListener("click", controllAddItem);

        document.addEventListener("keypress", function (evant) {
            if (evant.code === "Enter") {
                controllAddItem()
            };
        });

        document.querySelector(DOM.conatiner).addEventListener('click', controlDeleteItem)

        document.querySelector(DOM.inputType).addEventListener('change',UICtrl.chageType)
    }


    var updateBudget = function () {

        // 1: Calculate the budget
        budgetCtrl.calculatBudget()

        // 2: Return the budget
        var budget = budgetCtrl.getBudget()


        // 3: Display the budget on the UI
        UICtrl.displayBudget(budget)

    };

    var updatePercentages = function () {
        // 1:Calculate percentage
        budgetCtrl.calculatePercentage()


        // 2:Read percentage from budget controller
        var percentage = budgetCtrl.getPercentage();

        // 3:Update the UI with new percentage
        UICtrl.displayPercentage(percentage)
    }

    var controllAddItem = function () {
        var input;
        var newItem;

        // 1: Get input data 
        input = UICtrl.getInput();


        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            // 2: Add item to the budget controller
            newItem = budgetCtrl.addItam(input.type, input.description, input.value)

            // 3: Add the item to the UI
            UICtrl.addListItem(newItem, input.type)

            // 4: Clear fields
            UICtrl.clearFields()

            // 5: Calculate and update budget
            updateBudget();

            // 6: Update percentage
            updatePercentages();

            console.log("Proba");
        }


    };

    var controlDeleteItem = function (evant) {
        var itemID, splitID, type, id;
        itemID = evant.target.parentNode.parentNode.parentNode.parentNode.id;
        console.log(itemID);
        if (itemID) {

            // inc-0
            splitID = itemID.split('-');

            type = splitID[0];
            id = parseInt(splitID[1]);

            // 1: Delete item from data structure
            budgetController.deleteItem(type, id)


            // 2: Delete item from the UI
            UICtrl.deleteListitem(itemID)

            //  3: Update and show budget in UI
            updateBudget()

            //4: Update percentages

            updatePercentages();
        }

    }

    return {
        inint: function () {
            console.log("Test");
            UICtrl.displayMonth()
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percenteg: -1
            })
            setUpEvantListeners()

        }
    }




})(budgetController, uiController);

appController.inint()