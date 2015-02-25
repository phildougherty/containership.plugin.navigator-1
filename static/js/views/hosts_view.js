Containership.Views.HostsView = Backbone.View.extend({

    tagName: "div",

    initialize: function(){},

    render: function(){
        var content = [
            '<h2>Leaders</h2>',
            '<table id = "leaderHostList" class = "ui table">',
                '<thead>',
                    '<tr>',
                        '<th>ID</th>',
                        '<th>Hostname</th>',
                        '<th>Public IP</th>',
                        '<th>Private IP</th>',
                        '<th>Start Time</th>',
                    '</tr>',
                '</thead>',
                '<tbody>',
                '</tbody>',
            '</table>',
            '<h2>Followers</h2>',
            '<table id = "followerHostList" class = "ui table">',
                '<thead>',
                    '<tr>',
                        '<th>ID</th>',
                        '<th>Hostname</th>',
                        '<th>Public IP</th>',
                        '<th>Private IP</th>',
                        '<th>Containers</th>',
                        '<th>Start Time</th>',
                    '</tr>',
                '</thead>',
                '<tbody>',
                '</tbody>',
            '</table>'
        ]

        $(this.el).html(content.join(""));
        $("#main").html(this.el);
    }

});
