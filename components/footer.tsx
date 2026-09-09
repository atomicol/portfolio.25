import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "@/components/icons/x-icon";
import personalInfo from "@/data/personal-info.json";

export function Footer() {
  const { contact, meta } = personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-border">
      <div className="mx-auto max-w-2xl px-4 py-6 md:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Keven Hernandez. All rights reserved.
            </p>
            <span className="hidden text-muted-foreground sm:inline" aria-hidden="true">
              ·
            </span>
            <p className="text-xs text-muted-foreground">{meta.copyright}</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href={contact.links.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <XIcon width={20} height={20} />
            </Link>
            <Link
              href={contact.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <GitHubLogoIcon width={20} height={20} />
            </Link>
            <Link
              href={contact.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
            >
              <LinkedInLogoIcon width={20} height={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
