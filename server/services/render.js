const axios=require("axios");

exports.homeRoutes=(req,res)=>{
axios.get("http://localhost:3000/api/users")
res.render('pages/index');
}

exports.viewCase=(req,res)=>{
axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('pages/viewCase', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}
exports.addCase=(req,res)=>{
res.render('pages/addCase');
}

exports.contactUs=(req,res)=>{
res.render('pages/contactUs');
}
