import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div
      className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-[90vh]">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
      </div>
      <div className="lg:p-8 flex flex-col items-center">
        <SignIn />
        {/*<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">*/}
        {/*    <div className="flex flex-col space-y-2 text-center">*/}
        {/*        <h1 className="text-2xl font-semibold tracking-tight">*/}
        {/*            Sign In*/}
        {/*        </h1>*/}
        {/*        <p className="text-sm text-muted-foreground">*/}
        {/*            Enter your credentials to continue*/}
        {/*        </p>*/}
        {/*    </div>*/}
        {/*    <UserAuthForm/>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default SignInPage;
