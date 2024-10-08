"use server";
import { db } from '../index';
import { InsertPost, InsertUser, postsTable, usersTable, InsertApplication, SelectApplication, applicationsTable } from '../schema';

export async function createUser(data: InsertUser) {
  await db.insert(usersTable).values(data);
}

export async function createPost(data: InsertPost) {
  await db.insert(postsTable).values(data);
}

export async function addApplication(data: InsertApplication) {
  await db.insert(applicationsTable).values(data);
}