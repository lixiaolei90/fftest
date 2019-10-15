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
    message.save({
        'name':name,
        'content':content
    }).then(function() {
       
    })
    var query = new AV.Query('Message');
    console.log(query.find())
    
    })
// message.set(name, content);

