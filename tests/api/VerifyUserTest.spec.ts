import { test, request, expect } from '@playwright/test';

test('Verify existing user by ID', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        },
    });

    const userId = 2;

    const res = await context.get(`https://reqres.in/api/users/${userId}`);
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    console.log('Fetched User:', body.data);
    expect(body.data.id).toBe(userId);
});