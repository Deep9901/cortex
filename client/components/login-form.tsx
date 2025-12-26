"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const onLogin = async () => {
    setIsLoading(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "http://localhost:3000"
    });
    setIsLoading(false);
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="relative w-full max-w-xl overflow-hidden border border-gray-700 bg-linear-to-b from-gray-900 to-gray-950 shadow-xl">
        {/* Subtle background effect */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/8 via-transparent to-purple-500/8"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>

        <CardContent className="relative pt-16 pb-14 px-12">
          {/* Cortex branding - larger */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-100 mb-2">Cortex CLI</h1>
            <p className="text-gray-400 text-base">AI-Powered Command Line Interface</p>
          </div>

          {/* Command preview - larger */}
          <div className="font-mono bg-gray-900/60 border border-gray-800 rounded-xl p-5 mb-10">
            <div className="flex items-center text-base">
              <span className="text-green-400 mr-3">$</span>
              <span className="text-gray-200">cortex auth --github</span>
            </div>
            <div className="text-gray-500 text-sm mt-2 pl-7">
              › Initializing GitHub OAuth 2.0 authentication
            </div>
          </div>

          {/* Main button - larger */}
          <div className="mb-10">
            <Button
              variant={"default"}
              className={cn(
                "w-full h-16 relative group transition-all duration-200",
                "bg-gray-900 hover:bg-gray-800",
                "border border-gray-700 hover:border-indigo-500",
                "shadow-md hover:shadow-lg",
                isLoading && "opacity-70 cursor-not-allowed"
              )}
              type="button"
              onClick={onLogin}
              disabled={isLoading}
            >
              <div className="flex items-center justify-center gap-4">
                {/* GitHub logo - larger */}
                <div className="relative">
                  <Image
                    src={"/github.svg"}
                    alt="GitHub"
                    height={24}
                    width={24}
                    className="size-6 dark:invert"
                  />
                </div>

                {/* Button text - larger */}
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold text-gray-100">
                    {isLoading ? "Authenticating..." : "Continue with GitHub"}
                  </span>
                  <span className="text-sm text-gray-400">
                    Secure OAuth 2.0 authentication
                  </span>
                </div>
              </div>

              {/* Loading indicator */}
              {isLoading && (
                <div className="absolute right-6">
                  <div className="w-6 h-6 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </Button>
          </div>

          {/* Status indicator - larger */}
          <div className="flex items-center justify-between text-base mb-10 px-2">
            <div className="flex items-center gap-3">
              <div className={cn(
                "w-3 h-3 rounded-full",
                isLoading ? "bg-yellow-500 animate-pulse" : "bg-green-500"
              )}></div>
              <span className="text-gray-300 font-medium">
                {isLoading ? "Authentication in progress..." : "Ready to authenticate"}
              </span>
            </div>
          </div>

          {/* Simple security info - larger */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Authenticate to unlock the full potential of Cortex CLI
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}