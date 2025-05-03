'use server'

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

const OneWeek = 60*60*24*7;

export async function signUp(params:SignUpParams) {
    const { uid, name, email,} = params;


    try{
        const userRecord = await db.collection('users').doc(uid).get();
        
        if(userRecord.exists){
            return{
                success: false,
                message: "This User Already Exists."
            }
        }

        await db.collection('users').doc(uid).set({

            name,email

        })


        return{
            success: true,
            message:"Account Create Successfully."
        }

    } catch( e : any ){
        console.error("There was an error : ", e);

        if(e.code === "auth/email-already-exists"){
            return {
                success : false,
                message: "This Email Already Exists."

            }
        }

        return{
            success: false,
            message:"Account Creation Failed."
        }
    }
    
}

export async function signIn(params:SignInParams){
    const { email, idToken} = params;

    try{
        const userRecord = await auth.getUserByEmail(email);
        
        if(!userRecord){
            return{
                success: false,
                message: "Account Doesn't Exists. Please Create One."
            }
        }

        await setSessionCookie( idToken );

    } catch( e ){
        console.error("There was an error : ",e);


        return{
            success: false,
            message:"Account Login Failed."
        }

        }

    }

export async function  setSessionCookie(idToken:string) {
    const cookieStore = await cookies();

    const sessionCookie  = await auth.createSessionCookie(idToken,{
        expiresIn: OneWeek * 1000,

    })

    cookieStore.set('session', sessionCookie,{
        maxAge: OneWeek,
        httpOnly: true,
        secure:process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: "lax",
    })
}