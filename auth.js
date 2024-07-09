import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    auth,
    signIn,
    singOut,
    handlers: { GET, POST }
} = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { email, password } = credentials;
                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_API}/account/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    });

                    // Check if the response is not ok
                    if (!res.ok) {
                        console.error(`HTTP error! status: ${res.status}`);
                        return null;
                    }

                    const user = await res.json().catch(() => {
                        console.error("Failed to parse JSON response");
                        return null;
                    });

                    if (user) {
                        return user;
                    } else {
                        console.error("No user found in response");
                        return null;
                    }
                } catch (error) {
                    console.error("Error during authorization:", error);
                    return null;
                }
            }
        })
    ],

    session: {
        strategy: 'jwt'
    },

    pages: {
        signIn: '/login'
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                // Add other user properties to the token if needed
                token = { ...token, ...user }
            }
            return token;
        },

        async session({ session, token }) {
            // Add other properties to the session if needed
            session = { ...session, ...token }
            return session;
        }
    }
});
