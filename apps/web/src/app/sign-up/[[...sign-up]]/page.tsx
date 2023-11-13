import {SignUp} from "@clerk/nextjs";

const SignInPage = () => {
    return (
        <div
            className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-[90vh]">
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
                <div className="absolute inset-0 bg-zinc-900"/>
            </div>
            <div className="lg:p-8 flex flex-col items-center">
                <SignUp/>
            </div>
        </div>
    )
}

export default SignInPage;
