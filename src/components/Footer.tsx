import GithubIcon from './icons/GithubIcon.tsx'
import LinkedinIcon from './icons/LinkedinIcon.tsx'

export default function Footer() {
  return (
    <div className="w-full absolute bottom-0 flex flex-col items-centere text-xs p-3 text-center space-y-3 text-text-secondary">
      <span className="text-sm">اینجا ایرانه هیچ حقی محفوظ نیست راحت باش !</span>
      <div className="flex items-center justify-center gap-x-2">
        <a href="https://github.com/AmirrezaHanafi">
          <GithubIcon className="size-6 transition-colors hover:text-text-primary" />
        </a>
        <span> طراحی شده توسط امیررضا حنفی </span>
        <a href="https://www.linkedin.com/in/amirreza-hanafi-35a571321/">
          <LinkedinIcon className="size-6 transition-colors hover:text-text-primary" />
        </a>
      </div>
    </div>
  )
}
