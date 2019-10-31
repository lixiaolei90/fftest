AV.init({
    appId: "Sg34iuMpPvJF8lWdqjXd9KER-gzGzoHsz",
    appKey: "xRMT2rQaJ4E4r5TcrjfOHAHH",
    serverURLs: "https://sg34iump.lc-cn-n1-shared.com"
});



var myForm = document.getElementById('postMessageForm');
myForm.addEventListener('submit',function(e){
    e.preventDefault();
    var content = myForm.querySelector('input[name=content]').value;
    var name = myForm.querySelector('input[name=name]').value;
    var Message = AV.Object.extend('Message');
    var message = new Message();
    var objects = null;
   
    message.set('name', name);
    message.set('content', content);
    message.save().then(function(){
        window.location.reload();
    })

    })

var query = new AV.Query('Message');
    query.find().
        then(function(messages){
        let messagesAttr = messages.map((item) => item.attributes)
        messagesAttr.forEach((item) =>{
            let li =document.createElement('li');
            li.innerText = "Name: " + item.name + " Conten: " + item.content;
            let messageList = document.querySelector('#messageList');
            messageList.appendChild(li)
            })
        })
        
