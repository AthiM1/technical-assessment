import { test, request, expect } from '@playwright/test';

test('Create a new user', async () => {
    const context = await request.newContext({
        extraHTTPHeaders: {
            'x-api-key': 'reqres-free-v1',
            'Content-Type': 'application/json',
        },
    });

    const res = await context.post('https://reqres.in/api/users', {
        data: {
            name: 'Athi',
            job: 'Automation Engineer',
        },
    });

    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    console.log('Created User:', body);
    expect(body.name).toBe('Athi');
    expect(body.id).toBeDefined();
});