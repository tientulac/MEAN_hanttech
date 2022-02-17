const cron = require('node-cron');

module.exports = new class {

  constructor() {
    this.cron = cron;
    this.paths = [
      './cronjobs/cronTest',
    ];
  }

  start() {
    this.paths.forEach(path => {
      var cronJob = require(path);
      if (!cronJob.getSchedule()) {
        return;
      }
      let timeZone = cronJob.getTimezone();
      if (timeZone) {
        this.cron.schedule(
          cronJob.getSchedule(),
          async () => {
            try {
              if (!cronJob.isRunning()) {
                await cronJob.getCommand()()
              }
            }
            catch (e) {
              console.error(e)
            }
          },
          {
            scheduled: true,
            timezone: timeZone
          });
        return;
      }
      this.cron.schedule(
        cronJob.getSchedule(),
        async () => {
          try {
            if (!cronJob.isRunning()) {
              await cronJob.getCommand()()
            }
          }
          catch (e) {
            console.error(e)
          }
        }
      );
    });
  }

}
