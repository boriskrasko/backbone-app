var Person = Backbone.Model.extend({

    validate: function(attrs, options) {

        if(attrs.name === "") {
            return "Imię nie może być puste.";
        }

        if(attrs.age <= 0) {
            return "Wiek nie może być mniejszy niż 1.";
        }
        
    }

});

var person1 = new Person({
    name: "John"
});

