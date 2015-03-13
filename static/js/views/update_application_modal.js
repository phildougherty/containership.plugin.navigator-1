Containership.Views.UpdateApplicationModal = Backbone.View.extend({

    tagName: "div",

    id: "applicationUpdate",

    className: "ui small modal",

    events: {
        "keyup #appId": "setId",
        "keyup #appImage": "setImage",
        "keyup #appCommand": "setCommand",
        "keyup #appCPUs": "setCPUs",
        "keyup #appMemory": "setMemory",
        "keyup #appContainerPort": "setContainerPort",
        "change #network_mode_inputs input[type=radio]": "setNetworkMode"
    },

    initialize: function(){},

    render: function(){
        var content = [
            '<i class = "close icon"></i>',
            '<div class = "header">', 'Update Application ', this.model.get("id"), '</div>',
            '<div class = "content">',
                '<div class="ui form grid">',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>Image</label>',
                        '</div>',
                        '<div class = "twelve wide column fluid">',
                            '<input id = "appImage" type="text" value="', this.model.get("image"), '">',
                        '</div>',
                    '</div>',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>Command</label>',
                        '</div>',
                        '<div class = "twelve wide column fluid">',
                            '<input id = "appCommand" type="text" value="', this.model.get("command"), '">',
                        '</div>',
                    '</div>',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>Automatic Respawn</label>',
                        '</div>',
                        '<div id="network_mode_inputs" class = "twelve wide column fluid">',
                            '<input type="radio" name="respawn_enabled" value="true" checked> On',
                            '<input style="margin-left:25px;" type="radio" name="respawn_enabled" value="false"> Off',
                        '</div>',
                    '</div>',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>CPUs</label>',
                        '</div>',
                        '<div class = "twelve wide column fluid">',
                            '<input id="appCPUs" type="text" value="', this.model.get("cpus"), '">',
                        '</div>',
                    '</div>',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>Memory</label>',
                        '</div>',
                        '<div class = "twelve wide column fluid">',
                            '<input id="appMemory" type="text" value="', this.model.get("memory"), '">',
                        '</div>',
                    '</div>',
                    '<div class="two column row">',
                        '<div class = "four wide column">',
                            '<label>Container Port</label>',
                        '</div>',
                        '<div class = "twelve wide column fluid">',
                            '<input id="appContainerPort" type="text" value="', this.model.get("container_port"), '">',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
            '<div class = "actions">',
                '<div class="ui red button">Cancel</div>',
                '<div class="ui ok green button">Save</div>',
            '</div>'
        ]

        $(this.el).html(content.join(""));
        $("#main").append(this.el);
    },

    setId: function(element){
        this.model.set({name: $(element.target).val()});
    },

    setImage: function(element){
        this.model.set({image: $(element.target).val()});
    },

    setCommand: function(element){
        this.model.set({command: $(element.target).val()});
    },

    setCPUs: function(element){
        this.model.set({cpus: $(element.target).val()});
    },

    setMemory: function(element){
        this.model.set({memory: $(element.target).val()});
    },

    setContainerPort: function(element){
        if($(element.target).val() != null && $(element.target).val() != ""){
            this.model.set({container_port: $(element.target).val()});
        }
    },

    setNetworkMode: function(element){
        this.model.set({network_mode: $(element.target).val()});
    }
});
