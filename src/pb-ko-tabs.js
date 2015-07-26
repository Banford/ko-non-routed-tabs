ko.components.register('pb-ko-tabs', {
    viewModel: function(params) {
        this.selectedTabKey = ko.observable('basic');

        this.selectedTabComponentName = ko.computed(function(){
            if(this.selectedTabKey() === undefined) return 'empty-tab-pane';
            return this.selectedTabKey() + '-tab-pane';
        }, this)

        // Behaviours
        this.getTabClass = function(key) {
            if(key === undefined) return 'disabled';
            return this.selectedTabKey() === key ? 'active' : '';
        };

        this.switchToTab = function(key) {
            if(!key) return false;
            this.selectedTabKey(key);
        }
    },
    template:
        '<ul class="nav nav-tabs" data-bind="template: { nodes: $componentTemplateNodes }">' +
        '</ul>' +
        '<div data-bind="component: selectedTabComponentName"></div>'
});

ko.components.register('pb-ko-tab', {
    viewModel: function(params) {
        this.key = params.key;
        this.label = params.label;
    },
    template:
        '<li role="presentation" data-bind="css: $parent.getTabClass(key)">' +
          '<a href="#" data-bind="text: label, click: function() { $parent.switchToTab(key) }"></a>' +
        '</li>'
});
