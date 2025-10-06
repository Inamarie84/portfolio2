import { Github, Linkedin, Mail } from 'lucide-react';
import { site } from '@/config/site';

type Props = {
  showLabels?: boolean;
  className?: string;
};

export default function SocialLinks({ showLabels = true, className }: Props) {
  return (
    <div className={['flex items-center gap-4', className].join(' ')}>
      <a
        href={`mailto:${site.email}`}
        aria-label="Email"
        className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
      >
        <Mail className="h-4 w-4" />
        {showLabels && <span>Email</span>}
      </a>
      <a
        href={site.links.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
      >
        <Github className="h-4 w-4" />
        {showLabels && <span>GitHub</span>}
      </a>
      <a
        href={site.links.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="inline-flex items-center gap-2 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-ring] rounded-xl px-2 py-1"
      >
        <Linkedin className="h-4 w-4" />
        {showLabels && <span>LinkedIn</span>}
      </a>
    </div>
  );
}
