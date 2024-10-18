import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Link, type Locale } from "~/i18n/routing";
import FlagNLIcon from "../icons/flag-nl-icon";
import FlagUKIcon from "../icons/flag-uk-icon";

function getLabel(locale: Locale) {
  switch (locale) {
    case "nl":
      return (
        <FlagNLIcon
          aria-label="Nederlands"
          height={24}
          width={24}
          className="rounded-full border-2 border-solid border-white border-opacity-20 bg-white bg-opacity-20"
        />
      );
    case "en":
      return (
        <FlagUKIcon
          aria-label="English"
          height={24}
          width={24}
          className="rounded-full border-2 border-solid border-white border-opacity-20 bg-white bg-opacity-20"
        />
      );
  }
}

export function I18nToggle({ locale, path }: { locale: Locale; path: string }) {
  return (
    <Popover>
      <PopoverTrigger className="bg-transparent px-2" asChild>
        <Button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white hover:bg-opacity-5">
          {getLabel(locale)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border border-white border-opacity-10 bg-secondary bg-opacity-50 px-4 py-3">
        <div className="flex flex-col">
          <Link href={path} locale="en">
            <div>
              <div className="mb-2 flex flex-row items-center gap-3 p-1 text-white text-opacity-70 hover:text-opacity-100">
                <FlagUKIcon
                  aria-label="English"
                  height={24}
                  width={24}
                  className="rounded-full border-2 border-solid border-white border-opacity-10 bg-white bg-opacity-10"
                />
                <span>English</span>
              </div>
            </div>
          </Link>
          <Link href={path} locale="nl">
            <div className="flex flex-row items-center gap-3 p-1 text-white text-opacity-70 hover:text-opacity-100">
              <FlagNLIcon
                aria-label="Nederlands"
                height={24}
                width={24}
                className="rounded-full border-2 border-solid border-white border-opacity-10 bg-white bg-opacity-10"
              />
              <span>Nederlands</span>
            </div>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
