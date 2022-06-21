var Person = Backbone.Model.extend({

    initialize: function() {
        console.log(this.toJSON())
    },

    defaults: {
        name: "John",
        age: 33,
    }
})

var john = new Person();