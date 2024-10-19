import { NextResponse } from "next/server"

const user = true;
export const middleware = (request)=>{
    const coo ='hdjkhjsha'
    console.log( request.cookies.get('token'))
    const cookies = request.cookies.get('token')
    if (!cookies || cookies.value !== coo ){
    return NextResponse.redirect(new URL('/login',request.url))}
    return NextResponse.next()
}


export const config = {
    matcher: ['/dashboard','/services']
}