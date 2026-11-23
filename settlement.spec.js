const { test, expect } = require('@playwright/test');
test('resolves must not accept a rejected promise', async () => {
  await expect(Promise.reject(new Error('request failed'))).resolves.not.toBe('cached');
});
test('rejects must not accept a successful promise', async () => {
  await expect(Promise.resolve('saved')).rejects.not.toThrow('timeout');
});
