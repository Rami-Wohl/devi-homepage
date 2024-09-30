import { Button } from "~/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Link, type Locale } from "~/i18n/routing";
import ReactCountryFlag from "react-country-flag";

function getLabel(locale: Locale) {
  switch (locale) {
    case "nl":
      return (
        <ReactCountryFlag
          countryCode="NL"
          style={{
            fontSize: "2em",
            lineHeight: "2em",
          }}
          aria-label="Nederlands"
        />
      );
    case "en":
      return (
        <ReactCountryFlag
          countryCode="GB"
          style={{
            fontSize: "2em",
            lineHeight: "2em",
          }}
          aria-label="English"
        />
      );
  }
}

export function I18nToggle({ locale, path }: { locale: Locale; path: string }) {
  return (
    <Popover>
      <PopoverTrigger className="bg-transparent p-2" asChild>
        <Button className="rounded-full hover:bg-white hover:bg-opacity-5">
          {getLabel(locale)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto border border-white border-opacity-10 bg-secondary bg-opacity-50 px-4 py-3">
        <div className="flex flex-col">
          <Link href={path} locale="en">
            <div>
              <div className="flex flex-row items-center gap-3 p-1 text-white text-opacity-70 hover:text-opacity-100">
                <ReactCountryFlag
                  countryCode="GB"
                  style={{
                    fontSize: "2em",
                  }}
                  aria-label="English"
                />
                <span>English</span>
              </div>
            </div>
          </Link>
          <Link href={path} locale="nl">
            <div className="flex flex-row items-center gap-3 p-1 text-white text-opacity-70 hover:text-opacity-100">
              <ReactCountryFlag
                countryCode="NL"
                style={{
                  fontSize: "2em",
                }}
                aria-label="Nederlands"
              />
              <span>Nederlands</span>
            </div>
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  );
}
