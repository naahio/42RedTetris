
function ContactPage() {
    return (
        <div className=' flex w-[80%] flex-col items-center justify-around '>
            <div className="flex flex-col self-end border  rounded-lg border-lightRed m-3 p-4 hover:border-green-600 space-y-1">
                <h2>Login       : </h2>
                <h2>Full name   :</h2>
                <h2>LinkedIn    :</h2>
                <h2>Github      : </h2>
            </div>
            <div className="flex flex-col self-start border rounded-lg border-lightRed m-3 p-4 hover:border-green-600 space-y-1">
                <h2>Login       : </h2>
                <h2>Full name   :</h2>
                <h2>LinkedIn    :</h2>
                <h2>Github      : </h2>
            </div>
        </div>
    );
}

export default ContactPage;