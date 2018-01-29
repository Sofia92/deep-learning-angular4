/**
 * User: sofia
 * Date: 2018/1/29
 * Version: 1.0.0
 * Description:
 */
export class LoggerService {
  logs: string[] = [];
  prevMsg = '';
  prevMsgCount = 1;

  log(msg: string) {
    if (msg === this.prevMsg) {
      this.logs[this.logs.length - 1] = msg + ` (${this.prevMsgCount += 1}x)`;
    } else {
      this.prevMsg = msg;
      this.prevMsgCount = 1;
      this.logs.push(msg);
    }
  }

  clear() {
    this.logs.length = 0;
  }

  tick() {
    this.tick_then(() => {
    });
  }

  tick_then(fn: () => any) {
    setTimeout(fn, 0);
  }
}
