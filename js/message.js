!function(){
    var view = document.querySelector('section.message');
    var model = {
        fetch: function() {
            var query = new AV.Query('Message');
            return query.find()
        },
        save: function(name,content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            
            message.set('name', name);
            message.set('content', content);
            return message.save(name,content)
        },
        initAV: function() {
            AV.init({
                appId: "Sg34iuMpPvJF8lWdqjXd9KER-gzGzoHsz",
                appKey: "xRMT2rQaJ4E4r5TcrjfOHAHH",
                serverURLs: "https://sg34iump.lc-cn-n1-shared.com"
            });
        }
    }
    var controller = {
        view: null,
        model: null,
        messageList: null,
        form: null,
        init: function(view,model) {
            this.view = view;
            this.model = model;
            this.messageList = view.querySelector('#messageList');
            this.form = view.querySelector('form');
            this.model.initAV();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function() {
            this.model.fetch().
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
            this.form.addEventListener('submit',(e) =>{
            e.preventDefault();
            this.saveMessage();
            })
        },
        saveMessage: function() {
            let myForm = this.form;
            var content = myForm.querySelector('input[name=content]').value;
            var name = myForm.querySelector('input[name=name]').value;
            
           
           this.model.save(name,content).then(function(object){
                let li =document.createElement('li');       
                li.innerText = `${object.attributes.name}:  ${object.attributes.content}`
                let messageList = document.querySelector('#messageList');
                messageList.appendChild(li);
                myForm.querySelector('input[name=content]').value = '';
                myForm.querySelector('input[name=name]').value = '';
                })
        }
    }
    controller.init(view,model);

}.call()

        
