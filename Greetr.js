;(function(global, $) {

    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es', 'pt'];

    var greetings = {
     en: 'Hello',
     es: 'Hola',
     pt: 'Oi'   
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
        pt: 'Olá'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inició sesión',
        pt: 'iniciou sessão'
    }

    Greetr.prototype = {
        fullname: function() {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function() {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw 'nvalid language';
            }
        },

        greeting: function() {
            return greetings[this.language] + ' ' + this.firstName + '!'
        },

        formalGreeting: function() {
            return formalGreetings[this.language] + ' ' + this.fullname();
        },

        greet: function(formal) {
            var msg;

            // if undefined or null it will be coerced to false
            msg = formal ? this.formalGreeting() : this.greeting();

            if (console) {
                console.log(msg);
            }

            // 'this refers to calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            if(console) {
                console.log(logMessages[this.language] + ': ' + this.fullname());
            }
            return this;
        },

        setLang: function(lang) {
            this.language =  lang;

            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            msg = formal ? this.formalGreeting(): this.greeting();

            $(selector).html(msg);

            return this;

        }

    };

    Greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';

        self.validate();
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;


}(window, jQuery));
