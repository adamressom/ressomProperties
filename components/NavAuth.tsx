import Link from "next/link";
import { withAuth, signOut } from "@workos-inc/authkit-nextjs";

export default async function NavAuth() {
  const { user } = await withAuth();

  if (user) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontSize: 13, color: "#8A8078" }}>
          Hi, {user.firstName ?? "there"}
        </span>
        <form action={async () => {
          "use server";
          await signOut();
        }}>
          <button
            type="submit"
            style={{
              fontSize: 12,
              fontWeight: 500,
              background: "transparent",
              color: "#8A8078",
              border: "1px solid #EAE4DC",
              borderRadius: 8,
              padding: "10px 22px",
              cursor: "pointer",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            Sign Out
          </button>
        </form>
      </div>
    );
  }

  return (
    <Link
      href="/sign-up"
      style={{
        fontSize: 12,
        fontWeight: 500,
        background: "#1A1A1A",
        color: "#F8F5F0",
        borderRadius: 8,
        padding: "10px 22px",
        display: "flex",
        alignItems: "center",
        gap: 7,
        letterSpacing: "0.03em",
        textDecoration: "none",
        fontFamily: "'Outfit', sans-serif",
      }}
    >
      Sign Up
    </Link>
  );
}