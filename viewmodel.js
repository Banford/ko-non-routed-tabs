ko.components.register('basic-tab-pane', {
    viewModel: function(params) {
        this.firstname = 'John';
        this.surname = 'Smith';
    },
    template:
        '<h3>Basic Details</h3>' +
        '<p data-bind="text: firstname"></p>'
});

ko.components.register('address-tab-pane', {
    viewModel: function(params) {
        this.houseNumber = 37;
    },
    template:
        '<h3>Address Details</h3>' +
        '<p data-bind="text: houseNumber"></p>'
});

ko.components.register('empty-tab-pane', {
    template: '<div></div>'
});

ko.applyBindings();
