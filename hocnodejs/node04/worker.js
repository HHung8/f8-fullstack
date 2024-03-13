const cron = require('node-cron');
// Thự viện node-cron sử dụng kỹ thuật lập lịch giống phần mềm crọnjob trên hệ điều hành linux
const job = require('./core/job');

cron.schedule("* * * * *", () => {
    job.execute();
})


