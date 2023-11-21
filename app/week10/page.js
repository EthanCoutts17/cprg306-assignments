"use client";

import Link from "next/link";

import { useUserAuth } from "./_utils/auth-context";

export default function page(){

                        const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();


                        async function handleSignIn(){
                                                try {
                                                                        await gitHubSignIn();
                                                                        
                                                } catch (error) {
                                                                        console.log(error);
                                                                        
                                                }
                        }

                        async function handleSignOut(){
                                                try {
                                                                        await firebaseSignOut();
                                                                        
                                                } catch (error) {
                                                                        console.log(error);
                                                                        
                                                }
                        }



                        return(
                              <main>
                                    <header>
                                            <h1>Login page</h1>

                                    </header>
                                    <section>

                                                {user ? (
                                                <div>
                                                                        <p> welcome,{user.displayName} | {user.email}</p>
                                                                        <p> Your user id is {user.uid}</p>
                                                                        
                                                                        <li><Link href= "/week10/shopping-list">shopping List</Link></li>
                                                                        
                                                                        <button 
                                                                        className = "text-lg m-2 hover:underline" onClick={handleSignOut}>
                                                                        Sign out                    
                                                                        </button>


                                                </div>
                                                )
                                                : (<div>
                                                                        <button 
                                                                        className = "text-lg m-2 hover:underline" onClick={handleSignIn}>
                                                                        Sign in                    
                                                                        </button>



                                                </div>
                                                ) }




                                    </section>
                              </main>                 
                        );
}