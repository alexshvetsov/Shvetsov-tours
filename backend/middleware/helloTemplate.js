export const Hello = data => {
    console.log(data.message);
    return `
    <!DOCTYPE html>
    <html style="margin:0; padding:0;">
    <head> <title>Hello</title></head>
    <body style="margin:0; padding:0;">
    <br/>
    <br/>
    <div>Hello</div>
    <div>name: ${data.name}</div>
    <div>contact info: ${data.email}</div>
    <div>message: ${data.message}</div>
    <br/>
    <br/>
    </body>
    </html>
    `;
};