import { NextResponse } from "next/server"

export async function POST(request){
    const {name, email, phoneNumber, message} = await request.json()
    console.log(name, email, phoneNumber, message)

    return NextResponse.json({"result": "Success"}, {status: 200})
}