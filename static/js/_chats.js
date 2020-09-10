(function () {
    


    var chat = {
        

        init: function () {
            this.cacheDOM();
            this.bindEvents();
            this.render();
        },
        cacheDOM: function () {
            this.$chatHistory = $('.msg-single');
            this.$button = $('button');
            this.$textarea = $('#message-to-send');
            this.$chatHistoryList = this.$chatHistory.find('ul');
        },
        bindEvents: function () {
            this.$button.on('click', this.addMessage.bind(this));
            this.$textarea.on('keyup', this.addMessageEnter.bind(this));
        },
        render: function () {
            this.scrollToBottom();
            if (this.messageToSend.trim() !== '') {
                var template = Handlebars.compile($("#message-template").html());
                var context = {
                    messageOutput: this.messageToSend,
                    time: this.getCurrentTime()
                };

                this.$chatHistoryList.append(template(context));
                this.scrollToBottom();
                this.$textarea.val('');

                // responses

   

                /*
                function responsesec() {
                const Http = new XMLHttpRequest();
                const url='http://127.0.0.1:2223/Text/ed';
                Http.open("GET", url);
                Http.send();

                Http.onreadystatechange = (e) => {
                aali=(Http.responseText);
                
                };
                return aali
            };*/

                //respoonse()
                //alert('start')
                //alert (setTimeout(() => { alert(respoonse()) }, 2000));
                //alert(ali)


                
                //setTimeout(() => { alert('ans'+responsesec()) }, 150);

                let response = await fetch('http://127.0.0.1:2223/Text/ed');

                if (response.ok) { // if HTTP-status is 200-299
                // get the response body (the method explained below)
                let textansw = await response.text ;
                alert(textansw);
                } else {
                alert("HTTP-Error: " + response.status);
                };




                var templateResponse = Handlebars.compile($("#message-response-template").html());
                
                
                setTimeout(function () {
                    this.$chatHistoryList.append(templateResponse(contextResponse));
                    this.scrollToBottom();
                }.bind(this), 1500);


                

                
                var contextResponse = {
                    response: $.parseHTML('<div class="table-content-cell" id="ava">'),
                    time: this.getCurrentTime()
                };



            };

        },

        addMessage: function () {
            this.messageToSend = this.$textarea.val()
            this.render();
        },
        addMessageEnter: function (event) {
            // enter was pressed
            if (event.keyCode === 13) {
                this.addMessage();
            }
        },
        scrollToBottom: function () {
            this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
        },
        getCurrentTime: function () {
            return new Date().toLocaleTimeString().
            replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
        },
        getRandomItem: function (arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

    };


    chat.init();

    var searchFilter = {
        options: {
            valueNames: ['name']
        },
        init: function () {
            var userList = new List('people-list', this.options);
            var noItems = $('<li id="no-items-found">No items found</li>');

            userList.on('updated', function (list) {
                if (list.matchingItems.length === 0) {
                    $(list.list).append(noItems);
                } else {
                    noItems.detach();
                }
            });
        }
    };

    searchFilter.init();
    

})();
