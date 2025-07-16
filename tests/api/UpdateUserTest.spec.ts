import { test, request, expect } from '@playwright/test';

test('Update user info', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        },
    });

    const userId = 2;

    const res = await context.put(`https://reqres.in/api/users/${userId}`, {
        data: {
            name: 'Athi Updated',
            job: 'Lead QA',
        },
    });

    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    console.log('Updated User:', body);
    expect(body.name).toBe('Athi Updated');
});