import { config } from 'dotenv';
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";
import postgres from 'postgres';

// config({ path: '.env.local' }); // or .env.local

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle(pool);