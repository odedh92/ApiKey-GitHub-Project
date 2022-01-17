const { model } = require("mongoose");
const pullRequest = require('./controllers/pullRequstController');


module.exports = (app) => {


    app.post('/webhook', async (req, res) => {
        try {
            let result = await pullRequest.create(req.body);
            console.log('cheeck')
            res.send(result);
        }
        catch (error) {
            res.error({ code: 400, message: error.message });
        };
    });

    app.get('/webhook', async (req, res) => {
        try {
            let get = await pullRequest.read();
            const arr = get.map(function (obj) {
                return {
                    action: obj.action,
                    userName: obj.sender.login,
                    id: obj._id,
                    date: obj.pull_request.created_at
                }
            })
            res.send(arr);
        }
        catch (error) {
            res.send({ code: 400, message: error });
        };
    });
};