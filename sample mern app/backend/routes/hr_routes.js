let express=require('express');
let router = express.Router();
let{users}=require('../models/users');
router.get("/viewemployees", async(req, res) => {
    let result=await users.find();

    res.send(result);
});
router.delete("/deleteemployee/:id",async(req,res)=>{
    let deleterec=await users.findByIdAndDelete(req.params.id);
    if(deleterec){
        res.send("record deleted success")
    }
})

router.post("/assign-task", (req, res) => {
    res.send("Assign Task page called");
});

module.exports = router;