function CustomValidation (input) {
    this.invalidities = [];
    this.validity = [];

    this.inputNode = input;

    this.register();
}

CustomValidation.prototype = {
    addInvalidity: function(message) {
        this.invalidities.push(message);
    },
    getInvalidities: function() {
        return this.invalidities.join('. \n');
    },
    checkValidity: function(input) {
        
    }
}