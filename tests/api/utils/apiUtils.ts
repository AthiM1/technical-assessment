import { test, expect } from '@playwright/test';
import { getApiContext, login, setTaskId } from '../../api/LoginTest.spec';

test('Create task successfully', async () => {
    const ctx = await getApiContext();
    const token = await login();

    const res = await ctx.post('https://reqres.in/api/tasks', {
        data: {
            title: 'Test Task',
            completed: false,
        },
        headers: { Authorization: `Bearer ${token}` },
    });

    const body = await res.json();
    expect(body.title).toBe('Test Task');
    setTaskId(body.id);
});