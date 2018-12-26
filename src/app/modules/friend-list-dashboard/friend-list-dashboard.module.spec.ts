import { FriendListDashboardModule } from './friend-list-dashboard.module';

describe('FriendListDashboardModule', () => {
  let friendListDashboardModule: FriendListDashboardModule;

  beforeEach(() => {
    friendListDashboardModule = new FriendListDashboardModule();
  });

  it('should create an instance', () => {
    expect(friendListDashboardModule).toBeTruthy();
  });
});
