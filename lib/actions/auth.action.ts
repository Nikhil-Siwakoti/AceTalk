'use server'

import { db } from "@/firebase/admin";
import { Fascinate } from "next/font/google";

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

    } catch( e:any ){
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