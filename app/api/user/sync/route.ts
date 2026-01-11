import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { syncUser } from "@/lib/db/queries";

export async function POST() {
  try {
    // Verifikasi user dari Clerk (server-side)
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    // Ambil data user dari Clerk (server-side)
    const clerkUser = await currentUser();
    
    if (!clerkUser) {
      return NextResponse.json(
        { error: "User not found in Clerk" },
        { status: 404 }
      );
    }

    // Extract data dari Clerk user object
    const userData = {
      id: clerkUser.id,
      full_name: `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim() || "User",
      email: clerkUser.emailAddresses[0]?.emailAddress || "",
      image_url: clerkUser.imageUrl,
    };

    // Validasi email
    if (!userData.email) {
      return NextResponse.json(
        { error: "Email not found in Clerk user data" },
        { status: 400 }
      );
    }

    // Sync user ke database (Check user dan create jika tidak ada)
    const user = await syncUser(userData);

    // Kembalikan data user
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        image_url: user.image_url,
        credits: user.credits,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  } catch (error) {
    console.error("Error in user sync endpoint:", error);
    
    return NextResponse.json(
      { 
        error: "Failed to sync user data",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}
