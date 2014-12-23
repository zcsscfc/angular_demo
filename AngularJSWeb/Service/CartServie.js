///<reference path="/Library/angular.js"/>

var shoppingModule = angular.module("ShoppingModule", []).factory("itemss", function () {
    var items = {};
    items.query = function () {
        return [
             {
                 name: "Paint Pots",
                 price: 6.5,
                 quantity: 8
             },
                    {
                        name: "Polka dots",
                        price: 12.95,
                        quantity: 17
                    },
                    {
                        name: "Pebbles",
                        price: 6.95,
                        quantity: 5
                    }
        ]
    }
    return items;
});