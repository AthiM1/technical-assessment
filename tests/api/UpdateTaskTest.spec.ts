import { test, expect } from '@playwright/test';
import { getApiContext, login, getTaskId } from '../api/utils/apiUtils';

test('Update task completed status', async () => {
  const ctx = await getApiContext();
  const token = await login();
  const taskId = getTaskId();

  const res = await ctx.put(`https://reqres.in/api/tasks/${taskId}`, {
    data: { completed: true },
    headers: { Authorization: `Bearer ${token}` },
  });

  const updated = await res.json();
  expect(updated.completed).toBe(true);
});