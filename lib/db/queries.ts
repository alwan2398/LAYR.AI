import { eq } from "drizzle-orm";
import { db } from "./index";
import { users, type User, type NewUser } from "./schema";

// Ambil ID user dari ClerkID
export async function getUserById(id: string): Promise<User | undefined> {
  const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return user;
}

// Validasi Credit user yang default nya 3
export async function createUser(userData: NewUser): Promise<User> {
  const [newUser] = await db
    .insert(users)
    .values({
      ...userData,
      credits: 3,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning();
  
  return newUser;
}

// sync user + endpoint API
export async function syncUser(clerkData: {
  id: string;
  full_name: string;
  email: string;
  image_url?: string;
}): Promise<User> {
  try {
    // Check jika user ada maka kembali ke datanya
    const existingUser = await getUserById(clerkData.id);
    
    if (existingUser) {
      return existingUser;
    }
    
    // Jika user belum ada buat data baru dan simpan data nya
    const newUser = await createUser({
      id: clerkData.id,
      full_name: clerkData.full_name,
      email: clerkData.email,
      image_url: clerkData.image_url || null,
    });
    
    return newUser;
  } catch (error) {
    console.error("Error syncing user:", error);
    throw new Error("Failed to sync user data");
  }
}
