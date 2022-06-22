var Person = Backbone.Model.extend({});

var People = Backbone.Collection.extend({

    model: Person

});

var PersonView = Backbone.View.extend({

    tagName: "li",

    template: _.template( $("#personTemplate").html() ),

    render: function() {

        var html = this.template( this.model.toJSON() );

        this.$el.append(html);

        return this;
        
    },

    events: {

        "click":  "changeColor", 
        "dblclick" : "showInfo"

    },

    changeColor: function(e) {

        this.$("strong").css("color", "red");

    },

    showInfo: function() {

        alert("Imię: " + this.model.get("name") + ", wiek: " + this.model.get("age"));
        
    }

});

var PeopleView = Backbone.View.extend({
    
    tagName: "ul",

    render: function() {

        this.collection.each(this.addOne, this);

        $("body").append(this.el);
        
    },

    addOne: function(model) {

        var view = new PersonView({model: model});

        this.$el.append(view.render().el);

    }

});

var people = new People([
    {
        id: 1,
        name: "John",
        age: 33,
        hobbies: ["sport", "IT", "fishing"]
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

var peopleView = new PeopleView({collection: people});

peopleView.render();
