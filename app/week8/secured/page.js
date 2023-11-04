"use client";



import { useUserAuth } from "../_utils/auth-context";


export default function Page(){

                        const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

                        return(
                                                <main>
                                                                        <header>
                                                                                                <h1> Secured page</h1>





                                                                        </header>
                                                                        <section>
                                                                                                {user ? (
                                                                                                                        <p> Welcome , {user.displayName}. You are signed in!</p>

                                                                                                ) :  
                                                                                                (
                                                                                                                        <p>You must be logged in to view this page.</p>
                                                                                                ) } 
                                                                                               



                                                                        </section>





                                                </main>
                        );
}