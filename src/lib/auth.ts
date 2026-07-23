import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function getAdminSession() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token) return null;

    // For local dev/admin session, check if token matches active admin email or valid session
    const admin = await prisma.adminUser.findFirst();
    if (admin && token === `session_${admin.id}`) {
      return admin;
    }
    return null;
  } catch (error) {
    return null;
  }
}
