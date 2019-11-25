!function(){
    var view = document.querySelector('section.message');

    var controller = {
        view: null,
        messageList: null,
        form: null,
        init: function(view) {
            this.view = view;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.initAV();
            this.loadMessages();
            this.bindEvents();
        },
        initAV: function(){
            AV.init({
                appId: "Sg34iuMpPvJF8lWdqjXd9KER-gzGzoHsz",
                appKey: "xRMT2rQaJ4E4r5TcrjfOHAHH",
                serverURLs: "https://sg34iump.lc-cn-n1-shared.com"
            });
        },
        loadMessages: function() {
            var query = new AV.Query('Message');
            query.find().
                then(function(messages){
                let messagesAttr = messages.map((item) => item.attributes)
                messagesAttr.forEach((item) =>{
                    let li =document.createElement('li');       
                    li.innerText = `${item.name}:  ${item.content}`
                    this.messageList.appendChild(li)
                    })
                })
        },
        bindEvents: function() {
            myForm.addEventListener('submit',function(e){
            e.preventDefault();
            this.saveMessage();
            })
        },
        saveMessage: function() {
            let myForm = this.form;
            var content = myForm.querySelector('input[name=content]').value;
            var name = myForm.querySelector('input[name=name]').value;
            var Message = AV.Object.extend('Message');
            var message = new Message();
            var objects = null;
           
            message.set('name', name);
            message.set('content', content);
            message.save().then(function(object){
                let li =document.createElement('li');       
                li.innerText = `${object.attributes.name}:  ${object.attributes.content}`
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';
                myForm.querySelector('input[name=name]').value = '';
                })
        }
    }
    controller.init(view);

}.call()

        
