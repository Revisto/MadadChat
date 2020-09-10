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

                // setTimeout(function(){ alert("Hello"); }, 3000);

                this.$chatHistoryList.append(template(context));
                this.scrollToBottom();
                this.$textarea.val('');



                    const Http = new XMLHttpRequest();
                    const url='http://127.0.0.1:2223/Text/'+this.messageToSend;
                    Http.open("GET", url);
                    Http.send();
    
                    Http.onreadystatechange = (e) => {

                    ali=(Http.responseText);
                    res = ali.split("|||");

                    var i;
                    
                    };

                    function Response(res,thetime){

                        

                        last =  name.split('.');
                        last = last[last.length - 1].toLowerCase();
    
                        console.log(last);


                        var i;
                        for (i = 0; i < res.length; i++) {

                            $(".msg-single ul").append('<div class="sender-message-line table-content vivify swoopInBottom"> <div class="table-content-cell" id="ava"> <img src="/static//img/pro_2.png" alt="DP" class="avatar"> </div> <div class="msg-conatiner"> <div class="actual-msg"></div> <span>'+type(res[i])+'</span> <div class=""> <div class="message-seen text-right">'+thetime+'</div> </div> </div> </div>');
                        
                            
                    };
                };
                    
function type(name){
    
    splited =  name.split('.');
    last = splited[splited.length - 1].toLowerCase();

    if ((last=='mp4') || (last=='mkv') ){
        return   '<video width="350" controls="" style=" border-radius: 20px; box-shadow: 0px 0px 40px #00000069; "> <source src="'+name+'" type="video/mp4" style="border-radius: 20px;box-shadow: 0px 0px 40px #00000026;"> </video>'
    };

    if (last=='mp3') {
        return   '<audio controls class="audio" > <source src="'+name+'" type="audio/mpeg"></audio>' 
    };

    if ((last=='jpeg') || (last=='png') || (last=='jpg') || (last=='gif') ) {
        return   '<img src="'+name+'" width="350" alt="MadadContent" style="border-radius: 20px;box-shadow: 0px 0px 40px #00000026;">' 
    };

    if ((name.split(','))[0]=='href') {
        return   '<div class="button_cont" align="center"><a class="example_c" href="'+(name.split(','))[2]+'" target="_blank" rel="nofollow noopener">'+(name.split(','))[1]+'</a></div>'
    };
    

    return name;

};


                


                //$(".msg-single ul").append('<div class="sender-message-line table-content vivify swoopInBottom"> <div class="table-content-cell" id="ava"> <img src="/static//img/pro_2.png" alt="DP" class="avatar"> </div> <div class="msg-conatiner"> <div class="actual-msg"></div> <span>'+res[i]+'</span> <div class=""> <div class="message-seen text-right">sdsdsdsd</div> </div> </div> </div>');

                // Responses


                                

                var templateResponse = Handlebars.compile($("#message-response-template").html());

                setTimeout(function () {
                    var contextResponse = {
                        response: 'ali',
                        
                        time: this.getCurrentTime()
                    };
                    Response(res, this.getCurrentTime());
                    this.$chatHistoryList.append(templateResponse(contextResponse));
                    this.scrollToBottom();

                }.bind(this), 1500);

            }

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