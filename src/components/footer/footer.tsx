export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">
                © {currentYear} TeamOB. All rights reserved.
            </p>
            <div className="sm:ml-auto flex gap-4 sm:gap-6">
                <a className="text-xs hover:underline underline-offset-4" href="/privacy">
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}
