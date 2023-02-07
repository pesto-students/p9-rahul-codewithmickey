var master = {
    firstname: 'Amit',
    lastname: 'Jain',
    getFullName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var whatsmyname = function() {
    console.log(this.getFullName() + ' I found you!');
};

var mybindfunc = whatsmyname.bind(master); 

mybindfunc(); 
whatsmyname.call(master,'sushi', 'algorithms'); 
whatsmyname.apply(master,['sushi', 'algorithms']); 

