import { test, request, expect } from '@playwright/test';

test('Login - Retrieve JWT token', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        },
    });

    const res = await context.post('https://reqres.in/api/login', {
        data: {
            email: 'eve.holt@reqres.in',
            password: 'cityslicka',
        },
    });

    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    console.log('JWT Token:', body.token);
    expect(body.token).toBeDefined();
});