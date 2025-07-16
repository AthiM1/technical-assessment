import { test, expect } from '@playwright/test';
import { getApiContext, login, getTaskId } from '../api/utils/apiUtils';

test('Verify task exists via GET', async () => {
    const ctx = await getApiContext();
    const token = await login();

    const res = await ctx.get('https://reqres.in/api/tasks', {
        headers: { Authorization: `Bearer ${token}` },
    });

    const tasks = await res.json();
    const taskId = getTaskId();
    expect(tasks.some((t: any) => t.id === taskId)).toBeTruthy();
});