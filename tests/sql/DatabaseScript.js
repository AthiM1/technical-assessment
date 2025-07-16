require('dotenv').config(); // loads variables from .env
const { Client } = require('pg');

async function run() {
  const client = new Client();

  try {
    await client.connect();
    console.log('Connected to DB');

    // 1. Insert a new task
    const insertQuery = `
      INSERT INTO tasks (title, completed, user_id)
      VALUES ($1, $2, $3)
      RETURNING id, title, completed, user_id
    `;
    const insertValues = ['Write API tests', false, 1];
    const insertRes = await client.query(insertQuery, insertValues);

    const insertedTask = insertRes.rows[0];
    console.log('Inserted Task:', insertedTask);

    // 2. Verify the task exists
    const selectQuery = 'SELECT * FROM tasks WHERE id = $1';
    const selectRes = await client.query(selectQuery, [insertedTask.id]);

    if (selectRes.rows.length === 0) {
      throw new Error('Task not found after insert!');
    }
    console.log('Verified Task:', selectRes.rows[0]);

    // 3. Update the completed flag
    const updateQuery = `
      UPDATE tasks
      SET completed = $1
      WHERE id = $2
      RETURNING id, title, completed, user_id
    `;
    const updateRes = await client.query(updateQuery, [true, insertedTask.id]);

    console.log('Updated Task:', updateRes.rows[0]);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.end();
    console.log('Disconnected from DB');
  }
}

run();