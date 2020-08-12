export class CounterService {
  activeUserCount = 0;
  inactiveUserCount = 0;

  incrementActiveUserCount() {
    this.activeUserCount++;
    console.log(this.activeUserCount);
  }
  incrementInactiveUserCount() {
    this.inactiveUserCount++;
    console.log(this.inactiveUserCount);
  }
}
