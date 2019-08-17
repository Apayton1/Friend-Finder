// A GET Route to /survey which should display the survey page.
app.get("/survey", function(req,res){
    res.json(survey);
});
// A default, catch-all route that leads to home.html which displays the home page.
app.get("/", function(req,res){
    res.json(home)
});