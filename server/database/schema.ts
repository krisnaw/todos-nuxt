import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import {boolean} from "drizzle-orm/pg-core";

export const todos = sqliteTable('todos', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    title: text('title'),
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
})