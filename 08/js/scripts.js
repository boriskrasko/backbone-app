var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({

    model: Person,

    comparator: function(a, b) {

        if(a.get("hobbies").length < b.get("hobbies").length) {
            return -1;
        } else {
            return 1;
        }

    }

});

var people = new People([
    {
        id: 1,
        name: "John",
        age: 33,
        hobbies: ["sport", "IT"]
    },
    {
        id: 2,
        name: "Thomas",
        age: 40,
        hobbies: ["golf", "cars"]
    },
    {
        id: 3,
        name: "Alice",
        age: 25,
        hobbies: ["swimming"]
    }
]);