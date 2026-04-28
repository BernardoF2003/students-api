import {DatabaseSync} from 'node:sqlite'

const database = new DatabaseSync(':memory:');

database.exec(`
  CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name TEXT,
    course TEXT
  ) STRICT
`);

const insert = database.prepare('INSERT INTO students (id, name, course) VALUES (?, ?, ?)');

insert.run(1, 'Ana Souza', 'Computer Science');
insert.run(2, 'Bruno Lima', 'Information Systems');
insert.run(3, 'Carla Mendes', 'Software Engineering');

const query = database.prepare('SELECT * FROM students ORDER BY id');

export default database;
