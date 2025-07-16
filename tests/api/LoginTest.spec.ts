import { test, expect } from '@playwright/test';
import { login } from '../api/utils/apiUtils';

test('Login API should return token', async () => {
    const token = await login();
    expect(token).toBeDefined();
});