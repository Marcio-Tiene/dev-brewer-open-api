import { AdminKeyGuard } from './admin-key.guard';

describe('AdminKeyGuard', () => {
  it('should be defined', () => {
    expect(new AdminKeyGuard()).toBeDefined();
  });
});
