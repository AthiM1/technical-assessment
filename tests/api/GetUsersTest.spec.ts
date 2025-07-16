import { test, request, expect } from '@playwright/test';

test('Get all users', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        },
    });

    const res = await context.get('https://reqres.in/api/users?page=1');
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    console.log('Users:', body.data);
    expect(Array.isArray(body.data)).toBeTruthy();
});